import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { services } from "@/lib/data";

/**
 * Interactive services — large horizontal panels that expand on hover
 * (desktop) or tap (mobile), revealing a project photo, scope list,
 * and a link to the relevant service page.
 *
 * Supports:
 * - "home-renovations"
 * - {
 *     slug: "home-renovations",
 *     label: "House Renovations"
 *   }
 * - {
 *     slug: "house-extensions-melbourne",
 *     sourceSlug: "home-renovations",
 *     label: "House Extensions",
 *     image: "/images/apollo/house-extensions.jpg",
 *     imageAlt: "House extension by Apollo Builders"
 *   }
 *
 * `sourceSlug` lets us reuse text/scope from an existing service,
 * while `image` and `imageAlt` can override the image per card.
 */
export default function ServicesInteractive({ order }) {
  const [active, setActive] = useState(0);

  const items = useMemo(() => {
    if (!order?.length) return services;

    const bySlug = new Map(
      services.map((service) => [service.slug, service])
    );

    return order
      .map((entry, idx) => {
        const isObject = typeof entry === "object";

        const slug = isObject ? entry.slug : entry;

        const sourceSlug =
          isObject && entry.sourceSlug
            ? entry.sourceSlug
            : slug;

        const service = bySlug.get(sourceSlug);

        if (!service) return null;

        const label =
          isObject && entry.label
            ? entry.label
            : service.title;

        const image =
          isObject && entry.image
            ? entry.image
            : service.image;

        const imageAlt =
          isObject && entry.imageAlt
            ? entry.imageAlt
            : service.imageAlt;

        const number = String(idx + 1).padStart(2, "0");

        return {
          ...service,
          slug,
          title: label,
          number,
          image,
          imageAlt,
        };
      })
      .filter(Boolean);
  }, [order]);

  return (
    <section
      data-testid="services-tiles"
      className="relative bg-[color:var(--ink-black)] text-[color:var(--paper)] py-24 md:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: "-10% 0px",
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="md:col-span-8"
          >
            <div className="tracking-eyebrow text-[color:var(--gold)]">
              02 — Services
            </div>

            <h2
              id="services-heading"
              className="font-display text-[30px] md:text-[42px] lg:text-[50px] leading-[1.05] tracking-[-0.02em] mt-5"
            >
              Renovations, extensions <br />
              and new builds.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: "-10% 0px",
            }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.06,
            }}
            className="md:col-span-4 text-[color:var(--paper)]/75 max-w-sm md:pb-3"
          >
            Hover a service to explore the work.
          </motion.p>
        </div>
      </div>

      {/* Desktop */}
      <div
        className="relative border-t border-[color:var(--paper)]/12"
        role="tablist"
        aria-label="Apollo Builders services"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="hidden md:flex w-full h-[520px] gap-2">
            {items.map((service, index) => {
              const isActive = active === index;

              return (
                <button
                  key={`${service.slug}-${index}`}
                  data-testid={`service-tile-${service.slug}`}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  role="tab"
                  aria-selected={isActive}
                  className="relative overflow-hidden group text-left transition-[flex] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] ring-inset"
                  style={{
                    flex: isActive
                      ? "6 1 0%"
                      : "1 1 0%",
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                      isActive
                        ? "opacity-70"
                        : "opacity-30"
                    }`}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/70 to-[#0A0F1A]/40" />

                  <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                    <div>
                      <div className="tracking-eyebrow text-[color:var(--gold)]">
                        {service.number}
                      </div>

                      <h3
                        className={`font-display leading-[1.02] tracking-[-0.02em] text-[color:var(--paper)] whitespace-nowrap transition-all duration-700 ${
                          isActive
                            ? "mt-4 text-[42px] lg:text-[54px]"
                            : "absolute bottom-8 left-8 origin-bottom-left -rotate-90 translate-y-[-8px] translate-x-[8px] text-[22px] lg:text-[26px]"
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{
                            opacity: 0,
                            y: 20,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: 10,
                          }}
                          transition={{
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1],
                            delay: 0.15,
                          }}
                          className="max-w-md"
                        >
                          <p className="text-[color:var(--paper)]/85 text-base leading-relaxed">
                            {service.tagline}
                          </p>

                          <ul className="mt-6 space-y-1.5">
                            {service.scope.map((item) => (
                              <li
                                key={item}
                                className="text-[13px] text-[color:var(--paper)]/70 flex items-baseline gap-3"
                              >
                                <span className="text-[color:var(--gold)]">
                                  —
                                </span>

                                {item}
                              </li>
                            ))}
                          </ul>

                          <Link
                            to={`/${service.slug}/`}
                            className="mt-7 inline-flex items-center gap-2 text-[color:var(--gold)] text-[12px] tracking-[0.22em] uppercase font-semibold link-under"
                          >
                            Discover

                            <ArrowUpRight
                              className="h-3.5 w-3.5"
                              strokeWidth={2}
                            />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          {items.map((service, index) => {
            const open = active === index;

            return (
              <div
                key={`${service.slug}-${index}`}
                className="border-b border-[color:var(--paper)]/12"
              >
                <button
                  onClick={() =>
                    setActive(open ? -1 : index)
                  }
                  data-testid={`service-tile-${service.slug}-mobile`}
                  className="w-full text-left px-6 py-6 flex items-baseline justify-between gap-4"
                  aria-expanded={open}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-[color:var(--gold)] text-[13px] tracking-[0.2em]">
                      {service.number}
                    </span>

                    <h3 className="font-display text-2xl tracking-[-0.02em]">
                      {service.title}
                    </h3>
                  </div>

                  <Plus
                    className={`h-4 w-4 text-[color:var(--gold)] transition-transform duration-500 ${
                      open ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden px-6 pb-8"
                    >
                      <div className="frame aspect-[16/10] mb-5">
                        <img
                          src={service.image}
                          alt={service.imageAlt}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <p className="text-[color:var(--paper)]/85 text-[15px]">
                        {service.tagline}
                      </p>

                      <ul className="mt-4 space-y-1.5">
                        {service.scope.map((item) => (
                          <li
                            key={item}
                            className="text-[13px] text-[color:var(--paper)]/70"
                          >
                            — {item}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={`/${service.slug}/`}
                        className="mt-5 inline-flex items-center gap-2 text-[color:var(--gold)] text-[12px] tracking-[0.22em] uppercase font-semibold"
                      >
                        Discover

                        <ArrowUpRight
                          className="h-3.5 w-3.5"
                          strokeWidth={2}
                        />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}