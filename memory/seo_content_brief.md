# Apollo Builders — SEO Content Verification Brief

## What has been built (verified content only)

- Home, About, Services (index + per-service), Contact — all pages carry unique title, meta description, canonical, OpenGraph, Twitter, and JSON-LD schema (LocalBusiness / GeneralContractor / Service / FAQPage / BreadcrumbList) via `react-helmet-async` in `src/components/SEO.jsx`.
- Sitemap.xml lists only pages that currently exist with verified content.
- robots.txt allows all, references the sitemap.
- All alt text is descriptive and includes suburb + service where relevant.
- No fabricated facts anywhere. Every claim traces back to apollobuilders.com.au.

## What is NOT yet built — Apollo must supply the following before publication

Per the strict "no fabricated content" rule, none of the following pages have been created, because doing so would require inventing details. Each entry below is a checklist of what Apollo needs to confirm/provide.

### 1. Suburb landing pages
For each suburb Apollo wants to rank in, please confirm:

- [ ] Has Apollo Builders completed at least one project in this suburb?  (Yes/No — if No, we should not create a suburb page for it.)
- [ ] Which specific projects? (Slugs of real projects.)
- [ ] Any council/planning notes Apollo wants highlighted (e.g. heritage overlay, character areas)?
- [ ] Any services particularly common in this suburb (kitchens/bathrooms/new builds)?
- [ ] Any local trade partners or supplier relationships Apollo wants to mention (verified only)?
- [ ] A single line of authored copy from Apollo about that suburb, e.g. "We've delivered three full-home renovations in Brighton over the past two years, all fixed-price."

Suburbs from the master brief awaiting verification:
Berwick, Narre Warren, Cranbourne, Clyde, Officer, Pakenham, Bentleigh, Bentleigh East, Brighton, Brighton East, Hampton, Sandringham, Beaumaris, Cheltenham, Dandenong, Hallam, Endeavour Hills, Mount Waverley, Glen Waverley, Oakleigh, Springvale, Keysborough, Frankston, Mornington, Carrum Downs.

### 2. Additional service pages
The existing site covers New Home Builds, Home Renovations, Kitchen Renovations, Bathroom Renovations, and Outdoor Living. The following need verified copy and at least one real Apollo project photo per service before I create pages:

- [ ] Home Extensions
- [ ] Laundry Renovations
- [ ] Ensuite Renovations
- [ ] Granny Flats
- [ ] Knockdown Rebuilds
- [ ] Project Management (does Apollo offer this as a standalone service?)
- [ ] Custom Carpentry (standalone or part of another service?)
- [ ] Design & Planning
- [ ] Complete Renovation Packages

For each, provide: one-line tagline, 3–5 sentence service description, scope bullet list, one real project photo URL, ballpark timeline (optional), representative FAQs (2–3).

### 3. Project case studies
For each completed project Apollo wants a dedicated page for, please confirm:

- [ ] Project name, suburb (approved for publication?)
- [ ] Scope of works (rooms/structural elements)
- [ ] Design objectives (in Apollo or client's own words)
- [ ] Materials used (verified only — no invented brand names)
- [ ] Any challenges overcome (only if Apollo wants to share)
- [ ] Duration (approx.)
- [ ] Outcomes / what the client said (if quotable and permissioned)
- [ ] Gallery: 4–8 real photo URLs
- [ ] 2–3 project-specific FAQs

### 4. Resource centre / blog
No article should be published until Apollo has reviewed and approved. Suggested topics that require verified author input from Apollo:

- Renovation costs (needs verified pricing ranges from Apollo)
- Home extension planning (Apollo's process)
- Kitchen renovation guide (Apollo's approach + real examples)
- Bathroom renovation ideas
- Building permits in VIC (general reference — safe if written as general info, not Apollo-specific)
- Choosing a builder in Melbourne
- Building timelines (Apollo's actual timelines)
- Knockdown rebuild guide

## How to submit content

Reply to the Apollo Builders development thread with either:
- Filled-out sections above (one suburb / service / project at a time is fine), OR
- A shared doc URL with the copy.

Once verified content is provided, each page will be built with the same technical SEO foundation:
- Unique title, meta description, canonical, OG, Twitter
- Article/Service/BreadcrumbList JSON-LD schema
- H1/H2/H3 hierarchy
- Internal links to related services + projects
- FAQ section with FAQPage schema
- Descriptive alt text on every image
- Multiple enquiry CTAs
- Added to sitemap.xml on publication
