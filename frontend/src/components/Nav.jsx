import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { brand } from "@/lib/data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Studio" },
  { to: "/services", label: "Practice" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const overHero = onHome && !scrolled;
  const dark = overHero;

  return (
    <>
      <header
        data-testid="site-nav"
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || !onHome ? "nav-solid" : ""
        }`}
      >
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
          <div className="flex items-center justify-between h-[76px] md:h-[88px]">
            <Link to="/" data-testid="nav-logo" aria-label="Apollo Builders — home" className="flex items-center gap-3 group">
              <img
                src={brand.logo}
                alt="Apollo Builders"
                className={`h-11 md:h-12 w-auto transition-all duration-500 ${dark ? "brightness-0 invert" : ""}`}
              />
              <span className={`hidden sm:inline font-display text-[18px] tracking-tight ${dark ? "text-[color:var(--paper)]" : "text-[color:var(--ink-black)]"}`}>
                Apollo Builders
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-11" aria-label="Primary">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `link-under text-[12px] tracking-[0.22em] uppercase font-semibold ${
                      dark
                        ? "text-[color:var(--paper)]/95 hover:text-[color:var(--gold)]"
                        : isActive
                        ? "text-[color:var(--ink-black)]"
                        : "text-[color:var(--ink)] hover:text-[color:var(--gold-dark)]"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={`tel:${brand.phoneRaw}`}
                data-testid="nav-phone"
                className={`hidden lg:flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase font-semibold transition-colors duration-500 ${
                  dark ? "text-[color:var(--paper)]" : "text-[color:var(--ink-black)]"
                }`}
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                {brand.phone}
              </a>
              {!overHero && (
                <Link to="/contact" data-testid="nav-cta" className="btn-gold hidden md:inline-flex">
                  Enquire
                </Link>
              )}
              <button
                aria-label={open ? "Close menu" : "Open menu"}
                data-testid="nav-menu-toggle"
                className={`md:hidden inline-flex items-center justify-center w-10 h-10 ${
                  dark ? "text-[color:var(--paper)]" : "text-[color:var(--ink-black)]"
                }`}
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden bg-[color:var(--paper)] pt-[76px]">
          <nav className="px-6 py-8 flex flex-col gap-6" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`m-nav-link-${l.label.toLowerCase()}`}
                className="font-display text-4xl text-[color:var(--ink-black)]"
              >
                {l.label}
              </NavLink>
            ))}
            <div className="hair mt-4" />
            <a href={`tel:${brand.phoneRaw}`} className="text-[12px] tracking-[0.22em] uppercase">
              {brand.phone}
            </a>
            <Link to="/contact" className="btn-gold w-max">Enquire</Link>
          </nav>
        </div>
      )}
    </>
  );
}
