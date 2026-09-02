import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";

import { Reveal, MaskLines } from "@/components/Reveal";

import SEO, {
  localBusiness,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SEO";

import { suburbData } from "@/lib/seoContent";
import { services, faqs, brand } from "@/lib/data";

export default function Suburb() {
  const { slug } = useParams();
  const s = suburbData[slug];

  if (!s) {
    return <Navigate to="/" replace />;
  }

  /*
   * -----------------------------------------------------
   * DEFAULT FAQS
   * Used by the existing suburb pages.
   * If a suburb has its own `faqs` array in seoContent.js,
   * those custom FAQs will be used instead.
   * -----------------------------------------------------
   */
  const defaultSuburbFaqs = [
    {
      q: `Does Apollo Builders service ${s.name}?`,
      a: `Yes — Apollo Builders provides renovations, extensions and new home builds throughout Melbourne's South-East, including ${s.name}. Contact us on ${brand.phone} or ${brand.email} for a no-obligation quote.`,
    },
    {
      q: `What types of projects suit homes in ${s.name}?`,
      a: `Based on the local housing stock, common projects in ${s.name} include ${
        s.renovations?.slice(0, 3).join(", ").toLowerCase() ||
        "new homes, renovations and extensions"
      }.`,
    },
    {
      q: `Are planning permits required in ${s.name}?`,
      a: `${
        s.overlays || ""
      } Homeowners should check their property planning report on VicPlan before committing to major works.`,
    },
    ...faqs.slice(0, 3),
  ];

  const suburbFaqs =
    Array.isArray(s.faqs) && s.faqs.length > 0
      ? s.faqs
      : defaultSuburbFaqs;

  /*
   * -----------------------------------------------------
   * SEO
   * New detailed pages can provide their own SEO values.
   * Old suburb pages automatically use existing fallbacks.
   * -----------------------------------------------------
   */
  const title =
    s.seoTitle ||
    `Home Builders ${s.name} — Renovations & New Builds · Apollo Builders`;

  const description =
    s.metaDescription ||
    `Apollo Builders provides renovations, extensions and new home builds in ${s.name} (${s.postcode}). ${s.council}. Fixed price quotes. Melbourne South-East specialists.`;

  const path = `/suburbs/${slug}/`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      localBusiness(),

      breadcrumbSchema([
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Areas We Service",
          path: "/suburbs/",
        },
        {
          name: s.name,
          path,
        },
      ]),

      faqSchema(suburbFaqs),
    ],
  };

  /*
   * -----------------------------------------------------
   * CONTENT HELPERS
   * These are used for the new detailed suburb pages.
   * -----------------------------------------------------
   */

  const renderParagraphs = (paragraphs = []) => {
    return paragraphs.map((paragraph, index) => (
      <p
        key={index}
        className={`text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.75] ${
          index > 0 ? "mt-6" : ""
        }`}
      >
        {paragraph}
      </p>
    ));
  };

  const renderBullets = (bullets = []) => {
    if (!bullets.length) return null;

    return (
      <ul className="mt-7 space-y-4">
        {bullets.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className="flex items-start gap-4 border-b border-[color:var(--hair)] pb-4 last:border-b-0"
          >
            <span className="text-[color:var(--gold)] mt-[2px]">—</span>

            <span className="text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.65]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    );
  };

  const renderSubsections = (subsections = []) => {
    if (!subsections.length) return null;

    return (
      <div className="mt-10 space-y-10">
        {subsections.map((subsection, index) => (
          <div key={`${subsection.title}-${index}`}>
            {subsection.title && (
              <h3 className="font-display text-[24px] md:text-[30px] tracking-[-0.02em] leading-[1.15] text-[color:var(--ink-black)]">
                {subsection.title}
              </h3>
            )}

            {subsection.paragraphs?.length > 0 && (
              <div className="mt-4">
                {renderParagraphs(subsection.paragraphs)}
              </div>
            )}

            {renderBullets(subsection.bullets || [])}
          </div>
        ))}
      </div>
    );
  };

  /*
   * =====================================================
   * PAGE
   * =====================================================
   */

  return (
    <div data-testid={`suburb-${slug}`}>
      <SEO
        title={title}
        description={description}
        path={path}
        jsonLd={jsonLd}
      />

      {/* =================================================
          HERO
      ================================================= */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)] flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" strokeWidth={2} />

          {s.council && <span>{s.council}</span>}

          {s.postcode && (
            <>
              <span>·</span>
              <span>
                {s.state ? `${s.state} ` : ""}
                {s.postcode}
              </span>
            </>
          )}
        </div>

        <h1 className="font-display text-[40px] md:text-[64px] lg:text-[80px] leading-[0.96] tracking-[-0.03em] text-[color:var(--ink-black)] mt-5 max-w-[18ch]">
          <MaskLines
            lines={[
              s.h1 || `Builders & renovations in ${s.name}.`,
            ]}
          />
        </h1>

        <div className="mt-8 max-w-3xl">
          <p className="text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.75]">
            {s.intro || s.profile}
          </p>

          {s.introParagraphs?.map((paragraph, index) => (
            <p
              key={index}
              className="mt-6 text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.75]"
            >
              {paragraph}
            </p>
          ))}

          {s.heroCta && (
            <div className="mt-8">
              <Link
                to={s.heroCta.link || "/contact-us/"}
                className="btn-navy"
              >
                {s.heroCta.label}
                <ArrowUpRight
                  className="h-4 w-4"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* =================================================
          DETAILED SEO PAGE
          Only shown if detailed: true
      ================================================= */}
      {s.detailed && Array.isArray(s.sections) && (
        <div>
          {s.sections.map((section, index) => {
            const isAlternate = index % 2 !== 0;

            return (
              <section
                key={`${section.title}-${index}`}
                className={
                  isAlternate
                    ? "bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-20 md:py-28"
                    : "py-20 md:py-28"
                }
              >
                <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14">
                  <Reveal className="md:col-span-4">
                    {section.eyebrow && (
                      <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                        {section.eyebrow}
                      </div>
                    )}

                    {section.title && (
                      <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
                        {section.title}
                      </h2>
                    )}
                  </Reveal>

                  <Reveal
                    className="md:col-span-8"
                    delay={0.05}
                  >
                    {renderParagraphs(section.paragraphs || [])}

                    {renderBullets(section.bullets || [])}

                    {renderSubsections(section.subsections || [])}

                    {section.note && (
                      <div className="mt-8 border-l-2 border-[color:var(--gold)] pl-5">
                        <p className="text-[color:var(--ink-black)] text-[15px] md:text-[16px] leading-[1.7] font-medium">
                          {section.note}
                        </p>
                      </div>
                    )}

                    {section.cta && (
                      <div className="mt-8">
                        <Link
                          to={section.cta.link || "/contact-us/"}
                          className="inline-flex items-center gap-2 text-[12px] tracking-[0.18em] uppercase text-[color:var(--gold-dark)] font-semibold"
                        >
                          {section.cta.label}

                          <ArrowUpRight
                            className="h-4 w-4"
                            strokeWidth={1.5}
                          />
                        </Link>
                      </div>
                    )}
                  </Reveal>
                </div>
              </section>
            );
          })}
        </div>
      )}

      {/* =================================================
          ORIGINAL SUBURB CONTENT
          Existing suburb pages continue using this.
      ================================================= */}
      {!s.detailed && (
        <>
          {/* Housing */}
          <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-20 md:pb-28 grid grid-cols-1 md:grid-cols-12 gap-10">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Housing in {s.name}
              </div>
            </Reveal>

            <Reveal
              className="md:col-span-8"
              delay={0.05}
            >
              <p className="text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.7]">
                {s.housing}
              </p>
            </Reveal>
          </section>

          {/* Planning */}
          <section className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-20 md:py-28">
            <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-4">
                <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                  Planning
                </div>

                <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
                  Zoning &amp; overlays
                </h2>
              </Reveal>

              <Reveal
                className="md:col-span-8"
                delay={0.06}
              >
                <p className="text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.7]">
                  {s.overlays}
                </p>

                {s.zone && (
                  <p className="mt-6 text-[color:var(--ink-soft)] text-[15px] leading-[1.7]">
                    <strong>Zone:</strong> {s.zone}
                  </p>
                )}
              </Reveal>
            </div>
          </section>

          {/* Renovations */}
          <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Renovation Opportunities
              </div>

              <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
                Common projects in {s.name}
              </h2>
            </Reveal>

            <Reveal
              className="md:col-span-8"
              delay={0.06}
            >
              {Array.isArray(s.renovations) && (
                <ul className="space-y-4">
                  {s.renovations.map((r) => (
                    <li
                      key={r}
                      className="flex items-baseline gap-4 border-b border-[color:var(--hair)] pb-4 last:border-b-0"
                    >
                      <span className="text-[color:var(--gold)]">
                        —
                      </span>

                      <span className="text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.55]">
                        {r}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {s.lifestyle && (
                <p className="mt-8 text-[color:var(--ink-soft)] leading-[1.7]">
                  {s.lifestyle}
                </p>
              )}
            </Reveal>
          </section>
        </>
      )}

      {/* =================================================
          FAQ
          Detailed suburb FAQs display visibly on the page.
      ================================================= */}
      {s.detailed && suburbFaqs.length > 0 && (
        <section className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
            <Reveal>
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Frequently Asked Questions
              </div>

              <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4 max-w-3xl">
                Building in {s.name}
              </h2>
            </Reveal>

            <div className="mt-10 border-t border-[color:var(--hair)]">
              {suburbFaqs.map((faq, index) => (
                <Reveal
                  key={`${faq.q}-${index}`}
                  delay={Math.min(index * 0.02, 0.12)}
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-7 border-b border-[color:var(--hair)]">
                    <h3 className="md:col-span-5 font-display text-[21px] md:text-[24px] leading-[1.25] text-[color:var(--ink-black)]">
                      {faq.q}
                    </h3>

                    <p className="md:col-span-7 text-[color:var(--ink)] text-[15px] md:text-[16px] leading-[1.75]">
                      {faq.a}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =================================================
          RELATED SERVICES
      ================================================= */}
      <section
        className={`border-y border-[color:var(--hair)] py-16 md:py-24 ${
          s.detailed ? "" : "bg-[color:var(--cream)]"
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
            Related Services
          </div>

          <h2 className="font-display text-[30px] md:text-[42px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
            {s.servicesHeading ||
              `Services offered in ${s.name}`}
          </h2>

          {s.servicesIntro && (
            <p className="mt-6 max-w-3xl text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.7]">
              {s.servicesIntro}
            </p>
          )}

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((sv) => (
              <li key={sv.slug}>
                <Link
                  to={`/${sv.slug}/`}
                  className="group block border border-[color:var(--hair)] p-6 bg-white hover:border-[color:var(--gold)] transition-colors h-full"
                >
                  <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                    {sv.number}
                  </div>

                  <h3 className="font-display text-xl md:text-[22px] tracking-[-0.01em] text-[color:var(--ink-black)] mt-3">
                    {sv.title}
                  </h3>

                  <p className="text-[color:var(--ink-soft)] text-[14px] mt-3">
                    {sv.tagline}
                  </p>

                  <div className="mt-5 text-[11px] tracking-[0.22em] uppercase text-[color:var(--gold-dark)] font-semibold inline-flex items-center gap-2">
                    Explore
                    <ArrowUpRight
                      className="h-3.5 w-3.5"
                      strokeWidth={2}
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* =================================================
          FINAL CTA
      ================================================= */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <Reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            {s.finalCta?.eyebrow && (
              <div className="tracking-eyebrow text-[color:var(--gold-dark)] mb-4">
                {s.finalCta.eyebrow}
              </div>
            )}

            <h2 className="font-display text-[30px] md:text-[46px] tracking-[-0.02em] text-[color:var(--ink-black)] leading-[1.1]">
              {s.finalCta?.heading ||
                `Planning a renovation or new build in ${s.name}?`}
            </h2>

            {s.finalCta?.text && (
              <p className="mt-5 text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.7] max-w-2xl">
                {s.finalCta.text}
              </p>
            )}
          </div>

          <Link
            to={s.finalCta?.link || "/contact-us/"}
            className="btn-navy shrink-0"
          >
            {s.finalCta?.label || "Get a Free Quote"}

            <ArrowUpRight
              className="h-4 w-4"
              strokeWidth={1.5}
            />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}