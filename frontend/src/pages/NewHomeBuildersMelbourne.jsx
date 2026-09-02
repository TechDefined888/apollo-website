import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import SEO, {
  breadcrumbSchema,
  localBusiness,
  faqSchema,
} from "@/components/SEO";

import { Reveal, MaskLines } from "@/components/Reveal";

export default function NewHomeBuildersMelbourne() {
  const canonical = "/new-home-builders-melbourne/";

  const faqs = [
    {
      q: "How much does it cost to build a new home in Melbourne?",
      a:
        "There is no single price because construction costs depend on the design, size, materials, site and specifications.",
    },
    {
      q: "How long does building a new home take?",
      a:
        "The timeline varies according to design, approvals, construction requirements and project size.",
    },
    {
      q: "Can I build a custom-designed home?",
      a:
        "Yes. A custom approach allows the home to be developed around your lifestyle and requirements.",
    },
    {
      q: "Does Apollo build two-storey homes?",
      a:
        "Apollo's portfolio includes a completed two-storey new home in Berwick.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        {
          name: "New Home Builders Melbourne",
          path: canonical,
        },
      ]),
      localBusiness(),
      faqSchema(faqs),
    ],
  };

  const planningItems = [
    "Bedrooms",
    "Bathrooms",
    "Kitchen",
    "Living areas",
    "Storage",
    "Outdoor areas",
    "Natural light",
    "Internal flow",
    "Entertaining spaces",
    "Future requirements",
  ];

  const builderChecklist = [
    "Previous projects",
    "Quality of workmanship",
    "Communication",
    "Project planning",
    "Experience",
    "Construction approach",
    "Ability to understand your requirements",
  ];

  const process = [
    {
      title: "Consultation",
      text:
        "Understand the site, requirements and intended outcome.",
    },
    {
      title: "Design and planning",
      text:
        "Develop the proposed home around the property and lifestyle.",
    },
    {
      title: "Preparation",
      text:
        "Prepare the project for construction.",
    },
    {
      title: "Construction",
      text:
        "Build the home according to the agreed project requirements.",
    },
    {
      title: "Completion",
      text:
        "Complete the final stages and prepare the home for occupation.",
    },
  ];

  return (
    <div data-testid="new-home-builders-melbourne-page">
      <SEO
        title="New Home Builders Melbourne | Apollo Builders"
        description="Build your new home in Melbourne with Apollo Builders. Explore modern family homes, two-storey builds and new residential construction across Melbourne's south-east."
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
                  New Homes Melbourne
                </div>
              </Reveal>

              <h1 className="mt-6 max-w-[18ch] font-display text-[40px] leading-[0.98] tracking-[-0.03em] text-[color:var(--ink-black)] md:text-[64px] lg:text-[72px] xl:text-[82px]">
                <MaskLines lines={["New Home Builders Melbourne"]} />
              </h1>

              <Reveal delay={0.05}>
                <div className="max-w-3xl">
                  <p className="mt-8 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Building a new home is an opportunity to create a property
                    specifically suited to your lifestyle, your block and your
                    future requirements.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Apollo Builders delivers new residential homes across
                    Melbourne&apos;s south and south-east, with completed
                    projects ranging from modern family homes to two-storey
                    builds.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Our portfolio includes new home projects in Drouin, Clyde
                    and Berwick.
                  </p>

                  <div className="mt-10">
                    <Link to="/contact-us/" className="btn-navy">
                      Start Your New Home Project
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
                  src="/images/apollo/new-home-builders-berwick.jpg"
                  alt="New residential home built in Berwick by Apollo Builders"
                  className="h-[420px] w-full object-cover md:h-[560px] lg:h-[640px]"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ground Up */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Start From The Ground Up
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                Building a New Home From the Ground Up
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A new home gives you the opportunity to consider the property
                as a complete system.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Rather than adapting an existing building, you can plan:
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
                {planningItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[16px] text-[color:var(--ink)]"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                The result is a home designed around your needs from the
                beginning.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Modern Family Homes */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Modern Living
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Modern Family Homes
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Modern homes need to balance comfort, functionality and
              flexibility.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Open-plan living can provide a central family space while
              separate rooms provide privacy when required.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Outdoor living can also play an important role in the overall
              design.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Apollo&apos;s Drouin new home, for example, features open-plan
              living, high ceilings and premium finishes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Two Storey */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Two-Storey Homes
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                Two-Storey New Homes
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Two-storey homes can make efficient use of available land while
                providing additional living space.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Bedrooms can be located away from the main living areas, while
                kitchens, dining and family spaces can be positioned on the
                ground floor.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Apollo&apos;s Berwick project demonstrates this approach with a
                two-storey home designed around modern family living.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Choosing Builder */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Choosing a Builder
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Choosing a New Home Builder
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Choosing a builder is one of the most important decisions in the
              process.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              You should look at:
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
              {builderChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[16px] text-[color:var(--ink)]"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Apollo&apos;s project portfolio gives prospective clients an
              opportunity to see examples of completed work rather than relying
              solely on plans or descriptions.
            </p>

            <div className="mt-10">
              <Link to="/our-projects/" className="btn-navy">
                View Our Projects
                <ArrowUpRight
                  className="h-4 w-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </div>
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

            <h2 className="mt-5 max-w-4xl font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              The New Home Building Process
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5">
            {process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <div className="h-full border-t border-[color:var(--hair)] pt-6">
                  <h3 className="font-display text-[23px] leading-[1.1] text-[color:var(--ink-black)]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-[1.7] text-[color:var(--ink)]">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* South East */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Melbourne South-East
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              New Home Builders Melbourne South-East
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Apollo Builders has completed residential projects across
              Melbourne&apos;s south and south-east, with projects including
              Clyde, Berwick and Drouin.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              If you&apos;re planning a new home, speak with Apollo Builders
              about your requirements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Related Services
            </div>

            <h2 className="mt-5 font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Explore Related Building Services
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              {
                title: "Custom Home Builders Melbourne",
                path: "/custom-home-builders-melbourne/",
              },
              {
                title: "Knock Down Rebuild Melbourne",
                path: "/knock-down-rebuild-melbourne/",
              },
              {
                title: "Design & Build Melbourne",
                path: "/design-build-melbourne/",
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="group flex min-h-[160px] flex-col justify-between border border-[color:var(--hair)] bg-white p-6 transition-transform hover:-translate-y-1"
              >
                <h3 className="font-display text-[23px] leading-[1.15] text-[color:var(--ink-black)]">
                  {item.title}
                </h3>

                <ArrowUpRight
                  className="mt-8 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <Reveal>
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
            Frequently Asked Questions
          </div>

          <h2 className="mt-5 font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
            New Home Builders Melbourne FAQs
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-[color:var(--hair)]">
          {faqs.map((faq, index) => (
            <Reveal key={faq.q} delay={index * 0.03}>
              <div className="border-b border-[color:var(--hair)] py-8">
                <h3 className="font-display text-[22px] leading-[1.2] text-[color:var(--ink-black)] md:text-[25px]">
                  {faq.q}
                </h3>

                <p className="mt-4 max-w-4xl text-[16px] leading-[1.7] text-[color:var(--ink)]">
                  {faq.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[color:var(--ink-black)] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <div className="tracking-eyebrow text-[color:var(--gold)]">
              Start Your New Home
            </div>

            <h2 className="mt-5 max-w-4xl font-display text-[36px] leading-[1.02] tracking-[-0.02em] text-white md:text-[54px]">
              Start Your New Home Project
            </h2>

            <p className="mt-8 max-w-3xl text-[16px] leading-[1.7] text-white/80 md:text-[18px]">
              If you&apos;re planning a new home in Melbourne, speak with Apollo
              Builders about your site, your requirements and the type of home
              you want to create.
            </p>

            <div className="mt-10">
              <Link
                to="/contact-us/"
                className="inline-flex items-center gap-2 border border-white px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
              >
                Start Your New Home Project
                <ArrowUpRight
                  className="h-4 w-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}