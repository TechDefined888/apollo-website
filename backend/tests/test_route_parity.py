"""Route parity + SEO signal tests. Checks the SPA index.html + sitemap/robots."""
import os
import re
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://premium-apollo.preview.emergentagent.com').rstrip('/')

CANONICAL_ROUTES = [
    "/", "/about-us", "/services",
    "/new-home-builds", "/home-renovations", "/bathroom-renovations", "/kitchen-renovations",
    "/contact-us", "/our-projects",
    "/our-projects/drouin-new-build", "/our-projects/bentleigh-east-renovation",
    "/our-projects/berwick-new-build", "/our-projects/endevour-hills-renovation",
    "/our-projects/altona-meadows-renovation", "/our-projects/clyde-new-build",
    "/kitchen-renovation-landing", "/renovation-quote", "/consult", "/burnt-by-builders",
    "/thank-you", "/thanks", "/suburbs/brighton", "/resources",
    "/resources/kitchen-renovation-cost-melbourne",
]


@pytest.mark.parametrize("route", CANONICAL_ROUTES)
def test_route_returns_200(route):
    r = requests.get(f"{BASE_URL}{route}", timeout=15)
    assert r.status_code == 200, f"{route} -> {r.status_code}"
    # SPA: html contains root div and script bundle
    assert '<div id="root">' in r.text


def test_sitemap_ok_and_contains_expected():
    r = requests.get(f"{BASE_URL}/sitemap.xml", timeout=15)
    assert r.status_code == 200
    body = r.text
    required = [
        "/about-us/", "/contact-us/", "/our-projects/",
        "/our-projects/drouin-new-build/", "/our-projects/bentleigh-east-renovation/",
        "/our-projects/berwick-new-build/", "/our-projects/endevour-hills-renovation/",
        "/our-projects/altona-meadows-renovation/", "/our-projects/clyde-new-build/",
        "/new-home-builds/", "/home-renovations/", "/bathroom-renovations/", "/kitchen-renovations/",
        "/kitchen-renovation-landing/", "/renovation-quote/", "/consult/", "/burnt-by-builders/",
    ]
    for u in required:
        assert u in body, f"sitemap missing {u}"


def test_robots_ok_and_references_sitemap():
    r = requests.get(f"{BASE_URL}/robots.txt", timeout=15)
    assert r.status_code == 200
    body = r.text.lower()
    assert "user-agent" in body
    assert "sitemap" in body
    assert "disallow:" in body  # allow all if disallow is empty


def test_ga4_script_absent_when_env_unset():
    """When REACT_APP_GA4_ID is unset, no gtag script should appear in served HTML."""
    r = requests.get(f"{BASE_URL}/", timeout=15)
    assert r.status_code == 200
    assert "googletagmanager.com/gtag/js" not in r.text
