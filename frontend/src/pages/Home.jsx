import { useEffect, useRef, useState, lazy, Suspense } from "react";
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

const Scene3D = lazy(() => import("@/components/Scene3D"));
const ease = [0.16, 1, 0.3, 1];

/* ═════════════════════════════════════════════════════════════════
   HERO — cinematic, real project photography + floating 3D volume
   ═════════════════════════════════════════════════════════════════ */
function Hero() {
  const wrap = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrap,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.02, 1.15]);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const tx = useTransform(sx, [-1, 1], [-14, 14]);
  const ty = useTransform(sy, [-1, 1], [-10, 10]);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  const [enable3D, setEnable3D] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px) and (prefers-reduced-motion: no-preference)");
    setEnable3D(mq.matches);
  }, []);

  return (
    <section
      ref={wrap}
      onMouseMove={onMove}
      data-testid="hero-section"
      className="relative w-full overflow-hidden h-[100svh] min-h-[640px] bg-[color:var(--ink-black)] text-[color:var(--paper)]"
      aria-labelledby="hero-heading"
    >
      {/* Background — cinematic real project photograph */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img
          src="https://apollobuilders.com.au/wp-content/uploads/2025/11/Berwick-New-Build-5-e1762576152191.jpg"
          alt="Berwick two-storey new home build by Apollo Builders — Melbourne South-East"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </motion.div>
      {/* Cinematic overlay — deep bottom, softer top */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,26,0.55)_0%,rgba(10,15,26,0.35)_35%,rgba(10,15,26,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,15,26,0.55)_0%,rgba(10,15,26,0.05)_50%,rgba(10,15,26,0.55)_100%)]" />

      {/* 3D floating architectural volume (right half, desktop) */}
      {enable3D && (
        <Suspense fallback={null}>
          <motion.div
            style={{ x: tx, y: ty }}
            className="absolute right-0 top-0 h-full w-1/2 hidden lg:block will-change-transform"
          >
            <Scene3D className="w-full h-full" />
          </motion.div>
        </Suspense>
      )}

      {/* Content */}
      <div className="relative z-10 h-full mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 flex flex-col justify-end pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease, delay: 0.15 }}
          className="tracking-eyebrow text-[color:var(--gold)]"
          data-testid="hero-eyebrow"
        >
          Apollo Builders · Melbourne South-East
        </motion.div>

        <h1
          id="hero-heading"
          data-testid="hero-heading"
          className="font-display text-[color:var(--paper)] mt-6 font-normal text-[54px] sm:text-[80px] md:text-[110px] lg:text-[132px] leading-[0.92] tracking-[-0.035em] max-w-[16ch]"
        >
          <MaskLines lines={["We build", "exceptional", <span key="k" className="italic text-[color:var(--gold)]">homes.</span>]} delay={0.2} />
        </h1>

        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.1 }}
            className="max-w-md text-[color:var(--paper)]/90 text-base md:text-[17px] leading-relaxed"
            data-testid="hero-sub"
          >
            Bathroom renovations, home extensions and complete new builds —
            delivered with quality workmanship and clear communication across
            Melbourne&rsquo;s South-East.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 1.25 }}
            className="flex items-center gap-6"
          >
            <Link to="/contact" data-testid="hero-cta" className="btn-gold">
              Get a Free Quote <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <a
              href="#projects"
              className="hidden md:inline-flex items-center gap-3 text-[12px] tracking-[0.22em] uppercase text-[color:var(--paper)]/85 hover:text-[color:var(--gold)] transition-colors"
            >
              View Projects <ArrowDown className="h-3.5 w-3.5" strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom hairline ticker */}
      <div className="absolute bottom-0 inset-x-0 border-t border-[color:var(--paper)]/15">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 grid grid-cols-2 md:grid-cols-4 divide-x divide-[color:var(--paper)]/15">
          {trustPoints.map((t, i) => (
            <div key={t} className="py-5 md:py-6 px-4 md:px-6 first:pl-0 flex items-baseline gap-4">
              <span className="tracking-eyebrow text-[color:var(--gold)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[color:var(--paper)]/95 text-[13px] md:text-[14px]">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════════════════════════
   MANIFESTO — quiet editorial intro
   ═════════════════════════════════════════════════════════════════ */
function Manifesto() {
  return (
    <section
      data-testid="intro-section"
      className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 py-32 md:py-44"
      aria-labelledby="manifesto-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
        <Reveal className="md:col-span-4">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">A Studio Note</div>
        </Reveal>
        <Reveal className="md:col-span-8" delay={0.06}>
          <h2
            id="manifesto-heading"
            className="font-display text-[42px] md:text-[68px] lg:text-[84px] leading-[1.02] tracking-[-0.025em] text-[color:var(--ink-black)] max-w-[16ch]"
          >
            Quality renovations &amp; custom homes across Melbourne&rsquo;s South-East.
          </h2>
          <div className="mt-10 max-w-2xl text-[color:var(--ink)] text-[17px] md:text-[19px] leading-[1.6]">
            <p>
              Apollo Builders specialises in high-quality renovations, extensions
              and custom home builds. From the initial consultation through to
              completion, we focus on quality workmanship, clear communication
              and delivering projects that stand the test of time.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ═════════════════════════════════════════════════════════════════
   PROJECTS — editorial magazine layout, full-bleed alternating
   ═════════════════════════════════════════════════════════════════ */
function Projects() {
  return (
    <section
      id="projects"
      data-testid="featured-projects"
      className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-24 md:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-20 md:mb-28">
          <Reveal className="md:col-span-8">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Selected Projects</div>
            <h2
              id="projects-heading"
              className="font-display text-[42px] md:text-[68px] lg:text-[82px] leading-[1.02] tracking-[-0.025em] text-[color:var(--ink-black)] mt-4"
            >
              We turn old houses<br /> into new homes.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-4" delay={0.06}>
            <p className="text-[color:var(--ink-soft)] max-w-sm md:text-right md:ml-auto">
              A selection of recent Apollo Builders projects — kitchens, bathrooms,
              extensions and new builds across Melbourne&rsquo;s South-East.
            </p>
          </Reveal>
        </div>

        <div className="space-y-28 md:space-y-40">
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
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-[color:var(--gold)] text-4xl md:text-5xl">
                      {idx}
                    </span>
                    <span className="tracking-eyebrow text-[color:var(--gold-dark)]">
                      {p.suburb}
                    </span>
                  </div>
                  <h3 className="font-display text-[30px] md:text-[38px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-5">
                    {p.name}
                  </h3>
                  <p className="text-[color:var(--ink-soft)] mt-5 leading-relaxed max-w-md">
                    {p.description}
                  </p>
                  <div className="mt-8 flex items-center gap-4 text-[11px] tracking-[0.22em] uppercase text-[color:var(--ink)]/70">
                    <span>{p.type}</span>
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
   WHY US — numbered manifesto
   ═════════════════════════════════════════════════════════════════ */
function Why() {
  return (
    <section
      data-testid="why-us"
      className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 py-28 md:py-40"
      aria-labelledby="why-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-4">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Why Apollo</div>
          <h2
            id="why-heading"
            className="font-display text-[36px] md:text-[56px] leading-[1.03] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4"
          >
            The reasons homeowners choose us.
          </h2>
        </Reveal>
        <ul className="md:col-span-8 md:pl-10">
          {whyUs.map((line, i) => (
            <Reveal key={line} delay={i * 0.04}>
              <li className="grid grid-cols-12 items-baseline gap-4 py-7 border-b border-[color:var(--hair)] first:border-t">
                <span className="col-span-2 md:col-span-1 font-display text-[color:var(--gold)] text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 md:col-span-11 font-display text-[color:var(--ink-black)] text-xl md:text-[26px] leading-[1.2] tracking-[-0.01em]">
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
   TESTIMONIALS — editorial pull-quotes, real names
   ═════════════════════════════════════════════════════════════════ */
function Testimonials() {
  return (
    <section
      data-testid="testimonials-section"
      className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <Reveal>
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Homeowners</div>
          <h2
            id="testimonials-heading"
            className="font-display text-[36px] md:text-[56px] leading-[1.03] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4 max-w-[18ch]"
          >
            In their own words.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-24">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 0.05}
              className="border-t border-[color:var(--hair)] pt-10"
              testId={`testimonial-${i}`}
            >
              <span className="font-display text-6xl md:text-7xl leading-none text-[color:var(--gold)] block">
                &ldquo;
              </span>
              <p className="font-display text-[color:var(--ink-black)] text-[22px] md:text-[26px] leading-[1.35] tracking-[-0.01em] mt-3 max-w-xl">
                {t.quote}
              </p>
              <div className="mt-8 tracking-eyebrow text-[color:var(--gold-dark)]">
                — {t.name}
              </div>
            </Reveal>
          ))}
        </div>
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
      className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 py-28 md:py-40"
      aria-labelledby="faq-heading"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-5">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Questions</div>
          <h2
            id="faq-heading"
            className="font-display text-[36px] md:text-[56px] leading-[1.03] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4"
          >
            Answers before you ask.
          </h2>
          <p className="mt-6 text-[color:var(--ink-soft)] max-w-sm">
            Timelines, planning, service areas — the practical questions Apollo
            homeowners bring to us most.
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
                <AccordionTrigger className="font-display text-left text-[20px] md:text-[26px] py-7 text-[color:var(--ink-black)] hover:no-underline">
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
      className="relative bg-[color:var(--ink-black)] text-[color:var(--paper)] overflow-hidden py-28 md:py-44"
      aria-labelledby="cta-heading"
    >
      {/* Background image faded */}
      <div className="absolute inset-0 opacity-[0.22]">
        <img
          src="https://apollobuilders.com.au/wp-content/uploads/2025/11/Drouin-New-Build-10.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A] via-transparent to-[#0A0F1A]" />
      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
        <Reveal className="md:col-span-8">
          <div className="tracking-eyebrow text-[color:var(--gold)]">Begin</div>
          <h2
            id="cta-heading"
            className="font-display text-[46px] md:text-[86px] lg:text-[110px] leading-[0.96] tracking-[-0.035em] font-normal mt-4 max-w-[16ch]"
          >
            Ready to start<br />your <span className="italic text-[color:var(--gold)]">next build?</span>
          </h2>
          <p className="mt-8 max-w-md text-[color:var(--paper)]/85">
            Speak with Apollo Builders about your project — expert advice, realistic
            timelines and a no-obligation fixed price quote.
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
      <Manifesto />
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
