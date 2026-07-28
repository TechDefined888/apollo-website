"""Apollo Builders enquiry API tests."""
import os
import time
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://premium-apollo.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ── Health ────────────────────────────────────────────────────────────
def test_health_email_pending(session):
    r = session.get(f"{API}/health")
    assert r.status_code == 200
    data = r.json()
    assert data["status"] == "healthy"
    assert "email_provider" in data
    assert data["email_provider"] == "pending"


# ── Enquiry: legitimate submission ────────────────────────────────────
def test_create_enquiry_valid_persists(session):
    before = session.get(f"{API}/enquiries").json()
    before_count = len(before)

    payload = {
        "name": "TEST_John Smith",
        "phone": "0412345678",
        "email": "test_john@example.com",
        "address": "1 Test St",
        "project_type": "New Home Build",
        "message": "Interested in a new build.",
        "form_loaded_at": (time.time() - 10) * 1000,  # 10s old
        "website": "",
    }
    r = session.post(f"{API}/enquiries", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert data["project_type"] == payload["project_type"]
    assert data["email_sent"] is False  # stubbed
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
        "email": "spam@spam.com",
        "project_type": "Renovation",
        "message": "spam content",
        "form_loaded_at": (time.time() - 10) * 1000,
        "website": "http://spam.com",
    }
    r = session.post(f"{API}/enquiries", json=payload)
    # Silent rejection: still 201
    assert r.status_code == 201
    data = r.json()
    assert "id" in data  # normal success shape

    after = session.get(f"{API}/enquiries").json()
    assert len(after) == before_count, "Honeypot spam should NOT persist"


# ── Spam: too-fast submission ─────────────────────────────────────────
def test_too_fast_submission_silently_rejected(session):
    before = session.get(f"{API}/enquiries").json()
    before_count = len(before)

    payload = {
        "name": "TEST_Fast Bot",
        "phone": "0400000001",
        "email": "fast@bot.com",
        "project_type": "Kitchen Renovation",
        "message": "instant submit",
        "form_loaded_at": time.time() * 1000,  # right now, <3s
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


# ── Server code content: no third-party branding in email template ────
def test_email_html_has_no_third_party_branding():
    import re
    src = open('/app/backend/server.py').read()
    # extract _build_email_html body
    m = re.search(r'def _build_email_html.*?(?=\ndef |\nasync def )', src, re.S)
    assert m, "could not locate _build_email_html"
    tpl = m.group(0).lower()
    for banned in ["emergent", "resend.com", "development platform", "lovable", "vercel", "made with"]:
        assert banned not in tpl, f"Banned token '{banned}' found in email template"


def test_from_field_format():
    src = open('/app/backend/server.py').read()
    assert 'f"{SENDER_NAME} <{SENDER_EMAIL}>"' in src


def test_subject_line_format():
    src = open('/app/backend/server.py').read()
    assert 'New Website Enquiry — {enquiry.project_type} — {enquiry.name}' in src
    assert 'emergent' not in src.lower().split('new website enquiry')[1][:200]
