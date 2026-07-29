import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { ArrowUpRight, ChefHat, Award, CheckCircle2 } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import { brand, gallery } from "@/lib/data";
import SEO, { breadcrumbSchema, serviceSchema } from "@/components/SEO";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const kitchenProcess = [
  {
    n: "01",
    title: "Consultation & Vision",
    body: "We take the time to understand how you live, how you use your kitchen and what matters most — so the design decisions are made right from the start.",
  },
  {
    n: "02",
    title: "3D Design & Planning",
    body: "See your kitchen fully designed before construction begins. Detailed planning and photorealistic renders ensure clarity, confidence and no surprises.",
  },
  {
    n: "03",
    title: "Material & Finish Selection",
    body: "We guide you through proven materials and finishes that look premium and perform long-term — removing guesswork and costly mistakes.",
  },
  {
    n: "04",
    title: "Masterful Construction",
    body: "Our licensed builders manage every stage of construction with precision — coordinating trades, timelines and quality control to deliver a flawless result.",
  },
];

const expertise = [
  {
    title: "Custom Cabinetry & Joinery",
    body: "Bespoke cabinetry designed around how you actually use your kitchen — not a catalogue layout.",
    bullets: [
      "Premium German hardware (Blum, Hettich)",
      "Soft-close drawers and doors",
      "Smart, integrated storage solutions",
      "Durable finishes selected to last",
    ],
  },
  {
    title: "Luxury Stone Benchtops",
    body: "Natural and engineered stone selected for both beauty and daily use. We handle cutting, profiling and installation to deliver a clean, seamless finish.",
    bullets: [
      "Marble, granite, quartz, Caesarstone, Dekton",
      "Waterfall edges and custom profiles",
      "Integrated sinks and drainage grooves",
    ],
  },
  {
    title: "Full Structural Remodelling",
    body: "Transform closed kitchens into open, functional living spaces. Structural works, approvals and coordination are fully managed.",
    bullets: [
      "Structural wall removals",
      "Council approvals managed",
      "Demolition and waste removal",
      "Lighting and layout integration",
    ],
  },
];

export default function KitchenLanding() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", website: "" });
  const [busy, setBusy] = useState(false);
  const formLoadedAt = useRef(Date.now());
  useEffect(() => { formLoadedAt.current = Date.now(); }, []);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error("Please add your name, phone and email.");
      return;
    }
    setBusy(true);
    try {
      await axios.post(`${API}/enquiries`, {
        ...form,
        project_type: "Kitchen",
        message: `[Bespoke Kitchen Landing]\n${form.message || "Interested in a bespoke kitchen design."}`,
        form_loaded_at: formLoadedAt.current,
      });
      navigate("/thank-you");
    } catch (err) {
      const msg = err?.response?.data?.detail?.[0]?.msg || err?.response?.data?.detail || "Something went wrong. Please try again.";
      toast.error(String(msg));
    } finally { setBusy(false); }
  };

  return (
    <div data-testid="kitchen-landing-page">
      <SEO
        title="Bespoke Kitchens Melbourne — Apollo Builders | Luxury Kitchen Design"
        description="Apollo Builders crafts bespoke kitchens for Melbourne homes — high-performance functionality with timeless design, licensed builders, fixed pricing."
        path="/kitchen-renovation-landing/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Bespoke Kitchens Melbourne", path: "/kitchen-renovation-landing/" },
            ]),
            serviceSchema({
              slug: "kitchen-renovation-landing",
              title: "Bespoke Kitchens Melbourne",
              tagline: "Custom cabinetry, luxury stone benchtops and full structural remodels.",
              body: "Apollo Builders crafts bespoke kitchens tailored to how you actually live — with premium hardware, natural and engineered stone, and structural remodels handled end-to-end.",
            }),
          ],
        }}
      />

      {/* Hero */}
      <section className="bg-[color:var(--ink-black)] text-[color:var(--paper)] pt-20 md:pt-28 pb-24 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="https://apollobuilders.com.au/wp-content/uploads/2025/11/endevour-hills-after-4.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A]/60 via-[#0A0F1A]/50 to-[#0A0F1A]" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="inline-flex items-center gap-2 tracking-eyebrow text-[color:var(--gold)]">
            <Award className="h-4 w-4" strokeWidth={1.75} />
            Master Builders Standard
          </div>
          <h1 className="font-display text-[44px] md:text-[68px] lg:text-[88px] leading-[0.94] tracking-[-0.03em] mt-6 max-w-[16ch]">
            <MaskLines lines={["Melbourne's bespoke", "kitchens."]} />
          </h1>
          <p className="mt-10 max-w-2xl text-[color:var(--paper)]/85 text-[16px] md:text-[19px] leading-[1.7]">
            We craft culinary masterpieces that blend high-performance
            functionality with timeless design — tailored exclusively for your
            Melbourne home.
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <a href="#quote" className="btn-gold">
              Start Your Design Journey <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a href="#gallery" className="btn-ghost-light">Explore Our Portfolio</a>
          </div>
          <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-[11px] tracking-[0.22em] uppercase text-[color:var(--paper)]/70">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--gold)]" strokeWidth={2} /> Licensed Builder</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--gold)]" strokeWidth={2} /> Fully Insured</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--gold)]" strokeWidth={2} /> Fixed Price Guarantee</li>
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Our Process</div>
        <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4 max-w-3xl">
          The Apollo standard: precision, craft, integrity.
        </h2>

        <ol className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14 border-t border-[color:var(--hair)] pt-14">
          {kitchenProcess.map((p) => (
            <Reveal key={p.n}>
              <li>
                <span className="font-display text-[color:var(--gold)] text-4xl md:text-5xl">{p.n}</span>
                <h3 className="font-display text-2xl md:text-[28px] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4 leading-[1.15]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[color:var(--ink)] text-[15px] leading-[1.7]">
                  {p.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* Expertise */}
      <section className="bg-[color:var(--cream)] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Our Expertise</div>
          <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4 max-w-3xl">
            Tailored kitchen solutions.
          </h2>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14 border-t border-[color:var(--hair)] pt-14">
            {expertise.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06}>
                <div>
                  <ChefHat className="h-6 w-6 text-[color:var(--gold)]" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl md:text-[28px] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4 leading-[1.15]">
                    {e.title}
                  </h3>
                  <p className="mt-4 text-[color:var(--ink)] text-[15px] leading-[1.7]">{e.body}</p>
                  <ul className="mt-6 space-y-2">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15px] text-[color:var(--ink)]">
                        <CheckCircle2 className="h-4 w-4 mt-1 text-[color:var(--gold)]" strokeWidth={1.75} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Our Work</div>
        <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4 max-w-3xl">
          Recent masterpieces.
        </h2>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {gallery.slice(0, 6).map((g, i) => (
            <Reveal key={i} delay={(i % 3) * 0.04}>
              <div className="frame aspect-[4/3]">
                <img src={g.src} alt={g.alt} loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Enquiry */}
      <section id="quote" className="bg-[color:var(--ink-black)] text-[color:var(--paper)] py-24 md:py-32">
        <div className="mx-auto max-w-[1000px] px-6 md:px-10 lg:px-14">
          <div className="tracking-eyebrow text-[color:var(--gold)]">Contact Us</div>
          <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em] mt-4 max-w-[18ch]">
            Let&rsquo;s craft your dream kitchen.
          </h2>
          <p className="mt-6 max-w-xl text-[color:var(--paper)]/85 text-[16px] leading-[1.7]">
            Fill out the form below and our senior design team will contact you
            within 24 hours to schedule your complimentary on-site design consultation.
          </p>

          <form onSubmit={submit} className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 border-t border-[color:var(--paper)]/15 pt-8" data-testid="kitchen-form" noValidate>
            <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
              <input tabIndex={-1} autoComplete="off" name="website" value={form.website} onChange={onChange} />
            </div>
            {[
              { name: "name", label: "Name *", type: "text" },
              { name: "phone", label: "Phone *", type: "tel" },
              { name: "email", label: "Email *", type: "email", span: 2 },
            ].map((f) => (
              <label key={f.name} className={`block pt-4 ${f.span === 2 ? "md:col-span-2" : ""}`}>
                <span className="tracking-eyebrow text-[color:var(--gold)] block mb-1">{f.label}</span>
                <input
                  data-testid={`kitchen-${f.name}`}
                  type={f.type}
                  name={f.name}
                  value={form[f.name]}
                  onChange={onChange}
                  className="field-flush-dark"
                  required
                />
              </label>
            ))}
            <label className="block pt-4 md:col-span-2">
              <span className="tracking-eyebrow text-[color:var(--gold)] block mb-1">Tell us about your dream kitchen</span>
              <textarea
                data-testid="kitchen-message"
                name="message"
                value={form.message}
                onChange={onChange}
                className="field-flush-dark min-h-[120px]"
              />
            </label>
            <div className="md:col-span-2 mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--paper)]/60">
                Your information is 100% confidential.
              </p>
              <button type="submit" disabled={busy} data-testid="kitchen-submit" className="btn-gold disabled:opacity-60">
                {busy ? "Sending…" : "Submit Your Enquiry"} <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </form>

          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-[color:var(--paper)]/70">
            <span>Prefer to call?</span>
            <a href={`tel:${brand.phoneRaw}`} className="link-under text-[color:var(--paper)]">
              {brand.phone}
            </a>
            <span className="text-[color:var(--paper)]/40">·</span>
            <a href={`mailto:${brand.email}`} className="link-under text-[color:var(--paper)]">
              {brand.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
