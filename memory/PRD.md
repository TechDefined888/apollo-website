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
| `/new-home-builds` | Services (flat) | Was `/services/new-home-builds` |
| `/home-renovations` | Services (flat) | Was `/services/home-renovations` |
| `/bathroom-renovations` | Services (flat) | " |
| `/kitchen-renovations` | Services (flat) | " |
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
- **2026-07-29 — SEO Migration & Completion (this iteration)**
  - Crawled live apollobuilders.com.au — 21 canonical URLs inventoried.
  - Restructured routes so canonical URLs match the live site exactly (flat top-level service URLs, `/about-us`, `/contact-us`, `/our-projects/{slug}`, incl. preserved `endevour-hills-renovation` typo).
  - Built 13 previously missing pages using the LOCKED design: Projects index + 6 ProjectDetail pages, KitchenLanding, RenovationQuote (3-step), Consult, BurntByBuilders, ThankYou (quote+consult variants).
  - Legacy paths (`/about`, `/contact`, `/services/:slug`) client-side redirect via `<Navigate replace>`.
  - `SEO.jsx` normalises trailing-slash on canonical to match Yoast; injects GA4/GTM only when env vars are populated.
  - JSON-LD (Service/WebPage/FAQPage + Breadcrumb) added to all 4 new conversion landing pages.
  - Sitemap.xml rewritten to include all live URLs + additive suburb/resource pages.
  - Extended `data.js` projects[] with per-project `gallery` + `scope` arrays.
  - Testing agent iteration 17 → 100% backend (37/37 pytest), 95% frontend; all issues from that report have been fixed.

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

## Notes for future agents

1. **DESIGN IS LOCKED.** Any visual change requires client approval. Reuse existing classes: `frame`, `btn-gold`, `btn-navy`, `btn-ghost-light`, `link-under`, `tracking-eyebrow`, `field-flush`, `field-flush-dark`, `font-display`, CSS vars `--ink-black`, `--paper`, `--cream`, `--gold`.
2. **URL parity is P0.** If you add or move a route, update `sitemap.xml`, add a `<Navigate>` redirect for the old path, and re-check `App.js`.
3. **`endevour-hills-renovation`** — the misspelling is INTENTIONAL and mirrors the live-indexed URL. Do not correct it.
4. **No auth in this app** — see `/app/memory/test_credentials.md`.
5. `emergentintegrations` package is available if new LLM/integration work is added; call `integration_playbook_expert_v2` before writing new integration code.
