// A single, slow, editorial marquee.

export default function Marquee({ items, testId }) {
  const doubled = [...items, ...items];
  return (
    <section
      data-testid={testId || "editorial-marquee"}
      className="relative py-16 md:py-24 border-y border-[color:var(--hair)] overflow-hidden"
    >
      <div className="marquee-track will-change-transform">
        {doubled.map((t, i) => (
          <span
            key={i}
            className="font-display text-outline text-[64px] md:text-[112px] lg:text-[140px] leading-[1] mx-8 md:mx-14 whitespace-nowrap font-light tracking-tight"
          >
            {t} <span className="mx-4 md:mx-8">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
