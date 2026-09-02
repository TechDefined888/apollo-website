import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import SEO, {
  breadcrumbSchema,
  localBusiness,
  faqSchema,
} from "@/components/SEO";

import { Reveal, MaskLines } from "@/components/Reveal";

export default function HouseExtensionsMelbourne() {
  const canonical = "/house-extensions-melbourne/";

  const faqs = [
    {
      q: "How much does a house extension cost in Melbourne?",
      a:
        "Costs vary significantly according to size, structural requirements, materials, finishes and project complexity.",
    },
    {
      q: "Is a rear extension better than a second storey?",
      a:
        "It depends on your property. Available land, planning considerations, the existing structure and your desired floor area all influence the best option.",
    },
    {
      q: "Can an extension include a kitchen?",
      a:
        "Yes. Many extension projects incorporate larger kitchens and connected living areas.",
    },
    {
      q: "Can I renovate my existing house while extending it?",
      a:
        "Yes. Combining both works can create a more cohesive result.",
    },
    {
      q: "How long does a house extension take?",
      a:
        "The timeline depends on the project's size, design, approvals and construction complexity.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        {
          name: "House Extensions Melbourne",
          path: canonical,
        },
      ]),
      localBusiness(),
      faqSchema(faqs),
    ],
  };

  const needs = [
    "Another bedroom",
    "A larger kitchen",
    "More living space",
    "A second bathroom",
    "A dedicated home office",
    "Better outdoor entertaining space",
    "More storage",
    "A larger dining area",
    "Better connection to the backyard",
  ];

  const process = [
    {
      title: "Initial consultation",
      text:
        "We discuss what you're trying to achieve and how you currently use the property.",
    },
    {
      title: "Property assessment",
      text:
        "The existing house and proposed works are considered before progressing.",
    },
    {
      title: "Design and planning",
      text:
        "The proposed extension is developed around the property and project requirements.",
    },
    {
      title: "Construction",
      text:
        "Construction begins once the project is ready to proceed.",
    },
    {
      title: "Completion",
      text:
        "The finished extension is integrated into the existing home and prepared for use.",
    },
  ];

  return (
    <div data-testid="house-extensions-melbourne-page">
      <SEO
        title="House Extensions Melbourne | Apollo Builders"
        description="Extend your Melbourne home with Apollo Builders. Create additional living space, improve your layout and transform your existing property with a professionally planned extension."
        path={canonical}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="w-full min-h-[calc(100vh-80px)] flex items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                  Melbourne House Extensions
                </div>
              </Reveal>

              <h1 className="mt-6 max-w-[18ch] font-display text-[40px] leading-[0.98] tracking-[-0.03em] text-[color:var(--ink-black)] md:text-[64px] lg:text-[72px] xl:text-[82px]">
                <MaskLines lines={["House Extensions Melbourne"]} />
              </h1>

              <Reveal delay={0.05}>
                <div className="max-w-3xl">
                  <p className="mt-8 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    When your home no longer has enough space, moving isn&apos;t
                    your only option.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    A house extension can transform an existing property by
                    creating additional bedrooms, living areas, kitchens,
                    bathrooms or indoor-outdoor spaces while allowing you to
                    remain in the location you already know and love.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Apollo Builders works with homeowners across Melbourne&apos;s
                    south and south-east to create extensions that are designed
                    around the existing home and the way the property needs to
                    function in the future.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    From rear extensions to larger renovation and extension
                    projects, our focus is on creating additional space without
                    losing sight of the character, functionality and flow of
                    the original property.
                  </p>

                  <div className="mt-10">
                    <Link to="/contact-us/" className="btn-navy">
                      Discuss Your Extension
                      <ArrowUpRight
                        className="h-4 w-4"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-5" delay={0.1}>
              <div className="overflow-hidden rounded-[2px]">
                <img
                  src="/images/apollo/melbourne-home-renovation-bentleigh-east.jpg"
                  alt="House extension and renovation project in Melbourne by Apollo Builders"
                  className="h-[420px] w-full object-cover md:h-[560px] lg:h-[640px]"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Extend */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                More Space
              </div>
            </Reveal>

            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[32px] md:text-[44px]">
                Why Extend Your Melbourne Home?
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Families change.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                A home that worked perfectly several years ago might not
                provide enough space today.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                You may need:
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
                {needs.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[color:var(--gold)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[16px] leading-[1.7]">
                An extension can address these requirements while allowing you
                to stay in your existing neighbourhood.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Rear Extensions */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Rear Extensions
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[32px] md:text-[44px]">
              Rear House Extensions
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Rear extensions are a popular way to increase the usable living
              area of a property.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              A rear extension can create space for a larger kitchen, dining
              area, family room or connection to an outdoor entertaining area.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              The design needs to consider the existing footprint, backyard,
              access, natural light and relationship between the original house
              and the new addition.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Second Storey */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Building Up
              </div>
            </Reveal>

            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[32px] md:text-[44px]">
                Second Storey Extensions
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Where the available ground-floor space is limited, building
                upwards can provide another solution.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                A second-storey extension can potentially create additional
                bedrooms, bathrooms, living areas or private spaces without
                consuming as much backyard area.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                However, second-storey projects involve significant structural
                and planning considerations.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                The existing building needs to be assessed and the proposed
                extension needs to be carefully integrated into the home.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Extensions + Renovations */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Combined Projects
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[32px] md:text-[44px]">
              Extensions and Renovations Together
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Many homeowners don&apos;t simply need more space.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              They need the existing home to work better.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              That&apos;s why an extension is often combined with a renovation.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              For example, a rear extension could create a larger kitchen and
              living area while the existing part of the house is updated at
              the same time.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              This can produce a more cohesive result than treating the
              extension and renovation as completely separate projects.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Integration */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Old Meets New
              </div>
            </Reveal>

            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[32px] md:text-[44px]">
                Designing an Extension That Feels Like Part of Your Home
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7]">
                One of the biggest challenges with an extension is making the
                new space feel connected to the original home.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                The finished result should ideally feel intentional.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Materials, flooring, ceiling heights, windows, doors, lighting
                and room proportions all influence the connection between old
                and new.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Apollo Builders focuses on the project as a whole rather than
                treating the extension as an isolated addition.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Indoor Outdoor */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Indoor-Outdoor Living
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[32px] md:text-[44px]">
              Indoor-Outdoor Extensions
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7]">
              An extension can also completely change how a family uses its
              backyard.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Large openings between kitchens, dining areas and alfresco spaces
              can create a stronger connection between inside and outside.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Apollo&apos;s Endeavour Hills project incorporated a new kitchen,
              bathroom and decked alfresco area as part of a full renovation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Our Process
            </div>

            <h2 className="mt-5 font-display text-[32px] md:text-[44px]">
              The House Extension Process
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <div className="h-full border-t border-[color:var(--hair)] pt-6">
                  <h3 className="font-display text-[23px]">{step.title}</h3>

                  <p className="mt-4 text-[15px] leading-[1.7]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Melbourne */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Melbourne South-East
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[32px] md:text-[44px]">
              House Extensions Across Melbourne
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Apollo Builders focuses on Melbourne&apos;s south and south-east.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Our existing portfolio demonstrates experience across a range of
              residential projects, from full renovations to new homes.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              If you&apos;re considering extending your home in Melbourne,
              contact Apollo Builders to discuss your project.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Internal Links */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Related Services
            </div>

            <h2 className="mt-5 font-display text-[32px] md:text-[44px]">
              Explore Related Building Services
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: "Home Renovations Melbourne",
                path: "/home-renovations-melbourne/",
              },
              {
                title: "Design & Build Melbourne",
                path: "/design-build-melbourne/",
              },
              {
                title: "Custom Home Builders Melbourne",
                path: "/custom-home-builders-melbourne/",
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="group flex min-h-[160px] flex-col justify-between border border-[color:var(--hair)] bg-white p-6 transition-transform hover:-translate-y-1"
              >
                <h3 className="font-display text-[23px]">{item.title}</h3>

                <ArrowUpRight
                  className="mt-8 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <Reveal>
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
            Frequently Asked Questions
          </div>

          <h2 className="mt-5 font-display text-[32px] md:text-[44px]">
            House Extensions Melbourne FAQs
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-[color:var(--hair)]">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="border-b border-[color:var(--hair)] py-8"
            >
              <h3 className="font-display text-[23px]">{faq.q}</h3>

              <p className="mt-4 max-w-4xl text-[16px] leading-[1.7]">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--ink-black)] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <h2 className="font-display text-[36px] text-white md:text-[54px]">
              Discuss Your House Extension
            </h2>

            <p className="mt-8 max-w-3xl text-[17px] leading-[1.7] text-white/80">
              If you&apos;re considering extending your Melbourne home, talk
              with Apollo Builders about your property and the additional space
              you want to create.
            </p>

            <div className="mt-10">
              <Link
                to="/contact-us/"
                className="inline-flex items-center gap-2 border border-white px-6 py-4 text-white hover:bg-white hover:text-black"
              >
                Discuss Your Extension
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}