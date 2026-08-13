import { Link, Navigate, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import { legalPages } from "@/lib/legalContent";
import SEO, { breadcrumbSchema } from "@/components/SEO";

/**
 * Legal page — Privacy Policy, Cookie Policy, Website Terms of Use.
 * Content lives in /lib/legalContent.js; this component only renders it.
 */
export default function Legal() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  const data = legalPages[slug];
  if (!data) return <Navigate to="/" replace />;

  const canonical = `/${data.slug}/`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: data.h1, path: canonical },
      ]),
      {
        "@type": "WebPage",
        name: data.h1,
        description: data.metaDescription,
        url: `https://www.apollobuilders.com.au${canonical}`,
        publisher: { "@type": "Organization", name: "Apollo Builders" },
        dateModified: "2026-07-29",
      },
    ],
  };

  return (
    <div data-testid={`legal-page-${data.slug}`}>
      <SEO
        title={data.seoTitle}
        description={data.metaDescription}
        path={canonical}
        jsonLd={jsonLd}
      />

      <section className="pt-16 md:pt-24 pb-12 md:pb-16 mx-auto max-w-[1080px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
          <Link to="/" className="link-under">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <span>{data.h1}</span>
        </div>
        <h1 className="font-display text-[40px] md:text-[56px] lg:text-[64px] leading-[1.02] tracking-[-0.03em] text-[color:var(--ink-black)] mt-6 max-w-[18ch]">
          <MaskLines lines={[data.h1 + "."]} />
        </h1>
        <p className="mt-6 text-[11px] tracking-[0.22em] uppercase text-[color:var(--ink-soft)]">
          Last updated · {data.lastUpdated}
        </p>
      </section>

      <section className="mx-auto max-w-[820px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32">
        <Reveal>
          <p className="text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.75]">
            {data.intro}
          </p>
        </Reveal>

        <div className="mt-16 border-t border-[color:var(--hair)]">
          {data.sections.map((s, i) => (
            <Reveal key={i} delay={0.03}>
              <div className="py-10 border-b border-[color:var(--hair)]">
                <h2 className="font-display text-[24px] md:text-[30px] leading-[1.15] tracking-[-0.02em] text-[color:var(--ink-black)]">
                  {s.heading}
                </h2>
                {s.body?.map((p, k) => (
                  <p
                    key={`b${k}`}
                    className="mt-5 text-[color:var(--ink)] text-[15px] md:text-[16px] leading-[1.75]"
                  >
                    {p}
                  </p>
                ))}
                {s.bullets?.length ? (
                  <ul className="mt-5 space-y-2">
                    {s.bullets.map((b, k) => (
                      <li
                        key={`li${k}`}
                        className="flex items-start gap-3 text-[color:var(--ink)] text-[15px] md:text-[16px] leading-[1.7]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] mt-2.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {s.after?.map((p, k) => (
                  <p
                    key={`a${k}`}
                    className="mt-5 text-[color:var(--ink)] text-[15px] md:text-[16px] leading-[1.75]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 flex flex-wrap items-center justify-between gap-6">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
            Have a question about this page?
          </div>
          <Link to="/contact-us/" data-testid="legal-contact-cta" className="btn-navy">
            Contact Apollo Builders <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
