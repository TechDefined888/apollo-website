import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { MaskLines, Reveal } from "@/components/Reveal";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import ServicesInteractive from "@/components/ServicesInteractive";
import BlueprintProcess from "@/components/BlueprintProcess";
import { projects, whyUs, faqs, testimonials, trustPoints } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1];

/* ═════════════════════════════════════════════════════════════════
   HERO — cinematic real project photograph, no 3D overlay
   ═════════════════════════════════════════════════════════════════ */
function Hero() {
  const wrap = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.15]);

  // Subtle mouse parallax on background only (photo, not overlay)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const px = useTransform(sx, [-1, 1], [-10, 10]);
  const py = useTransform(sy, [-1, 1], [-6, 6]);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <section
      ref={wrap}
      onMouseMove={onMove}
      data-testid="hero-section"
      className="relative w-full overflow-hidden h-[calc(100svh_-_86px)] md:h-[calc(100svh_-_100px)] min-h-[560px] max-h-[880px] bg-[color:var(--ink-black)] text-[color:var(--paper)]"
      aria-labelledby="hero-heading"
    >
      <motion.div className="absolute inset-0" style={{ y, scale, x: px, translateY: py }}>
        <img
          src="https://apollobuilders.com.au/wp-content/uploads/2025/11/Berwick-New-Build-5-e1762576152191.jpg"
          alt="Berwick two-storey new home build by Apollo Builders — Melbourne South-East"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      {/* Single cinematic overlay — cleaner, deeper */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,26,0.45)_0%,rgba(10,15,26,0.15)_35%,rgba(10,15,26,0.85)_100%)]" />

      <div className="relative z-10 h-full mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 flex flex-col justify-end pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="tracking-eyebrow text-[color:var(--gold)]"
          data-testid="hero-eyebrow"
        >
          Apollo Builders — Melbourne South-East
        </motion.div>

        <h1
          id="hero-heading"
          data-testid="hero-heading"
          className="font-display text-[color:var(--paper)] mt-6 md:mt-8 font-normal text-[56px] sm:text-[80px] md:text-[104px] lg:text-[124px] leading-[0.94] tracking-[-0.035em] max-w-[16ch]"
        >
          <MaskLines lines={["Welcome to", "Apollo Builders."]} delay={0.2} />
        </h1>

        <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.0 }}
            className="max-w-md text-[color:var(--paper)]/92 text-base md:text-[17px] leading-[1.65]"
            data-testid="hero-sub"
          >
            Quality renovations and custom homes across Melbourne&rsquo;s South-East —
            delivered with fixed price quotes and clear communication.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.15 }}
            className="flex items-center gap-8"
          >
            <Link to="/contact" data-testid="hero-cta" className="btn-gold">
              Get a Free Quote <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <a
              href="#projects"
              className="hidden md:inline-flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase font-semibold text-[color:var(--paper)]/85 hover:text-[color:var(--gold)] transition-colors"
            >
              View Projects <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════════════════════════
   TRUST BAND — quiet, sits between hero and intro
   ═════════════════════════════════════════════════════════════════ */
function TrustBand() {
  return (
    <section
      data-testid="trust-band"
      aria-label="Apollo Builders — service standards"
      className="bg-[color:var(--paper)] border-b border-[color:var(--hair)]"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <ul className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[color:var(--hair)]">
          {trustPoints.map((t, i) => (
            <li
              key={t}
              className="py-8 md:py-10 px-5 md:px-8 first:pl-0 last:pr-0 flex items-baseline gap-4"
            >
              <span className="tracking-eyebrow text-[color:var(--gold-dark)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[color:var(--ink)] text-[14px] md:text-[15px]">
                {t}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════════════════════════
   INTRO — quiet editorial pitch
   ═════════════════════════════════════════════════════════════════ */
function Intro() {
  return (
    <section
      data-testid="intro-section"
      className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32 lg:py-40"
      aria-labelledby="intro-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
        <Reveal className="md:col-span-4">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">01 — Introduction</div>
        </Reveal>
        <Reveal className="md:col-span-8" delay={0.06}>
          <h2
            id="intro-heading"
            className="font-display text-[36px] md:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.025em] text-[color:var(--ink-black)] max-w-[18ch]"
          >
            Quality renovations &amp; custom homes across Melbourne&rsquo;s South-East.
          </h2>
          <p className="mt-10 max-w-2xl text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.7]">
            Apollo Builders specialises in high-quality renovations, extensions
            and custom home builds. From the initial consultation through to
            completion, we focus on quality workmanship, clear communication
            and delivering projects that stand the test of time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════════════════════════
   PROJECTS — editorial magazine layout
   ═════════════════════════════════════════════════════════════════ */
function Projects() {
  return (
    <section
      id="projects"
      data-testid="featured-projects"
      className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-24 md:py-32 lg:py-40"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end mb-16 md:mb-24">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">03 — Projects</div>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.06}>
            <h2
              id="projects-heading"
              className="font-display text-[36px] md:text-[52px] lg:text-[64px] leading-[1.05] tracking-[-0.025em] text-[color:var(--ink-black)]"
            >
              Recent Apollo Builders projects.
            </h2>
          </Reveal>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((p, i) => {
            const reverse = i % 2 === 1;
            const idx = String(i + 1).padStart(2, "0");
            return (
              <article
                key={p.slug}
                data-testid={`project-${p.slug}`}
                className="grid grid-cols-12 gap-6 md:gap-10 items-center"
              >
                <Reveal
                  y={40}
                  className={`col-span-12 md:col-span-8 ${
                    reverse ? "md:col-start-5 md:order-2" : ""
                  }`}
                >
                  <div className="frame aspect-[16/10]">
                    <img src={p.image} alt={p.imageAlt} loading="lazy" />
                  </div>
                </Reveal>
                <Reveal
                  y={20}
                  delay={0.08}
                  className={`col-span-12 md:col-span-4 ${
                    reverse ? "md:col-start-1 md:row-start-1 md:order-1" : ""
                  }`}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-[color:var(--gold)] text-3xl md:text-4xl">
                      {idx}
                    </span>
                    <span className="tracking-eyebrow text-[color:var(--gold-dark)]">
                      {p.suburb}
                    </span>
                  </div>
                  <h3 className="font-display text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.02em] text-[color:var(--ink-black)] mt-5">
                    {p.name}
                  </h3>
                  <p className="text-[color:var(--ink-soft)] mt-5 leading-[1.7] max-w-md">
                    {p.description}
                  </p>
                  <div className="mt-8 text-[11px] tracking-[0.22em] uppercase text-[color:var(--ink)]/70">
                    {p.type}
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

/* ═════════════════════════════════════════════════════════════════
   WHY US — numbered list
   ═════════════════════════════════════════════════════════════════ */
function Why() {
  return (
    <section
      data-testid="why-us"
      className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32 lg:py-40"
      aria-labelledby="why-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-4">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">04 — Why Apollo</div>
          <h2
            id="why-heading"
            className="font-display text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.025em] text-[color:var(--ink-black)] mt-4"
          >
            Why homeowners choose Apollo.
          </h2>
        </Reveal>
        <ul className="md:col-span-8 md:pl-10 mt-6 md:mt-0">
          {whyUs.map((line, i) => (
            <Reveal key={line} delay={i * 0.04}>
              <li className="grid grid-cols-12 items-baseline gap-4 py-7 border-b border-[color:var(--hair)] first:border-t">
                <span className="col-span-2 md:col-span-1 font-display text-[color:var(--gold)] text-xl md:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 md:col-span-11 font-display text-[color:var(--ink-black)] text-xl md:text-[24px] leading-[1.25] tracking-[-0.01em]">
                  {line}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════════════════════════
   TESTIMONIALS — restrained single-column editorial
   ═════════════════════════════════════════════════════════════════ */
function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="bg-[color:var(--paper)] border-t border-[color:var(--hair)] py-24 md:py-32 lg:py-40"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-24">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">06 — Homeowners</div>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.06}>
            <h2
              id="testimonials-heading"
              className="font-display text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.025em] text-[color:var(--ink-black)] max-w-[16ch]"
            >
              From the people we build for.
            </h2>
          </Reveal>
        </div>

        <ul className="max-w-[1000px] mx-auto">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.05}
              className="border-t border-[color:var(--hair)] last:border-b py-14 md:py-16"
              testId={`testimonial-${i}`}
            >
              <div className="grid grid-cols-12 gap-6 md:gap-8">
                <div className="col-span-12 md:col-span-3 tracking-eyebrow text-[color:var(--gold-dark)]">
                  {t.name}
                </div>
                <p className="col-span-12 md:col-span-9 font-display text-[color:var(--ink-black)] text-[22px] md:text-[28px] leading-[1.35] tracking-[-0.015em]">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════════════════════════
   FAQ — minimal accordion
   ═════════════════════════════════════════════════════════════════ */
function FAQ() {
  return (
    <section
      data-testid="faq-section"
      className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32 lg:py-40"
      aria-labelledby="faq-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-5">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">07 — Questions</div>
          <h2
            id="faq-heading"
            className="font-display text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.025em] text-[color:var(--ink-black)] mt-4"
          >
            Answers before you ask.
          </h2>
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
                <AccordionTrigger className="font-display text-left text-[20px] md:text-[24px] py-7 text-[color:var(--ink-black)] hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-[color:var(--ink-soft)] text-[15px] leading-[1.7] pb-8 max-w-2xl">
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

/* ═════════════════════════════════════════════════════════════════
   FINAL CTA
   ═════════════════════════════════════════════════════════════════ */
function CTA() {
  return (
    <section
      data-testid="final-cta"
      className="relative bg-[color:var(--ink-black)] text-[color:var(--paper)] overflow-hidden py-28 md:py-40 lg:py-48"
      aria-labelledby="cta-heading"
    >
      <div className="absolute inset-0 opacity-[0.18]">
        <img
          src="https://apollobuilders.com.au/wp-content/uploads/2025/11/Drouin-New-Build-10.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-transparent to-[#0A0F1A]" />
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
        <Reveal className="md:col-span-8">
          <div className="tracking-eyebrow text-[color:var(--gold)]">Enquire</div>
          <h2
            id="cta-heading"
            className="font-display text-[44px] md:text-[80px] lg:text-[104px] leading-[0.96] tracking-[-0.035em] font-normal mt-5 max-w-[18ch]"
          >
            Ready to start your renovation or new build?
          </h2>
          <p className="mt-8 max-w-md text-[color:var(--paper)]/85 text-[16px] md:text-[17px] leading-[1.65]">
            Speak with Apollo Builders about your project — expert advice, a
            realistic timeline and a no-obligation fixed price quote.
          </p>
        </Reveal>
        <Reveal className="md:col-span-4" delay={0.06}>
          <Link to="/contact" data-testid="final-cta-btn" className="btn-gold">
            Get a Free Quote <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════════════════════════
   HOME PAGE
   ═════════════════════════════════════════════════════════════════ */
export default function Home() {
  useEffect(() => {
    document.title = "Apollo Builders — Renovations & Custom Homes, Melbourne South-East";
  }, []);

  return (
    <div data-testid="home-page">
      <Hero />
      <TrustBand />
      <Intro />
      <ServicesInteractive />
      <Projects />
      <Why />
      <BlueprintProcess />
      <Testimonials />
      <FAQ />
      <CTA />
    </div>
  );
}
