import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import SEO, { localBusiness, breadcrumbSchema, faqSchema } from "@/components/SEO";
import { suburbData } from "@/lib/seoContent";
import { services, faqs, brand } from "@/lib/data";

export default function Suburb() {
  const { slug } = useParams();
  const s = suburbData[slug];
  if (!s) return <Navigate to="/" replace />;

  const suburbFaqs = [
    { q: `Does Apollo Builders service ${s.name}?`, a: `Yes — Apollo Builders provides renovations, extensions and new home builds throughout Melbourne's South-East, including ${s.name}. Contact us on ${brand.phone} or ${brand.email} for a no-obligation quote.` },
    { q: `What types of projects suit homes in ${s.name}?`, a: `Based on the local housing stock, common projects in ${s.name} include ${s.renovations.slice(0, 3).join(", ").toLowerCase()}.` },
    { q: `Are planning permits required in ${s.name}?`, a: `${s.overlays} Homeowners should check their property planning report on VicPlan before committing to major works.` },
    ...faqs.slice(0, 3),
  ];

  const title = `Home Builders ${s.name} — Renovations & New Builds · Apollo Builders`;
  const description = `Apollo Builders provides renovations, extensions and new home builds in ${s.name} (${s.postcode}). ${s.council}. Fixed price quotes. Melbourne South-East specialists.`;
  const path = `/suburbs/${slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      localBusiness(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Areas We Service", path: "/suburbs" },
        { name: s.name, path },
      ]),
      faqSchema(suburbFaqs),
    ],
  };

  return (
    <div data-testid={`suburb-${slug}`}>
      <SEO title={title} description={description} path={path} jsonLd={jsonLd} />

      <section className="pt-16 md:pt-24 pb-16 md:pb-20 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)] flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5" strokeWidth={2} /> {s.council} · {s.postcode}
        </div>
        <h1 className="font-display text-[40px] md:text-[64px] lg:text-[80px] leading-[0.96] tracking-[-0.03em] text-[color:var(--ink-black)] mt-5 max-w-[18ch]">
          <MaskLines lines={[`Builders & renovations in ${s.name}.`]} />
        </h1>
        <p className="mt-8 max-w-2xl text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.7]">
          {s.profile}
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-20 md:pb-28 grid grid-cols-1 md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-4">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Housing in {s.name}</div>
        </Reveal>
        <Reveal className="md:col-span-8" delay={0.05}>
          <p className="text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.7]">{s.housing}</p>
        </Reveal>
      </section>

      <section className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Planning</div>
            <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
              Zoning &amp; overlays
            </h2>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.06}>
            <p className="text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.7]">{s.overlays}</p>
            <p className="mt-6 text-[color:var(--ink-soft)] text-[15px] leading-[1.7]">
              <strong>Zone:</strong> {s.zone}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-4">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Renovation Opportunities</div>
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
            Common projects in {s.name}
          </h2>
        </Reveal>
        <Reveal className="md:col-span-8" delay={0.06}>
          <ul className="space-y-4">
            {s.renovations.map((r) => (
              <li key={r} className="flex items-baseline gap-4 border-b border-[color:var(--hair)] pb-4 last:border-b-0">
                <span className="text-[color:var(--gold)]">—</span>
                <span className="text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.55]">{r}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[color:var(--ink-soft)] leading-[1.7]">{s.lifestyle}</p>
        </Reveal>
      </section>

      {/* Related services internal linking */}
      <section className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-16 md:py-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Related Services</div>
          <h2 className="font-display text-[30px] md:text-[42px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
            Services offered in {s.name}
          </h2>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((sv) => (
              <li key={sv.slug}>
                <Link to={`/${sv.slug}`} className="group block border border-[color:var(--hair)] p-6 bg-white hover:border-[color:var(--gold)] transition-colors">
                  <div className="tracking-eyebrow text-[color:var(--gold-dark)]">{sv.number}</div>
                  <h3 className="font-display text-xl md:text-[22px] tracking-[-0.01em] text-[color:var(--ink-black)] mt-3">{sv.title}</h3>
                  <p className="text-[color:var(--ink-soft)] text-[14px] mt-3">{sv.tagline}</p>
                  <div className="mt-5 text-[11px] tracking-[0.22em] uppercase text-[color:var(--gold-dark)] font-semibold inline-flex items-center gap-2">
                    Explore <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <Reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="font-display text-[30px] md:text-[46px] tracking-[-0.02em] text-[color:var(--ink-black)] max-w-2xl leading-[1.1]">
            Planning a renovation or new build in {s.name}?
          </h2>
          <Link to="/contact-us" className="btn-navy">
            Get a Free Quote <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
