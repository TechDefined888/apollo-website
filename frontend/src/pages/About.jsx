import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, MaskLines } from "@/components/Reveal";
import { whyUs, suburbs, projects } from "@/lib/data";
import SEO, { localBusiness, breadcrumbSchema } from "@/components/SEO";

export default function About() {
  return (
    <div data-testid="about-page">
      <SEO
        title="About Apollo Builders | Melbourne South-East Renovation Builders"
        description="Learn about Apollo Builders, a Melbourne South-East building team delivering renovations, extensions, kitchens, bathrooms and custom home projects with care."
        path="/about-us/"
        jsonLd={{ "@context": "https://schema.org", "@graph": [localBusiness(), breadcrumbSchema([{name:"Home",path:"/"},{name:"About",path:"/about-us/"}])] }}
      />
      {/* Editorial header + hero image */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-24 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)]">About</div>
        <h1 className="font-display text-[40px] md:text-[64px] lg:text-[80px] leading-[0.96] tracking-[-0.03em] text-[color:var(--ink-black)] mt-6 max-w-[16ch]">
          <MaskLines lines={["About Apollo Builders."]} />
        </h1>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32">
        <Reveal>
          <div className="frame aspect-[16/9] md:aspect-[21/9]">
            <img
              src="/images/apollo/Drouin-New-Build.jpg"
              alt="Apollo Builders — knockdown and rebuild specialist project in Drouin"
            />
          </div>
        </Reveal>
      </section>

      {/* What we do */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-32 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-4">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">What we do</div>
        </Reveal>
        <Reveal className="md:col-span-8" delay={0.06}>
          <h2 className="font-display text-[36px] md:text-[58px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)]">
            Homes that blend modern design, functionality and craft.
          </h2>
          <div className="mt-8 max-w-2xl text-[color:var(--ink)] text-[17px] md:text-[19px] leading-[1.65]">
            <p>
              At Apollo Builders, we specialise in creating homes that blend
              modern design, functionality and craftsmanship. From full home
              renovations to brand-new builds, our team delivers every project
              with precision, reliability and a personal touch.
            </p>
            <p className="mt-6">
              Based in Melbourne&rsquo;s South and South-Eastern suburbs, we focus on
              larger residential projects — where quality, planning and finish
              truly matter.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Mission — dark section */}
      <section className="bg-[color:var(--ink-black)] text-[color:var(--paper)] py-28 md:py-40">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold)]">Our Mission</div>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[36px] md:text-[58px] leading-[1.05] tracking-[-0.02em]">
              Communication is the cornerstone of every successful project.
            </h2>
            <p className="mt-8 text-[color:var(--paper)]/85 text-[17px] md:text-[19px] leading-[1.65] max-w-2xl">
              From the first conversation to the final walkthrough, we keep you
              in the loop — ensuring your vision comes to life exactly as you
              imagined. Our team tackles each job with an unmatched work ethic,
              treating your home with the same care we&rsquo;d give our own.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-28 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Approach</div>
            <h2 className="font-display text-[36px] md:text-[50px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
              How we work.
            </h2>
          </Reveal>
          <div className="md:col-span-8">
            <ul>
              {whyUs.map((line, i) => (
                <Reveal key={line} delay={i * 0.04}>
                  <li className="grid grid-cols-12 items-baseline gap-4 py-7 border-b border-[color:var(--hair)] first:border-t">
                    <span className="col-span-2 md:col-span-1 font-display text-[color:var(--gold)] text-xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="col-span-10 md:col-span-11 font-display text-[color:var(--ink-black)] text-xl md:text-2xl leading-[1.2]">
                      {line}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-28 md:pb-40">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-10">
          <Reveal className="md:col-span-6">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Service Area</div>
            <h2 className="font-display text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
              Building across Melbourne&rsquo;s South-East.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6" delay={0.06}>
            <p className="text-[color:var(--ink-soft)] md:text-right max-w-md md:ml-auto text-[17px]">
              We service homeowners throughout Bayside, Bentleigh, Brighton,
              Clayton, Glen Waverley, Hampton, Mentone and surrounding suburbs.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-6 border-t border-b border-[color:var(--hair)] py-8">
            {suburbs.map((s) => (
              <li key={s} className="font-display text-lg md:text-xl text-[color:var(--ink-black)]">
                — {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-14 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h3 className="font-display text-[28px] md:text-[42px] tracking-[-0.02em] text-[color:var(--ink-black)] max-w-2xl leading-[1.1]">
            Available every step of the way with your construction project.
          </h3>
          <Link to="/contact-us" data-testid="about-cta" className="btn-navy">
            Get a Free Estimate <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
