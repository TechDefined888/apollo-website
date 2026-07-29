import { useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { ArrowUpRight, Minus } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import { services } from "@/lib/data";
import SEO, { serviceSchema, breadcrumbSchema } from "@/components/SEO";

export default function Services() {
  const { slug: paramSlug } = useParams();
  const { pathname } = useLocation();
  // Support both nested (legacy) and flat top-level canonical URLs (live-site parity)
  const flat = pathname.replace(/^\/+|\/+$/g, "");
  const slug =
    paramSlug ||
    (services.find((s) => s.slug === flat) ? flat : null);
  const active = services.find((s) => s.slug === slug);

  const title = active
    ? `${active.title} Melbourne | Apollo Builders`
    : "Apollo Builders Services | Renovations, Extensions & New Builds";
  const description = active
    ? `${active.title} in Melbourne's South-East. ${active.tagline} ${active.body}`
    : "Explore Apollo Builders services across Melbourne's South-East, including bathroom renovations, kitchen renovations, extensions, outdoor projects and new builds.";
  const canonicalPath = active ? `/${active.slug}/` : "/services/";
  const jsonLd = active
    ? { "@context":"https://schema.org", "@graph":[serviceSchema(active), breadcrumbSchema([{name:"Home",path:"/"},{name:active.title,path:`/${active.slug}/`}])] }
    : { "@context":"https://schema.org", "@graph":[breadcrumbSchema([{name:"Home",path:"/"},{name:"Services",path:"/services/"}]), ...services.map(serviceSchema)] };

  return (
    <div data-testid="services-page">
      <SEO title={title} description={description} path={canonicalPath} jsonLd={jsonLd} />
      <section className="pt-16 md:pt-24 pb-16 md:pb-24 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Services</div>
        <h1 className="font-display text-[40px] md:text-[64px] lg:text-[80px] leading-[0.96] tracking-[-0.03em] text-[color:var(--ink-black)] mt-6 max-w-[18ch]">
          <MaskLines lines={["Our services."]} />
        </h1>
        <p className="mt-10 max-w-2xl text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.7]">
          Apollo Builders specialises in new home builds, major renovations and
          custom transformations that bring lasting value to Melbourne homeowners.
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-24">
        <div className="border-t border-[color:var(--hair)]">
          {services.map((s, i) => {
            const active = slug === s.slug;
            return (
              <article
                key={s.slug}
                id={s.slug}
                data-testid={`service-${s.slug}`}
                className={`grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 py-20 md:py-28 border-b border-[color:var(--hair)] ${
                  active ? "bg-[color:var(--cream)] -mx-6 md:-mx-10 lg:-mx-14 px-6 md:px-10 lg:px-14" : ""
                }`}
              >
                <Reveal className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`} y={30}>
                  <div className="frame aspect-[16/11]">
                    <img src={s.image} alt={s.imageAlt} loading="lazy" />
                  </div>
                </Reveal>
                <Reveal className={`md:col-span-5 ${i % 2 ? "md:order-1" : ""}`} y={20} delay={0.05}>
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-[color:var(--gold)] text-4xl md:text-5xl">
                      {s.number}
                    </span>
                    <span className="tracking-eyebrow text-[color:var(--gold-dark)]">Service</span>
                  </div>
                  <h2 className="font-display text-[36px] md:text-[54px] leading-[1.02] tracking-[-0.02em] text-[color:var(--ink-black)] mt-5">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-[color:var(--ink-soft)] text-[17px] max-w-lg">
                    {s.tagline}
                  </p>
                  <p className="mt-4 text-[color:var(--ink)] leading-relaxed">{s.body}</p>

                  <ul className="mt-8 space-y-3">
                    {s.scope.map((item) => (
                      <li key={item} className="flex items-baseline gap-3 text-[color:var(--ink)]">
                        <Minus className="h-3 w-3 mt-2 text-[color:var(--gold)]" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Link
                      to="/contact-us"
                      data-testid={`service-cta-${s.slug}`}
                      className="btn-navy"
                    >
                      Enquire <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </Link>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
        <Reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="font-display text-[32px] md:text-5xl tracking-[-0.02em] text-[color:var(--ink-black)] max-w-2xl leading-[1.05]">
            Not sure which service fits? We&rsquo;ll walk your site and advise honestly.
          </h2>
          <Link to="/contact-us" className="btn-gold on-light">
            Book a Consultation <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
