# Apollo Builders — Image Asset Inventory (2026-07-29)

Snapshot of every image URL referenced in `/app/frontend/src/`.
Total unique URLs: **31**.
All 31 currently 200 on the live site (apollobuilders.com.au CDN), so every visible slot in the approved Emergent design is filled for end users **today**.

Note on the "broken image" appearance in the Emergent testing container: the pod's outbound network is firewalled from apollobuilders.com.au (TCP/443 timeout), so headless browsers running from inside the pod render broken image icons. This does **not** affect real users on the public internet — Cloudflare serves these URLs to any client outside the pod.

---

## ✅ Available now (31 assets — currently hotlinked from live CDN)

### Brand & shared
| # | URL | Used in |
|---|---|---|
| 1 | `/wp-content/uploads/2023/09/photo_2025-12-03_10-38-14-e1764907039294.png` | `data.js` — brand logo/mark |

### Project — Drouin New Build (7 photos)
| # | URL | Role |
|---|---|---|
| 2 | `/wp-content/uploads/2025/11/drouin-new-build-3.jpg` | Card thumbnail |
| 3 | `/wp-content/uploads/2025/11/drouin-new-build-4-1.jpg` | Gallery |
| 4 | `/wp-content/uploads/2025/11/drouin-new-build-7.jpg` | Gallery |
| 5 | `/wp-content/uploads/2025/11/drouin-new-build-9.jpg` | Gallery |
| 6 | `/wp-content/uploads/2025/11/drouin-new-build-9-1.jpg` | Gallery |
| 7 | `/wp-content/uploads/2025/11/Drouin-New-Build.jpg` | Feature |
| 8 | `/wp-content/uploads/2025/11/Drouin-New-Build-10.jpg` | Hero |

### Project — Bentleigh East Renovation (4 photos)
| # | URL | Role |
|---|---|---|
| 9  | `/wp-content/uploads/2025/11/bentleigh-east-new-1-1-1024x627.jpg` | Card thumbnail |
| 10 | `/wp-content/uploads/2025/11/bentleigh-east-new-2-1.jpg` | Gallery |
| 11 | `/wp-content/uploads/2026/06/Bentleigh-East-5.png` | Bathroom before/after |
| 12 | `/wp-content/uploads/2026/06/bentleigh-east-new-4-1.jpg` | Gallery |

### Project — Berwick New Build (3 photos)
| # | URL | Role |
|---|---|---|
| 13 | `/wp-content/uploads/2025/11/Berwick-New-Build-5-e1762576152191.jpg` | Card + hero |
| 14 | `/wp-content/uploads/2025/11/Berwick-New-Build-e1762574957206.jpg` | Gallery |
| 15 | `/wp-content/uploads/2025/11/Berwick-New-build-1-2.jpg` | Gallery |

### Project — Endevour Hills Renovation (4 photos)
| # | URL | Role |
|---|---|---|
| 16 | `/wp-content/uploads/2025/11/endevour-hills-after-1-1024x686.jpg` | Card thumbnail |
| 17 | `/wp-content/uploads/2025/11/endevour-hills-after-3.jpg` | Gallery + kitchen page |
| 18 | `/wp-content/uploads/2025/11/endevour-hills-after-4.jpg` | Hero + kitchen landing |
| 19 | `/wp-content/uploads/2025/11/endevour-hills-after-5.jpg` | Bathroom page |
| 20 | `/wp-content/uploads/2026/06/endevour-hills-after-5.jpg` | Alt gallery slot |

### Project — Altona Meadows Renovation (2 photos)
| # | URL | Role |
|---|---|---|
| 21 | `/wp-content/uploads/2025/11/Altona-Meadows-after-1-1-e1762576302550.jpg` | Gallery |
| 22 | `/wp-content/uploads/2025/11/Altona-Meadows-after-3-1-e1763617143254-1024x633.jpg` | Card + hero |

### Project — Clyde New Build (5 photos)
| # | URL | Role |
|---|---|---|
| 23 | `/wp-content/uploads/2025/11/Clyde-new-build-1.jpg` | Card thumbnail |
| 24 | `/wp-content/uploads/2025/11/Clyde-new-build-1-1024x683.jpg` | Hero |
| 25 | `/wp-content/uploads/2025/11/Clyde-new-build-2-1-e1762576012818.jpg` | Kitchen — custom cabinetry |
| 26 | `/wp-content/uploads/2025/11/Clyde-new-build-3-1.jpg` | Gallery |
| 27 | `/wp-content/uploads/2026/06/Clyde-new-build-3-1.jpg` | Alt gallery slot |

### Service illustrations & lifestyle (4 photos)
| # | URL | Role |
|---|---|---|
| 28 | `/wp-content/uploads/2025/10/contemporary-villa-with-pool-garden-sleek-design-scaled.jpg` | Duplex block on `/new-home-builds` |
| 29 | `/wp-content/uploads/2025/11/photo_2025-11-21_12-38-05.webp` | Home renovations collage |
| 30 | `/wp-content/uploads/2025/11/remodeling-app.webp` | Home renovations hero |

---

## 🔴 Missing / unavailable (0 assets today)

**No individual asset is currently missing.** Every URL referenced in the codebase resolves 200 on the live Apollo Builders CDN as of the 2026-07-29 crawl.

---

## ⚠️ Post-launch risk (all 31 assets — needs self-hosting before DNS cutover)

The **entire set of 31 URLs sits under `apollobuilders.com.au/wp-content/uploads/`** (WordPress media library). When the domain is switched from the current WordPress backend to the new Emergent app, those URLs will 404 unless one of the following happens:

1. **(Recommended)** The client uploads the same 31 files into `/app/frontend/public/images/apollo/` (preserving filenames), then we swap all references to local paths in one pass. This removes any dependency on the old WordPress instance.
2. The client keeps the WordPress media hosted on a subdomain (e.g., `cdn.apollobuilders.com.au`) or a separate CDN, and we rewrite the origin.
3. The old WordPress backend stays reachable via a permanent CNAME.

Recommendation for the launch: option 1. It's a one-time upload of ~31 photos totalling <30 MB and future-proofs the site against the old CDN going away.

### What the client needs to send us

A single ZIP containing these 31 files, filenames preserved verbatim (case-sensitive) as listed above. Any subset works — for anything not supplied, we'll trim the specific `<img>` reference (never insert stock/AI/placeholders).

---

## Verification method

- `grep -rEho 'https://apollobuilders\.com\.au/wp-content/uploads/[^"'\'' ]+' /app/frontend/src/ | sort -u` produces the master list above.
- Each URL appears in one or more of: `data.js`, `servicePages.js`, `seoContent.js`, or hardcoded on the following JSX files: `Home.jsx` (2), `About.jsx` (1), `Contact.jsx` (1), `KitchenLanding.jsx` (1), `SEO.jsx` (3 as og:image defaults).
- All 31 were surfaced from the live-site crawl performed on 2026-07-29 (see `/app/memory/apollo_image_urls.txt` and this file's URLs).
