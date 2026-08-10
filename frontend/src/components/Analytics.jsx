import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Analytics
 *
 * Global GA4 + GTM installer, mounted once at the App root. Responsibilities:
 *   • Injects the gtag.js library exactly once (via useEffect + createElement)
 *   • Configures GA4 with `send_page_view: false` so we can control page_view
 *     events explicitly per SPA route change
 *   • Subscribes to `useLocation` and fires `gtag('event', 'page_view', {...})`
 *     on every route change (React Router doesn't do this automatically)
 *   • Same lifecycle for GTM (independent from GA4 — can run both or either)
 *
 * Activation:
 *   Set `REACT_APP_GA4_ID` (format `G-XXXXXXXXXX`) and/or `REACT_APP_GTM_ID`
 *   (format `GTM-XXXXXXX`) in `frontend/.env`, then rebuild + redeploy.
 *   When neither is set, this component is a total no-op — no network
 *   requests, no side effects, no console output.
 *
 * Notes:
 *   • The CSP in `public/index.html` already whitelists gtag + GA endpoints,
 *     no CSP edit is required to activate this.
 *   • `anonymize_ip: true` is set for AU privacy compliance (mentioned in
 *     the Privacy Policy).
 *   • The previous scaffolding in `SEO.jsx` has been removed to avoid
 *     double-injection when this component is active.
 */
export default function Analytics() {
  const { pathname, search } = useLocation();
  const initialised = useRef(false);

  const gaId = process.env.REACT_APP_GA4_ID?.trim();
  const gtmId = process.env.REACT_APP_GTM_ID?.trim();

  // ── Install gtag.js + GTM once on mount ────────────────────────────
  useEffect(() => {
    if (initialised.current) return;
    if (!gaId && !gtmId) return; // dormant when no IDs set
    initialised.current = true;

    // Initialise the shared dataLayer + gtag helper before either
    // library boots. Both GA4 and GTM read from window.dataLayer.
    window.dataLayer = window.dataLayer || [];
    // eslint-disable-next-line prefer-rest-params
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());

    // ─── GA4 ────
    if (gaId) {
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(s);

      // page_view will be fired manually on every route change; disable
      // the auto pageview so we don't double-count the initial load.
      window.gtag("config", gaId, {
        send_page_view: false,
        anonymize_ip: true,
      });
    }

    // ─── GTM ────
    if (gtmId) {
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
      document.head.appendChild(s);
      window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    }
  }, [gaId, gtmId]);

  // ── Fire page_view on every SPA route change (including initial) ──
  useEffect(() => {
    if (!gaId && !gtmId) return;
    if (typeof window.gtag !== "function") return;

    const page_location = window.location.href;
    const page_path = pathname + search;
    const page_title = document.title;

    if (gaId) {
      window.gtag("event", "page_view", {
        page_location,
        page_path,
        page_title,
        send_to: gaId,
      });
    }
    if (gtmId) {
      window.dataLayer.push({
        event: "page_view",
        page_location,
        page_path,
        page_title,
      });
    }
  }, [pathname, search, gaId, gtmId]);

  return null;
}
