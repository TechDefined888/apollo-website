import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { brand, whyUs, suburbs } from "@/lib/data";

export default function About() {
  useEffect(() => {
    document.title = "About Apollo Builders — Melbourne South-East Building Studio";
  }, []);

  return (
    <div data-testid="about-page">
      {/* Header */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)]">About</div>
        <h1 className="font-display text-[48px] md:text-[92px] lg:text-[112px] leading-[0.98] tracking-[-0.03em] font-light text-[color:var(--navy)] mt-4 max-w-[16ch]">
          <MaskLines lines={["A building studio", "shaped by craft, not scale."]} />
        </h1>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
        <Reveal className="md:col-span-5">
          <div className="frame aspect-[3/4]">
            <img
              src="https://apollobuilders.com.au/wp-content/uploads/2025/11/Drouin-New-Build-10.jpg"
              alt="Apollo Builders — team-led custom home in Drouin, Melbourne"
            />
          </div>
        </Reveal>
        <Reveal className="md:col-span-6 md:col-start-7" delay={0.06}>
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">01 · What We Do</div>
          <h2 className="font-display text-[32px] md:text-[46px] leading-[1.1] tracking-[-0.02em] font-light text-[color:var(--navy)] mt-4">
            Homes that blend modern design, functionality and quiet craft.
          </h2>
          <p className="mt-6 text-[color:var(--ink)] text-lg font-light">
            At Apollo Builders, we specialise in creating homes that blend modern design, functionality and
            craftsmanship. From full home renovations to brand-new builds, our team delivers every project with
            precision, reliability and a personal touch.
          </p>
          <p className="mt-6 text-[color:var(--ink)] text-lg font-light">
            Based in Melbourne&rsquo;s South and South-Eastern suburbs, we focus on larger residential projects — where
            quality, planning and finish truly matter.
          </p>
        </Reveal>
      </section>

      {/* Mission */}
      <section className="bg-[color:var(--navy)] text-[color:var(--off-white)] py-24 md:py-36 border-y border-[color:var(--hair)]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold)]">02 · Our Mission</div>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em] font-light">
              Communication is the cornerstone of every successful project.
            </h2>
            <p className="mt-6 text-[color:var(--off-white)]/95 font-light text-lg max-w-2xl">
              From the first conversation to the final walkthrough, we keep you in the loop — ensuring your vision
              comes to life exactly as you imagined. Our team tackles each job with an unmatched work ethic,
              treating your home with the same care we&rsquo;d give our own.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Credentials */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">03 · Approach</div>
            <h2 className="font-display text-[32px] md:text-[46px] leading-[1.05] tracking-[-0.02em] font-light text-[color:var(--navy)] mt-4">
              Licensed, insured, and accountable.
            </h2>
          </Reveal>
          <div className="md:col-span-8">
            <ul>
              {whyUs.map((line, i) => (
                <Reveal key={line} delay={i * 0.04}>
                  <li className="grid grid-cols-12 items-baseline gap-4 py-7 border-b border-[color:var(--hair)] first:border-t">
                    <span className="col-span-2 md:col-span-1 font-display text-[color:var(--gold-dark)] text-xl font-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-10 md:col-span-11 font-display text-[color:var(--navy)] text-xl md:text-2xl font-light">
                      {line}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Marquee items={["VBA Registered", "Fixed Price", "Fully Insured", "Melbourne South-East", "Since 2015"]} />

      {/* Service Area */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-36">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-10">
          <Reveal className="md:col-span-6">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">04 · Service Area</div>
            <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] font-light tracking-[-0.02em] text-[color:var(--navy)] mt-4">
              Building across Melbourne&rsquo;s South-East.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6" delay={0.06}>
            <p className="text-[color:var(--ink-soft)] md:text-right font-light text-lg">
              We service homeowners throughout Bayside, Bentleigh, Brighton, Clayton, Glen Waverley, Hampton,
              Mentone and surrounding suburbs.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 border-t border-b border-[color:var(--hair)] py-8">
            {suburbs.map((s) => (
              <li key={s} className="font-display text-lg md:text-xl text-[color:var(--navy)] font-light">
                — {s}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-24 md:pb-36">
        <Reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="font-display text-[32px] md:text-5xl font-light tracking-[-0.02em] text-[color:var(--navy)]">
            Available every step of the way<br />with your construction project.
          </h2>
          <Link to="/contact" data-testid="about-cta" className="btn-navy">
            Get a Free Estimate <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
