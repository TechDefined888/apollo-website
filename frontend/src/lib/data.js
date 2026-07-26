// Central content store — edit these arrays to add/remove entries.

export const brand = {
  name: "Apollo Builders",
  phone: "0422 339 622",
  phoneRaw: "+61422339622",
  email: "info@apollobuilders.com.au",
  region: "Melbourne's South & South-East",
  tagline: "Renovations & Custom Homes",
};

export const trustPoints = [
  "Fully Insured",
  "Fixed Price Quotes",
  "Renovations & New Builds",
  "Melbourne South-East Specialists",
];

// Featured projects (from apollobuilders.com.au)
export const projects = [
  {
    slug: "drouin-new-build",
    name: "Drouin New Build",
    suburb: "Drouin",
    type: "New Home Build",
    year: "2025",
    image: "https://apollobuilders.com.au/wp-content/uploads/2025/11/drouin-new-build-3.jpg",
    alt: "Drouin new home build — custom family home by Apollo Builders, Melbourne South-East",
    description:
      "A modern family home built from the ground up — open-plan living, high ceilings and premium finishes.",
  },
  {
    slug: "bentleigh-east-renovation",
    name: "Bentleigh East Renovation",
    suburb: "Bentleigh East",
    type: "Full Home Renovation",
    year: "2025",
    image: "https://apollobuilders.com.au/wp-content/uploads/2025/11/bentleigh-east-new-1-1-1024x627.jpg",
    alt: "Bentleigh East home renovation — kitchen, bathroom and living transformation",
    description:
      "A complete transformation of kitchen, bathroom and living areas — bright, functional, contemporary.",
  },
  {
    slug: "endeavour-hills-renovation",
    name: "Endeavour Hills Renovation",
    suburb: "Endeavour Hills",
    type: "Full Renovation + Alfresco",
    year: "2025",
    image: "https://apollobuilders.com.au/wp-content/uploads/2025/11/endevour-hills-after-1-1024x686.jpg",
    alt: "Endeavour Hills renovation — new kitchen, bathroom and decked alfresco living space",
    description:
      "Full home renovation with new kitchen, bathroom and decked alfresco — seamless indoor-outdoor flow.",
  },
  {
    slug: "berwick-new-build",
    name: "Berwick New Build",
    suburb: "Berwick",
    type: "Two-Storey New Build",
    year: "2025",
    image: "https://apollobuilders.com.au/wp-content/uploads/2025/11/Berwick-New-Build-5-e1762576152191.jpg",
    alt: "Berwick two-storey new home build — modern family living by Apollo Builders",
    description:
      "Stylish two-storey home combining functionality and design excellence, built for modern family living.",
  },
  {
    slug: "altona-meadows-renovation",
    name: "Altona Meadows Renovation",
    suburb: "Altona Meadows",
    type: "Home Renovation",
    year: "2025",
    image: "https://apollobuilders.com.au/wp-content/uploads/2025/11/Altona-Meadows-after-3-1-e1763617143254-1024x633.jpg",
    alt: "Altona Meadows renovation — open-plan design and luxury finishes",
    description:
      "Modern makeover with open-plan design, luxury finishes and improved flow throughout.",
  },
  {
    slug: "clyde-new-build",
    name: "Clyde New Build",
    suburb: "Clyde",
    type: "New Home Build",
    year: "2024",
    image: "https://apollobuilders.com.au/wp-content/uploads/2025/11/Clyde-new-build-1-1024x683.jpg",
    alt: "Clyde new home build — comfort, efficiency and modern family living",
    description:
      "New construction designed for comfort, efficiency and modern family life in Clyde.",
  },
];

// Before / After curated gallery — 8 strong stills
export const gallery = [
  { src: "https://apollobuilders.com.au/wp-content/uploads/2025/11/drouin-new-build-9.jpg", alt: "Drouin new build exterior — Apollo Builders custom home", ratio: "portrait" },
  { src: "https://apollobuilders.com.au/wp-content/uploads/2025/11/endevour-hills-after-4.jpg", alt: "Endeavour Hills kitchen renovation after — Apollo Builders", ratio: "landscape" },
  { src: "https://apollobuilders.com.au/wp-content/uploads/2025/11/photo_2025-11-21_12-38-05.webp", alt: "Full home renovation Melbourne South East by Apollo Builders", ratio: "landscape" },
  { src: "https://apollobuilders.com.au/wp-content/uploads/2025/11/Drouin-New-Build-10.jpg", alt: "Drouin new home build interior — Apollo Builders", ratio: "portrait" },
  { src: "https://apollobuilders.com.au/wp-content/uploads/2025/11/drouin-new-build-7.jpg", alt: "Bathroom renovation Melbourne South East by Apollo Builders", ratio: "portrait" },
  { src: "https://apollobuilders.com.au/wp-content/uploads/2025/11/Drouin-New-Build.jpg", alt: "Knockdown and rebuild specialists Melbourne — Apollo Builders", ratio: "landscape" },
  { src: "https://apollobuilders.com.au/wp-content/uploads/2025/11/Berwick-New-Build-5-e1762576152191.jpg", alt: "Berwick two-storey new build — Apollo Builders", ratio: "landscape" },
  { src: "https://apollobuilders.com.au/wp-content/uploads/2025/11/Altona-Meadows-after-3-1-e1763617143254-1024x633.jpg", alt: "Altona Meadows renovation with open-plan design", ratio: "portrait" },
];

// Services with SEO-tuned content
export const services = [
  {
    slug: "new-home-builds",
    title: "New Home Builds",
    tagline: "Custom homes, knockdown rebuilds & duplex developments",
    image: "https://apollobuilders.com.au/wp-content/uploads/2025/11/drouin-new-build-9.jpg",
    alt: "New home builder Melbourne South East — custom family home in Drouin",
    body:
      "Dreaming of a home that's completely your own? We design and construct custom new builds that reflect your lifestyle, budget and vision — from planning and permits through to handover.",
    scope: [
      "Custom-designed family homes",
      "Knockdown & rebuild projects",
      "Duplex and multi-unit developments",
      "Project management from start to finish",
    ],
    keywords: "new home builder Berwick, Clyde, Drouin · knockdown rebuild Melbourne South-East · custom home builder",
  },
  {
    slug: "home-renovations",
    title: "Home Renovations & Extensions",
    tagline: "Full home renovations, structural extensions & second-storey additions",
    image: "https://apollobuilders.com.au/wp-content/uploads/2025/11/photo_2025-11-21_12-38-05.webp",
    alt: "Home extension builder Brighton Bayside — full renovation by Apollo Builders",
    body:
      "Transform your existing home with our expert renovation team. Whether it's a full makeover or modernising key spaces, we deliver precision workmanship and reliable results.",
    scope: [
      "Full home renovations",
      "Structural extensions & additions",
      "Outdoor decking, pergolas & alfresco",
      "Concrete driveways & landscaping",
    ],
    keywords: "home extension builder Brighton, Hampton, Bayside · renovation builder Melbourne · full home renovation",
  },
  {
    slug: "kitchen-renovations",
    title: "Kitchen Renovations",
    tagline: "Custom cabinetry, benchtops & open-plan redesigns",
    image: "https://apollobuilders.com.au/wp-content/uploads/2025/11/endevour-hills-after-4.jpg",
    alt: "Kitchen renovation Bentleigh Brighton Mentone Hampton Glen Waverley — Apollo Builders",
    body:
      "Your kitchen is the heart of your home. We design and build kitchens that combine beauty, practicality and quality craftsmanship — with clear timelines and fixed pricing.",
    scope: [
      "Custom cabinetry & benchtops",
      "Open-plan redesigns",
      "Appliance & lighting installation",
      "Full kitchen rebuilds",
    ],
    keywords: "kitchen renovation Bentleigh, Brighton, Mentone, Hampton, Glen Waverley",
  },
  {
    slug: "bathroom-renovations",
    title: "Bathroom Renovations",
    tagline: "Waterproofing, tiling, plumbing, lighting & luxury fitouts",
    image: "https://apollobuilders.com.au/wp-content/uploads/2025/11/drouin-new-build-7.jpg",
    alt: "Bathroom renovation Bentleigh East Clayton Cheltenham — Apollo Builders",
    body:
      "A great bathroom blends comfort, functionality and style. We handle every stage — from waterproofing and tiling to plumbing, lighting and finishes.",
    scope: [
      "Complete bathroom redesign",
      "Modern and luxury fitouts",
      "Custom vanities, tiling & fixtures",
    ],
    keywords: "bathroom renovation Bentleigh East, Clayton, Cheltenham",
  },
  {
    slug: "outdoor-living",
    title: "Outdoor Living",
    tagline: "Decking, pergolas, alfresco extensions & landscaping",
    image: "https://apollobuilders.com.au/wp-content/uploads/2025/11/endevour-hills-after-1-1024x686.jpg",
    alt: "Outdoor living builder Melbourne — deck and alfresco extension in Endeavour Hills",
    body:
      "Extend how you live. We design and build outdoor spaces that flow naturally from your home — decked alfrescos, pergolas and refined landscaping.",
    scope: [
      "Decked alfresco spaces",
      "Pergolas & shade structures",
      "Outdoor kitchens & entertaining zones",
      "Concrete driveways & landscaping",
    ],
    keywords: "outdoor living builder Melbourne South-East · alfresco extension",
  },
];

export const processSteps = [
  { n: "01", title: "Initial Consultation", body: "We visit your site, listen to your brief and set realistic expectations before quoting." },
  { n: "02", title: "Planning & Fixed Price Quote", body: "Scope, permits and a fixed price contract — no vague estimates, no hidden surprises." },
  { n: "03", title: "Project Commencement", body: "Trades scheduled, materials secured, and a clear start date locked in." },
  { n: "04", title: "Stage-by-Stage Updates", body: "Regular walkthroughs and reports so you always know exactly where the build stands." },
  { n: "05", title: "Completion & Handover", body: "Final inspection, defect-free handover and warranty on every finish." },
];

export const whyUs = [
  "Fully Licensed & Insured",
  "Fixed Price Quotes — no hidden surprises",
  "Quality Workmanship & Attention to Detail",
  "Clear Communication Throughout Your Project",
  "Experienced in Renovations, Extensions & New Builds",
  "Melbourne South-East Specialists",
];

export const faqs = [
  {
    q: "How do I get started with Apollo Builders?",
    a: "The first step is to get in touch with our team for an initial consultation. We'll discuss your project, budget and goals before providing advice on the best way to move forward.",
  },
  {
    q: "What types of projects do you specialise in?",
    a: "Larger-scale residential work: new home builds (custom homes and knockdown-rebuilds), full home renovations and extensions, kitchen and bathroom renovations, and outdoor living spaces including decks and alfresco areas.",
  },
  {
    q: "What areas of Melbourne do you service?",
    a: "We proudly service Melbourne's South and South-Eastern suburbs including Brighton, Mentone, Cheltenham, Hampton, Altona Meadows, Bentleigh, Mordialloc, Berwick, Clyde and surrounding areas. If you're nearby, get in touch — chances are, we cover it.",
  },
  {
    q: "How long will my project take?",
    a: "As a general guide: Bathroom or Kitchen renovations 3–6 weeks · Full home renovations 8–16 weeks · New home builds 4–8 months. We provide a detailed timeline before we start and keep you updated every step of the way.",
  },
  {
    q: "Do you offer fixed price building contracts?",
    a: "Yes. Every Apollo Builders project is quoted on a fixed price basis. You'll see the full scope, inclusions and variations policy in writing before we begin — so there are no surprises mid-build.",
  },
  {
    q: "Are you a VBA registered builder and fully insured?",
    a: "Yes. We hold current builder registration and carry full domestic building insurance and public liability cover. We're happy to provide certificates before signing.",
  },
  {
    q: "Can I live in my home during a renovation?",
    a: "Sometimes — for smaller renovations like a single bathroom or kitchen. For larger projects or full-home makeovers, it's usually best to relocate for safety and speed. We'll discuss it during planning.",
  },
];

export const testimonials = [
  {
    quote:
      "The Apollo Builders team completely transformed our home. From the first consultation to the final handover, they were professional, organised and transparent. The workmanship is outstanding — we couldn't be happier.",
    name: "Rosemarie Palazzolo",
    project: "Full Home Renovation",
  },
  {
    quote:
      "We had both our bathroom and kitchen renovated by Apollo Builders and the experience was fantastic. Every detail was managed perfectly and the finish is exactly what we envisioned.",
    name: "Lauren Blickley",
    project: "Kitchen & Bathroom",
  },
  {
    quote:
      "Building a new home can be stressful, but Apollo Builders made it simple. Their communication was excellent and the quality of the build is top-notch. The whole process felt seamless.",
    name: "Kristy Flanigen",
    project: "New Home Build",
  },
  {
    quote:
      "We added an outdoor entertaining area and extended our living space. Apollo handled design, permits and construction with absolute professionalism. It has completely changed how we use our home.",
    name: "James Lauber",
    project: "Extension & Outdoor Living",
  },
];

export const suburbs = [
  "Bayside", "Bentleigh", "Bentleigh East", "Brighton",
  "Clayton", "Glen Waverley", "Hampton", "Mentone",
  "Cheltenham", "Mordialloc", "Endeavour Hills",
  "Altona Meadows", "Berwick", "Clyde", "Drouin",
  "Melbourne CBD",
];

export const projectTypes = [
  "New Build",
  "Full Home Renovation",
  "Kitchen Renovation",
  "Bathroom Renovation",
  "Home Extension",
  "Outdoor / Alfresco",
  "Other",
];
