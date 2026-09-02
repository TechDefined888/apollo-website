import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import SEO, {
  breadcrumbSchema,
  localBusiness,
  faqSchema,
} from "@/components/SEO";

import { Reveal, MaskLines } from "@/components/Reveal";

export default function HomeRenovationsMelbourne() {
  const canonical = "/home-renovations-melbourne/";

  const faqs = [
    {
      q: "How much does a home renovation cost in Melbourne?",
      a:
        "The cost depends on the size of the property, structural changes, materials, finishes and scope of construction. A detailed project assessment is required before an accurate price can be established.",
    },
    {
      q: "How long does a home renovation take?",
      a:
        "Project duration varies depending on the scope and complexity of the renovation. Larger renovations naturally require more planning and construction time.",
    },
    {
      q: "Can I renovate my entire house?",
      a:
        "Yes. A whole-home renovation can combine multiple areas and construction requirements into one coordinated project.",
    },
    {
      q: "Can I renovate and extend my home at the same time?",
      a:
        "Yes. Combining renovation and extension works can be an effective way to improve both the existing areas and overall footprint of a property.",
    },
    {
      q: "Do you work in Melbourne's south-east?",
      a:
        "Apollo Builders' existing portfolio includes projects across Melbourne's south and south-east, including Bentleigh East, Endeavour Hills and other surrounding areas.",
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
          name: "Home Renovations Melbourne",
          path: canonical,
        },
      ]),
      localBusiness(),
      faqSchema(faqs),
    ],
  };

  const renovationServices = [
    "Kitchen renovations",
    "Bathroom renovations",
    "Living area renovations",
    "Open-plan transformations",
    "Internal alterations",
    "Flooring and finishes",
    "Outdoor living areas",
    "Alfresco spaces",
    "Structural changes",
    "Whole-home renovations",
  ];

  const renovationBenefits = [
    "Create a larger kitchen",
    "Connect the kitchen and living areas",
    "Improve natural light",
    "Create better storage",
    "Modernise bathrooms",
    "Improve the relationship between indoor and outdoor spaces",
    "Reconfigure unsuitable rooms",
    "Update outdated finishes",
    "Create more functional living areas",
  ];

  const process = [
    {
      title: "1. Initial consultation",
      text:
        "We begin by understanding your property, your goals and what you want to achieve.",
    },
    {
      title: "2. Understanding the project",
      text:
        "The existing property and proposed renovation are considered so the project can be approached realistically.",
    },
    {
      title: "3. Planning and design",
      text:
        "The proposed works are developed around your requirements and the property.",
    },
    {
      title: "4. Construction",
      text:
        "Once the project is ready to proceed, construction begins with the focus on quality workmanship and careful coordination.",
    },
    {
      title: "5. Completion",
      text:
        "The final stage is about completing the project and delivering a home that is ready for you to enjoy.",
    },
  ];

  const areas = [
    "Bentleigh East",
    "Endeavour Hills",
    "Altona Meadows",
    "Berwick",
    "Clyde",
    "Drouin",
  ];

  const reasons = [
    "Quality craftsmanship",
    "Thoughtful design",
    "Practical spaces",
    "Clear communication",
    "Detailed project planning",
    "Individual project requirements",
    "Complete renovation solutions",
  ];

  return (
    <div data-testid="home-renovations-melbourne-page">
      <SEO
        title="Home Renovations Melbourne | Apollo Builders"
        description="Transform your Melbourne home with Apollo Builders. We deliver complete home renovations, thoughtful design, quality construction and tailored renovation solutions."
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
                  Melbourne Home Renovations
                </div>
              </Reveal>

              <h1 className="mt-6 max-w-[18ch] font-display text-[40px] leading-[0.98] tracking-[-0.03em] text-[color:var(--ink-black)] md:text-[64px] lg:text-[72px] xl:text-[82px]">
                <MaskLines lines={["Home Renovations Melbourne"]} />
              </h1>

              <Reveal delay={0.05}>
                <div className="max-w-3xl">
                  <p className="mt-8 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Your home should work for the way you live. When an existing
                    property no longer provides the space, layout or
                    functionality your family needs, a well-planned renovation
                    can completely transform it without the need to leave the
                    home and start again.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Apollo Builders provides home renovation services across
                    Melbourne&apos;s south and south-eastern suburbs, helping
                    homeowners transform existing properties into functional,
                    comfortable and beautifully finished spaces.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    From individual areas such as kitchens and bathrooms through
                    to complete home renovations, our approach is centred around
                    understanding the property, understanding how you want to use
                    it and delivering a finished result that feels considered
                    from beginning to end.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Whether you have purchased an older property that needs a
                    complete transformation, your family has outgrown the
                    existing layout, or you simply want to modernise your home,
                    Apollo Builders can help turn the existing property into a
                    home that better suits your lifestyle.
                  </p>

                  <div className="mt-10">
                    <Link to="/contact-us/" className="btn-navy">
                      Start Your Renovation
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
                  alt="Home renovation project in Bentleigh East Melbourne by Apollo Builders"
                  className="h-[420px] w-full object-cover md:h-[560px] lg:h-[640px]"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Complete Home Renovations */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Complete Renovations
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                Complete Home Renovations in Melbourne
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A full home renovation is about much more than replacing
                finishes.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                The most successful renovations consider how the entire home
                connects. Rooms need to flow naturally into one another, living
                areas need to suit everyday use, storage needs to be practical
                and the finished design should feel cohesive rather than like a
                collection of individual upgrades.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Apollo Builders can help coordinate the construction of
                comprehensive renovation projects, including:
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
                {renovationServices.map((item) => (
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
                Our portfolio includes completed renovation work in areas
                including Bentleigh East, Endeavour Hills and Altona Meadows.
                These projects demonstrate the different ways an existing home
                can be transformed depending on the property&apos;s structure,
                the homeowner&apos;s requirements and the desired outcome.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Renovate Instead of Moving */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Transform Your Home
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Renovate Your Existing Home Instead of Moving
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Moving isn&apos;t always the best solution when your home no longer
              works for you.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              You may already love your location, your street, your garden or
              your connection to the local community. The problem may simply be
              the house itself.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              A renovation can allow you to retain the things you love about
              your property while changing the parts that no longer suit your
              lifestyle.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              For example, a renovation could:
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
              {renovationBenefits.map((item) => (
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
              The right renovation doesn&apos;t necessarily mean changing
              everything. Sometimes the best result comes from identifying what
              already works and improving what doesn&apos;t.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Designed Around You
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                Melbourne Home Renovations Designed Around Your Lifestyle
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Every home renovation is different.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A young family may need more open living space and practical
                storage. A growing family may need additional bedrooms or better
                separation between living zones. Other homeowners may want to
                modernise an older property while retaining elements of its
                original character.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Apollo Builders approaches each project around the individual
                property and the people who will live there.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Rather than applying the same renovation formula to every home,
                the objective is to create a result that makes sense for the
                property and its intended use.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Kitchen */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Kitchen Renovations
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Kitchen Renovations
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              The kitchen is often one of the most important areas of a
              renovation.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              A successful kitchen needs to look good, but it also needs to
              work.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Layout, storage, preparation space, appliance placement, lighting
              and connection to adjoining living areas all influence how useful
              the finished kitchen will be.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Apollo&apos;s renovation portfolio includes kitchen
              transformations as part of larger whole-home renovation projects.
              The Bentleigh East renovation, for example, involved the
              transformation of the kitchen, bathroom and living areas.
            </p>

            <div className="mt-10">
              <Link to="/kitchen-renovations/" className="btn-navy">
                Explore Kitchen Renovations
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

      {/* Bathroom */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Bathroom Renovations
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                Bathroom Renovations
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Bathrooms experience significant daily use, making functionality
                particularly important.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A renovation provides an opportunity to improve the layout,
                finishes, storage and overall usability of the space.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Whether the bathroom needs a modern update or forms part of a
                larger renovation, Apollo Builders can incorporate the bathroom
                into the wider design and construction process.
              </p>

              <div className="mt-10">
                <Link to="/bathroom-renovations/" className="btn-navy">
                  Explore Bathroom Renovations
                  <ArrowUpRight
                    className="h-4 w-4"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Open Plan */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Open-Plan Living
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Open-Plan Home Renovations
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Many older homes contain separate kitchens, dining rooms and
              living rooms that don&apos;t reflect how modern families use their
              homes.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Opening these areas can create a stronger connection between
              spaces and make the home feel larger and more usable.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              However, an open-plan renovation needs to consider more than
              simply removing walls.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              The new layout needs to account for structural requirements,
              circulation, natural light, kitchen positioning, furniture
              placement and the relationship between living areas.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Indoor Outdoor */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Indoor-Outdoor Living
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                Indoor-Outdoor Living
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Melbourne homeowners increasingly want their living spaces to
                connect naturally with the outdoors.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                An extension or renovation can create a stronger relationship
                between the kitchen, dining and outdoor areas.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Apollo&apos;s Endeavour Hills renovation included a new kitchen,
                bathroom and decked alfresco area, creating a more connected
                indoor-outdoor living environment.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <Reveal>
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
            Our Process
          </div>

          <h2 className="mt-5 max-w-4xl font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
            Our Home Renovation Process
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
      </section>

      {/* Areas */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Areas We Serve
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                Home Renovations Across Melbourne&apos;s South and South-East
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Apollo Builders works with homeowners across Melbourne&apos;s
                south and south-eastern suburbs.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Our existing project portfolio includes work in:
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
                {areas.map((item) => (
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
                If you&apos;re planning a renovation in Melbourne&apos;s south or
                south-east, speak with Apollo Builders about your project.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Apollo */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Why Apollo Builders
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Why Renovate With Apollo Builders?
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              A renovation is a significant investment in your home.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              The builder you choose needs to understand both the construction
              requirements and the outcome you&apos;re trying to achieve.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Apollo Builders focuses on:
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
              {reasons.map((item) => (
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
              Our portfolio demonstrates our experience across both renovations
              and new residential construction.
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

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "House Extensions Melbourne",
                path: "/house-extensions-melbourne/",
              },
              {
                title: "Kitchen Renovations",
                path: "/kitchen-renovations/",
              },
              {
                title: "Design & Build Melbourne",
                path: "/design-build-melbourne/",
              },
              {
                title: "View Our Projects",
                path: "/our-projects/",
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
            Home Renovations Melbourne FAQs
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
              Start Your Renovation
            </div>

            <h2 className="mt-5 max-w-4xl font-display text-[36px] leading-[1.02] tracking-[-0.02em] text-white md:text-[54px]">
              Start Your Melbourne Home Renovation
            </h2>

            <p className="mt-8 max-w-3xl text-[16px] leading-[1.7] text-white/80 md:text-[18px]">
              If you&apos;re considering renovating your Melbourne home, the
              first step is to discuss what you want to achieve.
            </p>

            <p className="mt-5 max-w-3xl text-[16px] leading-[1.7] text-white/80 md:text-[18px]">
              Whether you&apos;re planning a complete transformation or a more
              targeted renovation, Apollo Builders can help you understand the
              possibilities for your property.
            </p>

            <div className="mt-10">
              <Link
                to="/contact-us/"
                className="inline-flex items-center gap-2 border border-white px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black"
              >
                Contact Apollo Builders for a Renovation Consultation
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