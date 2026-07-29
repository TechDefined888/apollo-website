import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { ArrowUpRight, AlertTriangle, X, Check } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import { brand } from "@/lib/data";
import SEO from "@/components/SEO";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const painPoints = [
  "Project ran 4 months over schedule",
  "Final cost was $60k more than the quote",
  "You spent weekends chasing contractors",
  "Builder stopped returning calls halfway through",
];

const systemPillars = [
  {
    icon: "🎯",
    title: "Fixed Cost Pricing",
    body: "We quote the complete project before you commit a dollar. Council approvals, design, all trades, project management — everything included.",
    bullets: [
      "Itemised breakdown of every cost",
      "Trade discounts passed directly to you",
      "Contingency built in — no ‘unforeseen’ charges",
    ],
  },
  {
    icon: "👷",
    title: "One Point of Contact",
    body: "A dedicated project manager handles every single trade, supplier, and approval. No coordination. No chasing. No stress.",
    bullets: [
      "Weekly progress updates with photos",
      "Direct line to your PM (text/call/email)",
      "All trades vetted and managed by us",
    ],
  },
  {
    icon: "📐",
    title: "Professional Design Included",
    body: "In-house designers create detailed plans that maximise your space and match your vision — included in your fixed price.",
    bullets: [
      "3D renders of your finished renovation",
      "Material selection guidance",
      "Design revisions until you're happy",
    ],
  },
  {
    icon: "⚡",
    title: "Clear Milestones",
    body: "We break your project into stages with specific completion dates. You know exactly what's happening and when.",
    bullets: [
      "Stage-by-stage payment schedule",
      "You only pay for completed work",
      "Timeline locked in before we start",
    ],
  },
];

const compare = [
  ["Pricing Model", "Estimates that grow", "Fixed from day one"],
  ["Trade Coordination", "You manage the trades", "We handle everything"],
  ["Council Approvals", "Your responsibility", "Managed by us"],
  ["Design Services", "Extra $5k–$15k", "Included in your quote"],
  ["Communication", "Chase for updates", "Weekly photo reports"],
  ["Timeline Certainty", "‘Roughly 3–6 months’", "Fixed milestones"],
  ["Your Involvement", "Full-time babysitting", "Approve & enjoy"],
];

export default function BurntByBuilders() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", phone: "", email: "", project_type: "", message: "", website: "",
  });
  const [busy, setBusy] = useState(false);
  const formLoadedAt = useRef(Date.now());
  useEffect(() => { formLoadedAt.current = Date.now(); }, []);
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please add your name and phone.");
      return;
    }
    setBusy(true);
    try {
      await axios.post(`${API}/enquiries`, {
        ...form,
        email: form.email || "no-email@apollobuilders.com.au",
        project_type: form.project_type || "Consultation",
        message: `[Burnt-By-Builders Landing]\n${form.message || "Wants a fixed-price quote."}`,
        form_loaded_at: formLoadedAt.current,
      });
      navigate("/thanks");
    } catch (err) {
      const msg = err?.response?.data?.detail?.[0]?.msg || err?.response?.data?.detail || "Something went wrong. Please try again.";
      toast.error(String(msg));
    } finally { setBusy(false); }
  };

  return (
    <div data-testid="burnt-by-builders-page">
      <SEO
        title="Burnt By Builders? Stop Managing Your Builder — Apollo Builders Melbourne"
        description="Fixed-price renovations with one point of contact, zero budget surprises and clear milestones. Stop chasing trades — Apollo Builders handles everything."
        path="/burnt-by-builders/"
      />

      {/* Hero */}
      <section className="bg-[color:var(--ink-black)] text-[color:var(--paper)] pt-16 md:pt-24 pb-20 md:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 tracking-eyebrow text-[color:var(--gold)]">
              <AlertTriangle className="h-4 w-4" strokeWidth={1.75} />
              Sound familiar?
            </div>
            <h1 className="font-display text-[44px] md:text-[68px] lg:text-[84px] leading-[0.96] tracking-[-0.03em] mt-6 max-w-[16ch]">
              <MaskLines lines={["Burnt by builders?"]} />
            </h1>

            <ul className="mt-12 space-y-3 max-w-xl">
              {painPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[color:var(--paper)]/90 text-[16px] md:text-[17px]">
                  <X className="h-4 w-4 mt-1.5 text-[color:var(--gold)] shrink-0" strokeWidth={2} />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-xl text-[color:var(--paper)] font-display text-2xl md:text-3xl leading-[1.2]">
              You hired the wrong builder.<br />
              <span className="text-[color:var(--paper)]/70 text-[16px] md:text-[17px] font-sans mt-2 block leading-relaxed">
                Stop managing trades, chasing calls, and bleeding money on
                surprise costs.
              </span>
            </p>
          </div>

          <div className="lg:col-span-5" id="consultationForm">
            <Reveal>
              <div className="border border-[color:var(--paper)]/15 bg-[color:var(--paper)]/[0.03] p-8 md:p-10 backdrop-blur">
                <div className="tracking-eyebrow text-[color:var(--gold)]">Free Consultation</div>
                <h2 className="font-display text-3xl md:text-[38px] tracking-[-0.02em] mt-3">
                  Get your fixed-price quote
                </h2>
                <p className="mt-3 text-[color:var(--paper)]/80 text-[15px]">
                  No obligation. Same-week quote with zero hidden costs.
                </p>
                <form onSubmit={submit} className="mt-8 space-y-4" data-testid="bbb-form" noValidate>
                  <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
                    <input tabIndex={-1} autoComplete="off" name="website" value={form.website} onChange={onChange} />
                  </div>
                  <label className="block">
                    <span className="tracking-eyebrow text-[color:var(--gold)] block mb-1">Project *</span>
                    <select data-testid="bbb-project-type" name="project_type" value={form.project_type} onChange={onChange} className="field-flush-dark appearance-none">
                      <option value="">— Please select —</option>
                      <option>Kitchen Renovation</option>
                      <option>Bathroom Renovation</option>
                      <option>Extension</option>
                      <option>Full Home Renovation</option>
                      <option>New Home Build</option>
                    </select>
                  </label>
                  <label className="block">
                    <span className="tracking-eyebrow text-[color:var(--gold)] block mb-1">First name *</span>
                    <input data-testid="bbb-name" name="name" value={form.name} onChange={onChange} className="field-flush-dark" required />
                  </label>
                  <label className="block">
                    <span className="tracking-eyebrow text-[color:var(--gold)] block mb-1">Phone *</span>
                    <input data-testid="bbb-phone" type="tel" name="phone" value={form.phone} onChange={onChange} className="field-flush-dark" required />
                  </label>
                  <label className="block">
                    <span className="tracking-eyebrow text-[color:var(--gold)] block mb-1">Email</span>
                    <input data-testid="bbb-email" type="email" name="email" value={form.email} onChange={onChange} className="field-flush-dark" />
                  </label>
                  <button type="submit" disabled={busy} data-testid="bbb-submit" className="btn-gold w-full mt-2 disabled:opacity-60">
                    {busy ? "Sending…" : "Request My Consultation"} <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* System pillars */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 py-24 md:py-32">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)] mb-4">The Apollo System</div>
        <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] max-w-3xl">
          How we run renovations like a system.
        </h2>
        <p className="mt-6 max-w-2xl text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.7]">
          This isn&rsquo;t cowboy building. It&rsquo;s structured execution designed to
          eliminate the three things that kill renovations: delays, budget
          blowouts and stress.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 border-t border-[color:var(--hair)] pt-14">
          {systemPillars.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.05}>
              <div>
                <div className="text-4xl">{p.icon}</div>
                <h3 className="font-display text-[28px] md:text-[32px] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
                  {p.title}
                </h3>
                <p className="mt-4 text-[color:var(--ink)] text-[15px] md:text-[16px] leading-[1.7]">
                  {p.body}
                </p>
                <ul className="mt-6 space-y-2">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] text-[color:var(--ink)]">
                      <Check className="h-4 w-4 mt-1 text-[color:var(--gold)]" strokeWidth={2} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-[color:var(--cream)] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)] mb-4">The Difference</div>
          <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] max-w-3xl">
            Apollo vs. traditional builders.
          </h2>

          <div className="mt-14 border-t border-[color:var(--hair)]">
            <div className="hidden md:grid grid-cols-3 gap-6 py-6 border-b border-[color:var(--hair)] text-[12px] tracking-[0.22em] uppercase text-[color:var(--ink-soft)]">
              <div />
              <div>Traditional Builder</div>
              <div className="text-[color:var(--gold-dark)]">Apollo Builders</div>
            </div>
            {compare.map(([label, bad, good]) => (
              <div key={label} className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 py-6 border-b border-[color:var(--hair)]">
                <div className="font-display text-[color:var(--ink-black)] text-lg md:text-xl">{label}</div>
                <div className="flex items-start gap-3 text-[color:var(--ink-soft)] text-[15px]">
                  <X className="h-4 w-4 mt-1 text-[color:var(--ink-soft)] shrink-0" strokeWidth={2} />
                  {bad}
                </div>
                <div className="flex items-start gap-3 text-[color:var(--ink-black)] text-[15px] font-medium">
                  <Check className="h-4 w-4 mt-1 text-[color:var(--gold)] shrink-0" strokeWidth={2} />
                  {good}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[color:var(--ink-black)] text-[color:var(--paper)] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 text-center">
          <Reveal>
            <h2 className="font-display text-[36px] md:text-[60px] leading-[1.02] tracking-[-0.03em] max-w-[18ch] mx-auto">
              Stop putting off your dream home.
            </h2>
            <p className="mt-8 max-w-xl mx-auto text-[color:var(--paper)]/85 text-[16px] md:text-[17px] leading-[1.7]">
              Same-week quotes. Fixed pricing. One point of contact. Stage
              updates. Apollo handles everything.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a href="#consultationForm" className="btn-gold">
                Book Your Consultation <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a href={`tel:${brand.phoneRaw}`} className="btn-ghost-light">
                Call {brand.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
