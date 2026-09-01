import { useEffect } from "react";
import "@/App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
  useParams,
} from "react-router-dom";
import Lenis from "lenis";
import { HelmetProvider } from "react-helmet-async";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServicePage from "@/pages/ServicePage";
import Contact from "@/pages/Contact";
import Suburb from "@/pages/Suburb";
import Resource, { ResourceIndex } from "@/pages/Resource";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import KitchenLanding from "@/pages/KitchenLanding";
import RenovationQuote from "@/pages/RenovationQuote";
import Consult from "@/pages/Consult";
import BurntByBuilders from "@/pages/BurntByBuilders";
import ThankYou from "@/pages/ThankYou";
import Legal from "@/pages/Legal";
import BuildersClayton from "@/pages/BuildersClayton";
import MelbourneHomeBuilders from "@/pages/MelbourneHomeBuilders";
import NotFound from "@/pages/NotFound";

/* New Melbourne SEO pages */
import HomeRenovationsMelbourne from "@/pages/HomeRenovationsMelbourne";
import HouseExtensionsMelbourne from "@/pages/HouseExtensionsMelbourne";
import CustomHomeBuildersMelbourne from "@/pages/CustomHomeBuildersMelbourne";
import NewHomeBuildersMelbourne from "@/pages/NewHomeBuildersMelbourne";
import KnockDownRebuildMelbourne from "@/pages/KnockDownRebuildMelbourne";
import DesignBuildMelbourne from "@/pages/DesignBuildMelbourne";

import TrailingSlashRedirect from "@/components/TrailingSlashRedirect";
import Analytics from "@/components/Analytics";
import { Toaster } from "sonner";

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function SmoothScroll({ children }) {
  useEffect(() => {
    const prefersReduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduce) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return children;
}

// Legacy nested services URL → flat top-level URL
function ServiceSlugRedirect() {
  const { slug } = useParams();

  return <Navigate to={`/${slug}/`} replace />;
}

function App() {
  return (
    <div className="App grain">
      <HelmetProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL || "/"}>
          <TrailingSlashRedirect />
          <Analytics />

          <SmoothScroll>
            <ScrollTop />

            <a href="#main" className="skip-nav">
              Skip to main content
            </a>

            <Nav />

            <main id="main">
              <Routes>
                {/* Main canonical pages */}
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/services" element={<Services />} />

                {/* Existing service pages */}
                <Route path="/new-home-builds" element={<ServicePage />} />
                <Route path="/home-renovations" element={<ServicePage />} />

                <Route
                  path="/bathroom-renovations"
                  element={<ServicePage />}
                />

                <Route
                  path="/kitchen-renovations"
                  element={<ServicePage />}
                />

                <Route path="/contact-us" element={<Contact />} />

                {/* Project pages */}
                <Route path="/our-projects" element={<Projects />} />

                <Route
                  path="/our-projects/:slug"
                  element={<ProjectDetail />}
                />

                {/* Conversion landing pages */}
                <Route
                  path="/kitchen-renovation-landing"
                  element={<KitchenLanding />}
                />

                <Route
                  path="/renovation-quote"
                  element={<RenovationQuote />}
                />

                <Route path="/consult" element={<Consult />} />

                <Route
                  path="/burnt-by-builders"
                  element={<BurntByBuilders />}
                />

                <Route
                  path="/thank-you"
                  element={<ThankYou variant="quote" />}
                />

                <Route
                  path="/thanks"
                  element={<ThankYou variant="consult" />}
                />

                {/* Existing Melbourne SEO landing page */}
                <Route
                  path="/melbourne-home-builders"
                  element={<MelbourneHomeBuilders />}
                />

                {/* New Melbourne SEO landing pages */}

                <Route
                  path="/home-renovations-melbourne"
                  element={<HomeRenovationsMelbourne />}
                />

                <Route
                  path="/house-extensions-melbourne"
                  element={<HouseExtensionsMelbourne />}
                />

                <Route
                  path="/custom-home-builders-melbourne"
                  element={<CustomHomeBuildersMelbourne />}
                />

                <Route
                  path="/new-home-builders-melbourne"
                  element={<NewHomeBuildersMelbourne />}
                />

                <Route
                  path="/knock-down-rebuild-melbourne"
                  element={<KnockDownRebuildMelbourne />}
                />

                <Route
                  path="/design-build-builders-melbourne"
                  element={<DesignBuildMelbourne />}
                />

                {/* SEO / resource pages */}
                <Route path="/suburbs/:slug" element={<Suburb />} />
                <Route path="/resources" element={<ResourceIndex />} />
                <Route path="/resources/:slug" element={<Resource />} />

                {/* Location SEO landing page */}
                <Route
                  path="/builders-clayton"
                  element={<BuildersClayton />}
                />

                {/* Legal pages */}
                <Route path="/privacy-policy" element={<Legal />} />
                <Route path="/cookie-policy" element={<Legal />} />
                <Route path="/terms-of-use" element={<Legal />} />

                {/* Legacy redirects */}
                <Route
                  path="/about"
                  element={<Navigate to="/about-us/" replace />}
                />

                <Route
                  path="/contact"
                  element={<Navigate to="/contact-us/" replace />}
                />

                <Route
                  path="/services/:slug"
                  element={<ServiceSlugRedirect />}
                />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />

            <Toaster position="bottom-right" theme="light" />
          </SmoothScroll>
        </BrowserRouter>
      </HelmetProvider>
    </div>
  );
}

export default App;