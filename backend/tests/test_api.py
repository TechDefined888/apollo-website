"""Backend API tests for Apollo Builders."""
import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://premium-apollo.preview.emergentagent.com').rstrip('/')


@pytest.fixture(scope="module")
def api():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health
def test_health(api):
    r = api.get(f"{BASE_URL}/api/health", timeout=15)
    assert r.status_code == 200
    data = r.json()
    assert data["status"] == "healthy"
    assert data["email_provider"] in ("stubbed", "pending", "resend")


# Enquiry create - valid
def test_create_enquiry_valid(api):
    payload = {
        "name": "TEST_John Doe",
        "phone": "+61400123456",
        "email": "test_john@example.com",
        "address": "12 Test Street, Melbourne",
        "project_type": "New Build",
        "message": "TEST_ Interested in a new home build.",
    }
    r = api.post(f"{BASE_URL}/api/enquiries", json=payload, timeout=15)
    assert r.status_code == 201, r.text
    data = r.json()
    assert "id" in data and data["id"]
    assert "created_at" in data
    assert data["email_sent"] is False
    assert data["name"] == payload["name"]
    assert data["email"] == payload["email"]
    assert "_id" not in data
    pytest.created_id = data["id"]


# Invalid email -> 422
def test_create_enquiry_invalid_email(api):
    payload = {
        "name": "TEST_Bad Email",
        "phone": "+61400000000",
        "email": "not-an-email",
        "address": "",
        "project_type": "Kitchen",
        "message": "hi",
    }
    r = api.post(f"{BASE_URL}/api/enquiries", json=payload, timeout=15)
    assert r.status_code == 422


# Empty name -> 422
def test_create_enquiry_empty_name(api):
    payload = {
        "name": "",
        "phone": "+61400000000",
        "email": "x@example.com",
        "address": "",
        "project_type": "Kitchen",
        "message": "hi",
    }
    r = api.post(f"{BASE_URL}/api/enquiries", json=payload, timeout=15)
    assert r.status_code == 422


# List enquiries
def test_list_enquiries(api):
    r = api.get(f"{BASE_URL}/api/enquiries", timeout=15)
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list)
    assert len(data) > 0
    ids = [d["id"] for d in data]
    assert getattr(pytest, "created_id", None) in ids
    for d in data:
        assert "_id" not in d
        assert "id" in d
