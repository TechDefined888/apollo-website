import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import SEO, {
  breadcrumbSchema,
  localBusiness,
  faqSchema,
} from "@/components/SEO";

import { Reveal, MaskLines } from "@/components/Reveal";

export default function KnockDownRebuildMelbourne() {
  const canonical = "/knock-down-rebuild-melbourne/";

  const faqs = [
    {
      q: "What is a knock down rebuild?",
      a:
        "It involves removing an existing dwelling and constructing a new home on the same site.",
    },
    {
      q: "Is knock down rebuild better than renovating?",
      a:
        "Neither option is automatically better. It depends on the condition of the existing property, the desired outcome and the scope of works.",
    },
    {
      q: "Can I build a two-storey home after knocking down the existing house?",
      a:
        "Potentially, subject to the site's requirements and relevant approvals.",
    },
    {
      q: "Can a knock down rebuild be customised?",
      a:
        "Yes. The new home can be designed around the owner's requirements.",
    },
    {
      q: "How much does a knock down rebuild cost in Melbourne?",
      a:
        "Costs vary according to demolition, site requirements, design, size, materials and construction specifications.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        {
          name: "Home",
          path: "/",
        },
        {
          name: "Knock Down Rebuild Melbourne",
          path: canonical,
        },
      ]),
      localBusiness(),
      faqSchema(faqs),
    ],
  };

  const flexibility = [
    "Floor plan",
    "Bedrooms",
    "Bathrooms",
    "Living areas",
    "Storage",
    "Kitchen",
    "Outdoor spaces",
    "Energy considerations",
    "Internal flow",
    "Overall appearance",
  ];

  const factors = [
    "Existing building condition",
    "Desired floor area",
    "Structural limitations",
    "Existing layout",
    "Renovation scope",
    "Site requirements",
    "Budget",
    "Long-term plans",
  ];

  const locationBenefits = [
    "A preferred school area",
    "Established local connections",
    "Access to transport",
    "A familiar neighbourhood",
    "A suitable block",
    "A street you don't want to leave",
  ];

  const newHomeNeeds = [
    "Four bedrooms",
    "Multiple bathrooms",
    "Open-plan living",
    "A large kitchen",
    "Home office",
    "Walk-in storage",
    "Alfresco entertaining",
    "Double garage",
    "Separate living zones",
  ];

  const suitability = [
    "You love your location",
    "You want a completely new home",
    "Your current layout doesn't work",
    "Your renovation requirements are extensive",
    "You want more control over the new floor plan",
    "You want to create a home around future requirements",
  ];

  const List = ({ items }) => (
    <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[16px] text-[color:var(--ink)]"
        >
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div data-testid="knock-down-rebuild-melbourne-page">
      <SEO
        title="Knock Down Rebuild Melbourne | Apollo Builders"
        description="Considering a knock down rebuild in Melbourne? Apollo Builders helps homeowners replace existing properties with new homes designed around their site and lifestyle."
        path={canonical}
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="w-full min-h-[calc(100vh-80px)] flex items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                  Rebuild Your Melbourne Home
                </div>
              </Reveal>

              <h1 className="mt-6 max-w-[18ch] font-display text-[40px] leading-[0.98] tracking-[-0.03em] text-[color:var(--ink-black)] md:text-[64px] lg:text-[72px] xl:text-[82px]">
                <MaskLines lines={["Knock Down Rebuild Melbourne"]} />
              </h1>

              <Reveal delay={0.05}>
                <div className="max-w-3xl">
                  <p className="mt-8 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Sometimes the best way to create the home you want
                    isn&apos;t to renovate the existing property.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    If the existing house has significant structural
                    limitations, an unsuitable layout or simply doesn&apos;t
                    provide the space and functionality you need, a knock down
                    rebuild can provide another path.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    A knock down rebuild involves removing the existing dwelling
                    and constructing a new home on the same site.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    This allows you to retain the location while creating a
                    completely new home.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Apollo Builders works with homeowners considering new
                    residential construction across Melbourne&apos;s south and
                    south-east.
                  </p>

                  <div className="mt-10">
                    <Link to="/contact-us/" className="btn-navy">
                      Discuss a Knock Down Rebuild
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
                  alt="New home construction by Apollo Builders in Melbourne"
                  className="h-[420px] w-full object-cover md:h-[560px] lg:h-[640px]"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT IS KDR */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Start Again
              </div>
            </Reveal>

            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[32px] md:text-[44px]">
                What Is a Knock Down Rebuild?
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7]">
                A knock down rebuild replaces an existing dwelling with a newly
                constructed home on the same property.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Instead of spending significant money modifying an existing
                structure, homeowners can start again with a new design.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                This can provide greater flexibility over:
              </p>

              <List items={flexibility} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* KDR VS RENOVATION */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Compare Your Options
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[32px] md:text-[44px]">
              Knock Down Rebuild vs Renovation
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7]">
              The right choice depends on the property.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              A renovation may be appropriate when the existing structure is
              sound and can accommodate the changes you want.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              A knock down rebuild may be worth considering when the existing
              property has extensive limitations.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Factors to consider include:
            </p>

            <List items={factors} />

            <p className="mt-8 text-[16px] leading-[1.7]">
              The important thing is to assess the property and desired outcome
              rather than automatically choosing one approach.
            </p>
          </Reveal>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Keep Your Location
              </div>
            </Reveal>

            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[32px] md:text-[44px]">
                Why Stay in Your Existing Location?
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7]">
                One of the major advantages of a knock down rebuild can be
                keeping the location you already know.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                You may already have:
              </p>

              <List items={locationBenefits} />

              <p className="mt-8 text-[16px] leading-[1.7]">
                A new home allows you to change the property without changing
                the address.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* DESIGN */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Your New Home
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[32px] md:text-[44px]">
              Designing Your New Home
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7]">
              A knock down rebuild provides the opportunity to create the home
              around your future needs.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              You might want:
            </p>

            <List items={newHomeNeeds} />

            <p className="mt-8 text-[16px] leading-[1.7]">
              The new home can be considered as a complete design rather than
              trying to force these requirements into an existing structure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                New Home Experience
              </div>
            </Reveal>

            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[32px] md:text-[44px]">
                Apollo Builders New Home Experience
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Apollo&apos;s existing portfolio includes multiple new home
                builds, including projects in Drouin, Clyde and Berwick.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                The Berwick project is a two-storey new build designed for
                modern family living, while the Drouin and Clyde projects
                demonstrate Apollo&apos;s experience delivering new homes from
                the ground up.
              </p>

              <div className="mt-10">
                <Link to="/our-projects/" className="btn-navy">
                  View Our Projects
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RIGHT FOR YOU */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Is It Right For You?
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[32px] md:text-[44px]">
              Is a Knock Down Rebuild Right for You?
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Consider a knock down rebuild if:
            </p>

            <List items={suitability} />

            <p className="mt-8 text-[16px] leading-[1.7]">
              A professional assessment of the existing property and proposed
              outcome is essential before deciding.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RELATED */}
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
                title: "New Home Builders Melbourne",
                path: "/new-home-builders-melbourne/",
              },
              {
                title: "Custom Home Builders Melbourne",
                path: "/custom-home-builders-melbourne/",
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
                <h3 className="font-display text-[23px]">{item.title}</h3>

                <ArrowUpRight
                  className="mt-8 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
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

          <h2 className="mt-5 font-display text-[32px] md:text-[44px]">
            Knock Down Rebuild Melbourne FAQs
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

      {/* FINAL CTA */}
      <section className="bg-[color:var(--ink-black)] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <h2 className="max-w-4xl font-display text-[36px] text-white md:text-[54px]">
              Discuss a Knock Down Rebuild
            </h2>

            <div className="mt-10">
              <Link
                to="/contact-us/"
                className="inline-flex items-center gap-2 border border-white px-6 py-4 text-white transition-colors hover:bg-white hover:text-black"
              >
                Discuss Your Project
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}