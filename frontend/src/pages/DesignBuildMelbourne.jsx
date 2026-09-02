import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import SEO, {
  breadcrumbSchema,
  localBusiness,
  faqSchema,
} from "@/components/SEO";

import { Reveal, MaskLines } from "@/components/Reveal";

export default function DesignBuildMelbourne() {
  const canonical = "/design-build-melbourne/";

  const faqs = [
    {
      q: "What is a design and build service?",
      a:
        "A design and build service brings the design and construction stages of a residential project together within a connected process. Instead of treating the design and construction stages as completely separate, the project is developed with construction considerations in mind from the beginning.",
    },
    {
      q: "How does the design and build process work?",
      a:
        "The process generally begins with an initial consultation and site assessment, followed by design development, planning and approvals, construction and completion. The exact process can vary depending on the property, design and requirements of the project.",
    },
    {
      q: "Can I customise my home design?",
      a:
        "Yes. A custom home can be designed around your lifestyle, property and requirements rather than relying solely on a predetermined floor plan. The design can consider factors such as living areas, bedrooms, bathrooms, storage, entertaining spaces, home offices and outdoor areas.",
    },
    {
      q: "Can Apollo Builders build on my existing block?",
      a:
        "The suitability of a property depends on its characteristics and the requirements of the proposed project. Apollo Builders can discuss your block and project requirements to help establish the appropriate next steps.",
    },
    {
      q: "Can I work with Apollo Builders if I already have plans?",
      a:
        "If you already have plans or an established design concept, you can discuss the project with Apollo Builders. The team can assess the requirements of your project and determine how the building process can proceed.",
    },
    {
      q: "Do you help with planning and approvals?",
      a:
        "Planning and approval requirements vary depending on the property and proposed development. Apollo Builders can help guide you through the relevant stages and considerations associated with your project.",
    },
    {
      q: "How much does it cost to design and build a home in Melbourne?",
      a:
        "The cost of a design and build project can vary significantly. Factors can include the size and complexity of the home, site conditions, design requirements, materials, finishes and other project-specific considerations. The best way to understand the potential cost of your project is to discuss your property and requirements with Apollo Builders.",
    },
    {
      q: "How long does it take to design and build a home?",
      a:
        "The timeframe varies between projects. Design complexity, planning and approval requirements, site conditions, materials and construction requirements can all influence the overall timeframe. A more accurate timeframe can be discussed once the requirements of your individual project are understood.",
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
          name: "Services",
          path: "/services/",
        },
        {
          name: "Design & Build Melbourne",
          path: canonical,
        },
      ]),
      localBusiness(),
      faqSchema(faqs),
      {
        "@type": "Service",
        name: "Design & Build Services",
        serviceType: "Design & Build Services",
        areaServed: {
          "@type": "Place",
          name: "Melbourne, Victoria, Australia",
        },
        provider: {
          "@type": "LocalBusiness",
          name: "Apollo Builders",
        },
      },
    ],
  };

  const completeServiceItems = [
    "Lifestyle",
    "Family requirements",
    "Block of land",
    "Architectural preferences",
    "Functional requirements",
    "Budget",
    "Planning considerations",
    "Materials",
    "Finishes",
    "Construction requirements",
  ];

  const siteAssessmentItems = [
    "Block dimensions",
    "Site orientation",
    "Access",
    "Slope",
    "Existing structures",
    "Neighbouring properties",
    "Planning considerations",
    "Site conditions",
    "Desired layout",
    "Outdoor space",
  ];

  const homeDesignItems = [
    "Open-plan living",
    "Large kitchens",
    "Multiple living areas",
    "Master suites",
    "Walk-in wardrobes",
    "Ensuite bathrooms",
    "Children's bedrooms",
    "Home offices",
    "Media rooms",
    "Entertaining areas",
    "Outdoor living",
    "Garages",
    "Storage areas",
    "Custom architectural features",
  ];

  const serviceAreas = [
    "Melbourne CBD",
    "Inner Melbourne",
    "Eastern suburbs",
    "South-Eastern suburbs",
    "Northern suburbs",
    "Western suburbs",
    "South-Western suburbs",
    "Melbourne growth areas",
    "Surrounding metropolitan suburbs",
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
      title="Design & Build Melbourne | Custom Home Builders | Apollo Builders"
      description="Design and build your dream home in Melbourne with Apollo Builders. Custom home design, planning and construction tailored to your block, lifestyle and goals."
      path="/design-build-melbourne/"
      ogTitle="Design & Build Melbourne | Apollo Builders"
      ogDescription="Create a home designed around your lifestyle, block and vision with Apollo Builders' design and build service in Melbourne."
      image="/images/apollo/drouin-new-build-3.jpg"
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
                <MaskLines lines={["Design & Build Melbourne"]} />
              </h1>

              <Reveal delay={0.05}>
                <div className="max-w-3xl">
                  <h2 className="mt-8 font-display text-[28px] md:text-[34px]">
                    Design & Build Your Dream Home in Melbourne
                  </h2>

                  <p className="mt-6 text-[16px] leading-[1.7] md:text-[18px]">
                    Building a new home is one of the biggest decisions you can
                    make. From the initial idea and design through to
                    construction and completion, every stage can influence the
                    final result.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] md:text-[18px]">
                    At Apollo Builders, our design and build service in Melbourne
                    brings the design and construction process together, helping
                    homeowners create a home that reflects their lifestyle,
                    block, requirements and vision.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] md:text-[18px]">
                    Rather than treating the design and construction stages as
                    completely separate processes, our approach considers how
                    your home will ultimately be built from the beginning.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] md:text-[18px]">
                    Whether you're building on a vacant block, replacing an
                    existing property or planning a completely custom residence,
                    Apollo Builders can help guide your project from the initial
                    concept through to construction.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] md:text-[18px]">
                    Your home should be more than visually appealing. It should
                    be practical, comfortable and designed around the way you
                    live.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] md:text-[18px]">
                    From the layout and orientation of your home through to
                    materials, finishes and construction, every decision
                    contributes to the finished result.
                  </p>

                  <p className="mt-6 text-[16px] font-medium leading-[1.7] md:text-[18px]">
                    Apollo Builders brings design and construction together to
                    help Melbourne homeowners create homes designed around their
                    lifestyle and property.
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
                  alt="Custom home exterior completed by Apollo Builders"
                  className="h-[420px] w-full object-cover md:h-[560px] lg:h-[640px]"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COMPLETE SERVICE */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Complete Service
              </div>
            </Reveal>

            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[32px] md:text-[44px]">
                A Complete Design & Build Service in Melbourne
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Designing and building a new home can involve many different
                stages and professionals.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Depending on the project, homeowners may need to coordinate
                designers, architects, engineers, surveyors, consultants,
                building professionals and other specialists.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Managing different parties independently can make communication
                more complicated and create additional work for the homeowner.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                A design and build approach provides a more connected
                alternative.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Apollo Builders works with you throughout the project to help
                develop a home that considers your:
              </p>

              <List items={completeServiceItems} />

              <p className="mt-8 text-[16px] leading-[1.7]">
                The objective is to establish a clear connection between the
                design and the eventual construction of the home.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                Your design needs to work on your block, suit your lifestyle and
                ultimately be capable of being constructed.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <Reveal>
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
            Integrated Approach
          </div>

          <h2 className="mt-5 font-display text-[32px] md:text-[44px]">
            Why Choose a Design & Build Builder?
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {[
            {
              title: "One Connected Team",
              text:
                "Working with one connected team can make communication throughout your project simpler. Rather than moving between different businesses as the project progresses, you have a central team involved in the design and construction process.",
            },
            {
              title: "Design Around Your Block",
              text:
                "Every property is different. Your block's dimensions, orientation, access, slope, neighbouring properties and surrounding environment can all influence the design of your home.",
            },
            {
              title: "Design Around Your Lifestyle",
              text:
                "Your home should work for the people who live in it. You may want a large kitchen for entertaining, multiple living areas, additional bedrooms, a home office, generous storage or a strong connection between indoor and outdoor spaces.",
            },
            {
              title: "Construction Considered From the Beginning",
              text:
                "A home design needs to work in the real world. A design and build approach allows construction considerations to be part of the conversation from the early stages of the project.",
            },
            {
              title: "Greater Continuity",
              text:
                "Keeping design and construction connected can help maintain consistency throughout the project. The decisions made during design can be carried through into the construction process.",
            },
          ].map((item) => (
            <Reveal key={item.title}>
              <div className="border-t border-[color:var(--hair)] pt-6">
                <h3 className="font-display text-[24px]">{item.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.7]">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Our Process
            </div>

            <h2 className="mt-5 font-display text-[32px] md:text-[44px]">
              Our Design & Build Process
            </h2>
          </Reveal>

          <div className="mt-12 space-y-12">
            <div>
              <h3 className="font-display text-[27px]">
                1. Initial Consultation
              </h3>

              <p className="mt-4 text-[16px] leading-[1.7]">
                Every project begins with understanding what you want to achieve.
                We'll discuss your property, lifestyle, design ideas, priorities
                and overall goals.
              </p>

              <p className="mt-4 text-[16px] leading-[1.7]">
                You may already have architectural ideas, inspiration images or
                plans, or you may simply have an idea of the type of home you
                want to create.
              </p>
            </div>

            <div>
              <h3 className="font-display text-[27px]">
                2. Site & Project Assessment
              </h3>

              <p className="mt-4 text-[16px] leading-[1.7]">
                Your property is an important part of the design process.
                Before developing a home design, the characteristics of the
                site need to be considered.
              </p>

              <List items={siteAssessmentItems} />
            </div>

            <div>
              <h3 className="font-display text-[27px]">
                3. Home Design
              </h3>

              <p className="mt-4 text-[16px] leading-[1.7]">
                Once your requirements and property have been considered, the
                design process can begin.
              </p>

              <p className="mt-4 text-[16px] leading-[1.7]">
                The objective is to create a home that balances architectural
                appearance with practical functionality.
              </p>

              <List items={homeDesignItems} />
            </div>

            <div>
              <h3 className="font-display text-[27px]">
                4. Planning & Approvals
              </h3>

              <p className="mt-4 text-[16px] leading-[1.7]">
                Residential building projects can involve planning, building and
                approval requirements depending on the property and proposed
                development.
              </p>

              <p className="mt-4 text-[16px] leading-[1.7]">
                Apollo Builders can help guide you through the relevant stages
                of the project and identify the considerations that need to be
                addressed before construction.
              </p>
            </div>

            <div>
              <h3 className="font-display text-[27px]">
                5. Construction
              </h3>

              <p className="mt-4 text-[16px] leading-[1.7]">
                Once the required design, planning and preparation stages have
                been completed, construction can begin.
              </p>

              <p className="mt-4 text-[16px] leading-[1.7]">
                The project moves from drawings and concepts into the physical
                construction of your home.
              </p>
            </div>

            <div>
              <h3 className="font-display text-[27px]">
                6. Completion & Handover
              </h3>

              <p className="mt-4 text-[16px] leading-[1.7]">
                The final stage is seeing your home completed. Once construction
                and the relevant final requirements have been addressed, your
                new home is ready for handover.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link to="/contact-us/" className="btn-navy">
              Discuss Your Project
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* CUSTOM HOME */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <Reveal>
          <h2 className="font-display text-[32px] md:text-[44px]">
            Custom Home Design & Build Melbourne
          </h2>

          <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
            For homeowners with a specific vision, a custom home design and
            build in Melbourne provides an opportunity to create a residence
            tailored to their lifestyle and property.
          </p>

          <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
            A custom home doesn't need to begin with a predetermined floor plan.
            Instead, the design can begin with the things that matter to you.
          </p>

          <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
            Apollo Builders can help turn your ideas into a considered
            residential building project.
          </p>
        </Reveal>
      </section>

      {/* FAMILY HOMES */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <h2 className="font-display text-[32px] md:text-[44px]">
              Design & Build Homes for Melbourne Families
            </h2>

            <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
              Melbourne homeowners have different lifestyles, family
              structures, blocks and priorities. There isn't one floor plan
              that works for everyone.
            </p>

            <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
              That's why the design of a home should start with how it will be
              used.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {[
              {
                title: "Family Living",
                text:
                  "Family homes can be designed around everyday movement, shared living spaces, bedrooms, bathrooms and practical storage.",
              },
              {
                title: "Entertaining",
                text:
                  "Open kitchens, dining areas and living spaces can create a natural environment for entertaining family and friends.",
              },
              {
                title: "Working From Home",
                text:
                  "A dedicated office can provide a quiet and functional workspace while remaining integrated into the overall home.",
              },
              {
                title: "Indoor & Outdoor Living",
                text:
                  "Thoughtfully positioned living areas can create a stronger connection between internal spaces and outdoor entertaining areas.",
              },
              {
                title: "Future Requirements",
                text:
                  "Considering future needs during the design stage can help create a home that remains functional as your circumstances evolve.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-t border-[color:var(--hair)] pt-6"
              >
                <h3 className="font-display text-[24px]">{item.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.7]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN BUILD VS TRADITIONAL */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <Reveal>
          <h2 className="font-display text-[32px] md:text-[44px]">
            Design & Build vs Traditional Building
          </h2>

          <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
            There are several ways to approach a new home project. A traditional
            approach may involve engaging an architect or designer independently
            before approaching a builder once plans have been developed.
          </p>

          <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
            A design and build approach connects the design and construction
            stages more closely.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border border-[color:var(--hair)] p-6">
              <h3 className="font-display text-[24px]">
                Traditional Approach
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7]">
                Designer / Architect → Plans → Builder → Construction
              </p>
            </div>

            <div className="border border-[color:var(--hair)] p-6">
              <h3 className="font-display text-[24px]">
                Design & Build Approach
              </h3>
              <p className="mt-4 text-[16px] leading-[1.7]">
                Consultation → Site Assessment → Design → Planning →
                Construction → Completion
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-4xl text-[16px] leading-[1.7]">
            Neither approach is automatically the right choice for every
            homeowner. The most suitable approach depends on your project,
            property, design requirements and preferences.
          </p>
        </Reveal>
      </section>

      {/* GOOD HOME DESIGN */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <h2 className="font-display text-[32px] md:text-[44px]">
              What Makes a Good Home Design?
            </h2>

            <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
              A successful home design isn't simply about creating an attractive
              exterior. The design should also consider how the home functions
              and responds to its site.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Natural Light",
                text:
                  "Window placement, room orientation and the positioning of living spaces can all influence how natural light enters the property.",
              },
              {
                title: "Orientation",
                text:
                  "The orientation of your block can influence the placement of rooms, windows and outdoor spaces.",
              },
              {
                title: "Functionality",
                text:
                  "Room sizes, circulation, storage, access and the relationship between different areas can all influence how comfortable and functional a home feels.",
              },
              {
                title: "Storage",
                text:
                  "Storage requirements can be considered during the design process rather than added as an afterthought.",
              },
              {
                title: "Indoor & Outdoor Connection",
                text:
                  "Living areas can be designed to connect naturally with outdoor spaces where appropriate.",
              },
              {
                title: "Long-Term Living",
                text:
                  "Considering future family, working and lifestyle requirements can help create a home that remains practical for longer.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border-t border-[color:var(--hair)] pt-6"
              >
                <h3 className="font-display text-[24px]">{item.title}</h3>
                <p className="mt-4 text-[16px] leading-[1.7]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR BLOCK */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <Reveal>
          <h2 className="font-display text-[32px] md:text-[44px]">
            Design & Build for Your Melbourne Block
          </h2>

          <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
            The characteristics of your property can have a major influence on
            the design and construction of your home.
          </p>

          <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
            A narrow block may require a different design approach from a large
            suburban property. A sloping block can introduce different
            construction considerations.
          </p>

          <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
            For these reasons, the design should respond to the property rather
            than attempting to force an unsuitable design onto it.
          </p>
        </Reveal>
      </section>

      {/* BUILDING CUSTOM HOME */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <h2 className="font-display text-[32px] md:text-[44px]">
              Building a Custom Home in Melbourne
            </h2>

            <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
              Melbourne includes a diverse range of residential properties,
              from established inner-city homes and suburban blocks through to
              newer developments and growing communities.
            </p>

            <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
              A successful custom home should respond to the site and the people
              who will live there.
            </p>

            <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
              Apollo Builders' design and build approach brings these
              considerations together with the construction process.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <Reveal>
          <h2 className="font-display text-[32px] md:text-[44px]">
            Areas We Service Across Melbourne
          </h2>

          <p className="mt-6 max-w-4xl text-[16px] leading-[1.7]">
            Apollo Builders provides residential building services throughout
            Melbourne and surrounding metropolitan areas.
          </p>

          <List items={serviceAreas} />

          <p className="mt-8 max-w-4xl text-[16px] leading-[1.7]">
            If you're unsure whether Apollo Builders services your property,
            contact the team to discuss your location and project.
          </p>
        </Reveal>
      </section>

      {/* INTERNAL LINKS */}
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

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Custom Home Design",
                path: "/custom-home-builders-melbourne/",
              },
              {
                title: "Knockdown Rebuild",
                path: "/knock-down-rebuild-melbourne/",
              },
              {
                title: "Melbourne Home Builders",
                path: "/melbourne-home-builders/",
              },
              {
                title: "Discuss Your Project",
                path: "/contact-us/",
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
      </section>

      {/* FINAL CTA */}
      <section className="bg-[color:var(--ink-black)] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <h2 className="max-w-4xl font-display text-[36px] text-white md:text-[54px]">
              Start Designing Your Melbourne Home
            </h2>

            <p className="mt-8 max-w-3xl text-[17px] leading-[1.7] text-white/80">
              Your new home begins long before construction starts. From the
              initial consultation and site assessment through to design,
              planning, construction and completion, Apollo Builders can discuss
              your project and help you understand the next steps.
            </p>

            <h3 className="mt-10 font-display text-[28px] text-white">
              Ready to Design & Build Your Melbourne Home?
            </h3>

            <p className="mt-5 max-w-3xl text-[17px] leading-[1.7] text-white/80">
              Talk to Apollo Builders about your property, ideas and building
              goals.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact-us/"
                className="inline-flex items-center gap-2 border border-white px-6 py-4 text-white transition-colors hover:bg-white hover:text-black"
              >
                Discuss Your Project
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              <Link
                to="/contact-us/"
                className="inline-flex items-center gap-2 border border-white px-6 py-4 text-white transition-colors hover:bg-white hover:text-black"
              >
                Request a Consultation
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}