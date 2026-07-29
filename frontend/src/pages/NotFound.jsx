import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight } from "lucide-react";
import { MaskLines, Reveal } from "@/components/Reveal";

/**
 * 404 — Page Not Found.
 *
 * Rendered for every unknown route via the App.js catch-all `*` route.
 *
 * SEO safeguards (critical — protects domain authority from spam URLs):
 *   • <meta name="robots" content="noindex, nofollow"> — Google will drop
 *     the URL from its index. This is the officially-supported SPA
 *     equivalent of a hard 404 response for indexing purposes.
 *   • <meta name="prerender-status-code" content="404"> — prerender / SSR
 *     services (used by many crawlers) will serve a real HTTP 404.
 *   • Canonical is intentionally omitted so no equity is passed.
 *
 * Design matches the locked Apollo Builders luxury system
 * (navy ink, off-white paper, gold accents, MaskLines hero reveal).
 */
export default function NotFound() {
  // Signal to any listening 5xx-style monitoring that this render is a soft-404.
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.__APOLLO_404__ = true;
    }
  }, []);

  const quickLinks = [
    { label: "Homepage", to: "/" },
    { label: "New Home Builds", to: "/new-home-builds" },
    { label: "Home Renovations", to: "/home-renovations" },
    { label: "Kitchen Renovations", to: "/kitchen-renovations" },
    { label: "Bathroom Renovations", to: "/bathroom-renovations" },
    { label: "Our Projects", to: "/our-projects" },
    { label: "About Apollo Builders", to: "/about-us" },
    { label: "Contact Us", to: "/contact-us" },
  ];

  return (
    <div data-testid="not-found-page" className="bg-[color:var(--paper)]">
      <Helmet>
        <title>Page Not Found · Apollo Builders</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="prerender-status-code" content="404" />
        <meta name="googlebot" content="noindex, nofollow" />
        <meta
          name="description"
          content="The page you were looking for could not be found. Return to Apollo Builders — custom home builders in Melbourne South-East."
        />
      </Helmet>

      <section
        className="pt-24 md:pt-32 pb-16 md:pb-20 mx-auto max-w-[1080px] px-6 md:px-10 lg:px-14"
        aria-labelledby="notfound-heading"
      >
        <div
          className="tracking-eyebrow text-[color:var(--gold-dark)]"
          data-testid="not-found-eyebrow"
        >
          Error 404 — page not found
        </div>

        <h1
          id="notfound-heading"
          data-testid="not-found-heading"
          className="font-display text-[44px] md:text-[64px] lg:text-[76px] leading-[1.02] tracking-[-0.03em] text-[color:var(--ink-black)] mt-6 max-w-[18ch]"
        >
          <MaskLines lines={["This page isn't", "part of our build."]} />
        </h1>

        <Reveal delay={0.05}>
          <p className="mt-8 max-w-[62ch] text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.7]">
            The link you followed may be broken, or the page may have moved. If
            you arrived here from a search result or an outside link, the URL
            is not one of ours — Apollo Builders has never published this page.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/"
            data-testid="not-found-home-cta"
            className="btn-navy"
          >
            Return to homepage <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
          <Link
            to="/contact-us"
            data-testid="not-found-contact-cta"
            className="btn-ghost"
          >
            Contact Apollo Builders
          </Link>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 md:px-10 lg:px-14 pb-28 md:pb-36">
        <div className="border-t border-[color:var(--hair)] pt-12 md:pt-16">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
            Where to next
          </div>
          <div
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3"
            data-testid="not-found-quick-links"
          >
            {quickLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group flex items-center justify-between border-b border-[color:var(--hair)] py-4 text-[color:var(--ink-black)] hover:text-[color:var(--gold-dark)] transition-colors"
                data-testid={`not-found-link-${l.to.replace(/\W+/g, "-").replace(/^-|-$/g, "") || "home"}`}
              >
                <span className="text-[15px] md:text-[16px]">{l.label}</span>
                <ArrowUpRight
                  className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity"
                  strokeWidth={1.5}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
