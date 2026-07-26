import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { brand } from "@/lib/data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        data-testid="site-nav"
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || pathname !== "/" ? "nav-solid" : ""
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="flex items-center justify-between h-[72px] md:h-[84px]">
            <Link to="/" data-testid="nav-logo" className="flex items-baseline gap-3 group">
              <span className="font-display text-[22px] md:text-[24px] leading-none text-[color:var(--navy)] tracking-tight">
                Apollo
              </span>
              <span className="tracking-eyebrow text-[color:var(--navy)]/70 hidden sm:inline">
                Builders · Est. Melbourne
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-10">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  data-testid={`nav-link-${l.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `link-under text-[13px] tracking-[0.14em] uppercase font-medium ${
                      isActive ? "text-[color:var(--navy)]" : "text-[color:var(--ink)]/75 hover:text-[color:var(--navy)]"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${brand.phoneRaw}`}
                data-testid="nav-phone"
                className="hidden lg:flex items-center gap-2 text-[13px] tracking-[0.14em] uppercase font-medium text-[color:var(--navy)]"
              >
                <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                {brand.phone}
              </a>
              <Link to="/contact" data-testid="nav-cta" className="btn-navy hidden md:inline-flex">
                Get a Quote
              </Link>
              <button
                aria-label="menu"
                data-testid="nav-menu-toggle"
                className="md:hidden inline-flex items-center justify-center w-10 h-10 text-[color:var(--navy)]"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 md:hidden bg-[color:var(--off-white)] pt-[72px]">
          <div className="px-6 py-8 flex flex-col gap-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`m-nav-link-${l.label.toLowerCase()}`}
                className="font-display text-4xl text-[color:var(--navy)]"
              >
                {l.label}
              </NavLink>
            ))}
            <div className="hair mt-4" />
            <a href={`tel:${brand.phoneRaw}`} className="text-[13px] tracking-[0.18em] uppercase">
              {brand.phone}
            </a>
            <Link to="/contact" className="btn-navy w-max">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
