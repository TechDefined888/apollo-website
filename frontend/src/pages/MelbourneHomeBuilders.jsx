import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import SEO, {
  breadcrumbSchema,
  localBusiness,
  faqSchema,
} from "@/components/SEO";

import { Reveal, MaskLines } from "@/components/Reveal";

export default function MelbourneHomeBuilders() {
  const canonical = "/melbourne-home-builders/";

  const faqs = [
    {
      q: "How do I choose the right home builder in Melbourne?",
      a:
        "Look for a builder with relevant residential experience, a strong portfolio, clear communication, transparent pricing and a building process that you understand. It is also important to choose a builder whose approach and experience are appropriate for the type of project you are planning.",
    },
    {
      q: "Does Apollo Builders build new homes in Melbourne?",
      a:
        "Yes. Apollo Builders undertakes new residential construction across Melbourne’s South and South-Eastern suburbs.",
    },
    {
      q: "Does Apollo Builders offer custom home builds?",
      a:
        "Yes. Apollo Builders works on custom residential projects designed around individual homeowner requirements.",
    },
    {
      q: "Does Apollo Builders offer knockdown rebuilds?",
      a:
        "Apollo Builders works on new home construction, including custom homes and knockdown-rebuild projects.",
    },
    {
      q: "Does Apollo Builders renovate existing homes?",
      a:
        "Yes. Apollo Builders undertakes full home renovations as well as kitchen, bathroom and other residential renovation projects.",
    },
    {
      q: "Does Apollo Builders build home extensions?",
      a:
        "Yes. Home extensions form part of Apollo Builders' residential building services.",
    },
    {
      q: "What areas does Apollo Builders service?",
      a:
        "Apollo Builders focuses on Melbourne’s South and South-Eastern suburbs, including Brighton, Mentone, Cheltenham, Hampton, Altona Meadows, Bentleigh, Mordialloc and surrounding areas.",
    },
    {
      q: "How long does a new home build take?",
      a:
        "Apollo Builders generally estimates approximately four to eight months for new home construction. The actual timeframe will depend on the size, complexity, site and requirements of the project.",
    },
    {
      q: "Can I get a quote for my building project?",
      a:
        "Yes. Apollo Builders offers an initial consultation to discuss your property, requirements and project objectives before preparing a quotation.",
    },
    {
      q: "What types of residential projects does Apollo Builders take on?",
      a:
        "Apollo Builders focuses on larger residential projects including new home builds, custom homes, knockdown rebuilds, full home renovations, extensions, kitchen renovations, bathroom renovations, decks and alfresco areas.",
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
          name: "Melbourne Home Builders",
          path: canonical,
        },
      ]),
      localBusiness(),
      faqSchema(faqs),
    ],
  };

  return (
    <div data-testid="melbourne-home-builders-page">
      <SEO
        title="Melbourne Home Builders | Custom & New Homes | Apollo Builders"
        description="Looking for Melbourne home builders? Apollo Builders delivers custom homes, new builds, renovations, extensions and knockdown rebuilds across Melbourne's South-East."
        path={canonical}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="w-full min-h-[calc(100vh-80px)] flex items-center">
        <div className="mx-auto w-full max-w-[1600px] px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <Reveal>
                <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                  Melbourne Residential Builders
                </div>
              </Reveal>

              <h1 className="mt-6 max-w-[18ch] font-display text-[40px] leading-[0.98] tracking-[-0.03em] text-[color:var(--ink-black)] md:text-[64px] lg:text-[72px] xl:text-[82px]">
                <MaskLines lines={["Melbourne Home Builders."]} />
              </h1>

              <Reveal delay={0.05}>
                <div className="max-w-3xl">
                  <p className="mt-8 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Building a home is one of the biggest projects you will undertake.
                    Whether you are starting with a vacant block, replacing an
                    existing house, extending your current home or undertaking a
                    major renovation, the builder you choose can have a significant
                    impact on the experience and the finished result.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Apollo Builders works with homeowners across Melbourne&apos;s
                    South and South-East to deliver residential building projects
                    with a focus on thoughtful planning, quality workmanship, clear
                    communication and reliable project management.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    From the first conversation through to construction and handover,
                    our approach is centred around understanding how you want your
                    home to work, establishing a clear scope and managing the project
                    carefully from start to finish.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    If you are considering a new home, custom build, knockdown
                    rebuild, renovation or extension, Apollo Builders can help you
                    understand the process and determine the right approach for your
                    property.
                  </p>

                  <div className="mt-10">
                    <Link
                      to="/contact-us/"
                      className="btn-navy"
                      data-testid="melbourne-home-builders-hero-cta"
                    >
                      Get A Free Quote

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

            {/* Right Image */}
            <Reveal
              className="lg:col-span-5"
              delay={0.1}
            >
              <div className="relative overflow-hidden bg-[color:var(--cream)]">
                <div className="aspect-[4/5] lg:min-h-[650px]">
                  <img
                    src="/images/apollo/new-home-builders-berwick.jpg"
                    alt="New residential home built in Berwick by Apollo Builders"
                    className="h-full w-full object-cover"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>

                <div className="absolute bottom-0 left-0 bg-[color:var(--ink-black)] px-6 py-4 text-white">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold)]">
                    Apollo Builders
                  </span>

                  <p className="mt-1 font-display text-[20px]">
                    Residential Building
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Building Homes Around the Way You Live */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Our Approach
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Building Homes Around the Way You Live
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              A well-designed home should do more than look good.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              It should work for your lifestyle, suit the site and provide the
              functionality you need today while allowing for the way your
              household may change over time.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              For some homeowners, that means creating a spacious family home
              with multiple living areas. For others, it may mean opening up an
              older property, adding an extension, improving the connection
              between indoor and outdoor spaces or creating a more functional
              kitchen.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Every project begins with different priorities.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              That is why Apollo Builders takes a practical approach to
              residential construction. Before work begins, we take the time to
              understand your property, your objectives, the proposed scope and
              the outcome you want to achieve.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              The result is a building process based around your project rather
              than a one-size-fits-all approach.
            </p>
          </Reveal>
        </div>
      </section>

      {/* New Home Builders Melbourne */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                New Home Builds
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                New Home Builders Melbourne
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Building a new home gives you the opportunity to start with a
                blank canvas.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Rather than adapting an existing property to suit your needs, a
                new build allows the layout, spaces, finishes and functionality
                of the home to be considered from the beginning.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Apollo Builders undertakes new residential construction across
                Melbourne&apos;s South and South-Eastern suburbs, working with
                homeowners to create practical and carefully considered homes.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A successful new home project starts well before construction
                begins.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                The planning process may involve considering:
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
                {[
                  "The block and site conditions",
                  "The size and layout of the home",
                  "Number of bedrooms and bathrooms",
                  "Living and entertaining requirements",
                  "Indoor and outdoor spaces",
                  "Storage",
                  "Natural light",
                  "Finishes and fixtures",
                  "Budget",
                  "Construction requirements",
                  "Preferred timeframe",
                ].map((item) => (
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
                These decisions influence how the finished property looks,
                feels and functions.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Whether you are building your first home, creating a larger
                family residence or developing a custom property around your
                lifestyle, careful planning provides the foundation for a
                successful build.
              </p>

              <div className="mt-10">
                <Link to="/new-home-builds/" className="btn-navy">
                  Explore New Home Builds
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

      {/* Custom Home Builders Melbourne */}
      <section className="w-full py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
          
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Left Label */}
            <Reveal className="lg:col-span-3">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Custom Homes
              </div>
            </Reveal>

            {/* Main Content */}
            <Reveal
              className="lg:col-span-5"
              delay={0.05}
            >
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px] lg:text-[50px]">
                Custom Home Builders Melbourne
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A custom home is an opportunity to create a property around the
                way you actually live.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Instead of starting with a standard floor plan and adapting your
                lifestyle around it, a custom approach allows greater
                consideration to be given to the spaces, features and
                functionality that matter to you.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                That might mean a generous kitchen connected to the main living
                area, a dedicated home office, additional bedrooms, increased
                storage or an alfresco space designed for entertaining.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                For growing families, practical considerations may include
                multiple living zones, durable finishes, functional bedrooms and
                additional storage.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                For people working from home, the priorities may be different.
                Natural light, acoustic separation, connectivity and a dedicated
                workspace can become much more important.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                The objective is not simply to create a larger house.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                It is to create a home that makes sense for the people who will
                live in it.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Apollo Builders works with homeowners undertaking custom
                residential projects across Melbourne&apos;s South and
                South-East, with an emphasis on practical planning, quality
                construction and clear communication throughout the project.
              </p>
            </Reveal>

            {/* Right Image */}
            <Reveal
              className="lg:col-span-4"
              delay={0.1}
            >
              <div className="lg:sticky lg:top-28">
                <div className="overflow-hidden bg-[color:var(--cream)]">
                  <div className="aspect-[4/5]">
                    <img
                      src="/images/apollo/melbourne-custom-home-builders-drouin.jpg"
                      alt="Custom residential home built by Apollo Builders in Melbourne"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>

                <div className="mt-5 border-t border-[color:var(--hair)] pt-4">
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--gold-dark)]">
                    Custom Residential Construction
                  </span>

                  <p className="mt-2 text-[14px] leading-[1.6] text-[color:var(--ink)]">
                    Residential building designed around lifestyle, functionality
                    and the requirements of the property.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* Knockdown Rebuild Melbourne */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Rebuild
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                Knockdown Rebuild Melbourne
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Sometimes renovating an existing property is not the most
                practical option.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                If an older home has significant structural limitations, an
                unsuitable layout or requires extensive work to achieve the
                result you want, a knockdown rebuild may provide an alternative.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A knockdown rebuild involves replacing the existing dwelling
                with a new home designed for the site.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                For homeowners who already love their location but have
                outgrown their current property, this can provide an
                opportunity to remain in the suburb while creating a home that
                better suits their requirements.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A knockdown rebuild may be worth considering when:
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
                {[
                  "The existing layout no longer works",
                  "The property requires extensive renovation",
                  "Additional bedrooms or living areas are needed",
                  "The existing structure presents limitations",
                  "You want a contemporary floor plan",
                  "Indoor and outdoor living could be improved",
                  "A substantial renovation would be required to achieve the desired result",
                ].map((item) => (
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
                Every property is different, so the suitability of a knockdown
                rebuild depends on the site, existing dwelling, project
                objectives and proposed scope.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                The right place to start is a conversation about what you want
                to achieve.
              </p>

              <div className="mt-10">
                <Link to="/contact-us/" className="btn-navy">
                  Discuss Your Project
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

      {/* Home Renovations Melbourne */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Renovations
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Home Renovations Melbourne
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              A new home is not always the answer.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              In many cases, an existing property has good foundations but no
              longer works for the people living in it. A carefully planned
              renovation can transform the way the home functions without
              requiring you to leave the property or suburb you already know.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Apollo Builders undertakes residential renovations across
              Melbourne, including larger projects involving multiple areas of
              an existing home.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Depending on the property and scope, a renovation may include:
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
              {[
                "Reconfiguring internal spaces",
                "Creating open-plan living",
                "Updating a kitchen",
                "Renovating bathrooms",
                "Adding living areas",
                "Improving storage",
                "Updating finishes",
                "Improving indoor-outdoor connections",
                "Modernising an older home",
                "Creating more functional spaces",
              ].map((item) => (
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
              The challenge with renovation work is that the new construction
              needs to work with what is already there.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Existing structures, layouts and finishes all need to be
              considered. The objective should be a finished home where the new
              work feels intentional and integrated rather than simply attached
              to the original property.
            </p>

            <div className="mt-10">
              <Link to="/home-renovations/" className="btn-navy">
                Explore Home Renovations
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

      {/* Home Extensions Melbourne */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Extensions
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                Home Extensions Melbourne
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                When your existing home no longer provides enough space, moving
                is not necessarily the only solution.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A well-planned extension can provide additional room while
                allowing you to remain in the home and neighbourhood you
                already know.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Apollo Builders works on residential extensions designed to
                complement the existing property and improve its functionality.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Depending on your requirements, an extension could create:
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
                {[
                  "An additional bedroom",
                  "A larger kitchen",
                  "More living space",
                  "A dining area",
                  "A second living zone",
                  "A home office",
                  "An alfresco area",
                  "Better indoor-outdoor flow",
                ].map((item) => (
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
                Planning is particularly important when extending an existing
                home.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                The new section needs to work with the existing structure and
                layout while maintaining a cohesive relationship between old
                and new.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A successful extension should feel like part of the home rather
                than an afterthought.
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* Kitchen & Bathroom Renovations */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Interior Renovations
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Kitchen &amp; Bathroom Renovations
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Kitchens and bathrooms are often central to how a home functions.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              A kitchen renovation can improve the way people cook, entertain,
              store belongings and interact with the rest of the house.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Depending on the project, this may involve changes to:
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
              {[
                "Layout",
                "Storage",
                "Bench space",
                "Lighting",
                "Appliances",
                "Finishes",
                "Functionality",
                "Connection to adjoining living areas",
              ].map((item) => (
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
              Bathroom renovations can similarly improve both functionality and
              everyday comfort through changes to the layout, fixtures, storage,
              lighting, finishes and overall use of space.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              For larger renovation projects, kitchens and bathrooms can also
              form part of a broader transformation of the property.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/kitchen-renovations/" className="btn-navy">
                Kitchen Renovations
                <ArrowUpRight
                  className="h-4 w-4"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>

              <Link to="/bathroom-renovations/" className="btn-navy">
                Bathroom Renovations
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

      {/* Outdoor Living & Alfresco Areas */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Outdoor Living
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                Outdoor Living &amp; Alfresco Areas
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                For many Melbourne homeowners, outdoor space is an important
                part of the home.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A well-designed outdoor area can provide additional space for
                entertaining, dining, relaxing and spending time with family.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Apollo Builders can help create practical outdoor spaces such as
                decks and alfresco areas that complement the existing property.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                An outdoor living area may provide space for:
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
                {[
                  "Entertaining",
                  "Family gatherings",
                  "Outdoor dining",
                  "Relaxing",
                  "Barbecues",
                  "Indoor-outdoor living",
                ].map((item) => (
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
                The best outdoor spaces are considered as part of the overall
                home rather than as an isolated addition.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                The relationship between the internal living areas, doors,
                windows, deck, alfresco and surrounding property can have a
                significant influence on how the finished space is used.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Apollo Builders */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Why Apollo Builders
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Why Choose Apollo Builders?
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Choosing between residential builders can be difficult.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Price is naturally an important consideration, but it should not
              be the only factor.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              A building project involves a significant investment of time and
              money. Communication, planning, workmanship and project
              management can all influence your experience along the way.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Apollo Builders focuses on providing homeowners with a
              straightforward building process supported by careful planning,
              quality workmanship and ongoing communication.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="border-t border-[color:var(--hair)] pt-6">
                <h3 className="font-display text-[24px] text-[color:var(--ink-black)]">
                  Fully Licensed &amp; Insured
                </h3>

                <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink)]">
                  Working with a properly licensed and insured builder provides
                  an important foundation for a residential project.
                </p>

                <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink)]">
                  Apollo Builders operates as a professional residential
                  building business with a focus on quality project delivery.
                </p>
              </div>

              <div className="border-t border-[color:var(--hair)] pt-6">
                <h3 className="font-display text-[24px] text-[color:var(--ink-black)]">
                  Fixed-Price Quotations
                </h3>

                <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink)]">
                  Understanding the expected scope and cost of a project before
                  construction begins is important.
                </p>

                <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink)]">
                  Apollo Builders provides fixed-price quotations designed to
                  give homeowners greater clarity around the proposed work and
                  associated project costs.
                </p>

                <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink)]">
                  The final cost of any project will depend on factors such as
                  its size, specifications, materials, site conditions and
                  overall scope.
                </p>
              </div>

              <div className="border-t border-[color:var(--hair)] pt-6">
                <h3 className="font-display text-[24px] text-[color:var(--ink-black)]">
                  Clear Communication
                </h3>

                <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink)]">
                  Building or renovating a home involves many moving parts.
                </p>

                <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink)]">
                  Good communication helps homeowners understand what is
                  happening at each stage and what needs to happen next.
                </p>

                <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink)]">
                  Apollo Builders maintains communication throughout the
                  project, from the initial consultation through to completion
                  and handover.
                </p>
              </div>

              <div className="border-t border-[color:var(--hair)] pt-6">
                <h3 className="font-display text-[24px] text-[color:var(--ink-black)]">
                  Quality Workmanship
                </h3>

                <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink)]">
                  The finished result matters.
                </p>

                <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink)]">
                  Quality construction is about more than completing a project.
                  It is about delivering work that is carefully considered,
                  appropriately constructed and suited to the requirements of
                  the homeowner.
                </p>
              </div>

              <div className="border-t border-[color:var(--hair)] pt-6 md:col-span-2">
                <h3 className="font-display text-[24px] text-[color:var(--ink-black)]">
                  Local Focus
                </h3>

                <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink)]">
                  Apollo Builders focuses on Melbourne&apos;s South and
                  South-Eastern suburbs.
                </p>

                <p className="mt-4 max-w-3xl text-[16px] leading-[1.7] text-[color:var(--ink)]">
                  This local focus allows the team to work with homeowners
                  across established communities and understand the
                  requirements of residential projects in the areas where it
                  operates.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our Building Process */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Our Process
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                Our Building Process
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A clear process makes a building project easier to understand.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                While every project is different, Apollo Builders follows a
                structured approach from the initial discussion through to
                completion.
              </p>

              <div className="mt-10 space-y-8">
                {[
                  {
                    number: "01",
                    title: "Initial Consultation",
                    body:
                      "Every project begins with a conversation. We discuss your property, your ideas, your requirements, your budget and what you want to achieve. This helps establish the scope of the project and determine the appropriate next steps.",
                  },
                  {
                    number: "02",
                    title: "Planning & Quotation",
                    body:
                      "Once the requirements are understood, the project moves into planning and the proposed scope of work is developed. Careful planning helps identify requirements before construction begins and provides greater clarity around the project. A quotation is then prepared based on the agreed scope.",
                  },
                  {
                    number: "03",
                    title: "Project Commencement",
                    body:
                      "Once the project is ready to proceed, construction can begin. The required work is coordinated and the project is managed through its construction stages.",
                  },
                  {
                    number: "04",
                    title: "Progress Updates",
                    body:
                      "Communication continues throughout the build. Homeowners naturally want to understand what is happening with their property, so keeping you informed is an important part of the process.",
                  },
                  {
                    number: "05",
                    title: "Completion & Handover",
                    body:
                      "The final stage is completion and handover. The finished project is reviewed and the construction process is brought to completion.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="grid grid-cols-[56px_1fr] gap-4 border-t border-[color:var(--hair)] pt-6"
                  >
                    <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="font-display text-[24px] text-[color:var(--ink-black)]">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-[16px] leading-[1.7] text-[color:var(--ink)]">
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Melbourne Residential Building Projects */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Residential Projects
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Melbourne Residential Building Projects
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Experience is important, but homeowners also want to see what a
              builder has actually delivered.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Apollo Builders has completed residential projects across
              Melbourne&apos;s South, South-East and surrounding areas.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  title: "Drouin New Build",
                  text:
                    "A modern family home constructed from the ground up, with the project designed around contemporary family living.",
                  slug: "drouin-new-build",
                  image:
                    "/images/apollo/melbourne-custom-home-builders-drouin.jpg",
                  alt:
                    "New residential family home built in Drouin by Apollo Builders",
                },
                {
                  title: "Berwick New Build",
                  text:
                    "A two-storey residential home combining contemporary design with practical family functionality.",
                  slug: "berwick-new-build",
                  image:
                    "/images/apollo/new-home-builders-berwick.jpg",
                  alt:
                    "New two-storey residential home built in Berwick by Apollo Builders",
                },
                {
                  title: "Bentleigh East Renovation",
                  text:
                    "A significant renovation of an existing home involving the kitchen, bathroom and living areas.",
                  slug: "bentleigh-east-renovation",
                  image:
                    "/images/apollo/melbourne-home-renovation-bentleigh-east.jpg",
                  alt:
                    "Home renovation project in Bentleigh East Melbourne",
                },
              ].map((project) => (
                <Link
                  key={project.slug}
                  to={`/our-projects/${project.slug}/`}
                  className="group flex h-full flex-col border-t border-[color:var(--hair)] pt-6"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[color:var(--cream)]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col pt-6">
                    <h3 className="font-display text-[24px] leading-[1.1] text-[color:var(--ink-black)] md:text-[26px]">
                      {project.title}
                    </h3>

                    <p className="mt-4 flex-1 text-[16px] leading-[1.7] text-[color:var(--ink)]">
                      {project.text}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em] text-[color:var(--gold-dark)]">
                      View Project
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <Link to="/our-projects/" className="btn-navy">
                View All Projects
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

      {/* Areas We Service */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Service Areas
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                Areas We Service
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Apollo Builders works with homeowners across Melbourne&apos;s
                South and South-Eastern suburbs.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Our service areas include:
              </p>

              <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Brighton",
                  "Mentone",
                  "Cheltenham",
                  "Hampton",
                  "Altona Meadows",
                  "Bentleigh",
                  "Mordialloc",
                  "Bentleigh East",
                  "Moorabbin",
                  "Berwick",
                  "Clyde",
                  "Drouin",
                  "Endeavour Hills",
                  "Surrounding Melbourne suburbs",
                ].map((suburb) => (
                  <div
                    key={suburb}
                    className="flex items-center gap-3 text-[16px] text-[color:var(--ink)]"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                    {suburb}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                If you are located nearby and are unsure whether your property
                falls within our service area, get in touch to discuss your
                project.
              </p>

              <div className="mt-10">
                <Link to="/contact-us/" className="btn-navy">
                  Check Your Area
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

      {/* Home Builders in Melbourne's South-East */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Melbourne South-East
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Home Builders in Melbourne&apos;s South-East
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Melbourne&apos;s South and South-East include a diverse mix of
              established homes, newer developments and properties with
              opportunities for renovation, extension and redevelopment.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Every site presents its own considerations.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Whether you are building a new home, transforming an existing
              property or considering a knockdown rebuild, understanding the
              site and planning the project properly is an important part of
              the process.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Choosing a Home Builder */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Choosing a Builder
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                What Should You Consider When Choosing a Home Builder?
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Choosing a builder should involve more than comparing the
                cheapest quotation.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Before committing to a building company, consider:
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
                {[
                  "Relevant residential experience",
                  "Previous projects",
                  "Communication",
                  "Project scope",
                  "Pricing and inclusions",
                  "Building process",
                  "Service area",
                  "Quality of workmanship",
                ].map((item) => (
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
                It is also worth considering how comfortable you feel
                communicating with the builder.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A building project can take months from planning through to
                completion. Having a clear understanding of what is involved
                and knowing who you can speak to throughout the process can
                make a substantial difference to the overall experience.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cost */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Project Costs
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              How Much Does It Cost to Build a Home in Melbourne?
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              There is no single price for building a home in Melbourne.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              The cost of a project can vary significantly depending on the
              size and design of the property, site conditions, materials,
              finishes and complexity.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              Factors that may influence the overall cost include:
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
              {[
                "Site conditions",
                "Home size",
                "Number of storeys",
                "Architectural complexity",
                "Structural requirements",
                "Kitchen specifications",
                "Bathroom specifications",
                "Flooring",
                "Windows and doors",
                "Fixtures",
                "Appliances",
                "Landscaping",
                "Outdoor living areas",
                "Engineering requirements",
                "Planning requirements",
                "Material selections",
              ].map((item) => (
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
              For that reason, an individual project should be assessed on its
              own requirements rather than relying on a generic figure.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
              The most useful way to understand the likely cost of your project
              is to discuss your requirements with a professional builder and
              obtain a detailed quotation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeframes */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Timeframes
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                How Long Does It Take to Build a Home in Melbourne?
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Construction timeframes vary from project to project.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                As a general guide, Apollo Builders currently estimates:
              </p>

              <ul className="mt-8 space-y-4 border-t border-[color:var(--hair)] pt-8">
                {[
                  "Kitchen and bathroom renovations: approximately 3–6 weeks",
                  "Full home renovations: approximately 8–16 weeks",
                  "New home builds: approximately 4–8 months",
                ].map((item) => (
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
                These are general guides rather than guaranteed completion
                dates.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Actual construction time can be affected by the size and
                complexity of the project, planning requirements, site
                conditions, materials, approvals and other project-specific
                considerations.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A realistic timeframe should therefore be discussed as part of
                the planning process.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              FAQ
            </div>
          </Reveal>

          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
              Frequently Asked Questions
            </h2>

            <div className="mt-10">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group border-t border-[color:var(--hair)] py-6"
                >
                  <summary className="cursor-pointer list-none font-display text-[22px] text-[color:var(--ink-black)] md:text-[24px]">
                    <span className="flex items-center justify-between gap-6">
                      {faq.q}

                      <span
                        className="text-[color:var(--gold-dark)] transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </span>
                  </summary>

                  <p className="mt-4 max-w-3xl text-[16px] leading-[1.7] text-[color:var(--ink)]">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[color:var(--ink-black)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <div className="max-w-4xl">
              <div className="tracking-eyebrow text-[color:var(--gold)]">
                Start Your Project
              </div>

              <h2 className="mt-6 font-display text-[36px] leading-[1.05] tracking-[-0.02em] text-white md:text-[52px]">
                Build Your Melbourne Home With Apollo Builders
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-white/80 md:text-[17px]">
                Choosing the right builder is an important decision.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-white/80 md:text-[17px]">
                Whether you are planning a new custom home, replacing an
                existing property, renovating the home you already own or
                creating additional space with an extension, the quality of the
                planning and construction process matters.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-white/80 md:text-[17px]">
                Apollo Builders works with homeowners across Melbourne&apos;s
                South and South-East to deliver residential building projects
                around the way people actually live.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-3 text-[16px] text-white/80 sm:grid-cols-2">
                {[
                  "New home builds",
                  "Custom homes",
                  "Knockdown rebuilds",
                  "Home renovations",
                  "Home extensions",
                  "Kitchen renovations",
                  "Bathroom renovations",
                  "Decks and alfresco areas",
                  "Residential construction",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                    {item}
                  </li>
                ))}
              </ul>

              <h3 className="mt-12 font-display text-[28px] text-white">
                Request a Free Quote
              </h3>

              <p className="mt-5 text-[16px] leading-[1.7] text-white/80 md:text-[17px]">
                Ready to discuss your project with an experienced Melbourne
                home builder?
              </p>

              <p className="mt-5 text-[16px] leading-[1.7] text-white/80 md:text-[17px]">
                Contact Apollo Builders to arrange an initial consultation and
                discuss your building requirements.
              </p>

              <p className="mt-5 text-[16px] leading-[1.7] text-white/80 md:text-[17px]">
                Whether you are planning a new home, custom build, knockdown
                rebuild, renovation or extension, we can help you understand
                the next steps.
              </p>

              <div className="mt-10">
                <Link to="/contact-us/" className="btn-gold">
                  Get A Free Quote
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
      </section>
    </div>
  );
}