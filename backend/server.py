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

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Optional Resend setup — stubbed unless RESEND_API_KEY provided
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '').strip()
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFY_EMAIL = os.environ.get('NOTIFY_EMAIL', 'info@apollobuilders.com.au')

resend_client = None
if RESEND_API_KEY:
    try:
        import resend as _resend
        _resend.api_key = RESEND_API_KEY
        resend_client = _resend
    except Exception as e:
        logging.warning(f"Resend init failed: {e}")

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
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="font-family:Helvetica,Arial,sans-serif;color:#1a1a1a;background:#f9f9f8;padding:24px">
      <tr><td>
        <table width="600" align="center" cellpadding="0" cellspacing="0" style="background:#ffffff;border:1px solid #e5e4e2">
          <tr><td style="padding:32px 32px 8px 32px;border-bottom:1px solid #e5e4e2">
            <div style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#0A192F">Apollo Builders</div>
            <h1 style="margin:8px 0 0 0;font-family:Georgia,serif;font-weight:300;font-size:24px;color:#0A192F">New Quote Enquiry</h1>
          </td></tr>
          <tr><td style="padding:24px 32px">
            <p style="margin:0 0 16px 0;font-size:14px;line-height:1.6">A new enquiry was submitted via apollobuilders.com.au.</p>
            <table width="100%" cellpadding="6" cellspacing="0" style="font-size:14px">
              <tr><td style="width:120px;color:#666">Name</td><td>{e.name}</td></tr>
              <tr><td style="color:#666">Phone</td><td>{e.phone}</td></tr>
              <tr><td style="color:#666">Email</td><td>{e.email}</td></tr>
              <tr><td style="color:#666">Address</td><td>{e.address or '—'}</td></tr>
              <tr><td style="color:#666">Project</td><td>{e.project_type}</td></tr>
              <tr><td style="color:#666;vertical-align:top">Message</td><td style="white-space:pre-wrap">{e.message}</td></tr>
            </table>
          </td></tr>
          <tr><td style="padding:16px 32px;background:#0A192F;color:#f9f9f8;font-size:11px;letter-spacing:.15em;text-transform:uppercase">
            Received {e.created_at.strftime('%d %b %Y · %H:%M UTC')}
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


async def _send_notification_email(enquiry: Enquiry) -> bool:
    if not resend_client:
        logging.info("Resend not configured — skipping email; enquiry stored only.")
        return False
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [NOTIFY_EMAIL],
            "reply_to": enquiry.email,
            "subject": f"New enquiry · {enquiry.project_type} · {enquiry.name}",
            "html": _build_email_html(enquiry),
        }
        await asyncio.to_thread(resend_client.Emails.send, params)
        return True
    except Exception as ex:
        logging.error(f"Resend send failed: {ex}")
        return False


# ── Routes ────────────────────────────────────────────────────────────
@api_router.get("/")
async def root():
    return {"service": "Apollo Builders API", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy", "email_provider": "resend" if resend_client else "stubbed"}


@api_router.post("/enquiries", response_model=Enquiry, status_code=201)
async def create_enquiry(payload: EnquiryCreate):
    enquiry = Enquiry(**payload.model_dump())
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
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
