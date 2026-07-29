/**
 * PhotoFrame — renders either the given image OR a branded decorative
 * placeholder when the src is empty. Used everywhere we would previously
 * hotlink an image from apollobuilders.com.au. When the client provides
 * self-hosted assets, filling the src prop restores the photograph
 * without any component changes.
 *
 * Design intent: a placeholder is quiet, monogrammed and matches the
 * locked luxury aesthetic — no broken image icons, no "coming soon"
 * copy, no stock or AI imagery.
 */
export default function PhotoFrame({
  src,
  alt = "",
  className = "aspect-[4/3]",
  eyebrow = "",
  label = "Apollo Builders",
  loading = "lazy",
  variant = "cream", // "cream" | "navy"
  children,
}) {
  if (src) {
    return (
      <div className={`frame ${className}`}>
        <img src={src} alt={alt} loading={loading} />
      </div>
    );
  }
  const isDark = variant === "navy";
  const bg = isDark ? "bg-[color:var(--ink-black)]" : "bg-[color:var(--cream)]";
  const border = isDark ? "border-[color:var(--paper)]/10" : "border-[color:var(--hair)]";
  const eyebrowColor = isDark ? "text-[color:var(--gold)]" : "text-[color:var(--gold-dark)]";
  const labelColor = isDark ? "text-[color:var(--paper)]" : "text-[color:var(--ink-black)]";
  return (
    <div
      role="img"
      aria-label={alt || label}
      className={`frame ${className} ${bg} border ${border} flex items-center justify-center overflow-hidden relative`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          background: isDark
            ? "radial-gradient(700px 400px at 25% 20%, rgba(197,137,45,0.14), transparent 60%)"
            : "radial-gradient(700px 400px at 25% 20%, rgba(197,137,45,0.08), transparent 60%)",
        }}
      />
      <div className="relative text-center px-6">
        {eyebrow && (
          <div className={`tracking-eyebrow ${eyebrowColor}`}>{eyebrow}</div>
        )}
        <div className={`font-display text-[22px] md:text-[26px] tracking-[-0.02em] mt-2 ${labelColor}`}>
          {label}
        </div>
        {children}
      </div>
    </div>
  );
}
