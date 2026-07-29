"""Apollo Builders enquiry API tests — email provider live via Emergent Resend proxy."""
import os
import time
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ── Health ────────────────────────────────────────────────────────────
def test_health_email_configured(session):
    r = session.get(f"{API}/health")
    assert r.status_code == 200
    data = r.json()
    assert data["status"] == "healthy"
    assert data["email_provider"] == "configured"


# ── Enquiry: legitimate submission dispatches email ───────────────────
def test_create_enquiry_valid_delivers_email(session):
    before = session.get(f"{API}/enquiries").json()
    before_count = len(before)

    payload = {
        "name": "TEST_John Smith",
        "phone": "0412345678",
        # Resend sandbox delivery — safe, never hits real inbox
        "email": "delivered@resend.dev",
        "address": "1 Test St",
        "project_type": "New Home Build",
        "message": "Testing Resend proxy delivery from backend_test.",
        "form_loaded_at": (time.time() - 10) * 1000,
        "website": "",
    }
    r = session.post(f"{API}/enquiries", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["project_type"] == payload["project_type"]
    assert data["email_sent"] is True, f"Expected email_sent True, got {data}"
    assert "id" in data

    after = session.get(f"{API}/enquiries").json()
    assert len(after) == before_count + 1


# ── Spam: honeypot filled ─────────────────────────────────────────────
def test_honeypot_silently_rejected(session):
    before = session.get(f"{API}/enquiries").json()
    before_count = len(before)

    payload = {
        "name": "TEST_Spam Bot",
        "phone": "0400000000",
        "email": "delivered@resend.dev",
        "project_type": "Renovation",
        "message": "spam content",
        "form_loaded_at": (time.time() - 10) * 1000,
        "website": "http://spam.com",
    }
    r = session.post(f"{API}/enquiries", json=payload)
    assert r.status_code == 201
    data = r.json()
    assert "id" in data

    after = session.get(f"{API}/enquiries").json()
    assert len(after) == before_count, "Honeypot spam should NOT persist"


# ── Spam: too-fast submission ─────────────────────────────────────────
def test_too_fast_submission_silently_rejected(session):
    before = session.get(f"{API}/enquiries").json()
    before_count = len(before)

    payload = {
        "name": "TEST_Fast Bot",
        "phone": "0400000001",
        "email": "delivered@resend.dev",
        "project_type": "Kitchen Renovation",
        "message": "instant submit",
        "form_loaded_at": time.time() * 1000,
        "website": "",
    }
    r = session.post(f"{API}/enquiries", json=payload)
    assert r.status_code == 201
    after = session.get(f"{API}/enquiries").json()
    assert len(after) == before_count, "Too-fast submission should NOT persist"


# ── Validation ────────────────────────────────────────────────────────
def test_invalid_email_returns_422(session):
    payload = {
        "name": "TEST_x", "phone": "0400", "email": "not-an-email",
        "project_type": "New Home Build", "message": "x",
        "form_loaded_at": (time.time() - 10) * 1000,
    }
    r = session.post(f"{API}/enquiries", json=payload)
    assert r.status_code == 422


def test_missing_required_field_returns_422(session):
    payload = {"name": "x", "email": "a@b.com"}  # missing phone, project_type, message
    r = session.post(f"{API}/enquiries", json=payload)
    assert r.status_code == 422


# ── No third-party branding leaked into email template ────────────────
def test_email_html_has_no_third_party_branding():
    import re
    src = open('/app/backend/server.py').read()
    m = re.search(r'def _build_email_html.*?(?=\ndef |\nasync def )', src, re.S)
    assert m, "could not locate _build_email_html"
    tpl = m.group(0).lower()
    for banned in ["emergent", "resend.com", "development platform", "lovable", "vercel", "made with"]:
        assert banned not in tpl, f"Banned token '{banned}' found in email template"


def test_subject_line_format():
    src = open('/app/backend/server.py').read()
    assert 'New Website Enquiry — {enquiry.project_type} — {enquiry.name}' in src
