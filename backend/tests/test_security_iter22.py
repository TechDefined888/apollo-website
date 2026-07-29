"""Iteration 22 — verify the two backend security fixes applied on top of iter 21:
  (1) rate-limiter key_func honours X-Forwarded-For / X-Real-IP
  (2) BodySizeLimitMiddleware rejects Content-Length > 32 KB with 413

Plus regressions:
  - normal POST still returns 201 with {id, email_sent} shape
  - GET /api/enquiries still 405, GET /api/health still 200 with security headers
  - sitemap.xml still contains the 3 legal URLs
"""
import os
import time
import requests
import pytest

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    with open("/app/frontend/.env") as f:
        for line in f:
            if line.startswith("REACT_APP_BACKEND_URL="):
                BASE_URL = line.split("=", 1)[1].strip().rstrip("/")
                break

API = f"{BASE_URL}/api"


def _payload(email="delivered@resend.dev", name="Bob", message="Hello there, this is a normal test message."):
    return {
        "name": name,
        "phone": "0400000000",
        "address": "1 Test St",
        "email": email,
        "project_type": "Kitchen Renovation",
        "message": message,
        "website": "",
        "form_loaded_at": (time.time() - 6) * 1000,  # 6s ago, passes the 3s min-fill gate
    }


def _hdr(ip: str):
    return {"X-Forwarded-For": ip, "Content-Type": "application/json"}


# ── (1) Rate-limit is per real client IP (via X-Forwarded-For) ────────
class TestRateLimitPerXFF:
    def test_five_pass_then_429_for_single_ip(self):
        ip = "10.10.10.101"
        codes = []
        for i in range(7):
            r = requests.post(f"{API}/enquiries", json=_payload(), headers=_hdr(ip))
            codes.append(r.status_code)
        # First 5 should be 201
        assert codes[:5] == [201, 201, 201, 201, 201], f"first 5 not all 201: {codes}"
        # At least one of attempts 6-7 must be 429
        assert 429 in codes[5:], f"no 429 in attempts 6-7: {codes}"

    def test_quota_is_isolated_per_ip(self):
        # Different IP → fresh quota, all 3 succeed
        ip = "10.10.10.202"
        codes = []
        for i in range(3):
            r = requests.post(f"{API}/enquiries", json=_payload(), headers=_hdr(ip))
            codes.append(r.status_code)
        assert codes == [201, 201, 201], f"expected fresh quota on new IP, got {codes}"


# ── (2) Body size cap: > 32 KB → 413 ──────────────────────────────────
class TestBodySizeCap:
    def test_oversized_body_rejected_with_413(self):
        ip = "10.10.10.203"
        big = _payload(message="X" * 50000)  # 50k chars → Content-Length > 32 KB
        r = requests.post(f"{API}/enquiries", json=big, headers=_hdr(ip))
        assert r.status_code == 413, f"expected 413, got {r.status_code}: {r.text[:200]}"
        try:
            body = r.json()
        except Exception:
            pytest.fail(f"413 response was not JSON: {r.text[:200]}")
        assert body == {"detail": "Request body too large."}, f"unexpected body: {body}"


# ── Regressions ───────────────────────────────────────────────────────
class TestRegression:
    def test_normal_post_still_201_and_shape(self):
        ip = "10.10.10.204"
        r = requests.post(f"{API}/enquiries", json=_payload(message="a" * 500), headers=_hdr(ip))
        assert r.status_code == 201, f"got {r.status_code}: {r.text[:200]}"
        data = r.json()
        assert set(data.keys()) == {"id", "email_sent"}, f"unexpected keys: {list(data.keys())}"
        assert isinstance(data["id"], str) and len(data["id"]) > 0
        assert isinstance(data["email_sent"], bool)

    def test_get_enquiries_still_405(self):
        r = requests.get(f"{API}/enquiries")
        assert r.status_code in (404, 405), f"expected 404/405, got {r.status_code}"

    def test_health_200_with_security_headers(self):
        r = requests.get(f"{API}/health")
        assert r.status_code == 200
        h = {k.lower(): v for k, v in r.headers.items()}
        assert h.get("x-content-type-options") == "nosniff"
        assert h.get("x-frame-options") == "DENY"
        assert h.get("referrer-policy") == "strict-origin-when-cross-origin"
        assert "permissions-policy" in h and h["permissions-policy"]
        assert "strict-transport-security" in h and h["strict-transport-security"]

    def test_sitemap_contains_legal_urls(self):
        r = requests.get(f"{BASE_URL}/sitemap.xml")
        assert r.status_code == 200
        body = r.text
        for slug in ("/privacy-policy/", "/cookie-policy/", "/terms-of-use/"):
            assert slug in body, f"{slug} missing from sitemap"
