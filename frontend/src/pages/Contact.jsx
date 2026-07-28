import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import { brand, projectTypes, suburbs } from "@/lib/data";
import SEO, { localBusiness, breadcrumbSchema } from "@/components/SEO";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const initial = { name: "", phone: "", address: "", email: "", project_type: "", message: "", website: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const formLoadedAt = useRef(Date.now());

  useEffect(() => {
    formLoadedAt.current = Date.now();
  }, []);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.project_type || !form.message) {
      toast.error("Please complete the required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/enquiries`, {
        ...form,
        form_loaded_at: formLoadedAt.current,
      });
      setSent(true);
      setForm(initial);
      toast.success("Enquiry sent. We'll be in touch shortly.");
    } catch (err) {
      const msg = err?.response?.data?.detail?.[0]?.msg || err?.response?.data?.detail || "Something went wrong. Please try again.";
      toast.error(String(msg));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page" className="bg-[color:var(--ink-black)] text-[color:var(--paper)]">
      <SEO
        title="Contact Apollo Builders — Melbourne South-East"
        description="Contact Apollo Builders for renovations, extensions and custom home builds across Melbourne's South-East. Phone 0422 339 622 or email info@apollobuilders.com.au."
        path="/contact"
        jsonLd={{ "@context":"https://schema.org", "@graph":[localBusiness(), breadcrumbSchema([{name:"Home",path:"/"},{name:"Contact",path:"/contact"}])] }}
      />
      {/* Editorial hero with real project photograph */}
      <section className="relative pt-16 md:pt-28 pb-24 md:pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://apollobuilders.com.au/wp-content/uploads/2025/11/Drouin-New-Build.jpg"
            alt=""
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1A]/60 via-[#0A0F1A]/40 to-[#0A0F1A]" />
        <div className="relative mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
          <div className="tracking-eyebrow text-[color:var(--gold)]">Contact</div>
          <h1 className="font-display text-[40px] md:text-[64px] lg:text-[80px] leading-[0.96] tracking-[-0.03em] mt-6 max-w-[18ch]">
            <MaskLines lines={["Contact Apollo Builders."]} />
          </h1>
          <p className="mt-10 max-w-xl text-[color:var(--paper)]/85 text-[16px] md:text-[17px] leading-[1.7]">
            Apollo Builders provides new home builds, home renovations, kitchen
            renovations and bathroom renovations across Melbourne&rsquo;s South-East.
            Contact our team for a personalised quote and expert advice.
          </p>
        </div>
      </section>

      {/* Form + details */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-28 md:pb-40 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        <Reveal className="lg:col-span-7">
          {sent ? (
            <div data-testid="thanks" className="border-t border-b border-[color:var(--paper)]/15 py-16">
              <div className="tracking-eyebrow text-[color:var(--gold)]">Sent</div>
              <h2 className="font-display text-4xl md:text-5xl tracking-[-0.02em] mt-4">
                Thank you — we&rsquo;ll be in touch soon.
              </h2>
              <p className="mt-6 text-[color:var(--paper)]/85 max-w-lg">
                Your enquiry has been received. A member of the Apollo Builders team
                will respond within one business day.
              </p>
              <button onClick={() => setSent(false)} data-testid="submit-another" className="btn-ghost-light mt-10">
                Send another enquiry <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate data-testid="enquiry-form" className="border-t border-[color:var(--paper)]/15">
              {/* Honeypot — hidden from real users, must remain empty */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", top: "-9999px", height: 0, width: 0, overflow: "hidden" }}>
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={onChange}
                  />
                </label>
              </div>
              <div className="tracking-eyebrow text-[color:var(--gold)] pt-8">Request a Quote</div>
              <h2 className="font-display text-3xl md:text-[42px] tracking-[-0.02em] mt-4 mb-10">
                Tell us about your project.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {[
                  { name: "name", label: "Name *", placeholder: "Your full name", required: true },
                  { name: "phone", label: "Phone *", placeholder: "04XX XXX XXX", required: true, type: "tel" },
                  { name: "email", label: "Email *", placeholder: "you@example.com", required: true, type: "email" },
                  { name: "address", label: "Address / Suburb", placeholder: "Suburb or full address" },
                ].map((f) => (
                  <label key={f.name} className="block pt-4">
                    <span className="tracking-eyebrow text-[color:var(--gold)] block mb-1">{f.label}</span>
                    <input
                      data-testid={`input-${f.name.replace("_", "-")}`}
                      name={f.name}
                      type={f.type || "text"}
                      value={form[f.name]}
                      onChange={onChange}
                      className="field-flush-dark"
                      placeholder={f.placeholder}
                      required={f.required}
                    />
                  </label>
                ))}
                <label className="block pt-4 md:col-span-2">
                  <span className="tracking-eyebrow text-[color:var(--gold)] block mb-1">Project Type *</span>
                  <select
                    data-testid="input-project-type"
                    name="project_type"
                    value={form.project_type}
                    onChange={onChange}
                    className="field-flush-dark appearance-none bg-transparent"
                    required
                  >
                    <option value="" className="text-black">— Select a project type —</option>
                    {projectTypes.map((p) => (
                      <option key={p} value={p} className="text-black">{p}</option>
                    ))}
                  </select>
                </label>
                <label className="block pt-4 md:col-span-2">
                  <span className="tracking-eyebrow text-[color:var(--gold)] block mb-1">Message *</span>
                  <textarea
                    data-testid="input-message"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    className="field-flush-dark min-h-[140px]"
                    placeholder="Tell us about your project, timing and budget range."
                    required
                  />
                </label>
              </div>

              <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--paper)]/60">
                  We respond within one business day.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="submit-enquiry"
                  className="btn-gold disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send Enquiry"} <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </form>
          )}
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.05}>
          <div className="lg:pl-10 lg:border-l lg:border-[color:var(--paper)]/15 pt-8">
            <div className="tracking-eyebrow text-[color:var(--gold)]">Direct</div>
            <h2 className="font-display text-3xl md:text-[42px] tracking-[-0.02em] mt-4">
              Speak with the team.
            </h2>

            <ul className="mt-12 space-y-10">
              <li>
                <div className="tracking-eyebrow text-[color:var(--gold)] mb-3">Call</div>
                <a href={`tel:${brand.phoneRaw}`} data-testid="contact-phone" className="font-display text-3xl md:text-4xl link-under inline-flex items-center gap-4">
                  <Phone className="h-5 w-5" strokeWidth={1.25} />
                  {brand.phone}
                </a>
              </li>
              <li>
                <div className="tracking-eyebrow text-[color:var(--gold)] mb-3">Email</div>
                <a href={`mailto:${brand.email}`} data-testid="contact-email" className="font-display text-2xl md:text-3xl link-under inline-flex items-center gap-4">
                  <Mail className="h-5 w-5" strokeWidth={1.25} />
                  {brand.email}
                </a>
              </li>
              <li>
                <div className="tracking-eyebrow text-[color:var(--gold)] mb-3">Serving</div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-[color:var(--gold)]" strokeWidth={1.25} />
                  <span className="text-[color:var(--paper)]/95 text-lg">
                    Melbourne&rsquo;s South &amp; South-Eastern suburbs, VIC
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-16">
              <div className="tracking-eyebrow text-[color:var(--gold)] mb-4">Service Areas</div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[color:var(--paper)]/90 text-[15px]">
                {suburbs.map((s) => (
                  <li key={s}>— {s}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
