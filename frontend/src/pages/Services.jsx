import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Minus } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import { services } from "@/lib/data";

export default function Services() {
  const { slug } = useParams();

  useEffect(() => {
    const active = services.find((s) => s.slug === slug);
    document.title = active
      ? `${active.title} — Melbourne South-East · Apollo Builders`
      : "Practice — Renovations, Extensions & New Builds · Apollo Builders";
  }, [slug]);

  return (
    <div data-testid="services-page">
      <section className="pt-40 md:pt-56 pb-16 md:pb-24 mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)]">The Practice</div>
        <h1 className="font-display text-[54px] md:text-[110px] lg:text-[140px] leading-[0.95] tracking-[-0.035em] text-[color:var(--ink-black)] mt-6 max-w-[16ch]">
          <MaskLines lines={["What we build,", "how we build it."]} />
        </h1>
        <p className="mt-10 max-w-2xl text-[color:var(--ink)] text-[17px] md:text-[19px] leading-[1.65]">
          Apollo Builders specialises in new home builds, major renovations and
          custom transformations that bring lasting value to Melbourne homeowners.
        </p>
      </section>

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 pb-24">
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
                      to="/contact"
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

      <section className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
        <Reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="font-display text-[32px] md:text-5xl tracking-[-0.02em] text-[color:var(--ink-black)] max-w-2xl leading-[1.05]">
            Not sure which service fits? We&rsquo;ll walk your site and advise honestly.
          </h2>
          <Link to="/contact" className="btn-gold on-light">
            Book a Consultation <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
