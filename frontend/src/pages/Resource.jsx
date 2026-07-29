import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import SEO, { breadcrumbSchema } from "@/components/SEO";
import { resourceArticles, suburbData } from "@/lib/seoContent";

export function ResourceIndex() {
  const articles = Object.values(resourceArticles);
  return (
    <div data-testid="resources-page">
      <SEO
        title="Resources & Guides — Apollo Builders Melbourne"
        description="Renovation cost guides, building process explainers, and Melbourne-specific building resources by Apollo Builders."
        path="/resources"
        jsonLd={{
          "@context":"https://schema.org","@graph":[breadcrumbSchema([{name:"Home",path:"/"},{name:"Resources",path:"/resources"}])]
        }}
      />

      <section className="pt-16 md:pt-24 pb-16 md:pb-20 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Resources</div>
        <h1 className="font-display text-[40px] md:text-[64px] lg:text-[80px] leading-[0.96] tracking-[-0.03em] text-[color:var(--ink-black)] mt-5 max-w-[18ch]">
          <MaskLines lines={["Guides for Melbourne homeowners."]} />
        </h1>
        <p className="mt-8 max-w-2xl text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.7]">
          Practical guides on renovation costs, timelines, planning permits and choosing a
          builder — written for Melbourne homeowners.
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {articles.map((a) => (
            <li key={a.slug} className="border-t border-[color:var(--hair)] pt-8">
              <Link to={`/resources/${a.slug}`} className="group block">
                <div className="frame aspect-[16/10]">
                  <PhotoFrame src={a.image} alt={a.alt} />
                </div>
                <h2 className="font-display text-[24px] md:text-[30px] leading-[1.15] tracking-[-0.01em] text-[color:var(--ink-black)] mt-6">
                  {a.title}
                </h2>
                <p className="text-[color:var(--ink-soft)] mt-3">{a.excerpt}</p>
                <div className="mt-6 text-[11px] tracking-[0.22em] uppercase text-[color:var(--gold-dark)] font-semibold inline-flex items-center gap-2">
                  Read <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default function Resource() {
  const { slug } = useParams();
  const a = resourceArticles[slug];
  if (!a) return <Navigate to="/resources" replace />;

  const path = `/resources/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: a.title,
        image: a.image,
        publisher: { "@type": "Organization", name: "Apollo Builders", url: "https://apollobuilders.com.au/" },
        author: { "@type": "Organization", name: "Apollo Builders" },
      },
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: a.title, path },
      ]),
    ],
  };

  return (
    <div data-testid={`resource-${slug}`}>
      <SEO title={`${a.title} — Apollo Builders`} description={a.excerpt} path={path} jsonLd={jsonLd} />

      <section className="pt-16 md:pt-24 pb-14 md:pb-20 mx-auto max-w-[1080px] px-6 md:px-10">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Resource</div>
        <h1 className="font-display text-[34px] md:text-[52px] lg:text-[64px] leading-[1] tracking-[-0.025em] text-[color:var(--ink-black)] mt-5 max-w-[22ch]">
          {a.title}
        </h1>
        <p className="mt-8 max-w-2xl text-[color:var(--ink)] text-[17px] md:text-[19px] leading-[1.65]">{a.excerpt}</p>
      </section>

      <section className="mx-auto max-w-[1080px] px-6 md:px-10 pb-16">
        <PhotoFrame
          src={a.image}
          alt={a.alt}
          className="aspect-[16/9]"
          eyebrow="Apollo Builders — Resources"
          label={a.title}
        />
      </section>

      <article className="mx-auto max-w-[720px] px-6 md:px-0 pb-24 md:pb-32 text-[color:var(--ink)] text-[17px] leading-[1.75]">
        {a.body.map((sec, i) => (
          <section key={i} className="mb-10">
            <h2 className="font-display text-[24px] md:text-[28px] leading-[1.2] tracking-[-0.015em] text-[color:var(--ink-black)] mt-8 mb-4">
              {sec.h}
            </h2>
            <p>{sec.p}</p>
          </section>
        ))}
        <div className="mt-14 pt-10 border-t border-[color:var(--hair)]">
          <p className="text-[15px] text-[color:var(--ink-soft)] mb-6">
            Planning a project? Apollo Builders provides no-obligation fixed price quotes across
            Melbourne&rsquo;s South-East.
          </p>
          <Link to="/contact-us" className="btn-navy">
            Get a Free Quote <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
        {/* Related suburbs */}
        <div className="mt-14">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)] mb-4">Areas We Service</div>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[14px]">
            {Object.values(suburbData).map((s) => (
              <li key={s.name}>
                <Link to={`/suburbs/${s.name.toLowerCase().replace(/\s+/g, "-")}`} className="link-under text-[color:var(--ink-black)]">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
