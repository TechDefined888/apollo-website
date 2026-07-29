"""
Final pre-launch SEO migration audit.
Verifies every live-site URL is preserved (or redirects), sitemap coverage,
canonical correctness, noindex safety, schema validity and internal-link health.
Run with:  python3 /app/backend/tests/seo_audit.py
"""
import asyncio
import json
import re
import sys
from pathlib import Path
from xml.etree import ElementTree

from playwright.async_api import async_playwright

FRONTEND_ENV = Path("/app/frontend/.env").read_text()
PREVIEW_URL = re.search(r"REACT_APP_BACKEND_URL=(\S+)", FRONTEND_ENV).group(1).rstrip("/")

# Live-site canonical URLs (Yoast trailing slash) — every one MUST be reachable via the new app.
LIVE_URLS = [
    "/",
    "/about-us/",
    "/services/",
    "/contact-us/",
    "/new-home-builds/",
    "/home-renovations/",
    "/bathroom-renovations/",
    "/kitchen-renovations/",
    "/our-projects/",
    "/our-projects/drouin-new-build/",
    "/our-projects/bentleigh-east-renovation/",
    "/our-projects/berwick-new-build/",
    "/our-projects/endevour-hills-renovation/",  # live-site typo preserved
    "/our-projects/altona-meadows-renovation/",
    "/our-projects/clyde-new-build/",
    "/kitchen-renovation-landing/",
    "/renovation-quote/",
    "/consult/",
    "/burnt-by-builders/",
    "/thank-you/",
    "/thanks/",
    # Legal pages (added iteration 21)
    "/privacy-policy/",
    "/cookie-policy/",
    "/terms-of-use/",
]

# Legacy paths that should client-side redirect
LEGACY_REDIRECTS = {
    "/about": "/about-us",
    "/contact": "/contact-us",
    "/services/new-home-builds": "/new-home-builds",
    "/services/home-renovations": "/home-renovations",
    "/services/bathroom-renovations": "/bathroom-renovations",
    "/services/kitchen-renovations": "/kitchen-renovations",
}

# Pages that MUST have noindex (form success pages only)
INTENTIONAL_NOINDEX = {"/thank-you", "/thanks"}


async def main():
    results = {
        "preview_url": PREVIEW_URL,
        "url_parity": [],
        "sitemap_check": {},
        "robots_check": {},
        "canonical_check": [],
        "noindex_check": [],
        "schema_check": [],
        "redirect_check": [],
        "internal_links": [],
        "cdn_leaks": [],
        "errors": [],
    }

    # ── 0. Static scan for stale CDN references (regression guard) ───
    # Any reference to apollobuilders.com.au/wp-content anywhere in the
    # frontend source / public tree means an image or preload will 404
    # once WordPress is decommissioned. Scan every file type — not just
    # .js/.jsx — because HTML preloads live in public/index.html too.
    src_root = Path("/app/frontend")
    for candidate in src_root.rglob("*"):
        if candidate.is_file() and candidate.suffix in {".js", ".jsx", ".ts", ".tsx", ".html", ".css", ".json", ".md", ".xml"}:
            if "node_modules" in candidate.parts or "build" in candidate.parts or "dist" in candidate.parts:
                continue
            try:
                text = candidate.read_text(errors="ignore")
            except Exception:
                continue
            if "apollobuilders.com.au/wp-content" in text:
                # count occurrences per file
                hits = text.count("apollobuilders.com.au/wp-content")
                results["cdn_leaks"].append({"file": str(candidate.relative_to(src_root)), "hits": hits})

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(ignore_https_errors=True)

        # ── 1. Sitemap parity ────────────────────────────────────────
        page = await context.new_page()
        r = await page.goto(f"{PREVIEW_URL}/sitemap.xml", wait_until="domcontentloaded")
        sitemap_xml = await page.content()
        # strip HTML wrapper Chromium adds
        raw = await (await page.request.get(f"{PREVIEW_URL}/sitemap.xml")).text()
        try:
            root = ElementTree.fromstring(raw)
            ns = {"ns": "http://www.sitemaps.org/schemas/sitemap/0.9"}
            sitemap_locs = {el.text.replace("https://apollobuilders.com.au", "") for el in root.findall("ns:url/ns:loc", ns)}
        except Exception as e:
            sitemap_locs = set()
            results["errors"].append(f"Sitemap parse error: {e}")

        results["sitemap_check"] = {
            "status": r.status,
            "total_urls": len(sitemap_locs),
            "missing_from_sitemap": sorted(u for u in LIVE_URLS if u not in sitemap_locs and u not in ("/thank-you/", "/thanks/")),
            "noindex_pages_correctly_absent": all(u not in sitemap_locs for u in ("/thank-you/", "/thanks/")),
        }

        # ── 2. Robots.txt ────────────────────────────────────────────
        rr = await page.request.get(f"{PREVIEW_URL}/robots.txt")
        robots_text = await rr.text()
        results["robots_check"] = {
            "status": rr.status,
            "allows_all": "Allow: /" in robots_text or "User-agent: *\nDisallow:" in robots_text or "Disallow:\n" in robots_text or "Disallow: \n" in robots_text or ("User-agent: *" in robots_text and "Disallow" not in robots_text.split("Sitemap")[0].split("User-agent: *")[1]),
            "references_sitemap": "sitemap.xml" in robots_text.lower(),
            "sample": robots_text[:200],
        }

        # ── 3. URL parity + canonical + noindex + schema + intra-page ─
        for path in LIVE_URLS:
            entry = {"path": path}
            url = f"{PREVIEW_URL}{path.rstrip('/') if path != '/' else '/'}"
            try:
                resp = await page.goto(url, wait_until="domcontentloaded", timeout=25000)
                await page.wait_for_selector("h1", timeout=15000)
                entry["status"] = resp.status
                entry["h1"] = (await page.locator("h1").first.text_content()).strip()
                entry["title"] = await page.title()
                canonical = await page.get_attribute("link[rel=canonical]", "href")
                entry["canonical"] = canonical
                # Canonical should point at the live-site URL (with trailing slash for non-root)
                expected_canonical = f"https://apollobuilders.com.au{path}"
                entry["canonical_ok"] = canonical == expected_canonical
                if not entry["canonical_ok"]:
                    results["canonical_check"].append({"path": path, "expected": expected_canonical, "actual": canonical})

                robots_meta = await page.locator("meta[name=robots]").count()
                if robots_meta:
                    content = await page.get_attribute("meta[name=robots]", "content")
                    entry["robots_meta"] = content
                    has_noindex = "noindex" in (content or "").lower()
                else:
                    has_noindex = False
                    entry["robots_meta"] = None

                expected_noindex = path.rstrip("/") in INTENTIONAL_NOINDEX
                if has_noindex != expected_noindex:
                    results["noindex_check"].append({"path": path, "has_noindex": has_noindex, "expected": expected_noindex})

                schema_count = await page.locator("script[type='application/ld+json']").count()
                entry["ld_json"] = schema_count
                if schema_count == 0 and not expected_noindex:
                    results["schema_check"].append({"path": path, "issue": "no JSON-LD"})

                # Internal links sanity — collect all <a> hrefs
                hrefs = await page.locator("a[href^='/']").evaluate_all("els => els.map(e => e.getAttribute('href'))")
                broken = [h for h in hrefs if h and h.startswith("//") ]  # protocol-relative accidental
                if broken:
                    results["internal_links"].append({"path": path, "issue": "protocol-relative link", "hrefs": broken})

            except Exception as e:
                entry["status"] = "ERR"
                entry["error"] = str(e)[:200]
                results["errors"].append(f"{path}: {e}")

            results["url_parity"].append(entry)

        # ── 4. Legacy redirects ─────────────────────────────────────
        for src, expected in LEGACY_REDIRECTS.items():
            try:
                await page.goto(f"{PREVIEW_URL}{src}", wait_until="domcontentloaded", timeout=20000)
                await page.wait_for_timeout(500)
                final = page.url.replace(PREVIEW_URL, "").rstrip("/") or "/"
                ok = final == expected or final == f"{expected}/"
                results["redirect_check"].append({"from": src, "to": expected, "actual": final, "ok": ok})
            except Exception as e:
                results["redirect_check"].append({"from": src, "to": expected, "error": str(e)[:200]})

        await browser.close()

    # ── Summary ────────────────────────────────────────────────────
    print(json.dumps(results, indent=2, default=str))

    # Fail-loud on any P0 issue
    issues = 0
    for e in results["url_parity"]:
        if e.get("status") != 200:
            issues += 1
            print(f"[FAIL] {e['path']} → status {e.get('status')}", file=sys.stderr)
    if results["sitemap_check"]["missing_from_sitemap"]:
        print(f"[FAIL] sitemap missing: {results['sitemap_check']['missing_from_sitemap']}", file=sys.stderr)
        issues += len(results["sitemap_check"]["missing_from_sitemap"])
    for c in results["canonical_check"]:
        print(f"[FAIL] canonical mismatch on {c['path']} — expected {c['expected']}, got {c['actual']}", file=sys.stderr)
        issues += 1
    for n in results["noindex_check"]:
        print(f"[FAIL] noindex mismatch on {n['path']}", file=sys.stderr)
        issues += 1
    for s in results["schema_check"]:
        print(f"[WARN] no JSON-LD on {s['path']}", file=sys.stderr)
    for r in results["redirect_check"]:
        if not r.get("ok"):
            print(f"[FAIL] legacy redirect broken: {r}", file=sys.stderr)
            issues += 1

    print(f"\n== AUDIT SUMMARY: {issues} P0 issue(s) ==", file=sys.stderr)

    # CDN leak regression — any stale apollobuilders.com.au/wp-content ref
    # in the source tree will 404 post-DNS-cutover. Fail loud.
    if results["cdn_leaks"]:
        for leak in results["cdn_leaks"]:
            print(f"[FAIL] stale CDN ref in {leak['file']} — {leak['hits']} hit(s)", file=sys.stderr)
            issues += leak["hits"]
        print(f"== TOTAL WITH CDN LEAKS: {issues} P0 issue(s) ==", file=sys.stderr)

    sys.exit(0 if issues == 0 else 1)


if __name__ == "__main__":
    asyncio.run(main())
