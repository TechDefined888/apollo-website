import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, Minus } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { services } from "@/lib/data";

export default function Services() {
  const { slug } = useParams();

  useEffect(() => {
    const active = services.find((s) => s.slug === slug);
    document.title = active
      ? `${active.title} — Melbourne South-East · Apollo Builders`
      : "Services — Renovations, Extensions & New Builds · Apollo Builders";
  }, [slug]);

  return (
    <div data-testid="services-page">
      {/* Header */}
      <section className="pt-32 md:pt-44 pb-14 md:pb-20 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--navy)]/70">Services</div>
        <h1 className="font-display text-[48px] md:text-[92px] lg:text-[108px] leading-[0.98] tracking-[-0.03em] font-light text-[color:var(--navy)] mt-4 max-w-[16ch]">
          <MaskLines lines={["What we build,", "how we build it."]} />
        </h1>
        <p className="mt-8 max-w-2xl text-[color:var(--ink)]/75 text-lg font-light">
          Apollo Builders specialises in new home builds, major renovations and custom transformations that bring
          lasting value to Melbourne homeowners.
        </p>
      </section>

      {/* Services list — alternating layout with clipped frames */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-20">
        <div className="border-t border-[color:var(--hair)]">
          {services.map((s, i) => {
            const active = slug === s.slug;
            return (
              <article
                key={s.slug}
                id={s.slug}
                data-testid={`service-${s.slug}`}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14 py-16 md:py-24 border-b border-[color:var(--hair)] ${
                  active ? "bg-[color:var(--warm-grey)]/40 -mx-6 md:-mx-10 lg:-mx-14 px-6 md:px-10 lg:px-14" : ""
                }`}
              >
                <Reveal className={`md:col-span-6 ${i % 2 ? "md:order-2" : ""}`} y={30}>
                  <div className="frame aspect-[16/11]">
                    <img src={s.image} alt={s.alt} />
                  </div>
                </Reveal>
                <Reveal className={`md:col-span-6 ${i % 2 ? "md:order-1" : ""}`} y={20} delay={0.05}>
                  <div className="tracking-eyebrow text-[color:var(--navy)]/60">
                    {String(i + 1).padStart(2, "0")} · Service
                  </div>
                  <h2 className="font-display text-[32px] md:text-[54px] leading-[1.03] tracking-[-0.02em] font-light text-[color:var(--navy)] mt-3">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-[color:var(--ink)]/75 font-light text-lg max-w-lg">{s.tagline}</p>
                  <p className="mt-4 text-[color:var(--ink)]/75 font-light">{s.body}</p>

                  <ul className="mt-8 space-y-3">
                    {s.scope.map((item) => (
                      <li key={item} className="flex items-baseline gap-3 text-[color:var(--ink)] font-light">
                        <Minus className="h-3 w-3 mt-2 text-[color:var(--navy)]/50" strokeWidth={2} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-[color:var(--hair)]">
                    <div className="tracking-eyebrow text-[color:var(--navy)]/50">Search Focus</div>
                    <p className="mt-2 text-[13px] text-[color:var(--ink)]/60 font-light">{s.keywords}</p>
                  </div>

                  <div className="mt-8">
                    <Link to="/contact" data-testid={`service-cta-${s.slug}`} className="btn-navy">
                      Quote this {s.title.split(" ")[0]} <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </Link>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      <Marquee items={["Fixed Price Quotes", "VBA Registered", "Renovations", "New Builds", "Melbourne South-East"]} />

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-36">
        <Reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="font-display text-[32px] md:text-5xl font-light tracking-[-0.02em] text-[color:var(--navy)] max-w-2xl">
            Not sure which service fits? We&rsquo;ll walk your site and advise honestly.
          </h2>
          <Link to="/contact" className="btn-navy">
            Book a Consultation <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
