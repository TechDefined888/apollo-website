import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import SEO, {
  breadcrumbSchema,
  localBusiness,
  faqSchema,
} from "@/components/SEO";

import { Reveal, MaskLines } from "@/components/Reveal";

export default function DesignBuildMelbourne() {
  const canonical = "/design-build-builders-melbourne/";

  const faqs = [
    {
      q: "What is design and build?",
      a:
        "Design and build is an approach where the design and construction of a project are coordinated as part of the same overall process.",
    },
    {
      q: "Can design and build be used for renovations?",
      a:
        "Yes. It can be particularly useful for larger renovation and extension projects.",
    },
    {
      q: "Can you build a custom home?",
      a:
        "Apollo's portfolio includes custom-style new residential projects across Melbourne's south-east.",
    },
    {
      q: "Why choose design and build?",
      a:
        "It provides a coordinated approach where the proposed design and construction requirements can be considered together.",
    },
    {
      q: "Do you work in Melbourne's south-east?",
      a:
        "Yes. Apollo's existing projects include several Melbourne south and south-eastern locations.",
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
          name: "Design & Build Builders Melbourne",
          path: canonical,
        },
      ]),
      localBusiness(),
      faqSchema(faqs),
    ],
  };

  const lifestyleQuestions = [
    "Where do you spend most of your time?",
    "How do you entertain?",
    "Do you work from home?",
    "Do you need additional storage?",
    "Do you need private areas for children?",
    "Do you want stronger indoor-outdoor connection?",
  ];

  const renovationElements = [
    "Structural changes",
    "New kitchen",
    "Bathroom renovation",
    "Flooring",
    "Lighting",
    "Living areas",
    "Extension",
    "Alfresco",
    "External improvements",
  ];

  const functionalItems = [
    "Movement",
    "Storage",
    "Furniture",
    "Natural light",
    "Privacy",
    "Entertaining",
    "Family requirements",
    "Future changes",
  ];

  const process = [
    {
      title: "1. Consultation",
      text: "Understand your property and goals.",
    },
    {
      title: "2. Concept",
      text: "Develop the direction for the project.",
    },
    {
      title: "3. Planning",
      text:
        "Work through the project requirements and proposed design.",
    },
    {
      title: "4. Construction",
      text:
        "Deliver the project according to the agreed requirements.",
    },
    {
      title: "5. Completion",
      text:
        "Finalise the home and prepare it for you to enjoy.",
    },
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
    <div data-testid="design-build-melbourne-page">
      <SEO
        title="Design & Build Melbourne | Apollo Builders"
        description="Explore a coordinated design and build approach with Apollo Builders for Melbourne renovations, extensions and new residential homes."
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
                  Design & Build Melbourne
                </div>
              </Reveal>

              <h1 className="mt-6 max-w-[18ch] font-display text-[40px] leading-[0.98] tracking-[-0.03em] text-[color:var(--ink-black)] md:text-[64px] lg:text-[72px] xl:text-[82px]">
                <MaskLines lines={["Design & Build Builders Melbourne"]} />
              </h1>

              <Reveal delay={0.05}>
                <div className="max-w-3xl">
                  <p className="mt-8 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Building or renovating a home involves more than
                    construction.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Before the first stage of construction begins, there are
                    decisions around layout, functionality, materials, finishes,
                    planning and how the completed property will work as a home.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    A design and build approach brings the design and
                    construction process together so the project can be
                    developed with the final construction outcome in mind.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Apollo Builders works with homeowners across Melbourne&apos;s
                    south and south-east on renovations and new residential
                    projects.
                  </p>

                  <div className="mt-10">
                    <Link to="/contact-us/" className="btn-navy">
                      Discuss Your Project
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-5" delay={0.1}>
              <div className="overflow-hidden rounded-[2px]">
                <img
                  src="/images/apollo/melbourne-custom-home-builders-drouin.jpg"
                  alt="Apollo Builders residential design and construction project in Melbourne"
                  className="h-[420px] w-full object-cover md:h-[560px] lg:h-[640px]"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MEANING */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                One Coordinated Process
              </div>
            </Reveal>

            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[32px] md:text-[44px]">
                What Does Design & Build Mean?
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Design and build brings the planning and construction stages
                together as part of a coordinated process.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Rather than treating design and construction as completely
                disconnected stages, the project is considered from both
                perspectives.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                This can help ensure the proposed design is developed with
                practical construction considerations in mind.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW YOU LIVE */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Designed Around You
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[32px] md:text-[44px]">
              Designing Around How You Live
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Good residential design starts with the homeowner.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Think about:
            </p>

            <List items={lifestyleQuestions} />

            <p className="mt-8 text-[16px] leading-[1.7]">
              These questions influence the design of the home.
            </p>
          </Reveal>
        </div>
      </section>

      {/* RENOVATIONS */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Renovations & Extensions
              </div>
            </Reveal>

            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[32px] md:text-[44px]">
                Design & Build for Renovations
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Design and build isn&apos;t limited to new homes.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                It can also apply to renovation and extension projects.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                A renovation may involve multiple connected elements:
              </p>

              <List items={renovationElements} />

              <p className="mt-8 text-[16px] leading-[1.7]">
                Considering these elements together can produce a more cohesive
                result.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Apollo&apos;s existing renovation portfolio includes projects
                involving multiple areas of the home, including the Bentleigh
                East renovation and Endeavour Hills renovation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* NEW HOMES */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              New Homes
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[32px] md:text-[44px]">
              Design & Build for New Homes
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7]">
              For a new home, the design stage establishes the foundation for
              everything that follows.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              The floor plan determines how people move through the property.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              The position of windows affects natural light.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              The relationship between the kitchen and living areas influences
              everyday use.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Outdoor spaces can influence how the home connects to the site.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              These decisions should be considered before construction begins.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Apollo&apos;s portfolio includes new homes in Drouin, Clyde and
              Berwick, demonstrating its work across different residential
              projects.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FUNCTIONAL SPACES */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Function First
              </div>
            </Reveal>

            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[32px] md:text-[44px]">
                Creating Functional Living Spaces
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7]">
                A beautiful home still needs to work.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Functional design considers:
              </p>

              <List items={functionalItems} />

              <p className="mt-8 text-[16px] leading-[1.7]">
                The best result is a home where design decisions support
                everyday living rather than simply looking impressive.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INDOOR OUTDOOR */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Indoor-Outdoor Living
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[32px] md:text-[44px]">
              Indoor-Outdoor Design
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Australian homes often benefit from strong connections between
              internal living areas and outdoor spaces.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              A well-planned alfresco can effectively extend the living
              environment.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Apollo&apos;s Endeavour Hills renovation incorporated a decked
              alfresco area alongside the renovation of the kitchen and
              bathroom.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COORDINATED */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                One Complete Outcome
              </div>
            </Reveal>

            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[32px] md:text-[44px]">
                A Coordinated Approach
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7]">
                One of the advantages of a design and build approach is having
                the project considered as a complete outcome.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                The objective isn&apos;t simply to produce drawings or construct
                individual components.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                It is to create a finished home that works together.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <Reveal>
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
            Our Process
          </div>

          <h2 className="mt-5 font-display text-[32px] md:text-[44px]">
            The Apollo Design & Build Process
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
      </section>

      {/* LOCATION */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Melbourne South-East
              </div>
            </Reveal>

            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[32px] md:text-[44px]">
                Design & Build Melbourne South-East
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Apollo Builders&apos; completed projects demonstrate experience
                across renovations and new residential construction throughout
                Melbourne&apos;s south and south-east.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                The portfolio includes Bentleigh East, Endeavour Hills, Altona
                Meadows, Berwick, Clyde and Drouin.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                If you&apos;re considering a new home, renovation or extension,
                speak with Apollo Builders about a design and build approach.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <Reveal>
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
            Related Services
          </div>

          <h2 className="mt-5 font-display text-[32px] md:text-[44px]">
            Explore Related Building Services
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Home Renovations Melbourne",
              path: "/home-renovations-melbourne/",
            },
            {
              title: "House Extensions Melbourne",
              path: "/house-extensions-melbourne/",
            },
            {
              title: "New Home Builders Melbourne",
              path: "/new-home-builders-melbourne/",
            },
            {
              title: "Knock Down Rebuild Melbourne",
              path: "/knock-down-rebuild-melbourne/",
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
      </section>

      {/* FAQ */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Frequently Asked Questions
            </div>

            <h2 className="mt-5 font-display text-[32px] md:text-[44px]">
              Design & Build Melbourne FAQs
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
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[color:var(--ink-black)] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <h2 className="max-w-4xl font-display text-[36px] text-white md:text-[54px]">
              Discuss Your Project
            </h2>

            <p className="mt-8 max-w-3xl text-[17px] leading-[1.7] text-white/80">
              If you&apos;re considering a new home, renovation or extension,
              speak with Apollo Builders about a design and build approach.
            </p>

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