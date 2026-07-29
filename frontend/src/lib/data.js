// Central content store — 100% Apollo Builders real content only.
// Sourced verbatim from https://apollobuilders.com.au. No fabrication.

export const brand = {
  name: "Apollo Builders",
  phone: "0422 339 622",
  phoneRaw: "+61422339622",
  email: "info@apollobuilders.com.au",
  region: "Melbourne's South & South-East",
  logo: "",
};

// Trust points — exact wording from the current live site
export const trustPoints = [
  "Fully Insured",
  "Fixed Price Quotes",
  "Renovations & New Builds",
  "Melbourne South-East Specialists",
];

// Real Apollo Builders projects — photos + wording from apollobuilders.com.au/our-projects/*
// Note: Live site canonical URLs use "endevour-hills-renovation" (typo preserved for URL parity)
export const projects = [
  {
    slug: "drouin-new-build",
    name: "Drouin New Build",
    suburb: "Drouin",
    type: "New Home Build",
    image: "",
    imageAlt: "Drouin new home build interior — Apollo Builders custom family home, Melbourne South-East",
    hero: "",
    description:
      "A modern family home built from the ground up, featuring open-plan living, high ceilings, and premium finishes.",
    scope: ["Custom-designed family home", "Open-plan living areas", "High ceilings & premium finishes", "Complete project management from planning to handover"],
    gallery: [
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  },
  {
    slug: "bentleigh-east-renovation",
    name: "Bentleigh East Renovation",
    suburb: "Bentleigh East",
    type: "Full Home Renovation",
    image: "",
    imageAlt: "Bentleigh East full home renovation — kitchen, bathroom and living transformation",
    hero: "",
    description:
      "A complete transformation including kitchen, bathroom and living areas — bright, functional and contemporary.",
    scope: ["Full home renovation", "New kitchen with custom cabinetry", "New bathroom fit-out", "Updated living areas — open, bright and contemporary"],
    gallery: [
      "",
      "",
      "",
      "",
    ],
  },
  {
    slug: "endevour-hills-renovation",
    name: "Endevour Hills Renovation",
    suburb: "Endeavour Hills",
    type: "Full Renovation + Alfresco",
    image: "",
    imageAlt: "Endeavour Hills renovation — new kitchen, bathroom and decked alfresco",
    hero: "",
    description:
      "Full home renovation featuring new kitchen, bathroom and decked alfresco area for seamless indoor-outdoor living.",
    scope: ["New kitchen with modern layout", "Bathroom renovation", "Decked alfresco area", "Seamless indoor-outdoor flow"],
    gallery: [
      "",
      "",
      "",
      "",
    ],
  },
  {
    slug: "berwick-new-build",
    name: "Berwick New Build",
    suburb: "Berwick",
    type: "Two-Storey New Build",
    image: "",
    imageAlt: "Berwick two-storey new home build by Apollo Builders",
    hero: "",
    description:
      "Stylish two-storey home combining functionality and design excellence, built for modern family living.",
    scope: ["Two-storey custom design", "Modern family living layout", "Premium exterior & interior finishes", "Full project management"],
    gallery: [
      "",
      "",
      "",
    ],
  },
  {
    slug: "altona-meadows-renovation",
    name: "Altona Meadows Renovation",
    suburb: "Altona Meadows",
    type: "Home Renovation",
    image:
      "",
    imageAlt: "Altona Meadows renovation — open-plan design and luxury finishes",
    hero: "",
    description:
      "Modern makeover with open-plan design, luxury finishes and improved flow throughout.",
    scope: ["Open-plan reconfiguration", "Luxury finishes throughout", "Improved flow between living zones", "Contemporary kitchen and bathroom"],
    gallery: [
      "",
      "",
    ],
  },
  {
    slug: "clyde-new-build",
    name: "Clyde New Build",
    suburb: "Clyde",
    type: "New Home Build",
    image: "",
    imageAlt: "Clyde new home build — modern family living by Apollo Builders",
    hero: "",
    description:
      "New construction designed for comfort, efficiency and modern family life in Clyde.",
    scope: ["Custom-designed new home", "Energy-efficient construction", "Contemporary family living", "Turn-key project delivery"],
    gallery: [
      "",
      "",
      "",
      "",
      "",
    ],
  },
];

// Editorial before/after imagery pool — real Apollo Builders project photography
export const gallery = [
  {
    src: "",
    alt: "Drouin new build exterior — Apollo Builders custom home",
  },
  {
    src: "",
    alt: "Endeavour Hills kitchen renovation after — Apollo Builders",
  },
  {
    src: "",
    alt: "Full home renovation Melbourne South East — Apollo Builders",
  },
  {
    src: "",
    alt: "Drouin new home build interior — Apollo Builders",
  },
  {
    src: "",
    alt: "Bathroom renovation Melbourne South East — Apollo Builders",
  },
  {
    src: "",
    alt: "Knockdown and rebuild Melbourne — Apollo Builders",
  },
];

// Services — wording verbatim from apollobuilders.com.au/services/
export const services = [
  {
    slug: "new-home-builds",
    number: "01",
    title: "New Home Builds",
    tagline: "Custom-designed family homes, knockdown-rebuilds and duplexes.",
    image: "",
    imageAlt: "New home builder Melbourne South-East — custom Drouin family home",
    body:
      "Dreaming of a home that's completely your own? We design and construct custom new builds that reflect your lifestyle, budget and vision. From planning and permits through to handover, we take care of every stage.",
    scope: [
      "Custom-designed family homes",
      "Knockdown & rebuild projects",
      "Duplex and multi-unit developments",
      "Project management from start to finish",
    ],
  },
  {
    slug: "home-renovations",
    number: "02",
    title: "Home Renovations",
    tagline: "Full renovations, extensions and outdoor living spaces.",
    image: "",
    imageAlt: "Full home renovation and extension — Apollo Builders",
    body:
      "Transform your existing home with our expert renovation team. Whether it's a full makeover or modernising key spaces, we deliver precision workmanship and reliable results.",
    scope: [
      "Full home renovations",
      "Structural extensions & additions",
      "Outdoor decking, pergolas & living spaces",
      "Concrete driveways & landscaping works",
    ],
  },
  {
    slug: "bathroom-renovations",
    number: "03",
    title: "Bathroom Renovations",
    tagline: "Waterproofing, tiling, plumbing, lighting and finishes.",
    image: "",
    imageAlt: "Bathroom renovation Melbourne South-East — Apollo Builders",
    body:
      "A great bathroom blends comfort, functionality and style. We handle every aspect of your bathroom renovation — from waterproofing and tiling to plumbing, lighting and finishes.",
    scope: [
      "Complete bathroom redesign",
      "Modern and luxury fitouts",
      "Custom vanities, tiling & fixtures",
    ],
  },
  {
    slug: "kitchen-renovations",
    number: "04",
    title: "Kitchen Renovations",
    tagline: "Custom cabinetry, benchtops and open-plan redesigns.",
    image: "",
    imageAlt: "Kitchen renovation Melbourne — Apollo Builders",
    body:
      "Your kitchen is the heart of your home; make it one you'll love every day. Our team designs and builds kitchens that combine beauty, practicality and quality craftsmanship.",
    scope: [
      "Custom cabinetry & benchtops",
      "Open-plan redesigns",
      "Appliance & lighting installation",
      "Full kitchen rebuilds",
    ],
  },
];

// Five real process stages from the live site
export const processSteps = [
  {
    n: "01",
    title: "Initial Consultation",
    body: "We visit your site, listen to your brief and set realistic expectations before any quoting begins.",
  },
  {
    n: "02",
    title: "Planning & Fixed Price Quote",
    body: "Scope, permits and a fixed price contract — every detail written down before we start.",
  },
  {
    n: "03",
    title: "Project Commencement",
    body: "Trades scheduled, materials secured, and a clear start date confirmed with you.",
  },
  {
    n: "04",
    title: "Stage-by-Stage Updates",
    body: "Regular walkthroughs and reports so you always know exactly where the build stands.",
  },
  {
    n: "05",
    title: "Completion & Handover",
    body: "Final inspection, defect-free handover and warranty on every finish.",
  },
];

// Why us — from the live site "Why Work With Apollo Builders?" section (verbatim)
export const whyUs = [
  "Fully Licensed & Insured",
  "Fixed Price Quotes With No Hidden Surprises",
  "Quality Workmanship & Attention To Detail",
  "Clear Communication Throughout Your Project",
  "Experienced In Renovations, Extensions & New Builds",
  "Melbourne South-East Specialists",
];

// FAQs — exact wording from the live site
export const faqs = [
  {
    q: "How do I get started with Apollo Builders?",
    a: "The first step is to get in touch with our team for an initial consultation. We'll discuss your project, budget and goals before providing advice on the best way to move forward.",
  },
  {
    q: "What types of projects do you specialise in?",
    a: "We focus on larger-scale residential projects, including: new home builds (custom homes, knockdown & rebuilds), full home renovations and extensions, kitchen and bathroom renovations, and outdoor living spaces including decks and alfresco areas.",
  },
  {
    q: "What areas of Melbourne do you service?",
    a: "We proudly service Melbourne's South and South-Eastern suburbs, including Brighton, Mentone, Cheltenham, Hampton, Altona Meadows, Bentleigh, Mordialloc and surrounding areas. If you're nearby but not sure if we cover your location, just get in touch — chances are, we do.",
  },
  {
    q: "How long will my project take?",
    a: "The timeframe depends on the size and scope of your project. As a general guide: bathroom/kitchen renovations 3–6 weeks, full home renovations 8–16 weeks, new home builds 4–8 months. We'll provide a detailed timeline before we start and keep you updated every step of the way.",
  },
  {
    q: "Can you help with budgeting and planning?",
    a: "Absolutely. We know that good planning is the key to a successful build. Our team works with you to design a project that fits your goals, style and budget, without compromising on quality.",
  },
  {
    q: "Can I live in my home during a renovation?",
    a: "In some cases, yes — for smaller renovations like kitchens or bathrooms. For larger projects or full-home makeovers, it's often best to relocate temporarily for safety and convenience. We'll discuss this with you during planning and help make the transition as smooth as possible.",
  },
];

// Real testimonials — exact names and quotes from the live site
export const testimonials = [
  {
    quote:
      "The Apollo Builders team completely transformed our home. From the first consultation to the final handover, they were professional, organised and transparent. The workmanship is outstanding — we couldn't be happier with the result.",
    name: "Rosemarie Palazzolo",
  },
  {
    quote:
      "We had both our bathroom and kitchen renovated by Apollo Builders, and the experience was fantastic. Every detail was managed perfectly, and the finish is exactly what we envisioned.",
    name: "Lauren Blickley",
  },
  {
    quote:
      "Building a new home can be stressful, but Apollo Builders made it simple. Their communication was excellent, and the quality of the build is top-notch. The whole process felt seamless, and the final result exceeded our expectations.",
    name: "Kristy Flanigen",
  },
  {
    quote:
      "We added an outdoor entertaining area and extended our living space. Apollo Builders handled everything — design, permits and construction — with absolute professionalism. The new space has completely changed how we use our home.",
    name: "James Lauber",
  },
];

// Suburbs served — from the live Contact page
export const suburbs = [
  "Brighton", "Mentone", "Cheltenham", "Hampton",
  "Altona Meadows", "Bentleigh", "Bentleigh East", "Mordialloc",
  "Clayton", "Glen Waverley", "Endeavour Hills",
  "Berwick", "Clyde", "Drouin", "Bayside", "Melbourne CBD",
];

// Project type options — from the live enquiry form
export const projectTypes = [
  "New Build",
  "Renovation",
  "Bathroom",
  "Kitchen",
  "Outdoor",
  "Other",
];
