#!/usr/bin/env python3
"""
Apollo Builders — render-based noindex audit.

Uses Playwright to actually load each page in a headless browser so
React Helmet meta tags are present in the DOM (a plain `curl` won't
see them on a CRA SPA).

Usage:
    python3 /app/scripts/verify_noindex_render.py https://apollobuilders.com.au
"""
import sys
import asyncio
from playwright.async_api import async_playwright

INDEXABLE = [
    "/", "/about-us", "/services", "/kitchen-renovations",
    "/bathroom-renovations", "/new-home-builds", "/home-renovations",
    "/our-projects", "/our-projects/drouin-new-build",
    "/contact-us", "/privacy-policy", "/cookie-policy", "/terms-of-use",
    "/kitchen-renovation-landing", "/renovation-quote", "/consult",
    "/burnt-by-builders", "/resources",
    "/resources/kitchen-renovation-cost-melbourne", "/suburbs/brighton",
]
MUST_NOINDEX = [
    "/thank-you", "/thanks",
    "/random-spam-verification-xyz-12345",
    "/wp-admin/setup-config.php",
    "/dark-souls-iii-cracked-tiny-girl-repack-pc-version-reddit",
]

GREEN = "\033[32m"; RED = "\033[31m"; RESET = "\033[0m"; BOLD = "\033[1m"


async def audit(base):
    fails = 0
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        print(f"\n{BOLD}Rendering noindex audit against {base}{RESET}\n")

        print(f"{BOLD}── Indexable pages (must NOT have noindex) ──{RESET}")
        for path in INDEXABLE:
            try:
                await page.goto(base + path, wait_until="networkidle", timeout=25000)
                await page.wait_for_timeout(400)
                robots = await page.evaluate(
                    "document.querySelector('meta[name=robots]')?.content || ''"
                )
                if "noindex" in robots.lower():
                    print(f"  {RED}✗ FAIL{RESET} {path:60s} robots='{robots}'")
                    fails += 1
                else:
                    print(f"  {GREEN}✓{RESET} {path:60s} robots='{robots or '(none)'}'")
            except Exception as e:
                print(f"  {RED}✗ ERROR{RESET} {path}: {e}")
                fails += 1

        print(f"\n{BOLD}── Noindex pages (must HAVE noindex) ──{RESET}")
        for path in MUST_NOINDEX:
            try:
                await page.goto(base + path, wait_until="networkidle", timeout=25000)
                await page.wait_for_timeout(400)
                robots = await page.evaluate(
                    "document.querySelector('meta[name=robots]')?.content || ''"
                )
                if "noindex" in robots.lower():
                    print(f"  {GREEN}✓{RESET} {path:60s} robots='{robots}'")
                else:
                    print(f"  {RED}✗ FAIL{RESET} {path:60s} robots='{robots or '(none)'}'")
                    fails += 1
            except Exception as e:
                print(f"  {RED}✗ ERROR{RESET} {path}: {e}")
                fails += 1

        await browser.close()

    print()
    if fails == 0:
        print(f"{GREEN}{BOLD}ALL NOINDEX CHECKS PASSED{RESET}")
        return 0
    print(f"{RED}{BOLD}FAILED CHECKS: {fails}{RESET}")
    return 1


if __name__ == "__main__":
    base = sys.argv[1] if len(sys.argv) > 1 else "https://apollobuilders.com.au"
    sys.exit(asyncio.run(audit(base)))
