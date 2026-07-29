import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "axios";
import { ArrowUpRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import { brand } from "@/lib/data";
import SEO, { breadcrumbSchema } from "@/components/SEO";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const totalSteps = 3;

const STEP1 = {
  kind: ["Kitchen only", "Kitchen + other rooms", "Full home", "Other"],
};
const STEP2 = {
  property: ["House", "Unit / Townhouse", "Other"],
  timeline: ["0–3 months", "3–6 months", "6–12 months", "Just researching"],
  budget: ["Under $25k", "$25k–$40k", "$40k–$70k", "$70k+", "Not sure"],
};

/**
 * /renovation-quote/ — multi-step qualification form.
 * Mirrors the 123FormBuilder quote calculator on the live site.
 * Submissions are posted to /api/enquiries with a `source` flag.
 */
export default function RenovationQuote() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    kind: "",
    suburb: "",
    property: "",
    timeline: "",
    budget: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "", // honeypot
  });
  const formLoadedAt = useRef(Date.now());

  useEffect(() => { formLoadedAt.current = Date.now(); }, []);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const progress = Math.round((step / totalSteps) * 100);

  const next = () => {
    if (step === 1 && (!form.kind || !form.suburb)) {
      toast.error("Please choose a project type and enter your suburb.");
      return;
    }
    if (step === 2 && (!form.property || !form.timeline || !form.budget)) {
      toast.error("Please answer all three questions to continue.");
      return;
    }
    setStep((s) => Math.min(totalSteps, s + 1));
  };

  const back = () => setStep((s) => Math.max(1, s - 1));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error("Please add your name, email and phone.");
      return;
    }
    try {
      await axios.post(`${API}/enquiries`, {
        name: form.name,
        phone: form.phone,
        email: form.email,
        project_type: form.kind || "Renovation",
        address: form.suburb,
        message: `[Renovation Quote Calculator]\nProject: ${form.kind}\nProperty: ${form.property}\nTimeline: ${form.timeline}\nBudget: ${form.budget}\n\n${form.message}`,
        website: form.website,
        form_loaded_at: formLoadedAt.current,
      });
      navigate("/thank-you");
    } catch (err) {
      const msg = err?.response?.data?.detail?.[0]?.msg || err?.response?.data?.detail || "Something went wrong. Please try again.";
      toast.error(String(msg));
    }
  };

  return (
    <div data-testid="renovation-quote-page" className="bg-[color:var(--ink-black)] text-[color:var(--paper)] min-h-[92vh]">
      <SEO
        title="Renovation Quote — Apollo Builders | Fixed-Price Melbourne Renovations"
        description="Get a personalised renovation quote from Apollo Builders. Fixed pricing, licensed builders, and premium finishes across Melbourne's South-East."
        path="/renovation-quote/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Renovation Quote", path: "/renovation-quote/" },
            ]),
            {
              "@type": "WebPage",
              name: "Renovation Quote — Apollo Builders",
              url: "https://apollobuilders.com.au/renovation-quote/",
              description:
                "Multi-step renovation quote calculator. Provides fixed-price quotes for kitchen, bathroom, extension and full-home renovations across Melbourne's South-East.",
              publisher: { "@type": "Organization", name: "Apollo Builders" },
            },
          ],
        }}
      />
      <section className="pt-16 md:pt-24 pb-8 md:pb-14 mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14">
        <div className="tracking-eyebrow text-[color:var(--gold)]">Quote Calculator</div>
        <h1 className="font-display text-[40px] md:text-[60px] lg:text-[72px] leading-[0.98] tracking-[-0.03em] mt-6 max-w-[18ch]">
          <MaskLines lines={["Premium renovations in Melbourne."]} />
        </h1>
        <p className="mt-8 max-w-xl text-[color:var(--paper)]/85 text-[16px] md:text-[17px] leading-[1.7]">
          Specialising in complete kitchen renovations, extensions and full-home
          renovations. Licensed, insured and finished on time.
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[12px] tracking-[0.22em] uppercase text-[color:var(--paper)]/80">
          <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--gold)]" strokeWidth={2} /> Licensed Builder</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--gold)]" strokeWidth={2} /> Fully Insured</li>
          <li className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-[color:var(--gold)]" strokeWidth={2} /> Fixed Price Guarantee</li>
        </ul>
      </section>

      <section className="pb-24 md:pb-40 mx-auto max-w-[900px] px-6 md:px-10">
        <Reveal>
          <div className="border-t border-[color:var(--paper)]/15 pt-8">
            <div className="flex items-center justify-between text-[11px] tracking-[0.22em] uppercase text-[color:var(--paper)]/70">
              <span>Step {step} of {totalSteps}</span>
              <span className="text-[color:var(--gold)]">{progress}%</span>
            </div>
            <div className="mt-3 h-[2px] w-full bg-[color:var(--paper)]/10 overflow-hidden">
              <div
                className="h-full bg-[color:var(--gold)] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </Reveal>

        <form onSubmit={submit} noValidate className="mt-12" data-testid="renovation-quote-form">
          {/* Honeypot */}
          <div aria-hidden="true" style={{ position: "absolute", left: "-9999px" }}>
            <input tabIndex={-1} autoComplete="off" name="website" value={form.website} onChange={(e) => set("website", e.target.value)} />
          </div>

          {step === 1 && (
            <Reveal>
              <div className="tracking-eyebrow text-[color:var(--gold)]">Project basics</div>
              <h2 className="font-display text-3xl md:text-[42px] tracking-[-0.02em] mt-4 mb-8">
                What kind of renovation are you planning?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {STEP1.kind.map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => set("kind", k)}
                    data-testid={`quote-kind-${k.toLowerCase().replace(/\s+/g,"-")}`}
                    className={`text-left px-5 py-4 border transition-colors ${
                      form.kind === k
                        ? "border-[color:var(--gold)] bg-[color:var(--paper)]/5 text-[color:var(--gold)]"
                        : "border-[color:var(--paper)]/20 hover:border-[color:var(--paper)]/40"
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>

              <label className="block mt-10">
                <span className="tracking-eyebrow text-[color:var(--gold)] block mb-2">Suburb & postcode</span>
                <input
                  data-testid="quote-suburb"
                  className="field-flush-dark"
                  value={form.suburb}
                  onChange={(e) => set("suburb", e.target.value)}
                  placeholder="e.g. Brighton 3186"
                />
              </label>
            </Reveal>
          )}

          {step === 2 && (
            <Reveal>
              <div className="tracking-eyebrow text-[color:var(--gold)]">Intent & budget</div>
              <h2 className="font-display text-3xl md:text-[42px] tracking-[-0.02em] mt-4 mb-8">
                A little more about your project.
              </h2>

              <div className="space-y-10">
                <div>
                  <div className="tracking-eyebrow text-[color:var(--gold)] mb-3">Property type</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {STEP2.property.map((k) => (
                      <button key={k} type="button" onClick={() => set("property", k)}
                        className={`text-left px-5 py-4 border transition-colors ${
                          form.property === k
                            ? "border-[color:var(--gold)] bg-[color:var(--paper)]/5 text-[color:var(--gold)]"
                            : "border-[color:var(--paper)]/20 hover:border-[color:var(--paper)]/40"
                        }`}
                      >{k}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="tracking-eyebrow text-[color:var(--gold)] mb-3">When are you hoping to start?</div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {STEP2.timeline.map((k) => (
                      <button key={k} type="button" onClick={() => set("timeline", k)}
                        className={`text-left px-5 py-4 border transition-colors ${
                          form.timeline === k
                            ? "border-[color:var(--gold)] bg-[color:var(--paper)]/5 text-[color:var(--gold)]"
                            : "border-[color:var(--paper)]/20 hover:border-[color:var(--paper)]/40"
                        }`}
                      >{k}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="tracking-eyebrow text-[color:var(--gold)] mb-3">Approximate budget</div>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {STEP2.budget.map((k) => (
                      <button key={k} type="button" onClick={() => set("budget", k)}
                        className={`text-left px-4 py-3 border text-[14px] transition-colors ${
                          form.budget === k
                            ? "border-[color:var(--gold)] bg-[color:var(--paper)]/5 text-[color:var(--gold)]"
                            : "border-[color:var(--paper)]/20 hover:border-[color:var(--paper)]/40"
                        }`}
                      >{k}</button>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          {step === 3 && (
            <Reveal>
              <div className="tracking-eyebrow text-[color:var(--gold)]">You&rsquo;re almost done</div>
              <h2 className="font-display text-3xl md:text-[42px] tracking-[-0.02em] mt-4 mb-8">
                Where should we send your quote?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {[
                  { k: "name", label: "First / last name *", type: "text" },
                  { k: "email", label: "Email address *", type: "email" },
                  { k: "phone", label: "Phone number *", type: "tel" },
                ].map((f) => (
                  <label key={f.k} className={`block pt-4 ${f.k === "phone" ? "md:col-span-2" : ""}`}>
                    <span className="tracking-eyebrow text-[color:var(--gold)] block mb-1">{f.label}</span>
                    <input
                      data-testid={`quote-${f.k}`}
                      type={f.type}
                      className="field-flush-dark"
                      value={form[f.k]}
                      onChange={(e) => set(f.k, e.target.value)}
                      required
                    />
                  </label>
                ))}
                <label className="block pt-4 md:col-span-2">
                  <span className="tracking-eyebrow text-[color:var(--gold)] block mb-1">Anything else we should know?</span>
                  <textarea
                    data-testid="quote-message"
                    className="field-flush-dark min-h-[120px]"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="Optional — share any specifics about your project."
                  />
                </label>
              </div>
            </Reveal>
          )}

          <div className="mt-14 flex items-center justify-between">
            {step > 1 ? (
              <button type="button" onClick={back} data-testid="quote-back" className="btn-ghost-light">
                <ChevronLeft className="h-4 w-4" strokeWidth={1.5} /> Previous
              </button>
            ) : <span />}

            {step < totalSteps ? (
              <button type="button" onClick={next} data-testid="quote-next" className="btn-gold">
                Next <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            ) : (
              <button type="submit" data-testid="quote-submit" className="btn-gold">
                Get My Free Design &amp; Quote <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            )}
          </div>
        </form>

        <p className="mt-10 text-[11px] tracking-[0.22em] uppercase text-[color:var(--paper)]/50 max-w-md">
          Never submit sensitive information such as passwords. Or call us directly on {" "}
          <a href={`tel:${brand.phoneRaw}`} className="link-under text-[color:var(--paper)]/80">{brand.phone}</a>.
        </p>
      </section>
    </div>
  );
}
