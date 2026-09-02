import { Link } from "react-router-dom";
import { brand, suburbs, services } from "@/lib/data";

import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const seoServiceLinks = [
  {
    label: "Home Renovations Melbourne",
    to: "/home-renovations-melbourne/",
  },
  {
    label: "House Extensions Melbourne",
    to: "/house-extensions-melbourne/",
  },
  {
    label: "Custom Home Builders Melbourne",
    to: "/custom-home-builders-melbourne/",
  },
  {
    label: "New Home Builders Melbourne",
    to: "/new-home-builders-melbourne/",
  },
  {
    label: "Knock Down Rebuild Melbourne",
    to: "/knock-down-rebuild-melbourne/",
  },
  {
    label: "Design & Build Melbourne",
    to: "/design-build-melbourne/",
  },
];

export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="bg-[color:var(--ink-black)] text-[color:var(--paper)] relative"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
          {/* Brand */}
          <div className="md:col-span-5">
            <img
              src={brand.logo}
              alt="Apollo Builders"
              className="h-80 w-auto"
            />

            <h3 className="font-display text-[36px] md:text-[46px] mt-8 leading-[1.05] tracking-[-0.02em]">
              Renovations &amp;
              <br />
              custom homes,
              <br />
              <span className="text-[color:var(--gold)]">
                Melbourne South-East.
              </span>
            </h3>

            <p className="mt-8 max-w-md text-[color:var(--paper)]/85">
              Get in touch for a personalised, no-obligation quote on your
              next project.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:opacity-70 transition-opacity"
              >
                <Instagram strokeWidth={1.25} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="hover:opacity-70 transition-opacity"
              >
                <Facebook strokeWidth={1.25} />
              </a>
            </div>
          </div>

          {/* Practice / Services */}
          <div className="md:col-span-3">
            <div className="tracking-eyebrow text-[color:var(--gold)]">
              Practice
            </div>

            <ul className="mt-6 space-y-3 text-[15px]">
              {/* Existing service pages */}
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}/`}
                    className="link-under inline-flex items-center gap-2"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}

              {/* Existing Melbourne hub page */}
              <li>
                <Link
                  to="/melbourne-home-builders/"
                  className="link-under inline-flex items-center gap-2"
                >
                  Melbourne Home Builders
                </Link>
              </li>

              {/* New SEO landing pages */}
              {seoServiceLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="link-under inline-flex items-center gap-2"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {/* Projects */}
              <li>
                <Link
                  to="/our-projects/"
                  className="link-under inline-flex items-center gap-2"
                >
                  Our Projects
                </Link>
              </li>

              {/* CTA */}
              <li className="pt-4">
                <Link
                  to="/contact-us/"
                  className="link-under inline-flex items-center gap-2 text-[color:var(--gold)] font-semibold text-[12px] tracking-[0.22em] uppercase"
                >
                  Enquire
                  <ArrowUpRight
                    className="h-3.5 w-3.5"
                    strokeWidth={2}
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold)]">
              Contact
            </div>

            <ul className="mt-6 space-y-4 text-[15px]">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4" strokeWidth={1.25} />

                <a
                  href={`tel:${brand.phoneRaw}`}
                  className="link-under"
                >
                  {brand.phone}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4" strokeWidth={1.25} />

                <a
                  href={`mailto:${brand.email}`}
                  className="link-under"
                >
                  {brand.email}
                </a>
              </li>

              <li className="text-[color:var(--paper)]/85 pt-2">
                Melbourne&rsquo;s South &amp; South-Eastern suburbs, VIC
              </li>
            </ul>

            {/* Areas */}
            <div className="tracking-eyebrow text-[color:var(--gold)] mt-12">
              Areas We Service
            </div>

            <ul
              className="mt-6 grid grid-cols-2 gap-y-2 gap-x-4 text-[14px]"
              data-testid="footer-areas-list"
            >
              {[
                {
                  label: "Bentleigh",
                  href: "/suburbs/bentleigh/",
                },
                {
                  label: "Bentleigh East",
                  href: "/suburbs/bentleigh-east/",
                },
                {
                  label: "Berwick",
                  href: "/suburbs/berwick/",
                },
                {
                  label: "Brighton",
                  href: "/suburbs/brighton/",
                },
                {
                  label: "Cheltenham",
                  href: "/suburbs/cheltenham/",
                },
                {
                  label: "Clayton",
                  href: "/builders-clayton/",
                },
                {
                  label: "Clyde",
                  href: "/suburbs/clyde/",
                },
                {
                  label: "Glen Waverley",
                  href: "/suburbs/glen-waverley/",
                },
                {
                  label: "Hampton",
                  href: "/suburbs/hampton/",
                },
                {
                  label: "Mentone",
                  href: "/suburbs/mentone/",
                },
              ].map((a) => (
                <li key={a.href}>
                  <Link
                    to={a.href}
                    data-testid={`footer-area-${a.label
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="link-under"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Resources */}
            <div className="tracking-eyebrow text-[color:var(--gold)] mt-8">
              <Link
                to="/resources/"
                className="link-under"
              >
                Resources
              </Link>
            </div>

            <p className="mt-6 text-[14px] leading-relaxed text-[color:var(--paper)]/80">
              {suburbs.join(" · ")}
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-24 pt-8 border-t border-[color:var(--paper)]/12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] tracking-[0.22em] uppercase text-[color:var(--paper)]/60">
          <div>
            © {new Date().getFullYear()} Apollo Builders
          </div>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <li>
              <Link
                to="/privacy-policy/"
                data-testid="footer-privacy"
                className="link-under"
              >
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link
                to="/cookie-policy/"
                data-testid="footer-cookies"
                className="link-under"
              >
                Cookie Policy
              </Link>
            </li>

            <li>
              <Link
                to="/terms-of-use/"
                data-testid="footer-terms"
                className="link-under"
              >
                Terms of Use
              </Link>
            </li>
          </ul>

          <div>
            Fully Insured · Fixed Price Quotes · Melbourne, VIC
          </div>
        </div>
      </div>
    </footer>
  );
}