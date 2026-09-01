import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { brand } from "@/lib/data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about-us/", label: "About" },
  { to: "/services/", label: "Services" },
  { to: "/our-projects/", label: "Projects" },
  { to: "/contact-us/", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [elevated, setElevated] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        data-testid="site-nav"
        className={`sticky top-0 z-50 bg-[color:var(--ink-black)] text-[color:var(--paper)] transition-shadow duration-500 ${
          elevated ? "shadow-[0_10px_30px_-10px_rgba(0,0,0,0.55)]" : ""
        }`}
      >
        <div className="border-b border-[color:var(--paper)]/10">
          <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
            <div className="flex items-center justify-between h-[86px] md:h-[100px]">
              <Link
                to="/"
                data-testid="nav-logo"
                aria-label="Apollo Builders — home"
                className="flex items-center gap-4 group focus-visible:outline-2 focus-visible:outline-[color:var(--gold)] focus-visible:outline-offset-4"
              >
                <img
                  src={brand.logo}
                  alt="Apollo Builders"
                  className="h-14 md:h-16 w-auto"
                />
                <span className="hidden lg:inline font-display text-[19px] md:text-[20px] tracking-tight text-[color:var(--paper)]">
                  Apollo Builders
                </span>
              </Link>

              <nav className="hidden md:flex items-center gap-8 lg:gap-12" aria-label="Primary">
                {links.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === "/"}
                    data-testid={`nav-link-${l.label.toLowerCase()}`}
                    className={({ isActive }) =>
                      `link-under text-[12px] tracking-[0.24em] uppercase font-semibold transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-[color:var(--gold)] focus-visible:outline-offset-6 ${
                        isActive
                          ? "text-[color:var(--gold)]"
                          : "text-[color:var(--paper)] hover:text-[color:var(--gold)]"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                ))}
              </nav>

              <div className="flex items-center gap-4 md:gap-6">
                <a
                  href={`tel:${brand.phoneRaw}`}
                  data-testid="nav-phone"
                  className="hidden lg:flex items-center gap-2 text-[12px] tracking-[0.24em] uppercase font-semibold text-[color:var(--paper)] hover:text-[color:var(--gold)] transition-colors"
                >
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {brand.phone}
                </a>
                <Link
                  to="/contact-us/"
                  data-testid="nav-cta"
                  className="btn-gold hidden md:inline-flex"
                >
                  Enquire
                </Link>
                <button
                  aria-label={open ? "Close menu" : "Open menu"}
                  aria-expanded={open}
                  data-testid="nav-menu-toggle"
                  className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[color:var(--paper)] focus-visible:outline-2 focus-visible:outline-[color:var(--gold)] focus-visible:outline-offset-2"
                  onClick={() => setOpen((v) => !v)}
                >
                  {open ? <X /> : <Menu />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden bg-[color:var(--ink-black)] pt-[86px] text-[color:var(--paper)]">
          <nav className="px-6 py-10 flex flex-col gap-6" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`m-nav-link-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `font-display text-4xl ${
                    isActive ? "text-[color:var(--gold)]" : "text-[color:var(--paper)]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="h-px bg-[color:var(--paper)]/15 my-4" />
            <a
              href={`tel:${brand.phoneRaw}`}
              className="text-[12px] tracking-[0.24em] uppercase text-[color:var(--paper)]"
            >
              {brand.phone}
            </a>
            <Link to="/contact-us/" className="btn-gold w-max">Enquire</Link>
          </nav>
        </div>
      )}
    </>
  );
}
