import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowUpRight,
  MapPin,
  Calendar,
  Building2,
  CheckCircle2,
  Target,
  AlertTriangle,
  Sparkles,
} from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import { projects, projectProcess, services as siteServices } from "@/lib/data";
import SEO, { breadcrumbSchema } from "@/components/SEO";

/**
 * ProjectDetail — SEO case-study template.
 *
 * All 6 project pages share this template. When `overview`, `services`,
 * `goals`, `challenges` or `outcome` are provided on a project (data.js),
 * the corresponding case-study sections render. Projects without extended
 * data fall back gracefully to the original gallery-focused layout.
 *
 * Schema on this page:
 *   • BreadcrumbList — Home → Our Projects → <project name>
 *   • Article — full case-study article (headline, image, author, about)
 *   • Legacy CreativeWork retained for backwards compat with existing GSC
 */
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/our-projects/" replace />;
  }

  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);
  const path = `/our-projects/${project.slug}/`;
  const canonicalUrl = `https://apollobuilders.com.au${path}`;
  const hasCaseStudy =
    Array.isArray(project.overview) && project.overview.length > 0;

  // Resolve related service pages via slug lookup so link text stays in sync
  // with the site's actual service page titles.
  const relatedServiceObjects = (project.relatedServices || [])
    .map((s) => siteServices.find((svc) => svc.slug === s))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Our Projects", path: "/our-projects/" },
        { name: project.name, path },
      ]),
      {
        "@type": "Article",
        headline: `${project.name} — ${project.type} in ${project.suburb}`,
        description: project.seoIntro || project.description,
        image: (project.gallery || [project.hero]).map(
          (src) => `https://apollobuilders.com.au${src}`
        ),
        mainEntityOfPage: canonicalUrl,
        author: {
          "@type": "Organization",
          name: "Apollo Builders",
          url: "https://apollobuilders.com.au",
        },
        publisher: {
          "@type": "Organization",
          name: "Apollo Builders",
          logo: {
            "@type": "ImageObject",
            url: "https://apollobuilders.com.au/logo512.png",
          },
        },
        about: {
          "@type": "Place",
          name: `${project.suburb}, Melbourne VIC`,
        },
        articleSection: project.type,
      },
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
        title={`${project.name} — ${project.type} | Apollo Builders`}
        description={
          project.seoIntro ||
          `${project.name}: ${project.description} Delivered by Apollo Builders in ${project.suburb}, Melbourne South-East.`
        }
        path={path}
        image={project.hero}
        jsonLd={jsonLd}
      />

      {/* ═══ HERO ═══ */}
      <section className="pt-12 md:pt-20 pb-8 md:pb-12 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          data-testid={`project-breadcrumb-${project.slug}`}
          className="tracking-eyebrow text-[color:var(--gold-dark)]"
        >
          <Link to="/" className="link-under">Home</Link>
          <span className="mx-2 opacity-40">/</span>
          <Link to="/our-projects/" className="link-under">Our Projects</Link>
          <span className="mx-2 opacity-40">/</span>
          <span className="text-[color:var(--ink-black)]">{project.name}</span>
        </nav>

        <h1
          data-testid={`project-h1-${project.slug}`}
          className="font-display text-[40px] md:text-[64px] lg:text-[80px] leading-[0.96] tracking-[-0.03em] text-[color:var(--ink-black)] mt-6 max-w-[18ch]"
        >
          <MaskLines lines={[project.name + "."]} />
        </h1>

        {project.seoIntro && (
          <p className="mt-8 max-w-3xl text-[color:var(--ink)] text-[18px] md:text-[20px] leading-[1.55] font-display">
            {project.seoIntro}
          </p>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] tracking-[0.22em] uppercase text-[color:var(--ink-soft)]">
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-[color:var(--gold)]" strokeWidth={1.5} />
            {project.suburb}, VIC
          </span>
          <span className="flex items-center gap-2 text-[color:var(--gold-dark)]">
            <Building2 className="h-3.5 w-3.5" strokeWidth={1.5} />
            {project.type}
          </span>
          {project.completionYear && (
            <span className="flex items-center gap-2">
              <Calendar className="h-3.5 w-3.5 text-[color:var(--gold)]" strokeWidth={1.5} />
              Completed {project.completionYear}
            </span>
          )}
        </div>
      </section>

      {/* ═══ HERO IMAGE ═══ */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-16 md:pb-24">
        <Reveal>
          <div className="frame aspect-[21/9]">
            <img
              src={project.hero}
              alt={project.imageAlt}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </Reveal>
      </section>

      {/* ═══ PROJECT OVERVIEW (case-study body) ═══ */}
      {hasCaseStudy && (
        <section
          data-testid={`project-overview-${project.slug}`}
          className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
        >
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Project overview</div>
            <h2 className="mt-4 font-display text-[28px] md:text-[38px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)]">
              {project.description}
            </h2>
          </Reveal>
          <Reveal className="md:col-span-8 space-y-6" delay={0.05}>
            {project.overview.map((para, i) => (
              <p
                key={i}
                className="text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.8]"
              >
                {para}
              </p>
            ))}
          </Reveal>
        </section>
      )}

      {/* ═══ PROJECT DETAILS + SCOPE (visual info panel) ═══ */}
      <section
        data-testid={`project-details-${project.slug}`}
        className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-16 md:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Project details</div>
            <h2 className="mt-4 font-display text-[28px] md:text-[38px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)]">
              At a glance.
            </h2>
            <dl className="mt-8 space-y-5">
              <div className="border-b border-[color:var(--hair)] pb-4">
                <dt className="tracking-eyebrow text-[color:var(--ink-soft)]">Location</dt>
                <dd className="mt-1 text-[color:var(--ink-black)] text-[17px]">
                  {project.suburb}, VIC
                </dd>
              </div>
              <div className="border-b border-[color:var(--hair)] pb-4">
                <dt className="tracking-eyebrow text-[color:var(--ink-soft)]">Project type</dt>
                <dd className="mt-1 text-[color:var(--ink-black)] text-[17px]">
                  {project.type}
                </dd>
              </div>
              {project.completionYear && (
                <div className="border-b border-[color:var(--hair)] pb-4">
                  <dt className="tracking-eyebrow text-[color:var(--ink-soft)]">Completion</dt>
                  <dd className="mt-1 text-[color:var(--ink-black)] text-[17px]">
                    {project.completionYear}
                  </dd>
                </div>
              )}
              <div>
                <dt className="tracking-eyebrow text-[color:var(--ink-soft)]">Delivered by</dt>
                <dd className="mt-1 text-[color:var(--ink-black)] text-[17px]">
                  Apollo Builders
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-8">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Scope of works</div>
            <h3 className="mt-4 font-display text-[24px] md:text-[30px] leading-[1.1] tracking-[-0.02em] text-[color:var(--ink-black)]">
              Services completed on this build.
            </h3>
            <ul
              data-testid={`project-scope-${project.slug}`}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
            >
              {(project.services || project.scope || []).map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 border-b border-[color:var(--hair)] py-3"
                >
                  <CheckCircle2
                    className="h-4 w-4 mt-1 text-[color:var(--gold)] flex-shrink-0"
                    strokeWidth={1.75}
                  />
                  <span className="text-[color:var(--ink)] text-[15px] md:text-[16px] leading-[1.6]">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ HOMEOWNER GOALS + CHALLENGES ═══ */}
      {(project.goals?.length || project.challenges?.length) && (
        <section
          data-testid={`project-goals-${project.slug}`}
          className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {project.goals?.length ? (
            <Reveal>
              <div className="inline-flex items-center gap-3">
                <Target className="h-5 w-5 text-[color:var(--gold-dark)]" strokeWidth={1.5} />
                <span className="tracking-eyebrow text-[color:var(--gold-dark)]">Homeowner goals</span>
              </div>
              <h3 className="mt-4 font-display text-[26px] md:text-[32px] leading-[1.1] tracking-[-0.02em] text-[color:var(--ink-black)]">
                What the client wanted.
              </h3>
              <ul className="mt-8 space-y-4">
                {project.goals.map((g, i) => (
                  <li key={i} className="flex items-start gap-4 border-b border-[color:var(--hair)] pb-4">
                    <span className="font-display text-[color:var(--gold-dark)] text-[13px] tracking-[0.2em] w-8 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[color:var(--ink)] text-[15px] md:text-[16px] leading-[1.7]">
                      {g}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : <div />}

          {project.challenges?.length ? (
            <Reveal delay={0.05}>
              <div className="inline-flex items-center gap-3">
                <AlertTriangle className="h-5 w-5 text-[color:var(--gold-dark)]" strokeWidth={1.5} />
                <span className="tracking-eyebrow text-[color:var(--gold-dark)]">Key challenges</span>
              </div>
              <h3 className="mt-4 font-display text-[26px] md:text-[32px] leading-[1.1] tracking-[-0.02em] text-[color:var(--ink-black)]">
                What we had to solve.
              </h3>
              <ul className="mt-8 space-y-4">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex items-start gap-4 border-b border-[color:var(--hair)] pb-4">
                    <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--gold)] mt-2 shrink-0" />
                    <span className="text-[color:var(--ink)] text-[15px] md:text-[16px] leading-[1.7]">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </section>
      )}

      {/* ═══ CONSTRUCTION STORY ═══ */}
      {hasCaseStudy && (
        <section
          data-testid={`project-process-${project.slug}`}
          className="bg-[color:var(--ink-black)] text-[color:var(--paper)] py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <Reveal className="md:col-span-4">
                <div className="tracking-eyebrow text-[color:var(--gold)]">Construction story</div>
                <h2 className="mt-4 font-display text-[28px] md:text-[42px] leading-[1.05] tracking-[-0.02em]">
                  How we built {project.suburb}.
                </h2>
                <p className="mt-6 max-w-md text-[color:var(--paper)]/70 text-[15px] leading-[1.75]">
                  Every Apollo Builders project follows the same disciplined
                  five-stage process — the same we apply on every
                  renovation and new build across Melbourne's south-east.
                </p>
              </Reveal>
              <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {projectProcess.map((stg) => (
                  <Reveal key={stg.step} delay={0.03}>
                    <div className="border border-[color:var(--paper)]/15 p-6 h-full hover:border-[color:var(--gold)] transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-[color:var(--gold)] text-[13px] tracking-[0.2em]">
                          {stg.step}
                        </span>
                      </div>
                      <h4 className="mt-4 font-display text-[19px] md:text-[22px] tracking-[-0.01em]">
                        {stg.title}
                      </h4>
                      <p className="mt-3 text-[color:var(--paper)]/75 text-[14px] leading-[1.65]">
                        {stg.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ PROJECT OUTCOME ═══ */}
      {project.outcome?.length && (
        <section
          data-testid={`project-outcome-${project.slug}`}
          className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16"
        >
          <Reveal className="md:col-span-4">
            <div className="inline-flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-[color:var(--gold-dark)]" strokeWidth={1.5} />
              <span className="tracking-eyebrow text-[color:var(--gold-dark)]">Final result</span>
            </div>
            <h2 className="mt-4 font-display text-[28px] md:text-[42px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)]">
              The finished build.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-8 space-y-6" delay={0.05}>
            {project.outcome.map((p, i) => (
              <p
                key={i}
                className="text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.8]"
              >
                {p}
              </p>
            ))}
          </Reveal>
        </section>
      )}

      {/* ═══ GALLERY ═══ */}
      {project.gallery?.length ? (
        <section className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-20 md:py-28">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
            <div className="tracking-eyebrow text-[color:var(--gold-dark)] mb-8">Gallery</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {project.gallery.map((src, i) => (
                <Reveal key={src + i} delay={(i % 2) * 0.05}>
                  <div className={`frame ${i % 3 === 0 ? "aspect-[4/3]" : "aspect-[16/11]"}`}>
                    <img
                      src={src}
                      alt={`${project.name}, ${project.suburb} — Apollo Builders photograph ${i + 1}`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* ═══ RELATED SERVICES + LOCATION LINKS ═══ */}
      {(relatedServiceObjects.length > 0 || project.suburb) && (
        <section
          data-testid={`project-related-${project.slug}`}
          className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28"
        >
          <Reveal>
            <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Learn more</div>
            <h2 className="mt-4 font-display text-[28px] md:text-[38px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] max-w-2xl">
              Explore related services &amp; areas.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            {relatedServiceObjects.length > 0 && (
              <div>
                <h3 className="font-display text-[20px] md:text-[22px] text-[color:var(--ink-black)]">
                  Related services
                </h3>
                <ul className="mt-4 space-y-1">
                  {relatedServiceObjects.map((svc) => (
                    <li key={svc.slug}>
                      <Link
                        to={`/${svc.slug}/`}
                        data-testid={`project-service-link-${svc.slug}`}
                        className="group flex items-center justify-between border-b border-[color:var(--hair)] py-4 text-[color:var(--ink-black)] hover:text-[color:var(--gold-dark)] transition-colors"
                      >
                        <span className="text-[15px] md:text-[16px]">{svc.title}</span>
                        <ArrowUpRight
                          className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity"
                          strokeWidth={1.75}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div>
              <h3 className="font-display text-[20px] md:text-[22px] text-[color:var(--ink-black)]">
                Building near {project.suburb}?
              </h3>
              <p className="mt-4 text-[color:var(--ink-soft)] text-[15px] leading-[1.7] max-w-md">
                Apollo Builders regularly delivers projects across Melbourne's
                south-east suburbs. See our dedicated location pages and
                recent builds nearby.
              </p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[14px]">
                <li>
                  <Link to="/builders-clayton/" className="link-under text-[color:var(--ink-black)]">
                    Builders Clayton
                  </Link>
                </li>
                <li>
                  <Link to="/suburbs/brighton/" className="link-under text-[color:var(--ink-black)]">
                    Brighton
                  </Link>
                </li>
                <li>
                  <Link to="/suburbs/bentleigh-east/" className="link-under text-[color:var(--ink-black)]">
                    Bentleigh East
                  </Link>
                </li>
                <li>
                  <Link to="/suburbs/glen-waverley/" className="link-under text-[color:var(--ink-black)]">
                    Glen Waverley
                  </Link>
                </li>
                <li>
                  <Link to="/our-projects/" className="link-under text-[color:var(--ink-black)]">
                    All projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* ═══ OTHER PROJECTS ═══ */}
      <section className="bg-[color:var(--cream)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
            <div>
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">More work</div>
              <h2 className="font-display text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-3">
                Other recent projects.
              </h2>
            </div>
            <Link to="/our-projects/" className="btn-navy">
              View All <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/our-projects/${p.slug}/`}
                data-testid={`related-project-${p.slug}`}
                className="group block"
              >
                <div className="frame aspect-[4/3]">
                  <img src={p.image} alt={p.imageAlt} loading="lazy" />
                </div>
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

      {/* ═══ FINAL CTA ═══ */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
        <Reveal className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h2 className="font-display text-[32px] md:text-5xl tracking-[-0.02em] text-[color:var(--ink-black)] max-w-2xl leading-[1.05]">
            Inspired by this project? Let&rsquo;s discuss yours.
          </h2>
          <Link to="/contact-us/" data-testid="project-cta" className="btn-navy">
            Get a Free Quote <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
