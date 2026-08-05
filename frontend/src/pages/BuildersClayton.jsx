import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Phone,
  Home as HomeIcon,
  Hammer,
  Layers,
  ChefHat,
  Bath,
  ShieldCheck,
  ClipboardList,
  PenLine,
  FileText,
  HardHat,
  KeyRound,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import SEO, {
  localBusiness,
  breadcrumbSchema,
  faqSchema,
} from "@/components/SEO";
import { Reveal, MaskLines } from "@/components/Reveal";
import { brand } from "@/lib/data";

/**
 * SEO landing page — Builders Clayton VIC.
 *
 * Design is a straight extension of the Apollo Builders locked system:
 *   • Same Fraunces + Inter Tight typography
 *   • Same navy / paper / cream / gold tokens
 *   • Same 12-col asymmetric grid, hair borders, MaskLines reveals
 *   • Same button classes (btn-navy / btn-ghost)
 *
 * Word count target: ~2,000–2,500. Every section is authored copy
 * relevant to homeowners in Clayton — this is not a doorway page.
 */

const HERO_IMAGE = "/images/apollo/Berwick-New-Build-5-e1762576152191.jpg";

const customHomeFeatures = [
  "Architectural homes",
  "Luxury homes",
  "Contemporary homes",
  "Double-storey homes",
  "Knockdown rebuilds",
  "Family homes",
  "Premium residential construction",
];

const renovationServices = [
  "Complete home renovations",
  "Open-plan living conversions",
  "Structural modifications & alterations",
  "Laundry & utility upgrades",
  "Flooring, lighting & modern finishes",
  "Full interior refurbishments",
];

const extensionTypes = [
  "Rear extensions",
  "Second-storey additions",
  "Master bedroom extensions",
  "Living-area additions",
  "Alfresco & outdoor rooms",
  "Home offices & studies",
];

const kitchenServices = [
  "Custom cabinetry",
  "Stone benchtops",
  "Walk-in pantries",
  "Island benches",
  "Integrated appliances",
  "Lighting upgrades",
  "Complete kitchen transformations",
];

const bathroomServices = [
  "Waterproofing",
  "Tiling",
  "Frameless showers",
  "Custom vanities",
  "Premium fixtures",
  "Storage solutions",
  "Complete bathroom redesigns",
];

const whyChoose = [
  "Experienced residential builders",
  "Fixed-price quotations",
  "Transparent communication",
  "Quality materials",
  "Licensed and insured trades",
  "Professional project management",
  "Attention to detail",
  "High-quality workmanship",
  "Reliable timelines",
  "Ongoing support",
];

const process = [
  {
    step: "01",
    title: "Consultation",
    icon: ClipboardList,
    body: "We begin by understanding your goals, ideas and budget. Every project starts with a proper conversation so we know what success looks like for you.",
  },
  {
    step: "02",
    title: "Planning",
    icon: PenLine,
    body: "Our team develops the project scope, designs and approvals. We work with trusted architects and draftspeople to translate ideas into workable plans.",
  },
  {
    step: "03",
    title: "Quotation",
    icon: FileText,
    body: "You receive a detailed fixed-price quotation outlining scope, materials and timing — no surprises before you commit.",
  },
  {
    step: "04",
    title: "Construction",
    icon: HardHat,
    body: "Experienced trades deliver your project with regular progress updates. One point of contact, one team accountable for the outcome.",
  },
  {
    step: "05",
    title: "Completion",
    icon: KeyRound,
    body: "Final inspections are completed before handover, ensuring every detail meets our high standards. Ongoing support after you move in.",
  },
];

const faqs = [
  {
    q: "Do you build throughout Clayton?",
    a: "Yes — we regularly complete projects throughout Clayton, Clayton South and neighbouring suburbs across Melbourne's south-east — from Mount Waverley and Oakleigh through to Springvale, Mulgrave, Wheelers Hill and Chadstone. Because most of our team lives and works across the south-east, coordinating trades, deliveries and inspections in Clayton is straightforward for us.",
  },
  {
    q: "Do you provide fixed-price quotations?",
    a: "Yes. We believe transparent pricing gives homeowners confidence before construction begins. Your quote is broken down by scope and materials so you understand exactly what you're paying for — including the allowances for fixtures, tiles and appliances so you're not caught out later by 'PC sum' surprises. If the scope changes during the build, variations are quoted in writing before any work proceeds.",
  },
  {
    q: "Can you manage the entire project?",
    a: "Absolutely. We coordinate every stage from planning and permits through to construction and final handover. You get one team and one point of contact — no chasing tradespeople yourself, no missed hand-offs between separate trades. For clients who want architectural input, we work alongside your chosen architect or draftsperson, or we can introduce you to designers we've worked with successfully in the past.",
  },
  {
    q: "How long does construction take?",
    a: "Project timeframes vary depending on size and complexity. A kitchen or bathroom renovation typically runs 4–8 weeks on site; a full home renovation runs several months; a knockdown-rebuild or new build in Clayton generally runs 8–12 months from site start to handover. Planning and permits usually add several months in front of construction, and we'll give you a realistic schedule for both phases during the quotation process.",
  },
];

const nearbySuburbs = [
  "Clayton South",
  "Oakleigh",
  "Mount Waverley",
  "Mulgrave",
  "Springvale",
  "Notting Hill",
  "Wheelers Hill",
  "Chadstone",
  "Glen Waverley",
  "Huntingdale",
  "Noble Park",
  "Bentleigh East",
];

// Recent Apollo Builders projects that showcase the work available to
// Clayton homeowners — sourced from real Apollo project photography.
const recentProjects = [
  {
    slug: "bentleigh-east-renovation",
    name: "Bentleigh East Renovation",
    type: "Full Home Renovation",
    image: "/images/apollo/bentleigh-east-new-1-1-1024x627.jpg",
    alt: "Full home renovation in Bentleigh East — the kind of contemporary transformation Clayton homeowners are choosing over relocating",
    summary:
      "A complete transformation of a 1970s home just minutes from Clayton — new kitchen, bathroom and open-plan living reconfiguration.",
  },
  {
    slug: "endevour-hills-renovation",
    name: "Endeavour Hills Renovation",
    type: "Renovation + Alfresco",
    image: "/images/apollo/endevour-hills-after-1-1024x686.jpg",
    alt: "Endeavour Hills home renovation — full internal transformation plus decked alfresco, comparable to renovations popular with Clayton homeowners",
    summary:
      "Full internal renovation with a new kitchen, bathroom and decked alfresco — improving indoor-outdoor flow for family life.",
  },
  {
    slug: "berwick-new-build",
    name: "Berwick New Build",
    type: "Two-Storey New Home",
    image: "/images/apollo/Berwick-New-Build-e1762574957206.jpg",
    alt: "Two-storey new home build in Berwick by Apollo Builders — similar in scale and finish to knockdown-rebuilds we deliver for Clayton clients",
    summary:
      "A two-storey custom home combining functionality with striking design — the kind of build we deliver for Clayton knockdown-rebuild clients.",
  },
];

/* ── Small building blocks kept local to this page for readability ── */

function SectionEyebrow({ children }) {
  return (
    <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
      {children}
    </div>
  );
}

function SectionHeading({ children, className = "" }) {
  return (
    <h2
      className={`font-display text-[30px] md:text-[42px] lg:text-[52px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4 ${className}`}
    >
      {children}
    </h2>
  );
}

function FeatureList({ items, testId }) {
  return (
    <ul
      data-testid={testId}
      className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3"
    >
      {items.map((f) => (
        <li
          key={f}
          className="flex items-start gap-3 border-b border-[color:var(--hair)] py-3"
        >
          <CheckCircle2
            className="h-4 w-4 mt-1 text-[color:var(--gold)] flex-shrink-0"
            strokeWidth={1.75}
          />
          <span className="text-[color:var(--ink)] text-[15px] md:text-[16px] leading-[1.6]">
            {f}
          </span>
        </li>
      ))}
    </ul>
  );
}

function ServiceBlock({
  icon: Icon,
  eyebrow,
  heading,
  intro,
  body,
  features,
  href,
  cta,
  testId,
}) {
  return (
    <Reveal className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
      <div className="md:col-span-4">
        <div className="inline-flex items-center gap-3">
          <Icon
            className="h-5 w-5 text-[color:var(--gold-dark)]"
            strokeWidth={1.5}
          />
          <SectionEyebrow>{eyebrow}</SectionEyebrow>
        </div>
        <SectionHeading>{heading}</SectionHeading>
      </div>
      <div className="md:col-span-8">
        <p className="text-[color:var(--ink-black)] text-[17px] md:text-[19px] leading-[1.55] font-display font-normal">
          {intro}
        </p>
        {body && (
          <p className="mt-6 text-[color:var(--ink)] text-[15px] md:text-[17px] leading-[1.75]">
            {body}
          </p>
        )}
        <FeatureList items={features} testId={testId} />
        <div className="mt-8">
          <Link
            to={href}
            data-testid={`clayton-cta-${testId}`}
            className="link-under inline-flex items-center gap-2 text-[13px] tracking-[0.18em] uppercase text-[color:var(--gold-dark)] font-semibold"
          >
            {cta}
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

/* ── Main page ── */

export default function BuildersClayton() {
  const path = "/builders-clayton/";
  const title =
    "Builders Clayton VIC | Custom Homes, Renovations & Extensions | Apollo Builders";
  const description =
    "Looking for experienced builders in Clayton? Apollo Builders specialises in custom homes, renovations, home extensions, kitchens and bathrooms throughout Clayton and Melbourne's south-east.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      localBusiness(),
      breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Builders Clayton", path },
      ]),
      faqSchema(faqs),
    ],
  };

  return (
    <div
      data-testid="builders-clayton-page"
      className="bg-[color:var(--paper)]"
    >
      <SEO
        title={title}
        description={description}
        path={path}
        image={HERO_IMAGE}
        jsonLd={jsonLd}
      />

      {/* ═══ HERO — full-width image + navy overlay ═══ */}
      <section
        aria-labelledby="clayton-h1"
        className="relative isolate overflow-hidden bg-[color:var(--ink-black)]"
      >
        <img
          src={HERO_IMAGE}
          alt="Apollo Builders custom home build in Melbourne's south-east — representing our residential construction work available to Clayton homeowners"
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          fetchPriority="high"
          decoding="async"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[color:var(--ink-black)]/85 via-[color:var(--ink-black)]/60 to-[color:var(--ink-black)]/85"
        />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-36 lg:py-44 text-[color:var(--paper)]">
          {/* Breadcrumb — no Areas We Service parent page exists on the
              current site, so we use the two-level Home → Builders Clayton
              hierarchy as specified in the SEO brief. */}
          <nav
            aria-label="Breadcrumb"
            className="text-[12px] tracking-[0.18em] uppercase text-[color:var(--paper)]/70"
            data-testid="clayton-breadcrumb"
          >
            <Link to="/" className="hover:text-[color:var(--gold)] transition-colors">
              Home
            </Link>
            <span className="mx-3 opacity-40">/</span>
            <span className="text-[color:var(--gold)]">Builders Clayton</span>
          </nav>

          <div className="mt-8 inline-flex items-center gap-2 text-[color:var(--gold)]">
            <MapPin className="h-4 w-4" strokeWidth={2} />
            <span className="tracking-eyebrow">City of Monash · VIC 3168</span>
          </div>

          <h1
            id="clayton-h1"
            data-testid="clayton-h1"
            className="mt-6 font-display leading-[0.96] tracking-[-0.03em] text-[color:var(--paper)]"
          >
            <span className="block text-[46px] md:text-[76px] lg:text-[96px]">
              <MaskLines lines={["Builders Clayton VIC."]} />
            </span>
            <span className="mt-4 block text-[color:var(--paper)]/75 text-[22px] md:text-[30px] lg:text-[36px] font-display italic tracking-[-0.01em]">
              Custom homes, renovations &amp; extensions.
            </span>
          </h1>

          <p className="mt-10 max-w-2xl text-[16px] md:text-[19px] leading-[1.7] text-[color:var(--paper)]/85">
            Apollo Builders delivers high-quality residential construction
            throughout Clayton and Melbourne's south-east — from complete new
            home builds to full renovations, extensions, kitchens and
            bathrooms. Fixed-price quotes, licensed trades and one team
            accountable from concept to completion.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/contact-us"
              data-testid="clayton-hero-quote"
              className="btn-gold"
            >
              Get Your Free Quote
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
            <Link
              to="/consult"
              data-testid="clayton-hero-consult"
              className="btn-ghost-light"
            >
              Book a Consultation
            </Link>
            <a
              href={`tel:${brand.phoneRaw}`}
              data-testid="clayton-hero-phone"
              className="inline-flex items-center gap-2 text-[color:var(--paper)]/85 hover:text-[color:var(--gold)] transition-colors text-[13px] tracking-[0.18em] uppercase"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              {brand.phone}
            </a>
          </div>
        </div>
      </section>

      {/* ═══ INTRO — "Looking for Experienced Builders in Clayton?" ═══ */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10">
        <Reveal className="md:col-span-4">
          <SectionEyebrow>Introduction</SectionEyebrow>
          <SectionHeading>
            Looking for experienced builders in Clayton?
          </SectionHeading>
        </Reveal>
        <Reveal className="md:col-span-8" delay={0.06}>
          <p className="text-[color:var(--ink-black)] text-[18px] md:text-[22px] leading-[1.5] font-display">
            Apollo Builders proudly delivers high-quality residential
            construction services throughout Clayton and Melbourne's
            south-east. Whether you're planning a custom home, a modern
            renovation, a spacious extension or a complete transformation
            of your existing property, our experienced team is committed
            to delivering exceptional craftsmanship from concept through
            to completion.
          </p>
          <p className="mt-6 text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.75]">
            We understand that building or renovating is one of the biggest
            investments you'll make. That's why we focus on transparent
            communication, detailed planning and quality workmanship to
            ensure every project is completed to the highest possible
            standard.
          </p>
          <p className="mt-6 text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.75]">
            From the initial consultation through design, approvals and
            construction, Apollo Builders provides a seamless experience
            backed by experienced tradespeople and professional project
            management — for Clayton homeowners who want their project done
            properly the first time.
          </p>
          <p className="mt-6 text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.75]">
            The team we bring to every Clayton project has worked together
            across Melbourne's south-east for years, so you're not getting
            a rotating cast of subcontractors. Same site supervisor from
            start to finish, same tradespeople across the trades that
            matter, one accountable point of contact for every question
            or change along the way.
          </p>
        </Reveal>
      </section>

      {/* ═══ WHY BUILD IN CLAYTON — cream band ═══ */}
      <section className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <SectionEyebrow>Why Clayton</SectionEyebrow>
            <SectionHeading>
              Why homeowners choose to build in Clayton
            </SectionHeading>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.06}>
            <p className="text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.75]">
              Clayton has become one of Melbourne's most desirable suburbs
              thanks to its excellent location, established neighbourhoods,
              transport connections, quality schools and proximity to Monash
              University and the Monash Medical Centre. The suburb attracts
              families, professionals and long-term investors who want
              connectivity without giving up backyard living — a rare
              combination this close to the CBD.
            </p>
            <p className="mt-6 text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.75]">
              Many homes throughout Clayton were built several decades ago
              and now present outstanding opportunities for renovations,
              extensions and knockdown rebuilds. Rather than leaving a
              suburb they love, many homeowners are choosing to invest in
              their existing property to create larger, more functional
              and modern living spaces that better suit family life today.
              With median block sizes generous by inner-suburban standards,
              there is genuine scope to reconfigure floor plans, add
              second storeys, or design entirely new homes without
              compromising outdoor space.
            </p>
            <p className="mt-6 text-[color:var(--ink)] text-[16px] md:text-[18px] leading-[1.75]">
              Apollo Builders works closely with Clayton homeowners to
              unlock the full potential of their homes while respecting the
              character of the surrounding neighbourhood. We understand the
              local housing stock, the typical lot dimensions, the way the
              City of Monash assesses planning applications, and how to
              plan works that add real long-term value — not just cosmetic
              lift for a short-term sale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══ LOCAL CONSIDERATIONS — 3 pillars ═══ */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <Reveal>
          <SectionEyebrow>Local considerations</SectionEyebrow>
          <SectionHeading>
            What Clayton homeowners should know before starting.
          </SectionHeading>
          <p className="mt-6 max-w-2xl text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.75]">
            Every suburb has its quirks — the block shapes, the planning
            rules, the character controls and the trades who actually know
            the area. Here's the shortlist we take Clayton clients through
            during our first meeting.
          </p>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal delay={0.05}>
            <div className="h-full border border-[color:var(--hair)] bg-white p-8 hover:border-[color:var(--gold)] transition-colors">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Planning &amp; permits
              </div>
              <h3 className="mt-4 font-display text-[24px] md:text-[26px] tracking-[-0.01em] text-[color:var(--ink-black)]">
                City of Monash requirements.
              </h3>
              <p className="mt-5 text-[color:var(--ink)] text-[15px] leading-[1.7]">
                Clayton sits within the City of Monash, and most substantial
                works — second-storey additions, larger extensions and
                knockdown rebuilds — require a planning permit alongside
                the building permit. Setbacks, overshadowing and
                overlooking rules under ResCode all apply. We handle the
                planning submission process and coordinate with council
                where required, so you're not navigating VicPlan reports
                and neighbour notifications on your own.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full border border-[color:var(--hair)] bg-white p-8 hover:border-[color:var(--gold)] transition-colors">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Housing stock
              </div>
              <h3 className="mt-4 font-display text-[24px] md:text-[26px] tracking-[-0.01em] text-[color:var(--ink-black)]">
                Blocks, homes &amp; opportunities.
              </h3>
              <p className="mt-5 text-[color:var(--ink)] text-[15px] leading-[1.7]">
                Clayton is a genuinely mixed streetscape — post-war brick
                veneer homes on generous 600–800 m² blocks sit alongside
                more recent townhouse developments and modern architect-
                designed rebuilds near Monash. That mix is actually good
                news: council is accustomed to seeing contemporary designs
                approved, and there's real precedent for double-storey
                additions and knockdown rebuilds sensitively integrated
                into an established street.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="h-full border border-[color:var(--hair)] bg-white p-8 hover:border-[color:var(--gold)] transition-colors">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                Value &amp; longevity
              </div>
              <h3 className="mt-4 font-display text-[24px] md:text-[26px] tracking-[-0.01em] text-[color:var(--ink-black)]">
                Building for the next 20 years.
              </h3>
              <p className="mt-5 text-[color:var(--ink)] text-[15px] leading-[1.7]">
                With Clayton's strong long-term demand, the smartest
                projects are ones designed to still feel current a decade
                or two from now. That means considered floor plans,
                genuinely durable materials, thermally efficient
                construction, and finishes that hold up to daily family
                life — not just look great on a real-estate photo. We plan
                and build to that standard by default.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CUSTOM HOME BUILDERS — cream band ═══ */}
      <section className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <ServiceBlock
            icon={HomeIcon}
            eyebrow="Service · 01"
            heading="Custom home builders Clayton"
            intro="Building a custom home lets you create a residence tailored specifically to your lifestyle, family and future plans — designed around how you actually live, not a project-builder template."
            body="Apollo Builders specialises in custom-designed homes that combine practical layouts, premium finishes and exceptional workmanship. Every project is individually planned to maximise the potential of the Clayton site — orientation, block shape, easements, overlooking rules and setbacks all inform the design before a single line is drawn. Whether you're building your forever home, replacing a tired brick veneer with a contemporary double-storey, or delivering a premium investment property near Monash, our team works collaboratively with you throughout every stage of the project."
            features={customHomeFeatures}
            href="/new-home-builds"
            cta="Explore new home builds"
            testId="custom-homes"
          />
        </div>
      </section>

      {/* ═══ HOME RENOVATIONS ═══ */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <ServiceBlock
          icon={Hammer}
          eyebrow="Service · 02"
          heading="Home renovations Clayton"
          intro="If you love your location but your home no longer meets your needs, a renovation can completely transform the way you live — without the stamp duty, agent fees and school-zone disruption of moving."
          body="Apollo Builders delivers comprehensive home renovations that improve functionality, comfort and long-term property value. From structural alterations and load-bearing wall removals through to complete internal transformations, we help Clayton homeowners modernise their homes while preserving the features they love. Most of our Clayton work involves opening up compartmentalised 1970s and 1980s floor plans into single connected living zones, upgrading tired kitchens and bathrooms, and lifting overall energy performance with better insulation, glazing and lighting."
          features={renovationServices}
          href="/home-renovations"
          cta="Explore home renovations"
          testId="renovations"
        />
      </section>

      {/* ═══ HOME EXTENSIONS — cream band ═══ */}
      <section className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <ServiceBlock
            icon={Layers}
            eyebrow="Service · 03"
            heading="Home extensions Clayton"
            intro="Growing families often need additional space without the expense and disruption of moving out of the neighbourhood, schools and community they've built."
            body="Apollo Builders designs and constructs seamless home extensions that integrate naturally with your existing property. Every extension is carefully planned to improve internal flow, increase living space and maximise natural light — while maintaining the home's overall aesthetic and staying compliant with City of Monash planning requirements. Whether you need a rear addition to enlarge the family living area, a second storey to add bedrooms without touching the yard, or a self-contained studio for guests or a home business, we scope the extension against your long-term needs, not just the immediate brief."
            features={extensionTypes}
            href="/home-renovations"
            cta="Talk to us about your extension"
            testId="extensions"
          />
        </div>
      </section>

      {/* ═══ KITCHEN RENOVATIONS ═══ */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <ServiceBlock
          icon={ChefHat}
          eyebrow="Service · 04"
          heading="Kitchen renovations Clayton"
          intro="The kitchen is the centre of family life — where mornings begin, dinners happen and everyone eventually ends up standing around the island bench."
          body="Apollo Builders creates beautiful, functional kitchens designed around modern living. We combine thoughtful layouts with premium materials to deliver kitchens for Clayton homes that are both practical for a busy household and visually impressive when you have guests over. Our kitchen renovations pay close attention to the details that most builders skimp on — properly braced stone benchtops, soft-close hardware you'll notice every day, integrated appliances specified before cabinetry is ordered, and lighting layered across task, ambient and feature zones."
          features={kitchenServices}
          href="/kitchen-renovations"
          cta="Explore kitchen renovations"
          testId="kitchens"
        />
      </section>

      {/* ═══ BATHROOM RENOVATIONS — cream band ═══ */}
      <section className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <ServiceBlock
            icon={Bath}
            eyebrow="Service · 05"
            heading="Bathroom renovations Clayton"
            intro="A professionally renovated bathroom adds comfort, daily functionality and measurable value to your home — done properly, it will still look and perform brilliantly a decade from now."
            body="Apollo Builders delivers complete bathroom renovations using quality materials and skilled workmanship. From luxurious ensuites to practical family bathrooms across Clayton, every renovation is completed with careful attention to waterproofing, tiling and finishing details that budget renovators tend to cut corners on. We work with proven fixture brands, licensed plumbers and tilers who've been on our jobs for years, and we don't take shortcuts on the waterproofing membrane — that single detail is the difference between a bathroom that lasts 20 years and one that fails at 5."
            features={bathroomServices}
            href="/bathroom-renovations"
            cta="Explore bathroom renovations"
            testId="bathrooms"
          />
        </div>
      </section>

      {/* ═══ RECENT PROJECTS ═══ */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <Reveal>
          <SectionEyebrow>Recent projects</SectionEyebrow>
          <SectionHeading>The kind of work we deliver.</SectionHeading>
          <p className="mt-6 max-w-2xl text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.75]">
            A snapshot of recent Apollo Builders projects across Melbourne's
            south-east that reflect the standard we bring to every Clayton
            job — from full renovations of established homes to new
            custom builds.
          </p>
        </Reveal>
        <ul
          data-testid="clayton-recent-projects"
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {recentProjects.map((p) => (
            <li key={p.slug}>
              <Link
                to={`/our-projects/${p.slug}`}
                data-testid={`clayton-project-${p.slug}`}
                className="group block border border-[color:var(--hair)] bg-white hover:border-[color:var(--gold)] transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--cream)]">
                  <img
                    src={p.image}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <div className="tracking-eyebrow text-[color:var(--gold-dark)]">
                    {p.type}
                  </div>
                  <h3 className="mt-3 font-display text-[22px] md:text-[24px] tracking-[-0.01em] text-[color:var(--ink-black)]">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-[color:var(--ink-soft)] text-[14px] leading-[1.65]">
                    {p.summary}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-[color:var(--gold-dark)] font-semibold">
                    View project
                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            to="/our-projects"
            data-testid="clayton-all-projects-link"
            className="btn-navy"
          >
            See all Apollo projects
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </Link>
        </div>
      </section>

      {/* ═══ WHY CHOOSE APOLLO — navy band with gold ═══ */}
      <section className="bg-[color:var(--ink-black)] text-[color:var(--paper)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="inline-flex items-center gap-3 text-[color:var(--gold)]">
              <ShieldCheck className="h-5 w-5" strokeWidth={1.5} />
              <span className="tracking-eyebrow">Why Apollo Builders</span>
            </div>
            <h2 className="mt-4 font-display text-[30px] md:text-[42px] lg:text-[52px] leading-[1.05] tracking-[-0.02em]">
              Ten reasons Clayton homeowners choose us.
            </h2>
            <p className="mt-6 text-[color:var(--paper)]/70 text-[15px] md:text-[16px] leading-[1.7] max-w-md">
              Apollo Builders has earned a reputation for delivering quality
              residential construction throughout Melbourne's south-east.
              Our clients choose us because we prioritise communication,
              reliability and craftsmanship on every project.
            </p>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.06}>
            <ul
              data-testid="why-choose-list"
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4"
            >
              {whyChoose.map((r, i) => (
                <li
                  key={r}
                  className="flex items-start gap-4 border-b border-[color:var(--paper)]/15 py-4"
                >
                  <span className="font-display text-[color:var(--gold)] text-[15px] w-8 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[color:var(--paper)]/90 text-[15px] md:text-[16px] leading-[1.55]">
                    {r}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ═══ OUR BUILDING PROCESS ═══ */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <Reveal>
          <SectionEyebrow>The process</SectionEyebrow>
          <SectionHeading>
            How we build in Clayton — five clear stages.
          </SectionHeading>
          <p className="mt-6 max-w-2xl text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.75]">
            Every Clayton project follows the same considered process — the
            same one we've refined across every renovation and new home
            we've delivered in Melbourne's south-east.
          </p>
        </Reveal>
        <ol
          data-testid="process-list"
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {process.map(({ step, title: t, body: b, icon: Icon }) => (
            <li
              key={step}
              className="relative border border-[color:var(--hair)] bg-white p-7 hover:border-[color:var(--gold)] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-[color:var(--gold-dark)] text-[13px] tracking-[0.2em]">
                  {step}
                </span>
                <Icon
                  className="h-5 w-5 text-[color:var(--gold-dark)]"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="mt-6 font-display text-[22px] md:text-[24px] tracking-[-0.01em] text-[color:var(--ink-black)]">
                {t}
              </h3>
              <p className="mt-4 text-[color:var(--ink-soft)] text-[14px] leading-[1.65]">
                {b}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ═══ FAQ — cream band ═══ */}
      <section className="bg-[color:var(--cream)] border-y border-[color:var(--hair)] py-20 md:py-28">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <SectionEyebrow>FAQ</SectionEyebrow>
            <SectionHeading>Frequently asked questions</SectionHeading>
            <p className="mt-6 text-[color:var(--ink-soft)] text-[15px] leading-[1.7]">
              Straight answers to the questions we hear most often from
              Clayton homeowners planning a build or renovation.
            </p>
            <div className="mt-8">
              <Link
                to="/contact-us"
                data-testid="clayton-faq-cta"
                className="link-under inline-flex items-center gap-2 text-[13px] tracking-[0.18em] uppercase text-[color:var(--gold-dark)] font-semibold"
              >
                Have another question?
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            </div>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.06}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`clayton-faq-${i}`}
                  data-testid={`clayton-faq-item-${i}`}
                  className="border-b border-[color:var(--hair)] first:border-t"
                >
                  <AccordionTrigger className="font-display text-left text-[19px] md:text-[22px] py-6 text-[color:var(--ink-black)] hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[color:var(--ink-soft)] text-[15px] leading-[1.7] pb-8 max-w-2xl">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ═══ AREAS WE SERVICE ═══ */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <Reveal>
          <SectionEyebrow>Areas we service</SectionEyebrow>
          <SectionHeading>Nearby suburbs we build in.</SectionHeading>
          <p className="mt-6 max-w-2xl text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.75]">
            Apollo Builders regularly works with homeowners in Clayton and
            the surrounding suburbs across the City of Monash, Kingston and
            Greater Dandenong council areas. If your suburb sits within
            reasonable travel of Clayton and you're planning a residential
            project — a full renovation, an extension, a kitchen or
            bathroom, or a knockdown rebuild — we'd be happy to visit,
            walk through the property with you and quote the work
            properly. There's no obligation from the first meeting.
          </p>
        </Reveal>
        <ul
          data-testid="nearby-suburbs"
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {nearbySuburbs.map((s) => (
            <li
              key={s}
              className="group flex items-center gap-3 border border-[color:var(--hair)] bg-white px-5 py-4 hover:border-[color:var(--gold)] transition-colors"
            >
              <MapPin
                className="h-4 w-4 text-[color:var(--gold-dark)] opacity-70 group-hover:opacity-100 transition-opacity"
                strokeWidth={1.75}
              />
              <span className="text-[color:var(--ink-black)] text-[14px] md:text-[15px]">
                {s}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-wrap items-center gap-4 text-[color:var(--ink-soft)] text-[14px]">
          <span>More coverage:</span>
          <Link to="/suburbs/glen-waverley" className="link-under">Glen Waverley</Link>
          <Link to="/suburbs/bentleigh-east" className="link-under">Bentleigh East</Link>
          <Link to="/our-projects" className="link-under">See our recent projects</Link>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="bg-[color:var(--ink-black)] text-[color:var(--paper)] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <Reveal className="md:col-span-8">
            <div className="tracking-eyebrow text-[color:var(--gold)]">
              Ready to build in Clayton
            </div>
            <h2 className="mt-4 font-display text-[36px] md:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.02em]">
              Let's build something proper.
            </h2>
            <p className="mt-6 max-w-2xl text-[color:var(--paper)]/75 text-[16px] md:text-[18px] leading-[1.7]">
              Whether you're planning a custom home, a full renovation, an
              extension, or a new kitchen or bathroom — Apollo Builders has
              the experience to bring your vision to life. Contact our team
              today to arrange your free consultation and receive a detailed
              fixed-price quotation for your Clayton project.
            </p>
            <p className="mt-4 max-w-2xl text-[color:var(--paper)]/60 text-[15px] md:text-[16px] leading-[1.7]">
              The first meeting is a proper conversation about what you're
              hoping to achieve — what's working in your current home, what
              isn't, how you actually use the space day to day, and what
              your realistic budget looks like. From there we can advise
              whether a renovation, extension or knockdown rebuild is the
              right path for your Clayton property, and give you a clear
              picture of what the process, timelines and costs will look
              like. No pressure, no hard sell.
            </p>
          </Reveal>
          <Reveal
            className="md:col-span-4 flex flex-col gap-4 md:items-end"
            delay={0.05}
          >
            <Link
              to="/contact-us"
              data-testid="clayton-final-cta-quote"
              className="btn-gold w-full md:w-auto justify-center"
            >
              Request a Fixed-Price Quote
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
            <Link
              to="/consult"
              data-testid="clayton-final-cta-consult"
              className="btn-ghost-light w-full md:w-auto justify-center"
            >
              Book a Consultation
            </Link>
            <a
              href={`tel:${brand.phoneRaw}`}
              data-testid="clayton-final-cta-phone"
              className="inline-flex items-center gap-3 text-[color:var(--paper)]/85 hover:text-[color:var(--gold)] transition-colors text-[13px] tracking-[0.18em] uppercase"
            >
              <Phone className="h-4 w-4" strokeWidth={1.75} />
              Talk with our builders · {brand.phone}
            </a>
            <div className="mt-2 text-[color:var(--paper)]/60 text-[13px]">
              <Link
                to="/about-us"
                className="hover:text-[color:var(--gold)] transition-colors"
              >
                About Apollo Builders
              </Link>
              <span className="mx-2 opacity-50">·</span>
              <Link
                to="/our-projects"
                className="hover:text-[color:var(--gold)] transition-colors"
              >
                Recent projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ Mobile sticky contact bar ═══ */}
      <div
        data-testid="clayton-mobile-sticky-cta"
        className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-[color:var(--ink-black)] text-[color:var(--paper)] border-t border-[color:var(--gold)]/40 shadow-2xl"
      >
        <div className="flex items-stretch">
          <a
            href={`tel:${brand.phoneRaw}`}
            className="flex-1 flex items-center justify-center gap-2 py-4 text-[13px] tracking-[0.15em] uppercase border-r border-[color:var(--paper)]/15"
            aria-label="Call Apollo Builders"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            Call
          </a>
          <Link
            to="/contact-us"
            className="flex-1 flex items-center justify-center gap-2 py-4 text-[13px] tracking-[0.15em] uppercase bg-[color:var(--gold)] text-[color:var(--ink-black)] font-semibold"
          >
            Free Quote
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  );
}
