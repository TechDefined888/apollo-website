import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import PhotoFrame from "@/components/PhotoFrame";
import { projects } from "@/lib/data";
import SEO, { breadcrumbSchema } from "@/components/SEO";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/our-projects" replace />;
  }

  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Our Projects", path: "/our-projects/" },
        { name: project.name, path: `/our-projects/${project.slug}/` },
      ]),
      {
        "@type": "CreativeWork",
        name: project.name,
        description: project.description,
        image: project.gallery || [project.hero],
        author: { "@type": "Organization", name: "Apollo Builders" },
        locationCreated: {
          "@type": "Place",
          name: `${project.suburb}, Melbourne VIC`,
        },
      },
    ],
  };

  return (
    <div data-testid={`project-detail-${project.slug}`}>
      <SEO
        title={`${project.name} — Apollo Builders | ${project.suburb} ${project.type}`}
        description={`${project.name}: ${project.description} Delivered by Apollo Builders in ${project.suburb}, Melbourne South-East.`}
        path={`/our-projects/${project.slug}/`}
        image={project.hero}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-12 md:pt-20 pb-8 md:pb-12 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
          <Link to="/our-projects" className="link-under">Projects</Link>
          <span className="mx-2 opacity-40">/</span>
          <span>{project.suburb}</span>
        </div>
        <h1 className="font-display text-[40px] md:text-[64px] lg:text-[80px] leading-[0.96] tracking-[-0.03em] text-[color:var(--ink-black)] mt-6 max-w-[18ch]">
          <MaskLines lines={[project.name + "."]} />
        </h1>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] tracking-[0.22em] uppercase text-[color:var(--ink-soft)]">
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[color:var(--gold)]" strokeWidth={1.5} />
            {project.suburb}, VIC
          </span>
          <span className="text-[color:var(--gold-dark)]">{project.type}</span>
        </div>
      </section>

      {/* Hero image */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-16 md:pb-24">
        <Reveal>
          <PhotoFrame
            src={project.hero}
            alt={project.imageAlt}
            className="aspect-[21/9]"
            eyebrow={project.type}
            label={project.name}
          />
        </Reveal>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-4">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Overview</div>
        </Reveal>
        <Reveal className="md:col-span-8" delay={0.05}>
          <h2 className="font-display text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)]">
            {project.description}
          </h2>
          {project.scope?.length ? (
            <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 border-t border-[color:var(--hair)] pt-8">
              {project.scope.map((s) => (
                <li key={s} className="flex items-baseline gap-3 text-[color:var(--ink)] text-[16px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] mt-2 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      </section>

      {/* Gallery — only when at least one gallery image is present */}
      {project.gallery?.some(Boolean) ? (
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)] mb-8">Gallery</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            {project.gallery.filter(Boolean).map((src, i) => (
              <Reveal key={src + i} delay={(i % 2) * 0.05}>
                <PhotoFrame
                  src={src}
                  alt={`${project.name} — photograph ${i + 1}`}
                  className={i % 3 === 0 ? "aspect-[4/3]" : "aspect-[16/11]"}
                />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}

      {/* Other projects */}
      <section className="bg-[color:var(--cream)] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <div>
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">More work</div>
              <h2 className="font-display text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-3">
                Other recent projects.
              </h2>
            </div>
            <Link to="/our-projects" className="btn-navy">
              View All <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/our-projects/${p.slug}`}
                data-testid={`related-project-${p.slug}`}
                className="group block"
              >
                <PhotoFrame
                  src={p.image}
                  alt={p.imageAlt}
                  className="aspect-[4/3]"
                  eyebrow={p.type}
                  label={p.name}
                />
                <div className="mt-5">
                  <div className="tracking-eyebrow text-[color:var(--gold-dark)] text-[11px]">
                    {p.type}
                  </div>
                  <h3 className="font-display text-[22px] md:text-[24px] leading-[1.15] tracking-[-0.02em] text-[color:var(--ink-black)] mt-2">
                    {p.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
        <Reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="font-display text-[32px] md:text-5xl tracking-[-0.02em] text-[color:var(--ink-black)] max-w-2xl leading-[1.05]">
            Inspired by this project? Let&rsquo;s discuss yours.
          </h2>
          <Link to="/contact-us" data-testid="project-cta" className="btn-navy">
            Get a Free Quote <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
