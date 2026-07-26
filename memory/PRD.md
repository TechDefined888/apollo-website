# Apollo Builders — Website Redesign PRD

## Original Problem Statement
Redesign the WordPress/Elementor site for Apollo Builders (Melbourne South-East residential builder) into a premium, editorial, Awwwards-caliber marketing site. Navy + off-white palette, Fraunces + Inter Tight typography, thin cinematic hero, framer-motion reveals, Lenis smooth scroll. Content sourced verbatim from apollobuilders.com.au. SEO-tuned for suburb + service terms.

## User Personas
- Homeowner in Melbourne SE (Bayside / Bentleigh / Brighton / Berwick / Clyde / Drouin) researching a kitchen, bathroom, extension, or new build.
- High-intent lead ready to submit an enquiry.

## Core Requirements (static)
- Pages: Home, About, Services (+ per-service slug), Contact.
- Thin hero (~55vh) with masked line-by-line reveal + subtle parallax.
- Inline trust points row (Fully Insured, Fixed Price, Reno & New Builds, SE Specialists).
- Curated 8-image before/after gallery (asymmetric bento).
- 6 featured projects with photo + description + suburb tag.
- Numbered "Why Us" manifesto chapters.
- Vertical process timeline with hairline connector.
- Slow editorial marquee (single instance).
- Minimal FAQ accordion.
- Understated testimonial quote blocks (no stars).
- Navy CTA band.
- Contact form (name, phone, address, email, project type, message) → MongoDB + optional Resend email.
- Schema.org GeneralContractor + LocalBusiness, sitemap.xml, robots.txt.

## Implemented (2026-07)
- Full site build: Home, About, Services (+ /services/:slug), Contact.
- Backend: FastAPI /api/enquiries POST/GET, MongoDB persistence, Resend integration ready (stubbed unless RESEND_API_KEY set).
- Frontend: React 19 + framer-motion + Lenis + shadcn/ui accordion + sonner toasts.
- Fraunces + Inter Tight fonts wired via Google Fonts.
- Hero masked reveal + gentle parallax; editorial marquee; numbered manifesto; vertical process; asymmetric bento gallery.
- SEO: title/meta/canonical/OG per page, schema.org JSON-LD, sitemap.xml, robots.txt, alt text on all imagery with suburb + service.
- Data hardcoded in /app/frontend/src/lib/data.js (projects, testimonials, faqs, services, suburbs).
- Backend + frontend automated tests all pass (iteration_1.json, 100%).

## Backlog / Next
### P1
- Add RESEND_API_KEY (user will provide) → email notifications start flowing automatically.
- Individual project detail pages (/our-projects/:slug) for SEO — each with suburb-specific H1, meta description, and image alt.
- Verified sending domain in Resend once DNS access to apollobuilders.com.au is available.

### P2
- Instagram/Facebook OG feed on Home.
- CMS panel to manage projects/testimonials (deferred — hardcoded per user choice).
- Analytics dashboard for enquiry conversions.
- WebP/AVIF image optimisation + hosted mirrors for faster LCP.

## Files of Note
- /app/backend/server.py — enquiries API + Resend hook (async, non-blocking).
- /app/frontend/src/App.js — Lenis provider + router.
- /app/frontend/src/lib/data.js — single source of truth for hardcoded content.
- /app/frontend/src/pages/{Home,About,Services,Contact}.jsx
- /app/frontend/src/components/{Nav,Footer,Reveal,Marquee}.jsx
- /app/design_guidelines.json, /app/tokens.json — brand system.
