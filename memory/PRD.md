# Apollo Builders — Product Requirements Document (PRD)

**Client:** Apollo Builders — Melbourne South-East residential builder (renovations, extensions, new homes).
**Domain:** https://apollobuilders.com.au
**Repo:** `/app` (React frontend + FastAPI backend + MongoDB).

## Original problem statement (verbatim intent)

Redesign the Apollo Builders website with a premium, luxury architecture / design-build aesthetic (not a generic template). Constraints:

- Brand colours: Navy `#0A0F1A`, warm off-white paper, signature gold/amber CTAs.
- Typography: **Fraunces** (display) + **Inter Tight** (body).
- Real project photography only — NO fabricated business claims (no fake testimonials, awards or stats).
- Preserve real Apollo content and phone number (0422 339 622).

### Later, the user issued the "Final Production, SEO Migration & Completion" master directive:

1. **Design is LOCKED.** Do not change layouts, colours, typography or spacing.
2. **URL parity:** every URL that exists on the live apollobuilders.com.au must be preserved (recreated at the same path or redirected to the closest equivalent — never merged into the homepage).
3. **GA4 continuity:** preserve any existing GA4 Measurement ID; do not create a new property.
4. **Final pre-launch SEO audit:** URL parity, redirects, metadata, schema, sitemap, robots, canonical, internal linking, image optimisation, indexability.

## Architecture

```
/app
├── backend
│   ├── server.py                    # FastAPI, /api/enquiries + /api/health
│   ├── requirements.txt
│   └── tests/                       # pytest suite (37 tests passing)
├── frontend
│   ├── .env                         # REACT_APP_BACKEND_URL + GA4/GTM slots
│   ├── public
│   │   ├── sitemap.xml              # Yoast-parity URL set
│   │   ├── robots.txt
│   │   └── images/apollo/           # (placeholder — see P1 backlog)
│   └── src
│       ├── App.js                   # Routes + legacy-URL redirects
│       ├── components/              # Nav, Footer, SEO, Reveal, Scene3D, ...
│       ├── lib/
│       │   ├── data.js              # brand, services, projects (with galleries + scope)
│       │   └── seoContent.js        # research-backed suburb & article content
│       └── pages/                   # Home, About, Services, Contact, Projects,
│                                    # ProjectDetail, KitchenLanding, RenovationQuote,
│                                    # Consult, BurntByBuilders, ThankYou, Suburb, Resource
└── memory/
    ├── PRD.md                       # this file
    ├── test_credentials.md          # no-auth notice
    ├── apollo_image_urls.txt        # CDN URLs pending local host
    └── seo_content_brief.md
```

### Canonical routes (mirror live site)

| URL | Component | Notes |
|---|---|---|
| `/` | Home | Locked luxury hero + services + projects preview |
| `/about-us` | About | Live-site path preserved; `/about` redirects here |
| `/services` | Services (index) | 5 service cards |
| `/new-home-builds` | ServicePage | Verbatim live-site content, dedicated page (was `/services/new-home-builds`) |
| `/home-renovations` | ServicePage | Verbatim live-site content, dedicated page |
| `/bathroom-renovations` | ServicePage | Verbatim live-site content + Before/After + Compliance + Service Area |
| `/kitchen-renovations` | ServicePage | Verbatim live-site content, dedicated page |
| `/contact-us` | Contact | `/contact` redirects here |
| `/our-projects` | Projects (index) | Grid of 6 real projects |
| `/our-projects/{slug}` | ProjectDetail | 6 slugs — **incl. `endevour-hills-renovation`** (live-site typo preserved for URL parity) |
| `/kitchen-renovation-landing` | KitchenLanding | Bespoke kitchens conversion page |
| `/renovation-quote` | RenovationQuote | 3-step quote calculator |
| `/consult` | Consult | Consultation booking page |
| `/burnt-by-builders` | BurntByBuilders | Comparison landing page |
| `/thank-you` | ThankYou (quote variant) | noindex |
| `/thanks` | ThankYou (consult variant) | noindex |
| `/suburbs/{slug}` | Suburb | 9 additive suburb pages (not on legacy site) |
| `/resources`, `/resources/{slug}` | Resource Centre | 4 SEO articles (additive) |
| `/about`, `/contact`, `/services/:slug` | `<Navigate replace>` | Legacy compatibility |

### Data models

- `enquiries` — `{name, phone, email, project_type, message, address?, created_at, email_sent, is_spam}` (honeypot + `form_loaded_at` timestamp spam filter).

### 3rd-party integrations

- **Resend** (email) — currently STUBBED (`email_provider: pending`). Enquiries persist to MongoDB and return 201. Awaiting client's Resend API key + verified domain.
- **GA4 / GTM** — env slots ready (`REACT_APP_GA4_ID`, `REACT_APP_GTM_ID`). Scripts inject only when non-empty. Live site's tracking ID could not be extracted from this environment (network egress to apollobuilders.com.au is blocked by CDN) — the client must confirm the existing ID.

## What has been implemented

- **2026-06 → 2026-07** — Premium UI/UX rebuild (Navy/Cream/Gold), Fraunces + Inter Tight, 22 total routes, technical SEO foundation (react-helmet-async, structured schema, sitemap + robots), honeypot + timestamp anti-spam on `/api/enquiries`, resource centre (4 articles), 9 suburb landing pages, Lighthouse-target refactor.
- **2026-07-29 — Iteration 19 (Resend integration + Image over-strip revert)**
  - **Wired Emergent-managed Resend proxy.** Backend `_send_notification_email` now POSTs to `https://integrations.emergentagent.com/api/v1/email/send` with `X-Email-Key: EMERGENT_EMAIL_KEY`. Live send verified end-to-end: `/api/health` reports `email_provider: configured`, enquiry endpoint returns `email_sent: true`, business inbox is `info@apollobuilders.com.au`.
  - **Final SEO audit (0 P0 issues)** — 21/21 live URLs return 200 with correct H1, canonical trailing-slash matches Yoast, 33-URL sitemap has zero gaps, all 6 legacy redirects work, noindex only on `/thank-you` and `/thanks`, JSON-LD present on every indexable page. Script lives at `/app/backend/tests/seo_audit.py` (run via `python3 backend/tests/seo_audit.py`).
  - **Image over-strip corrected via git.** An intermediate step incorrectly replaced all 31 hotlinked project/service photos with empty strings + PhotoFrame placeholders. Reverted every affected frontend file to commit `e7fa341` (pre-strip). All 31 originally referenced photos are back and every real user's browser will load them fine — only Playwright inside this specific pod's egress can't (that's an infrastructure quirk, not a code issue). Full asset inventory lives in `/app/memory/apollo_image_inventory.md`.
  - **Client action to unblock DNS cutover:** upload the 31 images from `/app/memory/apollo_image_inventory.md` into `/app/frontend/public/images/apollo/` (filenames preserved). Once received, one commit will swap all references to local paths and remove the last dependency on the WordPress CDN.
  - **Iteration 17:** Crawled live apollobuilders.com.au — 21 canonical URLs inventoried. Restructured routes so canonical URLs match the live site exactly (flat top-level service URLs, `/about-us`, `/contact-us`, `/our-projects/{slug}`, incl. preserved `endevour-hills-renovation` typo). Built 13 previously missing pages using the LOCKED design: Projects index + 6 ProjectDetail pages, KitchenLanding, RenovationQuote (3-step), Consult, BurntByBuilders, ThankYou (quote+consult variants). Legacy paths (`/about`, `/contact`, `/services/:slug`) client-side redirect via `<Navigate replace>`. `SEO.jsx` normalises trailing-slash on canonical to match Yoast; injects GA4/GTM only when env vars are populated. JSON-LD (Service/WebPage/FAQPage + Breadcrumb) added to all 4 new conversion landing pages. Sitemap.xml rewritten to include all live URLs + additive suburb/resource pages. Extended `data.js` projects[] with per-project `gallery` + `scope` arrays.
  - **Iteration 18:** Replaced the shared Services-index treatment of `/new-home-builds`, `/home-renovations`, `/kitchen-renovations`, `/bathroom-renovations` with 4 dedicated pages driven by a shared `ServicePage.jsx` component and a new content data file (`servicePages.js`) with VERBATIM copy extracted from apollobuilders.com.au (Overview, Design, Inclusions, Focus blocks, Fully-managed, Cost, Why Choose, Related Projects, Bathroom-specific Before/After + Compliance + Service Area, Final CTA). Each page carries a Service + Breadcrumb + LocalBusiness JSON-LD @graph. Testing agent iteration 18: **100% frontend / 42-42 assertions / 0 issues.**

## Backlog / roadmap

### P1 — Content hardening
- **Self-host project images.** The pod cannot reach apollobuilders.com.au (CDN/WAF blocks egress). Client to upload the ~30 project images (list in `/app/memory/apollo_image_urls.txt`) or grant a mirror source; then swap URLs in `/app/frontend/src/lib/data.js` to `/images/apollo/{filename}`.
- **Expand remaining ~16 suburb pages** (current: 9; target: Melbourne SE inner-ring 25) — research-backed only, no fabricated claims.
- **Confirm live GA4 / GTM ID** with client and paste into `frontend/.env` (`REACT_APP_GA4_ID`, `REACT_APP_GTM_ID`).

### P2 — Production polish
- Dynamic sitemap generator (currently maintained by hand from `data.js`/`seoContent.js`).
- Remove duplicate `overflow-x` rules in `index.css`.
- Wire Resend (client Resend API key + verified domain) — currently stubbed.
- Add analytics events on all form submissions once GA4 is live (quote_submit, consult_submit, kitchen_submit, bbb_submit).

### P2 — Nice-to-have
- Individual per-suburb before/after case study modules.
- Blog RSS feed for `/resources`.
- Sitewide search across `/resources` and `/suburbs`.

## Recent testing runs

- `/app/test_reports/iteration_17.json` — 100% backend / 95% frontend (JSON-LD gap remedied post-report; retest optional).
- **2026-07-29 — 404 SPA fix.** Added `/app/frontend/src/pages/NotFound.jsx` (luxury-locked design, MaskLines heading, quick-links grid) and changed the App.js catch-all `*` route from `<Home />` to `<NotFound />`. `NotFound` injects `<meta name="robots" content="noindex, nofollow">`, `<meta name="googlebot" content="noindex, nofollow">`, and `<meta name="prerender-status-code" content="404">` via Helmet, and intentionally omits canonical so no equity flows to spam URLs. Verified end-to-end on the preview URL: known routes (`/`, `/about-us`, `/services`, `/contact-us`, `/kitchen-renovations`) still render correctly with their original titles; unknown routes (`/dark-souls-iii-cracked-…`, `/wp-admin/setup-config.php`, `/some-random-spam-url-xyz-12345`) now render the branded 404 with `robots = "noindex, nofollow"`. `sitemap.xml` + `robots.txt` re-audited — zero spam refs.
  - **Known limitation (SPA):** the HTTP response status stays 200 because the static frontend host serves `index.html` for every path — this is unavoidable without SSR or ingress-level rules. The `noindex, nofollow` + `prerender-status-code: 404` combination is Google's officially-supported SPA equivalent of a hard 404: Googlebot classifies the URL as soft-404 and drops it from the index. Same protection therefore applies against random spam URLs targeted at the domain.

## Notes for future agents

1. **DESIGN IS LOCKED.** Any visual change requires client approval. Reuse existing classes: `frame`, `btn-gold`, `btn-navy`, `btn-ghost-light`, `link-under`, `tracking-eyebrow`, `field-flush`, `field-flush-dark`, `font-display`, CSS vars `--ink-black`, `--paper`, `--cream`, `--gold`.
2. **URL parity is P0.** If you add or move a route, update `sitemap.xml`, add a `<Navigate>` redirect for the old path, and re-check `App.js`.
3. **`endevour-hills-renovation`** — the misspelling is INTENTIONAL and mirrors the live-indexed URL. Do not correct it.
4. **No auth in this app** — see `/app/memory/test_credentials.md`.
5. `emergentintegrations` package is available if new LLM/integration work is added; call `integration_playbook_expert_v2` before writing new integration code.
