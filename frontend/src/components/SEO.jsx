import { Helmet } from "react-helmet-async";

/**
 * Per-page SEO — unique title, meta description, canonical, OG,
 * Twitter, and structured data. All copy passed in from the page —
 * never fabricates data.
 */
export default function SEO({
  title,
  description,
  path = "/",
  image = "/images/apollo/drouin-new-build-3.jpg",
  jsonLd = null,
  noindex = false,
}) {
  const base = "https://apollobuilders.com.au";
  // Normalise path: ensure leading slash + trailing slash to match live site (Yoast) canonicalisation
  let normalised = path.startsWith("/") ? path : `/${path}`;
  if (normalised !== "/" && !normalised.endsWith("/")) normalised = `${normalised}/`;
  const canonical = `${base}${normalised}`;
  const gaId = process.env.REACT_APP_GA4_ID;
  const gtmId = process.env.REACT_APP_GTM_ID;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Apollo Builders" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
      {/* Google Analytics 4 — activated only when REACT_APP_GA4_ID is set post-launch */}
      {gaId && (
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      )}
      {gaId && (
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `}</script>
      )}
      {/* Google Tag Manager — activated only when REACT_APP_GTM_ID is set */}
      {gtmId && (
        <script>{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `}</script>
      )}
    </Helmet>
  );
}

// ─── Structured-data helpers ──────────────────────────────────────
export const localBusiness = () => ({
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "LocalBusiness", "HomeAndConstructionBusiness", "Organization"],
  "@id": "https://apollobuilders.com.au/#business",
  name: "Apollo Builders",
  legalName: "Apollo Builders",
  url: "https://apollobuilders.com.au/",
  logo: "/images/apollo/photo_2025-12-03_10-38-14-e1764907039294.png",
  image: "/images/apollo/photo_2025-12-03_10-38-14-e1764907039294.png",
  telephone: "+61422339622",
  email: "info@apollobuilders.com.au",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: [
    "Brighton","Mentone","Cheltenham","Hampton","Altona Meadows",
    "Bentleigh","Bentleigh East","Mordialloc","Clayton","Glen Waverley",
    "Endeavour Hills","Berwick","Clyde","Drouin","Bayside","Melbourne CBD",
    "Melbourne South-East",
  ],
  knowsAbout: [
    "New Home Builds","Custom Home Builders","Home Renovations",
    "Kitchen Renovations","Bathroom Renovations","Home Extensions",
    "Knockdown Rebuild","Outdoor Living",
  ],
});

export const serviceSchema = (svc) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: svc.title,
  provider: { "@type": "GeneralContractor", name: "Apollo Builders" },
  areaServed: { "@type": "Place", name: "Melbourne South-East, VIC, Australia" },
  description: svc.body,
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbSchema = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: `https://apollobuilders.com.au${c.path}`,
  })),
});
