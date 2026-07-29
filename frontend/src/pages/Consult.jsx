import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import { brand, gallery } from "@/lib/data";
import SEO from "@/components/SEO";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const highlights = [
  "64+ trades coordinated under one team",
  "Architects & engineers included where required",
  "Council applications managed on your behalf",
  "Fixed cost pricing agreed upfront",
  "Professional design guidance on layouts & finishes",
  "Clear timelines with stage-by-stage updates",
];

/**
 * /consult/ — Consultation request landing page.
 * Content mirrored from the live Apollo Builders /consult page:
 * "One team. One point of contact. Everything handled."
 */
export default function Consult() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", phone: "", email: "", project_type: "", message: "", website: "",
  });
  const formLoadedAt = useRef(Date.now());
  useEffect(() => { formLoadedAt.current = Date.now(); }, []);
  const [busy, setBusy] = useState(false);

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
        project_type: form.project_type || "Consultation",
        message: `[Consultation Request]\n${form.message || "No message provided."}`,
        form_loaded_at: formLoadedAt.current,
      });
      navigate("/thanks");
    } catch (err) {
      const msg = err?.response?.data?.detail?.[0]?.msg || err?.response?.data?.detail || "Something went wrong. Please try again.";
      toast.error(String(msg));
    } finally { setBusy(false); }
  };

  return (
    <div data-testid="consult-page">
      <SEO
        title="Book a Consultation — Apollo Builders | Renovations Done Properly"
        description="Apollo Builders handles your entire renovation process — design, trades, council and construction — so you get a premium result without managing it yourself."
        path="/consult/"
      />

      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-16 md:pb-20 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Renovations Done Properly</div>
          <h1 className="font-display text-[40px] md:text-[64px] lg:text-[76px] leading-[0.98] tracking-[-0.03em] text-[color:var(--ink-black)] mt-6 max-w-[18ch]">
            <MaskLines lines={["One team.", "One point of contact.", "Everything handled."]} />
          </h1>
          <p className="mt-8 max-w-xl text-[color:var(--ink)] text-[16px] md:text-[17px] leading-[1.7]">
            Renovating doesn&rsquo;t need to become your second job. Apollo Builders
            coordinates every trade and decision so the project moves from
            concept to completion without you having to manage it.
          </p>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 max-w-2xl">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-[15px] text-[color:var(--ink)]">
                <CheckCircle2 className="h-4 w-4 mt-1 text-[color:var(--gold)] shrink-0" strokeWidth={1.75} />
                {h}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5" id="consultation-form">
          <Reveal>
            <div className="border border-[color:var(--hair)] p-8 md:p-10 bg-[color:var(--cream)]">
              <div className="tracking-eyebrow text-[color:var(--gold-dark)]">Consultation</div>
              <h2 className="font-display text-3xl md:text-[38px] tracking-[-0.02em] text-[color:var(--ink-black)] mt-4">
                Request my consultation
              </h2>
              <p className="mt-3 text-[color:var(--ink-soft)] text-[15px]">
                No obligation. We&rsquo;ll simply see whether Apollo Builders is the right fit for your project.
              </p>
              <form onSubmit={submit} className="mt-8 space-y-4" data-testid="consult-form" noValidate>
                <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
                  <input tabIndex={-1} autoComplete="off" name="website" value={form.website} onChange={onChange} />
                </div>
                <label className="block">
                  <span className="tracking-eyebrow text-[color:var(--gold-dark)] block mb-1">Name *</span>
                  <input data-testid="consult-name" name="name" value={form.name} onChange={onChange} className="field-flush" required />
                </label>
                <label className="block">
                  <span className="tracking-eyebrow text-[color:var(--gold-dark)] block mb-1">Phone *</span>
                  <input data-testid="consult-phone" type="tel" name="phone" value={form.phone} onChange={onChange} className="field-flush" required />
                </label>
                <label className="block">
                  <span className="tracking-eyebrow text-[color:var(--gold-dark)] block mb-1">Email *</span>
                  <input data-testid="consult-email" type="email" name="email" value={form.email} onChange={onChange} className="field-flush" required />
                </label>
                <label className="block">
                  <span className="tracking-eyebrow text-[color:var(--gold-dark)] block mb-1">What are you looking to renovate?</span>
                  <select data-testid="consult-project-type" name="project_type" value={form.project_type} onChange={onChange} className="field-flush appearance-none">
                    <option value="">— Please select —</option>
                    <option>Kitchen Renovation</option>
                    <option>Bathroom Renovation</option>
                    <option>Extension</option>
                    <option>Full Home Renovation</option>
                    <option>New Home Build</option>
                  </select>
                </label>
                <label className="block">
                  <span className="tracking-eyebrow text-[color:var(--gold-dark)] block mb-1">Anything else?</span>
                  <textarea data-testid="consult-message" name="message" value={form.message} onChange={onChange} className="field-flush min-h-[100px]" />
                </label>
                <button type="submit" disabled={busy} data-testid="consult-submit" className="btn-navy w-full mt-2 disabled:opacity-60">
                  {busy ? "Sending…" : "Request My Consultation"} <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Gallery — before & after */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32">
        <div className="tracking-eyebrow text-[color:var(--gold-dark)] mb-4">Recent transformations</div>
        <h2 className="font-display text-[32px] md:text-[48px] leading-[1.05] tracking-[-0.02em] text-[color:var(--ink-black)] mb-12 max-w-3xl">
          A selection of recent projects where tired, mismatched rooms were redesigned together to feel calm, functional and easy to live in.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {gallery.slice(0, 8).concat(gallery.slice(0, 4)).map((g, i) => (
            <Reveal key={i} delay={(i % 4) * 0.03}>
              <div className="frame aspect-square">
                <img src={g.src} alt={g.alt} loading="lazy" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience block */}
      <section className="bg-[color:var(--ink-black)] text-[color:var(--paper)] py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          <Reveal className="md:col-span-4">
            <div className="tracking-eyebrow text-[color:var(--gold)]">Experience</div>
          </Reveal>
          <Reveal className="md:col-span-8" delay={0.05}>
            <h2 className="font-display text-[32px] md:text-[52px] leading-[1.05] tracking-[-0.02em]">
              Experience that prevents costly mistakes.
            </h2>
            <p className="mt-6 text-[color:var(--paper)]/85 text-[16px] md:text-[18px] leading-[1.7] max-w-2xl">
              We guide layouts, materials and design decisions so you don&rsquo;t
              end up living with compromises or regret. Our role is to handle
              the complexity behind the scenes — so you can simply walk into a
              home that feels right.
            </p>
            <div className="mt-10">
              <a href="#consultation-form" className="btn-gold">
                Request My Consultation <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
