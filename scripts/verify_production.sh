#!/usr/bin/env bash
# Apollo Builders — post-deploy production verification.
# Run this AFTER clicking "Deploy" in the Emergent chat UI.
#
# Usage: bash /app/scripts/verify_production.sh
set -u

PROD="https://apollobuilders.com.au"
GREEN=$'\e[32m'; RED=$'\e[31m'; YELLOW=$'\e[33m'; RESET=$'\e[0m'; BOLD=$'\e[1m'

pass=0; fail=0
check_status() {
  local url="$1"; local expected="$2"; local label="$3"
  local code
  code=$(curl -sI -o /dev/null -w "%{http_code}" "$url")
  if [[ "$code" == "$expected" ]]; then
    echo "  ${GREEN}✓${RESET} ${label} → HTTP ${code}"
    pass=$((pass+1))
  else
    echo "  ${RED}✗${RESET} ${label} → HTTP ${code} (expected ${expected})"
    fail=$((fail+1))
  fi
}

echo ""
echo "${BOLD}════════════════════════════════════════════════════════════════${RESET}"
echo "${BOLD} Apollo Builders — production post-deploy verification${RESET}"
echo "${BOLD} Target: ${PROD}${RESET}"
echo "${BOLD}════════════════════════════════════════════════════════════════${RESET}"

# ─── CHECK 2 — Valid Apollo routes still return HTTP 200 ────────────
echo ""
echo "${BOLD}── CHECK 2: valid routes return HTTP 200 ──${RESET}"
for path in "/" "/about-us" "/services" "/new-home-builds" "/home-renovations" \
            "/kitchen-renovations" "/bathroom-renovations" "/contact-us" \
            "/our-projects" "/our-projects/drouin-new-build" \
            "/renovation-quote" "/consult" "/burnt-by-builders" \
            "/kitchen-renovation-landing" "/thank-you" "/thanks" \
            "/resources" "/resources/kitchen-renovation-cost-melbourne" \
            "/suburbs/brighton" "/privacy-policy" "/cookie-policy" "/terms-of-use" \
            "/sitemap.xml" "/robots.txt"; do
  check_status "${PROD}${path}" "200" "$path"
done

# ─── CHECK 1 — Unknown URLs return HTTP 404 (or soft-404 via noindex) ─
# We can't inspect the client-rendered <meta name=robots> tag with a
# raw curl on a CRA SPA — but we CAN prove the new build is live by
# looking for a marker in the static /404.html file that only exists
# in our new build. If the build hasn't shipped yet, /404.html on prod
# falls through to /index.html (SPA fallback), which is our tell.
echo ""
echo "${BOLD}── CHECK 1: unknown URLs return HTTP 404 (or safe soft-404) ──${RESET}"
static_404=$(curl -s "${PROD}/404.html?nocache=$(date +%s)")
new_build_live=false
if echo "$static_404" | grep -q "This page isn.t part of our build"; then
  new_build_live=true
  echo "  ${GREEN}✓${RESET} New build detected on production (/404.html contains fix marker)"
else
  echo "  ${RED}✗ NEW BUILD NOT DETECTED${RESET} — /404.html still returns SPA fallback."
  echo "    ${RED}This means the Deploy button has not yet been clicked${RESET}"
  echo "    ${RED}(or deployment is still in progress). Wait for the deploy${RESET}"
  echo "    ${RED}success toast in Emergent chat, then re-run this script.${RESET}"
  fail=$((fail+1))
fi

for path in "/random-spam-verification-xyz-12345" \
            "/dark-souls-iii-cracked-tiny-girl-repack-pc-version-reddit" \
            "/wp-admin/setup-config.php" "/xmlrpc.php" \
            "/some-nonsense/path/here" "/foo/bar/baz"; do
  code=$(curl -sI -o /dev/null -w "%{http_code}" "${PROD}${path}")
  if [[ "$code" == "404" ]]; then
    echo "  ${GREEN}✓ HARD 404${RESET} ${path} → HTTP ${code}"
    pass=$((pass+1))
  elif [[ "$code" == "200" && "$new_build_live" == "true" ]]; then
    echo "  ${GREEN}~ SOFT 404${RESET} ${path} → HTTP 200 (new build, React NotFound + noindex active)"
    pass=$((pass+1))
  elif [[ "$code" == "200" ]]; then
    echo "  ${RED}✗ RENDERS HOME${RESET} ${path} → HTTP 200 (old build — no noindex, ORIGINAL BUG STILL LIVE)"
    fail=$((fail+1))
  else
    echo "  ${RED}✗${RESET} ${path} → HTTP ${code}"
    fail=$((fail+1))
  fi
done

# ─── CHECK 3 — Sitemap contains only canonical pages ────────────────
echo ""
echo "${BOLD}── CHECK 3: sitemap contains only canonical Apollo pages ──${RESET}"
sitemap=$(curl -s "${PROD}/sitemap.xml")
url_count=$(echo "$sitemap" | grep -c "<loc>")
spam_count=$(echo "$sitemap" | grep -ciE "dark-souls|cracked|repack|wp-admin|xxx|porn|casino|betting|spam" || true)
echo "  ${GREEN}✓${RESET} Total URLs listed: ${url_count}"
if [[ "$spam_count" -eq 0 ]]; then
  echo "  ${GREEN}✓${RESET} Spam pattern matches: 0"
  pass=$((pass+1))
else
  echo "  ${RED}✗${RESET} Spam pattern matches: ${spam_count}"
  fail=$((fail+1))
fi
echo "  URLs:"
echo "$sitemap" | grep -oE "<loc>[^<]+</loc>" | sed 's/^/    /'

# ─── CHECK 4 — Noindex only on 404 + private pages ──────────────────
echo ""
echo "${BOLD}── CHECK 4: noindex meta only on 404 / thank-you pages ──${RESET}"
echo "  ${YELLOW}Note: robots meta is Helmet-rendered client-side.${RESET}"
echo "  ${YELLOW}For a full render-based check, run:${RESET}"
echo "    python3 /app/scripts/verify_noindex_render.py ${PROD}"

# ─── Result ─────────────────────────────────────────────────────────
echo ""
echo "${BOLD}════════════════════════════════════════════════════════════════${RESET}"
if [[ "$fail" -eq 0 ]]; then
  echo "${GREEN}${BOLD} ALL CHECKS PASSED (${pass} passed, ${fail} failed) ${RESET}"
else
  echo "${RED}${BOLD} FAILED CHECKS: ${fail} (${pass} passed) ${RESET}"
fi
echo "${BOLD}════════════════════════════════════════════════════════════════${RESET}"
echo ""
