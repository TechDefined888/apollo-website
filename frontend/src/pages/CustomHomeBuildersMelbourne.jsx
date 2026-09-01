import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import SEO, {
  breadcrumbSchema,
  localBusiness,
  faqSchema,
} from "@/components/SEO";

import { Reveal, MaskLines } from "@/components/Reveal";

export default function CustomHomeBuildersMelbourne() {
  const canonical = "/custom-home-builders-melbourne/";

  const faqs = [
    {
      q: "What is a custom home?",
      a:
        "A custom home is designed around your site, lifestyle, priorities and project requirements rather than using a standard one-size-fits-all design.",
    },
    {
      q: "Can Apollo Builders build two-storey custom homes?",
      a:
        "Yes. Apollo Builders works across a range of residential projects, including two-storey homes and individually planned new builds.",
    },
    {
      q: "Do you build custom homes in Melbourne's south-east?",
      a:
        "Apollo Builders focuses on Melbourne's south and south-east, with existing project experience in areas including Berwick, Clyde and Drouin.",
    },
    {
      q: "Can the home design be changed to suit my family?",
      a:
        "Yes. The purpose of a custom home is to create a design that responds to your household, site and the way you want to live.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        {
          name: "Custom Home Builders Melbourne",
          path: canonical,
        },
      ]),
      localBusiness(),
      faqSchema(faqs),
    ],
  };

  const customHomeFeatures = [
    "Site-specific planning",
    "Flexible floorplans",
    "Practical family living areas",
    "Kitchen and storage planning",
    "Indoor-outdoor connections",
    "Bedroom and bathroom layouts",
    "Two-storey design options",
    "Finishes selected around your project",
  ];

  const process = [
    {
      title: "1. Initial discussion",
      text:
        "We begin by understanding your site, your goals and the type of home you want to create.",
    },
    {
      title: "2. Project planning",
      text:
        "The site, layout requirements and construction considerations are reviewed before the design progresses.",
    },
    {
      title: "3. Design development",
      text:
        "The home is developed around your lifestyle, property and project requirements.",
    },
    {
      title: "4. Construction",
      text:
        "Once the project is ready, construction begins with a focus on quality workmanship and coordination.",
    },
    {
      title: "5. Completion",
      text:
        "The project is completed and prepared for you to move into and enjoy.",
    },
  ];

  return (
    <div data-testid="custom-home-builders-melbourne-page">
      <SEO
        title="Custom Home Builders Melbourne | Apollo Builders"
        description="Build a custom home in Melbourne with Apollo Builders. We create individually planned homes designed around your site, lifestyle and project requirements."
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
                  Custom Homes Melbourne
                </div>
              </Reveal>

              <h1 className="mt-6 max-w-[18ch] font-display text-[40px] leading-[0.98] tracking-[-0.03em] text-[color:var(--ink-black)] md:text-[64px] lg:text-[72px] xl:text-[82px]">
                <MaskLines lines={["Custom Home Builders Melbourne"]} />
              </h1>

              <Reveal delay={0.05}>
                <div className="max-w-3xl">
                  <p className="mt-8 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Building a custom home gives you the opportunity to create a
                    property that is designed around your site, your lifestyle
                    and the way you want to live.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Apollo Builders works with homeowners across Melbourne&apos;s
                    south and south-east to deliver new homes that respond to
                    individual project requirements rather than relying on a
                    standard one-size-fits-all approach.
                  </p>

                  <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[18px]">
                    Whether you&apos;re planning a modern family home, a
                    two-storey residence or a new property designed specifically
                    around your block, our focus is on creating a home that is
                    practical, considered and suited to everyday living.
                  </p>

                  <div className="mt-10">
                    <Link to="/contact-us/" className="btn-navy">
                      Discuss Your Custom Home
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
                  src="/images/apollo/melbourne-custom-home-builders-drouin.jpg"
                  alt="Custom home built in Drouin by Apollo Builders"
                  className="h-[420px] w-full object-cover md:h-[560px] lg:h-[640px]"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What is a custom home */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
            <Reveal className="md:col-span-4">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Custom Building
              </div>
            </Reveal>

            <Reveal className="md:col-span-8" delay={0.05}>
              <h2 className="font-display text-[32px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] md:text-[44px]">
                What Is a Custom Home?
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                A custom home is created around the individual property and the
                people who will live in it.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                Instead of starting with a standard layout and trying to make it
                fit, the project can consider the block, orientation, family
                requirements, room relationships, storage, outdoor areas and
                future use from the beginning.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7] text-[color:var(--ink)] md:text-[17px]">
                This gives homeowners greater flexibility to create a home that
                feels personal and makes better use of the site.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Modern living */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Modern Living
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[32px] md:text-[44px]">
              Custom Home Design for Modern Melbourne Living
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7]">
              A well-designed home should support the way you live every day.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              That may mean open living areas, a larger kitchen, better storage,
              a dedicated home office, private bedroom zones or a stronger
              connection between indoor and outdoor spaces.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              The right design depends on the family, the site and the outcome
              you want to achieve.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-4 border-t border-[color:var(--hair)] pt-8 sm:grid-cols-2">
              {customHomeFeatures.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--gold)]" />
                  {item}
                </li>
              ))}
            </ul>
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

            <Reveal className="md:col-span-8">
              <h2 className="font-display text-[32px] md:text-[44px]">
                Two-Storey Custom Homes
              </h2>

              <p className="mt-6 text-[16px] leading-[1.7]">
                A two-storey home can provide additional space while making
                efficient use of the available block.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                It can also allow different parts of the home to be separated,
                such as living areas downstairs and private bedroom spaces
                upstairs.
              </p>

              <p className="mt-6 text-[16px] leading-[1.7]">
                The layout should be planned carefully so the home feels
                connected rather than divided into separate levels.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Lifestyle */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Built Around You
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[32px] md:text-[44px]">
              New Homes Built Around Your Lifestyle
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7]">
              The biggest advantage of building a custom home is the opportunity
              to make decisions around your own priorities.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Instead of adapting your lifestyle to the house, the house can be
              planned around your lifestyle.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              This can influence everything from room sizes and storage through
              to natural light, entertaining areas and the relationship between
              the home and the backyard.
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
              The Custom Home Building Process
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

      {/* South East */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
              Melbourne South-East
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <h2 className="font-display text-[32px] md:text-[44px]">
              Custom Home Builders in Melbourne&apos;s South-East
            </h2>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Apollo Builders focuses on residential construction across
              Melbourne&apos;s south and south-east.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              Our existing new-home portfolio includes projects in Drouin,
              Clyde and Berwick, demonstrating experience across a range of
              residential locations and project types.
            </p>

            <p className="mt-6 text-[16px] leading-[1.7]">
              If you&apos;re planning a custom home in Melbourne&apos;s south-east,
              speak with Apollo Builders about your site and the type of home
              you want to create.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Internal links */}
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
                title: "Knock Down Rebuild Melbourne",
                path: "/knock-down-rebuild-melbourne/",
              },
              {
                title: "Design & Build Melbourne",
                path: "/design-build-builders-melbourne/",
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
            Custom Home Builders Melbourne FAQs
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

      {/* Final CTA */}
      <section className="bg-[color:var(--ink-black)] py-20 text-white md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <Reveal>
            <div className="tracking-eyebrow text-[color:var(--gold)]">
              Start Your Project
            </div>

            <h2 className="mt-5 max-w-4xl font-display text-[36px] leading-[1.02] text-white md:text-[54px]">
              Discuss Your Custom Home
            </h2>

            <p className="mt-8 max-w-3xl text-[17px] leading-[1.7] text-white/80">
              If you&apos;re planning a custom home in Melbourne, talk with
              Apollo Builders about your property, your requirements and the
              type of home you want to create.
            </p>

            <div className="mt-10">
              <Link
                to="/contact-us/"
                className="inline-flex items-center gap-2 border border-white px-6 py-4 text-white transition-colors hover:bg-white hover:text-black"
              >
                Discuss Your Custom Home
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}