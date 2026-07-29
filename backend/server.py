from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
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
# Base URL is a CONSTANT — never read from env so it survives deployment.
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY", "").strip()
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Apollo Builders Website")
ENQUIRY_RECIPIENT_EMAIL = os.environ.get('ENQUIRY_RECIPIENT_EMAIL', 'info@apollobuilders.com.au')
MIN_SUBMIT_SECONDS = int(os.environ.get('MIN_SUBMIT_SECONDS', '3'))

app = FastAPI(title="Apollo Builders API")
api_router = APIRouter(prefix="/api")


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


# ── Helpers ───────────────────────────────────────────────────────────
def _build_email_html(e: Enquiry) -> str:
    submitted = e.created_at.strftime('%A, %d %B %Y · %I:%M %p UTC')
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
              <tr><td style="width:130px;color:#6b7280;vertical-align:top;padding-right:16px">Name</td><td style="color:#0A0F1A">{e.name}</td></tr>
              <tr><td style="color:#6b7280;vertical-align:top;padding-right:16px">Phone</td><td><a href="tel:{e.phone}" style="color:#0A0F1A;text-decoration:none">{e.phone}</a></td></tr>
              <tr><td style="color:#6b7280;vertical-align:top;padding-right:16px">Email</td><td><a href="mailto:{e.email}" style="color:#C5892D;text-decoration:none">{e.email}</a></td></tr>
              <tr><td style="color:#6b7280;vertical-align:top;padding-right:16px">Address</td><td style="color:#0A0F1A">{e.address or '—'}</td></tr>
              <tr><td style="color:#6b7280;vertical-align:top;padding-right:16px">Project</td><td style="color:#0A0F1A">{e.project_type}</td></tr>
              <tr><td style="color:#6b7280;vertical-align:top;padding-right:16px">Message</td><td style="color:#0A0F1A;white-space:pre-wrap;line-height:1.55">{e.message}</td></tr>
            </table>
            <p style="margin:24px 0 0 0;padding:16px;background:#f4f1ea;font-size:13px;color:#4a5262;line-height:1.55">
              Reply directly to this email to respond to {e.name} — their reply-to is already set to their address.
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
    Non-blocking (async httpx). Returns True on 2xx, False on any failure."""
    if not EMAIL_KEY:
        logging.info("Email provider not configured (EMERGENT_EMAIL_KEY missing) — enquiry stored, email skipped.")
        return False
    payload = {
        "to": [ENQUIRY_RECIPIENT_EMAIL],
        "subject": f"New Website Enquiry — {enquiry.project_type} — {enquiry.name}",
        "html": _build_email_html(enquiry),
        "from_name": EMAIL_FROM_NAME,           # REQUIRED — visible sender display name
        "contact_email": str(enquiry.email),    # becomes Reply-To so replies go to the enquirer
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
        logging.error(f"Email dispatch failed: {ex.response.status_code} {ex.response.text[:400]}")
        return False
    except Exception as ex:
        logging.error(f"Email dispatch error: {ex}")
        return False


def _is_spam(payload: EnquiryCreate) -> bool:
    """Silent spam detection: honeypot + minimum-fill-time gate."""
    # Honeypot — real users can't see this field
    if payload.website and payload.website.strip():
        logging.info("Enquiry rejected: honeypot triggered.")
        return True
    # Timestamp gate — bots often submit in <1s
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


@api_router.post("/enquiries", response_model=Enquiry, status_code=201)
async def create_enquiry(payload: EnquiryCreate):
    # Silent spam rejection — return a normal success shape so bots learn nothing
    if _is_spam(payload):
        placeholder = Enquiry(
            name=payload.name, phone=payload.phone, address=payload.address or "",
            email=payload.email, project_type=payload.project_type, message=payload.message,
            email_sent=False,
        )
        return placeholder

    enquiry = Enquiry(
        name=payload.name, phone=payload.phone, address=payload.address or "",
        email=payload.email, project_type=payload.project_type, message=payload.message,
    )
    email_sent = await _send_notification_email(enquiry)
    enquiry.email_sent = email_sent
    doc = enquiry.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    doc['email'] = str(doc['email'])
    await db.enquiries.insert_one(doc)
    return enquiry


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries(limit: int = 100):
    docs = await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for d in docs:
        if isinstance(d.get('created_at'), str):
            try:
                d['created_at'] = datetime.fromisoformat(d['created_at'])
            except Exception:
                d['created_at'] = datetime.now(timezone.utc)
    return docs


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
