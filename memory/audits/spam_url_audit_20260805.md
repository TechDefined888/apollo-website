# Spam URL Audit — Production `apollobuilders.com.au`

## Audit patterns searched
`microsoft`, `office`, `download`, `setup`, `crack`, `activated`, `key`, `free`, `apk`, `torrent`, `casino`, `viagra`, `crypto`, `login`

## Surfaces audited
1. **`/app/frontend/src`** — 0 spam URLs. All keyword matches are legitimate (React `event.key`, "Microsoft Edge" in Cookie Policy, "Office of the Australian Information Commissioner" in Privacy Policy, "free consultation" copy, `keywords` SEO arrays).
2. **`/app/frontend/public`** — 0 spam URLs.
3. **`/app/backend`** — 0 spam URLs. Matches are for `key_func`, `api_key`, test-report `keys()`.
4. **`/app/memory` docs** — 0 spam URLs.
5. **Production sitemap** — 37 URLs, 0 spam matches.
6. **Production robots.txt** — clean, no disallow-anything, points to canonical sitemap.
7. **Code-defined URL patterns containing any spam keyword** — 0 matches (`grep -rhoE '"/[^"]*(microsoft|office|...)[^"]*"'` returned empty).

## Production probe results
Every attempted spam URL returns HTTP 200 rendering the React `<NotFound>` component with `<meta name="robots" content="noindex, nofollow">` + `<meta name="prerender-status-code" content="404">`. This is the same architectural constraint documented in previous audits: Emergent's Cloudflare-fronted edge does classic SPA fallback (serves `/index.html` for unknown paths). Google treats the noindex response as a soft-404 and drops the URL from its index — this is Google's officially-supported SPA equivalent of a hard 404.

## URLs removed from codebase
**None** — no spam URLs were ever routed in the codebase or listed in sitemap. Nothing to remove.

## Why spam URLs may still appear "indexed" against apollobuilders.com.au
1. **Legacy WordPress residuals** — the pre-migration WordPress site may have been compromised at some point, resulting in spam URLs being indexed. These are no longer served with any real content on the new site.
2. **Google's crawl lag** — indexed URLs from the WP era persist in Google's index until re-crawled and de-indexed. The `noindex` meta tag on our NotFound page ensures Google drops these URLs on their next crawl (typically days to weeks).

## Action for the client
Submit the spam URLs to [Google Search Console → Removals](https://search.google.com/search-console/removals) to force-remove them within ~24 hours (versus waiting for the next crawl to see the `noindex` meta). Bulk-submit prefixes if possible (e.g. `apollobuilders.com.au/*crack*`).
