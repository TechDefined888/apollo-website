"""Iteration 21 — Security & production hardening tests.

Covers:
- GET /api/enquiries removed (405/404/Method Not Allowed)
- POST /api/enquiries minimal response shape {id, email_sent}
- Security headers on GET responses
- CORS allow/deny by Origin
- Rate limiter on POST /api/enquiries
- /docs, /redoc, /openapi.json return 404
- HTML input sanitisation path (accepts <script>-like input without error)
- Sitemap contains legal URLs
"""
import os
import time
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback: read frontend/.env
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                break

API = f"{BASE_URL}/api"


def _payload(email="delivered@resend.dev", name="Bob", message="Hello there, this is a test"):
    return {
        "name": name,
        "phone": "0400000000",
        "address": "1 Test St",
        "email": email,
        "project_type": "Kitchen Renovation",
        "message": message,
        "website": "",
        "form_loaded_at": (time.time() - 6) * 1000,  # 6 seconds ago in ms
    }


# ── SECURITY ──────────────────────────────────────────────────────────
class TestSecurity:
    def test_get_enquiries_removed(self):
        r = requests.get(f"{API}/enquiries")
        assert r.status_code in (404, 405), f"expected 404/405, got {r.status_code}"

    def test_security_headers_on_health(self):
        r = requests.get(f"{API}/health")
        assert r.status_code == 200
        h = {k.lower(): v for k, v in r.headers.items()}
        assert h.get("x-content-type-options") == "nosniff"
        assert h.get("x-frame-options") == "DENY"
        assert h.get("referrer-policy") == "strict-origin-when-cross-origin"
        assert "permissions-policy" in h and h["permissions-policy"]
        assert "strict-transport-security" in h and h["strict-transport-security"]

    def test_docs_disabled(self):
        for path in ("/docs", "/redoc", "/openapi.json"):
            r = requests.get(f"{BASE_URL}{path}")
            assert r.status_code == 404, f"{path} => {r.status_code}"

    def test_cors_allowed_origin(self):
        r = requests.options(
            f"{API}/enquiries",
            headers={
                "Origin": "https://apollobuilders.com.au",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "content-type",
            },
        )
        acao = r.headers.get("access-control-allow-origin")
        assert acao == "https://apollobuilders.com.au", f"got {acao}"

    def test_cors_disallowed_origin(self):
        r = requests.options(
            f"{API}/enquiries",
            headers={
                "Origin": "https://evil.example.com",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "content-type",
            },
        )
        acao = r.headers.get("access-control-allow-origin")
        assert acao != "https://evil.example.com", f"evil origin echoed: {acao}"


# ── ENQUIRIES ─────────────────────────────────────────────────────────
class TestEnquiries:
    def test_post_minimal_response_shape(self):
        r = requests.post(f"{API}/enquiries", json=_payload())
        # Could be 201 or 429 if rate limit already tripped by prior runs.
        if r.status_code == 429:
            pytest.skip("Rate limit tripped from prior tests — cooling down")
        assert r.status_code == 201, f"got {r.status_code}: {r.text}"
        data = r.json()
        assert set(data.keys()) == {"id", "email_sent"}, f"unexpected keys: {data.keys()}"
        assert isinstance(data["id"], str) and len(data["id"]) > 0
        assert isinstance(data["email_sent"], bool)

    def test_post_sanitises_html_input(self):
        p = _payload(
            name="<script>alert(1)</script>Bob",
            message="<img src=x onerror=alert(1)> please contact me",
        )
        r = requests.post(f"{API}/enquiries", json=p)
        if r.status_code == 429:
            pytest.skip("Rate limit tripped — cooling down")
        assert r.status_code == 201, f"expected 201, got {r.status_code}: {r.text}"
        data = r.json()
        # No PII fields echoed back
        for k in ("name", "phone", "email", "project_type", "message", "address"):
            assert k not in data


# ── RATE LIMITER ──────────────────────────────────────────────────────
class TestRateLimit:
    def test_rate_limit_triggers(self):
        codes = []
        for i in range(8):
            r = requests.post(f"{API}/enquiries", json=_payload())
            codes.append(r.status_code)
        # At least one of last 3 must be 429
        assert 429 in codes[-3:], f"no 429 in last 3 of {codes}"


# ── SITEMAP / LEGAL ───────────────────────────────────────────────────
class TestSitemap:
    def test_sitemap_contains_legal_urls(self):
        r = requests.get(f"{BASE_URL}/sitemap.xml")
        assert r.status_code == 200
        body = r.text
        for slug in ("/privacy-policy/", "/cookie-policy/", "/terms-of-use/"):
            assert slug in body, f"{slug} missing from sitemap"
