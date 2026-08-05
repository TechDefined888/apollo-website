import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import { projects } from "@/lib/data";
import SEO, { breadcrumbSchema } from "@/components/SEO";

export default function Projects() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Our Projects", path: "/our-projects/" },
      ]),
      {
        "@type": "ItemList",
        itemListElement: projects.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `https://apollobuilders.com.au/our-projects/${p.slug}/`,
          name: p.name,
        })),
      },
    ],
  };

  return (
    <div data-testid="projects-page">
      <SEO
        title="Our Projects — Apollo Builders | Melbourne South-East Renovations & New Builds"
        description="Explore Apollo Builders' completed new home builds and renovations across Melbourne's South-East — including Drouin, Bentleigh East, Berwick, Endevour Hills, Clyde and Altona Meadows."
        path="/our-projects/"
        jsonLd={jsonLd}
      />

      <section className="pt-16 md:pt-24 pb-12 md:pb-16 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Portfolio</div>
        <h1 className="font-display text-[40px] md:text-[64px] lg:text-[80px] leading-[0.96] tracking-[-0.03em] text-[color:var(--ink-black)] mt-6 max-w-[18ch]">
          <MaskLines lines={["Our projects."]} />
        </h1>
        <p className="mt-10 max-w-2xl text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.7]">
          Every project tells a story of quality craftsmanship, thoughtful design,
          and spaces brought back to life. Explore a selection of recent renovations,
          extensions and new builds delivered across Melbourne&rsquo;s South and South-Eastern suburbs.
        </p>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20">
          {projects.map((p, i) => (
            <Reveal key={p.slug} y={30} delay={(i % 2) * 0.08}>
              <Link
                to={`/our-projects/${p.slug}/`}
                data-testid={`project-card-${p.slug}`}
                className="group block"
              >
                <div className="frame aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    className="transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                      {p.type} · {p.suburb}
                    </div>
                    <h2 className="font-display text-[26px] md:text-[34px] leading-[1.1] tracking-[-0.02em] text-[color:var(--ink-black)] mt-3">
                      {p.name}
                    </h2>
                    <p className="mt-3 text-[color:var(--ink)] text-[15px] md:text-[16px] leading-[1.6] max-w-md">
                      {p.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="h-6 w-6 shrink-0 text-[color:var(--gold)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32">
        <Reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="font-display text-[32px] md:text-5xl tracking-[-0.02em] text-[color:var(--ink-black)] max-w-2xl leading-[1.05]">
            Have a project of your own in mind? We&rsquo;d love to help bring it to life.
          </h2>
          <Link to="/contact-us/" data-testid="projects-cta" className="btn-navy">
            Get a Free Quote <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
