import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Phone, MessageSquareText } from "lucide-react";
import { Reveal, MaskLines } from "@/components/Reveal";
import { brand } from "@/lib/data";
import SEO from "@/components/SEO";

/**
 * Post-form success page. Live site has two variants:
 *  - /thank-you/ (quote request received)
 *  - /thanks/    (consultation booked)
 * We preserve both URLs with the same design.
 */
export default function ThankYou({ variant = "quote" }) {
  const isConsult = variant === "consult";
  const path = isConsult ? "/thanks/" : "/thank-you/";
  const heading = isConsult
    ? "We've got your dream home request."
    : "Request received.";
  const sub = isConsult
    ? "Your consultation request has been received. We'll contact you within the next 24 hours to schedule your free, no-obligation consultation."
    : "Thank you for reaching out to Apollo Builders. Your project inquiry is being prioritised by our team.";

  const steps = isConsult
    ? [
        {
          n: "01",
          when: "Within 24 hours",
          title: "We'll call you",
          body: "One of our project managers will reach out to understand your renovation goals and answer any initial questions.",
        },
        {
          n: "02",
          when: "This week",
          title: "Free on-site consultation",
          body: "We visit your home to assess the space, discuss your vision, and understand exactly what you want to achieve.",
        },
        {
          n: "03",
          when: "Same week",
          title: "Fixed-price quote",
          body: "You'll receive a detailed, itemised quote. No estimates. No surprises. Fixed pricing.",
        },
        {
          n: "04",
          when: "If you proceed",
          title: "Design & planning",
          body: "Our in-house team creates detailed plans and finishes selections. Revisions until you're happy.",
        },
      ]
    : [
        {
          n: "01",
          when: "Step 1",
          title: "Inquiry review",
          body: "We review your project requirements, site context and preferred timelines.",
        },
        {
          n: "02",
          when: "Step 2",
          title: "Consultant callback",
          body: "A specialist will call within 24 hours to discuss your vision and next steps.",
        },
        {
          n: "03",
          when: "Step 3",
          title: "Site visit",
          body: "We schedule a walkthrough to provide a detailed, fixed-price quote.",
        },
      ];

  return (
    <div data-testid={`thank-you-page-${variant}`} className="bg-[color:var(--ink-black)] text-[color:var(--paper)] min-h-[80vh]">
      <SEO
        title={
          isConsult
            ? "Thank You — Apollo Builders | Consultation Booked"
            : "Thank You — Apollo Builders | Request Received"
        }
        description={sub}
        path={path}
        noindex
      />

      <section className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 pt-24 md:pt-32 pb-16 md:pb-24">
        <Reveal>
          <div className="inline-flex items-center gap-3 tracking-eyebrow text-[color:var(--gold)]">
            <CheckCircle2 className="h-4 w-4" strokeWidth={1.75} />
            {isConsult ? "Consultation Booked" : "Enquiry Sent"}
          </div>
        </Reveal>
        <h1 className="font-display text-[40px] md:text-[64px] lg:text-[76px] leading-[0.98] tracking-[-0.03em] mt-6 max-w-[16ch]">
          <MaskLines lines={[heading]} />
        </h1>
        <p className="mt-8 max-w-2xl text-[color:var(--paper)]/85 text-[16px] md:text-[18px] leading-[1.7]">
          {sub}
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 pb-24 md:pb-32">
        <div className="border-t border-[color:var(--paper)]/15">
          <div className="tracking-eyebrow text-[color:var(--gold)] pt-8">What happens next</div>
          <ol className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
            {steps.map((s) => (
              <Reveal key={s.n}>
                <li className="border-t border-[color:var(--paper)]/15 pt-6">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-display text-[color:var(--gold)] text-4xl">{s.n}</span>
                    <span className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--paper)]/60">
                      {s.when}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl tracking-[-0.02em] mt-4">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[color:var(--paper)]/85 text-[15px] leading-[1.7]">
                    {s.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-14 pb-24 md:pb-40">
        <Reveal className="border-t border-[color:var(--paper)]/15 pt-12">
          <div className="tracking-eyebrow text-[color:var(--gold)]">Need to talk sooner?</div>
          <h2 className="font-display text-3xl md:text-[40px] tracking-[-0.02em] mt-4 max-w-2xl">
            If you have urgent questions, don&rsquo;t wait for our call.
          </h2>
          <div className="mt-10 flex flex-wrap gap-4 md:gap-6 items-center">
            <a
              href={`tel:${brand.phoneRaw}`}
              data-testid="thankyou-call"
              className="btn-gold"
            >
              <Phone className="h-4 w-4" strokeWidth={1.5} />
              Call {brand.phone}
            </a>
            <a
              href={`sms:${brand.phoneRaw}`}
              data-testid="thankyou-sms"
              className="btn-ghost-light"
            >
              <MessageSquareText className="h-4 w-4" strokeWidth={1.5} />
              Text {brand.phone}
            </a>
            <Link to="/" className="btn-ghost-light">
              Return home <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
