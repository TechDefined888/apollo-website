import { Link, Navigate, useLocation } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, MapPin, Shield } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import { servicePages } from "@/lib/servicePages";
import { projects } from "@/lib/data";
import SEO, {
  breadcrumbSchema,
  serviceSchema,
  localBusiness,
} from "@/components/SEO";

/**
 * Dedicated service page — one component, four routes.
 * Content data lives in /app/frontend/src/lib/servicePages.js (verbatim
 * from apollobuilders.com.au) so this file is pure presentation.
 *
 * The service is derived from the URL slug so that
 *   /new-home-builds, /home-renovations, /kitchen-renovations, /bathroom-renovations
 * each render the correct content while preserving live-site URLs.
 */
export default function ServicePage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  const data = servicePages[slug];
  if (!data) return <Navigate to="/services" replace />;

  const canonical = `/${data.slug}/`;
  const related = (data.relatedProjects || [])
    .map((s) => projects.find((p) => p.slug === s))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Services", path: "/services/" },
        { name: data.h1, path: canonical },
      ]),
      serviceSchema({
        slug: data.slug,
        title: data.h1,
        tagline: data.tagline,
        body: data.intro.body.join(" "),
      }),
      localBusiness(),
    ],
  };

  return (
    <div data-testid={`service-page-${data.slug}`}>
      <SEO
        title={data.seoTitle}
        description={data.metaDescription}
        path={canonical}
        image={data.hero}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
          <Link to="/services" className="link-under">Services</Link>
          <span className="mx-2 opacity-40">/</span>
          <span>{data.h1}</span>
        </div>
        <h1 className="font-display text-[40px] md:text-[64px] lg:text-[76px] leading-[0.98] tracking-[-0.03em] text-[color:var(--ink-black)] mt-6 max-w-[18ch]">
          <MaskLines lines={[data.h1 + "."]} />
        </h1>
        <p className="mt-8 max-w-2xl text-[color:var(--ink)] text-[16px] md:text-[19px] leading-[1.7]">
          {data.tagline}
        </p>
        <div className="mt-10">
          <Link to="/contact-us" data-testid={`service-hero-cta-${data.slug}`} className="btn-navy">
            Get A Free Quote <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* Before & After (bathroom) */}
      {data.beforeAfter && (
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)] mb-4">
              Before &amp; After
            </div>
            <h2 className="font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)]">
              {data.beforeAfter.heading}
            </h2>
            <p className="mt-8 text-[color:var(--ink)] text-[16px] leading-[1.7]">
              {data.beforeAfter.body}
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.05}>
            <div className="frame aspect-[4/3]">
              <img src={data.beforeAfter.image} alt={data.beforeAfter.imageAlt} />
            </div>
          </Reveal>
        </section>
      )}

      {/* Intro */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-4">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Overview</div>
        </Reveal>
        <Reveal className="md:col-span-8" delay={0.05}>
          <h2 className="font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)]">
            {data.intro.heading}
          </h2>
          {data.intro.body.map((p, i) => (
            <p key={i} className="mt-6 text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.7]">
              {p}
            </p>
          ))}
        </Reveal>
      </section>

      {/* Collage */}
      {data.collage?.length ? (
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {data.collage.map((img, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div className={`frame ${i === 1 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {/* Design section (kitchen, home, new build) OR bathroom design with image */}
      {data.designSection && !data.beforeAfter && (
        <section className="bg-[color:var(--cream)] py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Approach</div>
            </Reveal>
            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)]">
                {data.designSection.heading}
              </h2>
              {data.designSection.body.map((p, i) => (
                <p key={i} className="mt-6 text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.7]">
                  {p}
                </p>
              ))}
            </Reveal>
          </div>
        </section>
      )}

      {/* Design section with image (bathroom variant) */}
      {data.designSection && data.beforeAfter && (
        <section className="bg-[color:var(--cream)] py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-6" delay={0.05}>
              <div className="tracking-eyebrow text-[color:var(--gold-dark)] mb-4">Approach</div>
              <h2 className="font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)]">
                {data.designSection.heading}
              </h2>
              {data.designSection.body.map((p, i) => (
                <p key={i} className="mt-6 text-[color:var(--ink)] text-[16px] leading-[1.7]">
                  {p}
                </p>
              ))}
              <div className="mt-10">
                <Link to="/contact-us" className="btn-navy">
                  Get A Free Quote <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
              </div>
            </Reveal>
            {data.designSection.image && (
              <Reveal className="lg:col-span-6">
                <div className="frame aspect-[4/3]">
                  <img src={data.designSection.image} alt={data.designSection.imageAlt} />
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Inclusions / services list */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Services</div>
            <h2 className="font-display text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
              {data.inclusionsHeading}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.05}>
            <p className="text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.7] max-w-2xl">
              {data.inclusionsIntro}
            </p>
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 border-t border-[color:var(--hair)] pt-8">
              {data.inclusions.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[color:var(--ink)] text-[16px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] mt-2.5 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
            {data.inclusionsOutro && (
              <p className="mt-8 text-[color:var(--ink)] text-[16px] leading-[1.7] max-w-2xl">
                {data.inclusionsOutro}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* Focus blocks */}
      {data.focusBlocks?.length ? (
        <section className="bg-[color:var(--ink-black)] text-[color:var(--paper)] py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 space-y-24 md:space-y-32">
            {data.focusBlocks.map((f, i) => {
              const flip = i % 2 === 1;
              return (
                <div
                  key={f.heading}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
                >
                  <Reveal className={`lg:col-span-6 ${flip ? "lg:order-2" : ""}`}>
                    <div className="tracking-eyebrow text-[color:var(--gold)] mb-4">
                      Specialisation
                    </div>
                    <h3 className="font-display text-[28px] md:text-[42px] leading-[1.05] tracking-[-0.02em]">
                      {f.heading}
                    </h3>
                    {f.body?.map((p, k) => (
                      <p key={k} className="mt-6 text-[color:var(--paper)]/85 text-[16px] leading-[1.7]">
                        {p}
                      </p>
                    ))}
                    {f.bullets?.length ? (
                      <ul className="mt-6 space-y-3">
                        {f.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-3 text-[color:var(--paper)]/90 text-[15px]">
                            <CheckCircle2 className="h-4 w-4 mt-1 text-[color:var(--gold)] shrink-0" strokeWidth={1.75} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {f.bodyAfter?.map((p, k) => (
                      <p key={k} className="mt-6 text-[color:var(--paper)]/85 text-[16px] leading-[1.7]">
                        {p}
                      </p>
                    ))}
                  </Reveal>
                  <Reveal className={`lg:col-span-6 ${flip ? "lg:order-1" : ""}`} delay={0.05}>
                    <div className="frame aspect-[4/3]">
                      <img src={f.image} alt={f.imageAlt} loading="lazy" />
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {/* Fully managed inclusions */}
      {data.fullyManagedHeading && (
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="lg:col-span-6">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Fully managed</div>
              <h2 className="font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
                {data.fullyManagedHeading}
              </h2>
              <p className="mt-6 text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.7]">
                {data.fullyManagedIntro}
              </p>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-[color:var(--hair)] pt-8">
                {data.fullyManaged.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[color:var(--ink)] text-[15px]">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-[color:var(--gold)] shrink-0" strokeWidth={1.75} />
                    {s}
                  </li>
                ))}
              </ul>
              {data.fullyManagedOutro && (
                <p className="mt-8 text-[color:var(--ink)] text-[16px] leading-[1.7]">
                  {data.fullyManagedOutro}
                </p>
              )}
            </Reveal>
            {data.fullyManagedImage && (
              <Reveal className="lg:col-span-6" delay={0.05}>
                <div className="frame aspect-[4/5]">
                  <img src={data.fullyManagedImage} alt={`${data.h1} — fully managed build`} loading="lazy" />
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Cost section */}
      {data.costSection && (
        <section className="bg-[color:var(--cream)] py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Cost</div>
            </Reveal>
            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)]">
                {data.costSection.heading}
              </h2>
              <p className="mt-6 text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.7]">
                {data.costSection.intro}
              </p>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 border-t border-[color:var(--hair)] pt-8">
                {data.costSection.bullets.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[color:var(--ink)] text-[15px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] mt-2.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              {data.costSection.outro && (
                <p className="mt-8 text-[color:var(--ink)] text-[16px] leading-[1.7]">
                  {data.costSection.outro}
                </p>
              )}
            </Reveal>
          </div>
        </section>
      )}

      {/* Compliance quote (bathroom) */}
      {data.complianceSection && (
        <section className="bg-[color:var(--ink-black)] text-[color:var(--paper)] py-24 md:py-32">
          <div className="mx-auto max-w-[1000px] px-6 md:px-10 lg:px-14">
            <Reveal>
              <div className="inline-flex items-center gap-3 tracking-eyebrow text-[color:var(--gold)]">
                <Shield className="h-4 w-4" strokeWidth={1.75} />
                Compliance
              </div>
              <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em] mt-6">
                {data.complianceSection.heading}
              </h2>
              {data.complianceSection.body.map((p, i) => (
                <p key={i} className="mt-6 text-[color:var(--paper)]/85 text-[16px] md:text-[17px] leading-[1.7]">
                  {p}
                </p>
              ))}
              {data.complianceSection.quote && (
                <blockquote className="mt-10 pl-6 border-l-2 border-[color:var(--gold)] font-display text-[22px] md:text-[28px] leading-[1.35] tracking-[-0.01em] text-[color:var(--paper)]">
                  {data.complianceSection.quote}
                </blockquote>
              )}
            </Reveal>
          </div>
        </section>
      )}

      {/* Why choose Apollo */}
      {data.whyChooseHeading && (
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Why Apollo</div>
              <h2 className="font-display text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
                {data.whyChooseHeading}
              </h2>
            </Reveal>
            <Reveal className="md:col-span-8" delay={0.05}>
              <p className="text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.7] max-w-2xl">
                {data.whyChooseIntro}
              </p>
              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 border-t border-[color:var(--hair)] pt-8">
                {data.whyChoose.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[color:var(--ink)] text-[16px]">
                    <CheckCircle2 className="h-4 w-4 mt-1 text-[color:var(--gold)] shrink-0" strokeWidth={1.75} />
                    {s}
                  </li>
                ))}
              </ul>
              {data.whyChooseOutro && (
                <p className="mt-8 text-[color:var(--ink)] text-[16px] leading-[1.7] max-w-2xl">
                  {data.whyChooseOutro}
                </p>
              )}
            </Reveal>
          </div>
        </section>
      )}

      {/* Related projects */}
      {related.length ? (
        <section className="bg-[color:var(--cream)] py-24 md:py-32">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
            <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
              <div>
                <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Recent Work</div>
                <h2 className="font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-3">
                  Related projects.
                </h2>
              </div>
              <Link to="/our-projects" className="btn-navy">
                View All <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to={`/our-projects/${p.slug}`}
                  data-testid={`service-related-${p.slug}`}
                  className="group block"
                >
                  <div className="frame aspect-[4/3]">
                    <img src={p.image} alt={p.imageAlt} loading="lazy" />
                  </div>
                  <div className="mt-5">
                    <div className="tracking-eyebrow text-[color:var(--gold-dark)] text-[11px]">
                      {p.type}
                    </div>
                    <h3 className="font-display text-[22px] md:text-[24px] leading-[1.15] tracking-[-0.02em] text-[color:var(--ink-black)] mt-2">
                      {p.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Service area (bathroom-specific) */}
      {data.serviceArea && (
        <section className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
          <Reveal>
            <div className="inline-flex items-center gap-3 tracking-eyebrow text-[color:var(--gold-dark)]">
              <MapPin className="h-4 w-4 text-[color:var(--gold)]" strokeWidth={1.75} />
              Service Area
            </div>
            <h2 className="font-display text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.02em] text-[color:var(--ink-black)] mt-6 max-w-3xl">
              {data.serviceArea.heading}
            </h2>
            <p className="mt-6 text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.7] max-w-3xl">
              {data.serviceArea.body}
            </p>
          </Reveal>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-[color:var(--ink-black)] text-[color:var(--paper)] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 text-center">
          <Reveal>
            <h2 className="font-display text-[36px] md:text-[60px] leading-[1.02] tracking-[-0.03em] max-w-[20ch] mx-auto">
              {data.finalCta.heading}
            </h2>
            <p className="mt-8 max-w-2xl mx-auto text-[color:var(--paper)]/85 text-[16px] md:text-[17px] leading-[1.7]">
              {data.finalCta.body}
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link to="/contact-us" data-testid={`service-final-cta-${data.slug}`} className="btn-gold">
                Get A Free Quote <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link to="/our-projects" className="btn-ghost-light">
                View Our Projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
