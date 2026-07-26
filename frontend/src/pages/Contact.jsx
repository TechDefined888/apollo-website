import { useEffect, useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import { brand, projectTypes, suburbs } from "@/lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const initial = {
  name: "",
  phone: "",
  address: "",
  email: "",
  project_type: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Contact Apollo Builders — Melbourne South-East";
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
      await axios.post(`${API}/enquiries`, form);
      setSent(true);
      setForm(initial);
      toast.success("Enquiry sent. We'll be in touch shortly.");
    } catch (err) {
      const msg =
        err?.response?.data?.detail?.[0]?.msg ||
        err?.response?.data?.detail ||
        "Something went wrong. Please try again.";
      toast.error(String(msg));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page">
      {/* Header */}
      <section className="pt-32 md:pt-44 pb-14 md:pb-20 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--navy)]/70">Contact</div>
        <h1 className="font-display text-[48px] md:text-[92px] lg:text-[108px] leading-[0.98] tracking-[-0.03em] font-light text-[color:var(--navy)] mt-4 max-w-[18ch]">
          <MaskLines lines={["Start the conversation."]} />
        </h1>
      </section>

      {/* Form + details */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14 pb-24 md:pb-36 grid grid-cols-1 lg:grid-cols-12 gap-14">
        <Reveal className="lg:col-span-7">
          {sent ? (
            <div data-testid="thanks" className="border-t border-b border-[color:var(--hair)] py-16">
              <div className="tracking-eyebrow text-[color:var(--navy)]/70">Sent</div>
              <h2 className="font-display text-4xl md:text-5xl font-light tracking-[-0.02em] text-[color:var(--navy)] mt-4">
                Thank you — we&rsquo;ll be in touch soon.
              </h2>
              <p className="mt-6 text-[color:var(--ink)]/75 font-light max-w-lg">
                Your enquiry has been received. A member of the Apollo Builders team will respond within one
                business day.
              </p>
              <button
                onClick={() => setSent(false)}
                data-testid="submit-another"
                className="btn-ghost mt-8"
              >
                Send another enquiry <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          ) : (
            <form onSubmit={submit} data-testid="enquiry-form" className="border-t border-[color:var(--hair)]">
              <div className="tracking-eyebrow text-[color:var(--navy)]/70 pt-8">Request a Quote</div>
              <h2 className="font-display text-3xl md:text-4xl text-[color:var(--navy)] font-light tracking-[-0.02em] mt-3 mb-8">
                Tell us about your project.
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <label className="block pt-4">
                  <span className="tracking-eyebrow text-[color:var(--navy)]/60 block mb-1">Name *</span>
                  <input
                    data-testid="input-name"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="field-flush"
                    placeholder="Your full name"
                    autoComplete="name"
                    required
                  />
                </label>
                <label className="block pt-4">
                  <span className="tracking-eyebrow text-[color:var(--navy)]/60 block mb-1">Phone *</span>
                  <input
                    data-testid="input-phone"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="field-flush"
                    placeholder="04XX XXX XXX"
                    inputMode="tel"
                    required
                  />
                </label>
                <label className="block pt-4">
                  <span className="tracking-eyebrow text-[color:var(--navy)]/60 block mb-1">Email *</span>
                  <input
                    data-testid="input-email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    type="email"
                    className="field-flush"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </label>
                <label className="block pt-4">
                  <span className="tracking-eyebrow text-[color:var(--navy)]/60 block mb-1">Address / Suburb</span>
                  <input
                    data-testid="input-address"
                    name="address"
                    value={form.address}
                    onChange={onChange}
                    className="field-flush"
                    placeholder="Suburb or full address"
                  />
                </label>
                <label className="block pt-4 md:col-span-2">
                  <span className="tracking-eyebrow text-[color:var(--navy)]/60 block mb-1">Project Type *</span>
                  <select
                    data-testid="input-project-type"
                    name="project_type"
                    value={form.project_type}
                    onChange={onChange}
                    className="field-flush appearance-none bg-transparent"
                    required
                  >
                    <option value="">— Select a project type —</option>
                    {projectTypes.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block pt-4 md:col-span-2">
                  <span className="tracking-eyebrow text-[color:var(--navy)]/60 block mb-1">Message *</span>
                  <textarea
                    data-testid="input-message"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    className="field-flush min-h-[130px]"
                    placeholder="Tell us about your project, timing and budget range."
                    required
                  />
                </label>
              </div>

              <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-[12px] tracking-[0.15em] uppercase text-[color:var(--ink)]/55">
                  We respond within one business day.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="submit-enquiry"
                  className="btn-navy disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send Enquiry"} <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </form>
          )}
        </Reveal>

        {/* Details */}
        <Reveal className="lg:col-span-5" delay={0.05}>
          <div className="lg:pl-10 lg:border-l lg:border-[color:var(--hair)] pt-8">
            <div className="tracking-eyebrow text-[color:var(--navy)]/70">Contact</div>
            <h2 className="font-display text-3xl md:text-4xl font-light tracking-[-0.02em] text-[color:var(--navy)] mt-3">
              Speak with the team.
            </h2>

            <ul className="mt-10 space-y-8">
              <li>
                <div className="tracking-eyebrow text-[color:var(--navy)]/50 mb-2">Call</div>
                <a
                  href={`tel:${brand.phoneRaw}`}
                  data-testid="contact-phone"
                  className="font-display text-2xl md:text-3xl text-[color:var(--navy)] font-light link-under inline-flex items-center gap-3"
                >
                  <Phone className="h-5 w-5" strokeWidth={1.25} />
                  {brand.phone}
                </a>
              </li>
              <li>
                <div className="tracking-eyebrow text-[color:var(--navy)]/50 mb-2">Email</div>
                <a
                  href={`mailto:${brand.email}`}
                  data-testid="contact-email"
                  className="font-display text-2xl md:text-3xl text-[color:var(--navy)] font-light link-under inline-flex items-center gap-3"
                >
                  <Mail className="h-5 w-5" strokeWidth={1.25} />
                  {brand.email}
                </a>
              </li>
              <li>
                <div className="tracking-eyebrow text-[color:var(--navy)]/50 mb-2">Serving</div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 text-[color:var(--navy)]/70" strokeWidth={1.25} />
                  <span className="font-light text-[color:var(--ink)]">
                    Melbourne&rsquo;s South &amp; South-Eastern suburbs, VIC
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-14">
              <div className="tracking-eyebrow text-[color:var(--navy)]/50 mb-4">Service Areas</div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[color:var(--ink)]/85 text-[15px] font-light">
                {suburbs.map((s) => (
                  <li key={s} className="tracking-tight">
                    — {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
