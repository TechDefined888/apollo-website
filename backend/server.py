from fastapi import FastAPI, APIRouter, HTTPException, Request
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import Optional
import uuid
from datetime import datetime, timezone

import httpx

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# ── Email configuration (Emergent-managed Resend proxy) ────────────
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY", "").strip()
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Apollo Builders Website")
ENQUIRY_RECIPIENT_EMAIL = os.environ.get('ENQUIRY_RECIPIENT_EMAIL', 'info@apollobuilders.com.au')
MIN_SUBMIT_SECONDS = int(os.environ.get('MIN_SUBMIT_SECONDS', '3'))
ENQUIRY_RATE_LIMIT = os.environ.get('ENQUIRY_RATE_LIMIT', '5/hour')

# ── Rate limiting (per client IP) ──────────────────────────────────
limiter = Limiter(key_func=get_remote_address, default_limits=["120/minute"])

app = FastAPI(title="Apollo Builders API", docs_url=None, redoc_url=None, openapi_url=None)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)

api_router = APIRouter(prefix="/api")


# ── Security headers middleware ────────────────────────────────────
class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request, call_next):
        resp = await call_next(request)
        resp.headers["X-Content-Type-Options"] = "nosniff"
        resp.headers["X-Frame-Options"] = "DENY"
        resp.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        resp.headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=(), payment=()"
        resp.headers["Strict-Transport-Security"] = "max-age=63072000; includeSubDomains; preload"
        return resp


# ── Global safe error handler — never leak internals ───────────────
@app.exception_handler(Exception)
async def unhandled_exception_handler(request: Request, exc: Exception):
    logging.exception(f"Unhandled error on {request.url.path}: {exc}")
    return JSONResponse(
        status_code=500,
        content={"detail": "An unexpected error occurred. Please try again later."},
    )


# ── Models ────────────────────────────────────────────────────────────
class EnquiryCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    phone: str = Field(min_length=1, max_length=40)
    address: Optional[str] = Field(default="", max_length=240)
    email: EmailStr
    project_type: str = Field(min_length=1, max_length=80)
    message: str = Field(min_length=1, max_length=4000)
    # ── Spam protection (server-enforced) ──
    website: Optional[str] = Field(default="", max_length=200)  # honeypot — must be empty
    form_loaded_at: Optional[float] = Field(default=None)       # ms epoch when form mounted


class Enquiry(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    address: str = ""
    email: EmailStr
    project_type: str
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    email_sent: bool = False


class EnquiryResponse(BaseModel):
    """Minimal response — never echo back stored PII beyond what's needed for UX."""
    id: str
    email_sent: bool


# ── Helpers ───────────────────────────────────────────────────────────
def _sanitise(value: str) -> str:
    """Strip control chars & clip length. Pydantic already validates
    length; this is a defence-in-depth pass before rendering into email."""
    if not value:
        return ""
    cleaned = "".join(ch for ch in value if ch.isprintable() or ch in "\n\r\t")
    return cleaned.strip()


def _build_email_html(e: Enquiry) -> str:
    submitted = e.created_at.strftime('%A, %d %B %Y · %I:%M %p UTC')
    # HTML-escape user-provided fields before interpolation.
    from html import escape
    name = escape(_sanitise(e.name))
    phone = escape(_sanitise(e.phone))
    email = escape(str(e.email))
    address = escape(_sanitise(e.address) or '—')
    project = escape(_sanitise(e.project_type))
    message = escape(_sanitise(e.message))
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Helvetica,Arial,sans-serif;color:#1a1a1a;background:#f4f1ea;padding:24px">
      <tr><td>
        <table width="620" align="center" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e6e2da">
          <tr><td style="padding:32px 32px 12px 32px;border-bottom:1px solid #e6e2da">
            <div style="font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:#C5892D;font-weight:600">Apollo Builders</div>
            <h1 style="margin:8px 0 0 0;font-family:Georgia,serif;font-weight:400;font-size:26px;color:#0A0F1A">New Website Enquiry</h1>
          </td></tr>
          <tr><td style="padding:28px 32px">
            <p style="margin:0 0 20px 0;font-size:14px;line-height:1.6;color:#4a5262">A new enquiry has been submitted through the Apollo Builders website.</p>
            <table width="100%" cellpadding="8" cellspacing="0" style="font-size:14px;border-collapse:collapse">
              <tr><td style="width:130px;color:#6b7280;vertical-align:top;padding-right:16px">Name</td><td style="color:#0A0F1A">{name}</td></tr>
              <tr><td style="color:#6b7280;vertical-align:top;padding-right:16px">Phone</td><td><a href="tel:{phone}" style="color:#0A0F1A;text-decoration:none">{phone}</a></td></tr>
              <tr><td style="color:#6b7280;vertical-align:top;padding-right:16px">Email</td><td><a href="mailto:{email}" style="color:#C5892D;text-decoration:none">{email}</a></td></tr>
              <tr><td style="color:#6b7280;vertical-align:top;padding-right:16px">Address</td><td style="color:#0A0F1A">{address}</td></tr>
              <tr><td style="color:#6b7280;vertical-align:top;padding-right:16px">Project</td><td style="color:#0A0F1A">{project}</td></tr>
              <tr><td style="color:#6b7280;vertical-align:top;padding-right:16px">Message</td><td style="color:#0A0F1A;white-space:pre-wrap;line-height:1.55">{message}</td></tr>
            </table>
            <p style="margin:24px 0 0 0;padding:16px;background:#f4f1ea;font-size:13px;color:#4a5262;line-height:1.55">
              Reply directly to this email to respond to {name} — their reply-to is already set to their address.
            </p>
          </td></tr>
          <tr><td style="padding:14px 32px;background:#0A0F1A;color:#f4f1ea;font-size:11px;letter-spacing:.22em;text-transform:uppercase;font-weight:600">
            Submitted {submitted}
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


async def _send_notification_email(enquiry: Enquiry) -> bool:
    """POST the enquiry via the Emergent-managed Resend proxy.
    Returns True on 2xx, False on any failure — never raises."""
    if not EMAIL_KEY:
        logging.info("Email provider not configured — enquiry stored, email skipped.")
        return False
    payload = {
        "to": [ENQUIRY_RECIPIENT_EMAIL],
        "subject": f"New Website Enquiry — {enquiry.project_type} — {enquiry.name}",
        "html": _build_email_html(enquiry),
        "from_name": EMAIL_FROM_NAME,
        "contact_email": str(enquiry.email),
    }
    try:
        async with httpx.AsyncClient(timeout=30) as http:
            resp = await http.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return True
    except httpx.HTTPStatusError as ex:
        logging.error(f"Email dispatch failed: {ex.response.status_code}")
        return False
    except Exception as ex:
        logging.error(f"Email dispatch error: {type(ex).__name__}")
        return False


def _is_spam(payload: EnquiryCreate) -> bool:
    """Silent spam detection: honeypot + minimum-fill-time gate."""
    if payload.website and payload.website.strip():
        logging.info("Enquiry rejected: honeypot triggered.")
        return True
    if payload.form_loaded_at:
        try:
            now_ms = datetime.now(timezone.utc).timestamp() * 1000
            elapsed_sec = (now_ms - float(payload.form_loaded_at)) / 1000.0
            if elapsed_sec < MIN_SUBMIT_SECONDS:
                logging.info(f"Enquiry rejected: submitted too fast ({elapsed_sec:.2f}s).")
                return True
        except Exception:
            pass
    return False


# ── Routes ────────────────────────────────────────────────────────────
@api_router.get("/")
async def root():
    return {"service": "Apollo Builders API", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy", "email_provider": "configured" if EMAIL_KEY else "pending"}


@api_router.post("/enquiries", response_model=EnquiryResponse, status_code=201)
@limiter.limit(ENQUIRY_RATE_LIMIT)
async def create_enquiry(request: Request, payload: EnquiryCreate):
    """Accept a customer enquiry. Rate-limited per-IP to prevent abuse.

    Response returns only { id, email_sent } — no PII is echoed to callers.
    All PII stays server-side (MongoDB) and is forwarded to
    info@apollobuilders.com.au via the Emergent-managed Resend proxy.
    """
    # Silent spam rejection — return a normal-looking success shape.
    if _is_spam(payload):
        return EnquiryResponse(id=str(uuid.uuid4()), email_sent=False)

    enquiry = Enquiry(
        name=_sanitise(payload.name),
        phone=_sanitise(payload.phone),
        address=_sanitise(payload.address or ""),
        email=payload.email,
        project_type=_sanitise(payload.project_type),
        message=_sanitise(payload.message),
    )
    email_sent = await _send_notification_email(enquiry)
    enquiry.email_sent = email_sent
    doc = enquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    doc['email'] = str(doc['email'])
    await db.enquiries.insert_one(doc)
    return EnquiryResponse(id=enquiry.id, email_sent=email_sent)


# NOTE: A public GET /api/enquiries endpoint used to exist and returned every
# stored submission. That was a PII data-leak risk and has been removed. Any
# future admin listing must live behind authenticated staff access.


app.include_router(api_router)

app.add_middleware(SecurityHeadersMiddleware)

_cors_origins = [o.strip() for o in os.environ.get('CORS_ORIGINS', '').split(',') if o.strip()]
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=_cors_origins or ["https://apollobuilders.com.au"],
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type", "Accept"],
    max_age=600,
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
