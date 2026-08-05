import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * TrailingSlashRedirect
 *
 * Enforces a single canonical URL shape for every SPA page: paths always
 * end in a trailing slash. When a user (or crawler using JS-rendered
 * navigation) lands on a slash-less URL like `/kitchen-renovations`, we
 * `navigate(..., { replace: true })` to `/kitchen-renovations/`. The
 * browser history is replaced (not pushed) so back-button behaviour is
 * unaffected.
 *
 * Why this exists:
 *   • The canonical URL, sitemap and internal links all use `/foo/`.
 *   • React Router matches `/foo` and `/foo/` to the same route, which
 *     means without this normalizer the same content is reachable at
 *     both URLs — a classic duplicate-content SEO smell.
 *   • Edge-level 301 redirects (see `public/_redirects`) handle the
 *     crawler case; this component handles the client case so users
 *     never see the slash-less form in their address bar.
 *
 * Exclusions:
 *   • The root `/` is intentionally left as-is.
 *   • Paths with a file extension (`.xml`, `.json`, ...) are static
 *     assets and are never rewritten.
 *   • Explicit legacy redirects (`/about`, `/contact`, `/services/<slug>`)
 *     resolve to their own `<Navigate>` route — this normalizer stays
 *     out of their way so the legacy redirect chain isn't broken.
 */
const LEGACY_NO_SLASH = new Set(["/about", "/contact", "/thanks"]);

export default function TrailingSlashRedirect() {
  const { pathname, search, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === "/") return;
    if (pathname.endsWith("/")) return;
    if (/\.[a-z0-9]+$/i.test(pathname)) return; // static asset
    if (LEGACY_NO_SLASH.has(pathname)) return;
    if (pathname.startsWith("/services/")) return; // legacy /services/:slug → /<slug>/
    navigate(pathname + "/" + search + hash, { replace: true });
  }, [pathname, search, hash, navigate]);

  return null;
}
