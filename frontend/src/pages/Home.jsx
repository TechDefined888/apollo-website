import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { MaskLines, Reveal } from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  trustPoints,
  projects,
  gallery,
  processSteps,
  whyUs,
  faqs,
  testimonials,
  brand,
} from "@/lib/data";

const ease = [0.16, 1, 0.3, 1];

/* ── HERO ──────────────────────────────────────────────────────────── */
function Hero() {
  const wrap = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.14]);

  return (
    <section
      ref={wrap}
      data-testid="hero-section"
      className="relative w-full overflow-hidden h-[62svh] md:h-[58vh] lg:h-[55vh] min-h-[440px]"
    >
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src="https://apollobuilders.com.au/wp-content/uploads/2025/11/drouin-new-build-3.jpg"
          alt="Drouin new home build — custom family home by Apollo Builders, Melbourne South-East"
          className="w-full h-full object-cover"
        />
      </motion.div>
      {/* Navy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/70 via-[#0A192F]/40 to-[#0A192F]/60" />
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,transparent,rgba(10,25,47,0.35))]" />

      <div className="relative z-10 h-full mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 flex flex-col justify-end pb-14 md:pb-20">
        <motion.div
          className="tracking-eyebrow text-[color:var(--off-white)]/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          data-testid="hero-eyebrow"
        >
          Melbourne · South-East · Since 2015
        </motion.div>

        <h1
          data-testid="hero-heading"
          className="font-display text-[color:var(--off-white)] text-[44px] sm:text-[64px] md:text-[84px] lg:text-[100px] leading-[0.98] tracking-[-0.03em] font-light mt-5 max-w-[16ch]"
        >
          <MaskLines lines={["Welcome to", "Apollo Builders."]} delay={0.2} />
        </h1>

        <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.9 }}
            className="max-w-md text-[color:var(--off-white)]/85 text-[15px] md:text-base font-light"
            data-testid="hero-sub"
          >
            Custom homes, full renovations and extensions built with care across Melbourne&rsquo;s South-East.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.05 }}
          >
            <Link to="/contact" data-testid="hero-cta" className="btn-ghost-light">
              Get a Free Quote <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ── INTRO + INLINE TRUST POINTS ──────────────────────────────────── */
function Intro() {
  return (
    <section data-testid="intro-section" className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pt-24 md:pt-36 pb-16 md:pb-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-4">
          <div className="tracking-eyebrow text-[color:var(--navy)]/70">01 · Studio</div>
        </Reveal>
        <Reveal className="md:col-span-8" delay={0.06}>
          <h2 className="font-display text-[36px] md:text-[54px] lg:text-[62px] leading-[1.05] tracking-[-0.02em] font-light text-[color:var(--navy)] max-w-[22ch]">
            Quality renovations &amp; custom homes across Melbourne&rsquo;s South-East.
          </h2>
          <p className="mt-8 max-w-2xl text-[color:var(--ink)]/80 text-lg font-light">
            Apollo Builders specialises in high-quality renovations, extensions and custom home builds. From the
            initial consultation through to completion, we focus on quality workmanship, clear communication and
            projects that stand the test of time.
          </p>
        </Reveal>
      </div>

      {/* inline trust row */}
      <Reveal delay={0.1} className="mt-16 md:mt-24">
        <div className="hair" />
        <ul
          data-testid="trust-points-row"
          className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[color:var(--hair)]"
        >
          {trustPoints.map((t, i) => (
            <li
              key={t}
              data-testid={`trust-${i}`}
              className="py-6 md:py-8 px-4 md:px-8 first:pl-0 last:pr-0 flex items-baseline gap-4"
            >
              <span className="tracking-eyebrow text-[color:var(--navy)]/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[color:var(--ink)] text-[15px] md:text-[16px] font-normal">{t}</span>
            </li>
          ))}
        </ul>
        <div className="hair" />
      </Reveal>
    </section>
  );
}

/* ── BEFORE & AFTER GALLERY ───────────────────────────────────────── */
function Gallery() {
  return (
    <section data-testid="gallery-section" className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-14">
        <Reveal className="md:col-span-6">
          <div className="tracking-eyebrow text-[color:var(--navy)]/70">02 · Selected Work</div>
          <h2 className="font-display text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] font-light text-[color:var(--navy)] mt-4">
            Before &amp; after,<br /> quietly transformative.
          </h2>
        </Reveal>
        <Reveal className="md:col-span-6 md:pl-10" delay={0.08}>
          <p className="text-[color:var(--ink)]/75 text-lg font-light max-w-md ml-auto">
            A curated set of frames from recent projects — kitchens, bathrooms, full renovations and new builds
            across Bentleigh, Drouin, Berwick and beyond.
          </p>
        </Reveal>
      </div>

      {/* Asymmetric bento grid */}
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <Reveal className="col-span-12 md:col-span-7 aspect-[4/3]" y={40}>
          <div className="frame h-full">
            <img src={gallery[0].src} alt={gallery[0].alt} />
          </div>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-5 aspect-[3/4]" y={40} delay={0.05}>
          <div className="frame h-full">
            <img src={gallery[3].src} alt={gallery[3].alt} />
          </div>
        </Reveal>
        <Reveal className="col-span-6 md:col-span-4 aspect-[3/4]" y={40}>
          <div className="frame h-full">
            <img src={gallery[4].src} alt={gallery[4].alt} />
          </div>
        </Reveal>
        <Reveal className="col-span-6 md:col-span-5 aspect-[16/11]" y={40} delay={0.05}>
          <div className="frame h-full">
            <img src={gallery[1].src} alt={gallery[1].alt} />
          </div>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-3 aspect-[3/4] md:aspect-[3/4]" y={40} delay={0.1}>
          <div className="frame h-full">
            <img src={gallery[2].src} alt={gallery[2].alt} />
          </div>
        </Reveal>
        <Reveal className="col-span-6 md:col-span-5 aspect-[16/10]" y={40}>
          <div className="frame h-full">
            <img src={gallery[6].src} alt={gallery[6].alt} />
          </div>
        </Reveal>
        <Reveal className="col-span-6 md:col-span-4 aspect-[3/4]" y={40} delay={0.05}>
          <div className="frame h-full">
            <img src={gallery[7].src} alt={gallery[7].alt} />
          </div>
        </Reveal>
        <Reveal className="col-span-12 md:col-span-3 aspect-[3/4]" y={40} delay={0.1}>
          <div className="frame h-full">
            <img src={gallery[5].src} alt={gallery[5].alt} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── FEATURED PROJECTS ─────────────────────────────────────────────── */
function Featured() {
  return (
    <section
      data-testid="featured-projects"
      className="bg-[color:var(--warm-grey)]/30 border-y border-[color:var(--hair)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-24">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--navy)]/70">03 · Projects</div>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] font-light text-[color:var(--navy)]">
              We turn old houses<br />into new homes.
            </h2>
          </Reveal>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={p.slug}
                data-testid={`project-${p.slug}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end"
              >
                <Reveal
                  className={`md:col-span-8 ${reverse ? "md:order-2 md:col-start-5" : ""}`}
                  y={40}
                >
                  <div className="frame aspect-[16/10]">
                    <img src={p.image} alt={p.alt} />
                  </div>
                </Reveal>
                <Reveal
                  className={`md:col-span-4 ${reverse ? "md:order-1 md:col-start-1 md:row-start-1" : ""}`}
                  y={20}
                  delay={0.08}
                >
                  <div className="tracking-eyebrow text-[color:var(--navy)]/60">
                    Project {String(i + 1).padStart(2, "0")} · {p.suburb}
                  </div>
                  <h3 className="font-display text-[32px] md:text-[42px] leading-[1.05] font-light tracking-[-0.02em] text-[color:var(--navy)] mt-3">
                    {p.name}
                  </h3>
                  <p className="text-[color:var(--ink)]/75 mt-4 text-[15px] md:text-base font-light">
                    {p.description}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-[12px] tracking-[0.18em] uppercase text-[color:var(--navy)]/70">
                    <span>{p.type}</span>
                    <span>·</span>
                    <span>{p.year}</span>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── MANIFESTO — WHY US ─────────────────────────────────────────────── */
function Manifesto() {
  return (
    <section data-testid="why-us" className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-28 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-4">
          <div className="tracking-eyebrow text-[color:var(--navy)]/70">04 · Why Apollo</div>
          <h2 className="font-display text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.02em] font-light text-[color:var(--navy)] mt-4">
            Six reasons the right builder matters.
          </h2>
          <p className="mt-6 text-[color:var(--ink)]/75 font-light text-lg max-w-sm">
            Choosing the right builder is one of the most important decisions you&rsquo;ll make. We combine
            quality workmanship, transparent communication and reliable delivery on every project.
          </p>
        </Reveal>

        <div className="md:col-span-8 md:pl-10">
          <ul>
            {whyUs.map((line, i) => (
              <Reveal key={line} delay={i * 0.05} y={20}>
                <li className="grid grid-cols-12 items-baseline gap-4 py-8 border-b border-[color:var(--hair)] first:border-t">
                  <span className="col-span-2 md:col-span-1 font-display text-[color:var(--navy)]/60 text-2xl font-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-10 md:col-span-11 font-display text-[color:var(--navy)] text-2xl md:text-[30px] font-light tracking-[-0.01em]">
                    {line}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ── PROCESS TIMELINE (vertical, hairline) ─────────────────────────── */
function Process() {
  return (
    <section
      data-testid="process-section"
      className="relative bg-[color:var(--navy)] text-[color:var(--off-white)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--off-white)]/60">05 · Process</div>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.02em] font-light">
              A five-stage rhythm,<br />from brief to keys.
            </h2>
          </Reveal>
        </div>

        <ol className="relative">
          <div className="absolute left-[10px] md:left-1/2 top-0 bottom-0 w-px bg-white/15" aria-hidden />
          {processSteps.map((s, i) => (
            <Reveal
              key={s.n}
              className={`relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 py-10 md:py-14 items-start ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
              delay={i * 0.05}
            >
              <div className={`pl-8 md:pl-0 ${i % 2 === 1 ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                <div className="tracking-eyebrow text-[color:var(--off-white)]/50">Stage {s.n}</div>
                <h3 className="font-display text-3xl md:text-4xl mt-2 font-light tracking-[-0.02em]">
                  {s.title}
                </h3>
              </div>
              <div className={`pl-8 md:pl-16 ${i % 2 === 1 ? "md:pr-16 md:pl-0 md:text-right" : ""}`}>
                <p className="text-[color:var(--off-white)]/75 max-w-md font-light leading-relaxed">
                  {s.body}
                </p>
              </div>
              <span
                className="absolute left-[3px] md:left-1/2 md:-translate-x-1/2 top-12 md:top-14 w-3.5 h-3.5 border border-white/50 bg-[color:var(--navy)]"
                aria-hidden
              />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── FAQ ─────────────────────────────────────────────────────────────── */
function FAQ() {
  return (
    <section data-testid="faq-section" className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-28 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-5">
          <div className="tracking-eyebrow text-[color:var(--navy)]/70">06 · FAQ</div>
          <h2 className="font-display text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.02em] font-light text-[color:var(--navy)] mt-4">
            Answers before you ask.
          </h2>
          <p className="mt-6 text-[color:var(--ink)]/75 font-light max-w-sm">
            Timelines, insurance, fixed-price contracts — the practical questions homeowners bring to us most.
          </p>
        </Reveal>

        <div className="md:col-span-7 md:pl-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="border-b border-[color:var(--hair)] first:border-t"
              >
                <AccordionTrigger className="font-display text-left text-xl md:text-2xl font-light py-6 text-[color:var(--navy)] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[color:var(--ink)]/75 text-[15px] leading-relaxed pb-8 font-light max-w-2xl">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ── TESTIMONIALS ─────────────────────────────────────────────────── */
function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="bg-[color:var(--warm-grey)]/40 border-y border-[color:var(--hair)] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <Reveal>
          <div className="tracking-eyebrow text-[color:var(--navy)]/70">07 · Homeowners</div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.05}
              className="border-t border-[color:var(--hair)] pt-10"
              testId={`testimonial-${i}`}
            >
              <span className="font-display text-6xl leading-none text-[color:var(--navy)]/40">“</span>
              <p className="font-display text-[color:var(--navy)] text-2xl md:text-[28px] font-light leading-[1.35] tracking-[-0.01em] mt-2 max-w-xl">
                {t.quote}
              </p>
              <div className="mt-8 flex items-baseline justify-between">
                <div className="tracking-eyebrow text-[color:var(--navy)]/70">— {t.name}</div>
                <div className="text-[12px] uppercase tracking-[0.15em] text-[color:var(--ink)]/50">{t.project}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA BAND ────────────────────────────────────────────────── */
function CTABand() {
  return (
    <section
      data-testid="final-cta"
      className="bg-[color:var(--navy)] text-[color:var(--off-white)] py-24 md:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
        <Reveal className="md:col-span-8">
          <div className="tracking-eyebrow text-[color:var(--off-white)]/60">Get In Touch</div>
          <h2 className="font-display text-[42px] md:text-[72px] lg:text-[88px] leading-[1] tracking-[-0.03em] font-light mt-4 max-w-[16ch]">
            Ready to start your renovation or new build?
          </h2>
          <p className="mt-6 max-w-md text-[color:var(--off-white)]/75 font-light">
            Speak with Apollo Builders about your project — expert advice, realistic timelines and a
            no-obligation fixed price quote.
          </p>
        </Reveal>
        <Reveal className="md:col-span-4" delay={0.05}>
          <Link to="/contact" data-testid="final-cta-btn" className="btn-ghost-light">
            Get a Free Quote <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── PAGE ─────────────────────────────────────────────────────────── */
export default function Home() {
  useEffect(() => {
    document.title = "Apollo Builders — Renovations & Custom Homes, Melbourne South-East";
  }, []);

  return (
    <div data-testid="home-page">
      <Hero />
      <Intro />
      <Gallery />
      <Featured />
      <Manifesto />
      <Process />
      <Marquee items={["Custom Homes", "Renovations", "Extensions", "Kitchens", "Bathroom Fitouts", "Melbourne South-East"]} />
      <FAQ />
      <Testimonials />
      <CTABand />
    </div>
  );
}
