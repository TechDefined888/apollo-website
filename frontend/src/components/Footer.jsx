import { Link } from "react-router-dom";
import { brand, suburbs, services } from "@/lib/data";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-[color:var(--navy)] text-[color:var(--off-white)]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
          <div className="md:col-span-5">
            <img
              src={brand.logo}
              alt="Apollo Builders — Melbourne South-East builders"
              className="h-16 w-auto brightness-0 invert opacity-95"
            />
            <h3 className="font-display text-4xl md:text-5xl mt-6 leading-[1.1] tracking-tight">
              Build boldly. <br /> Renovate quietly.
            </h3>
            <p className="mt-6 max-w-md text-[color:var(--off-white)]/90 font-normal">
              A residential building & renovation studio serving Melbourne&rsquo;s South &amp; South-Eastern suburbs — new
              home builds, extensions, kitchen and bathroom renovations, and outdoor living spaces.
            </p>
            <div className="mt-8 flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="hover:opacity-70 transition-opacity">
                <Instagram strokeWidth={1.25} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:opacity-70 transition-opacity">
                <Facebook strokeWidth={1.25} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="tracking-eyebrow text-[color:var(--gold)]">Services</div>
            <ul className="mt-6 space-y-3 text-[15px] font-light">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="link-under">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold)]">Contact</div>
            <ul className="mt-6 space-y-3 text-[15px] font-light">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4" strokeWidth={1.25} />
                <a href={`tel:${brand.phoneRaw}`} className="link-under">{brand.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" strokeWidth={1.25} />
                <a href={`mailto:${brand.email}`} className="link-under">{brand.email}</a>
              </li>
              <li className="text-[color:var(--off-white)]/90 pt-3">
                Melbourne&rsquo;s South &amp; South-Eastern suburbs, VIC
              </li>
            </ul>

            <div className="tracking-eyebrow text-[color:var(--gold)] mt-10">Service Areas</div>
            <p className="mt-6 text-[14px] leading-relaxed text-[color:var(--off-white)]/85">
              {suburbs.join(" · ")}
            </p>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] tracking-[0.15em] uppercase text-[color:var(--off-white)]/85">
          <div>© {new Date().getFullYear()} Apollo Builders — All rights reserved.</div>
          <div>VBA Registered · Fully Insured · Melbourne, VIC</div>
        </div>
      </div>
    </footer>
  );
}
