import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/lib/data";

gsap.registerPlugin(ScrollTrigger);

/**
 * Architectural journey — a scroll-drawn blueprint that reveals
 * five construction stages sequentially. Reduced-motion aware.
 */
export default function BlueprintProcess() {
  const wrap = useRef(null);
  const path = useRef(null);
  const dots = useRef([]);
  dots.current = [];

  const setDot = (el) => {
    if (el && !dots.current.includes(el)) dots.current.push(el);
  };

  useEffect(() => {
    const prefersReduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!wrap.current || !path.current) return;

    const len = path.current.getTotalLength();
    path.current.style.strokeDasharray = `${len}`;
    path.current.style.strokeDashoffset = prefersReduce ? "0" : `${len}`;

    if (prefersReduce) {
      dots.current.forEach((d) => (d.style.opacity = 1));
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(path.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: wrap.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: 0.8,
        },
      });
      dots.current.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 78%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrap}
      data-testid="process-section"
      className="relative bg-[color:var(--paper)] text-[color:var(--ink-black)] py-24 md:py-32 lg:py-40 overflow-hidden border-t border-[color:var(--hair)]"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5"
          >
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">05 — Process</div>
            <h2
              id="process-heading"
              className="font-display text-[36px] md:text-[52px] lg:text-[60px] leading-[1.05] tracking-[-0.025em] mt-4"
            >
              From blueprint<br /> to handover.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            className="md:col-span-6 md:col-start-7 text-[color:var(--ink-soft)] md:text-[17px] md:pt-14 max-w-lg leading-[1.7]"
          >
            Every Apollo Builders project follows a five-stage rhythm — the same
            structure whether you&rsquo;re renovating a bathroom or building a home
            from the ground up.
          </motion.p>
        </div>

        {/* Horizontal blueprint SVG */}
        <div className="relative">
          <svg
            className="w-full h-[110px] md:h-[130px]"
            viewBox="0 0 1200 130"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Faint grid */}
            <g stroke="rgba(11,27,46,0.10)" strokeWidth="1">
              {Array.from({ length: 30 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 40} y1="0" x2={i * 40} y2="130" />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 30} x2="1200" y2={i * 30} />
              ))}
            </g>
            <path
              ref={path}
              d="M 40 100 L 240 100 L 240 60 L 440 60 L 440 30 L 640 30 L 700 15 L 760 30 L 960 30 L 960 70 L 1160 70"
              stroke="#C5892D"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="miter"
              fill="none"
            />
            {[40, 240, 440, 700, 960, 1160].map((x, i) => (
              <g key={i}>
                <circle
                  cx={x}
                  cy={i === 0 ? 100 : i === 1 ? 60 : i === 2 ? 30 : i === 3 ? 15 : i === 4 ? 30 : 70}
                  r="4"
                  fill="#C5892D"
                />
              </g>
            ))}
          </svg>

          <ol className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 mt-14">
            {processSteps.map((s, i) => (
              <li
                key={s.n}
                ref={setDot}
                data-testid={`process-step-${i}`}
                className="opacity-0 will-change-transform"
              >
                <div className="text-[color:var(--gold)] font-display text-3xl md:text-4xl">
                  {s.n}
                </div>
                <h3 className="font-display text-[19px] md:text-[22px] mt-3 leading-[1.2] tracking-[-0.01em]">
                  {s.title}
                </h3>
                <p className="text-[color:var(--ink-soft)] text-[14px] leading-[1.65] mt-3">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
