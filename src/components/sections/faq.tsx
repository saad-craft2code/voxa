"use client";

import { Reveal } from "@/components/shared/motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does it take to launch my first campaign?",
    a: "Most customers are live within 24–48 hours. After signup, you connect a phone number (or port your own), draft your first campaign script in the visual builder, pick your audience, and click launch. Our team helps with the first campaign at no extra cost.",
  },
  {
    q: "Do callers know they're talking to an AI?",
    a: "Voxa discloses the AI nature where required by local regulations (e.g., TCPA in the US, GDPR in the EU). For inbound customer-service calls, callers can usually tell there's something unusual — but most don't mind, because the call gets resolved faster than with a human queue.",
  },
  {
    q: "Can Voxa integrate with our existing CRM and telephony?",
    a: "Yes. We have native integrations with HubSpot, Salesforce, Zoho, Zendesk, Calendly, Google Calendar, Twilio, Vonage, and more. For anything else, we expose webhooks and a REST API. Enterprise plans include custom integration work.",
  },
  {
    q: "What happens if the AI can't handle a call?",
    a: "Voxa escalates to a human agent with full transcript, intent, sentiment, and CRM context attached. You set the escalation rules per campaign — for example, escalate any call where sentiment drops below neutral, or where a specific keyword is mentioned.",
  },
  {
    q: "Is the call data secure and compliant?",
    a: "All calls are encrypted in transit and at rest. We support HIPAA BAA, SOC 2 Type II, GDPR, and PCI-aware call flows. Enterprise customers can choose data residency (US, EU, or APAC) and request on-prem / VPC deployment.",
  },
  {
    q: "Can I customize the voice and personality?",
    a: "Yes. Voxa ships with 40+ stock voices across 32 languages and 60+ accents. Enterprise plans include custom voice cloning — we train a voice on as little as 30 minutes of sample audio to match your brand persona.",
  },
  {
    q: "What's the difference between the Monthly, Call-based, and Custom plans?",
    a: "Monthly is a flat fee for predictable call centers — best when you know your volume. Call-based charges you only for connected calls — best for marketing campaigns with variable volume. Custom is for enterprises with dedicated infrastructure, compliance, or voice-cloning needs. You can switch between Monthly and Call-based anytime.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left column */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.24em] text-brand font-bold">
                Questions
              </p>
              <h2 className="mt-4 font-display font-extrabold text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.03em] text-ink">
                Everything you need to know
                <span className="text-brand"> before signing up.</span>
              </h2>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed font-medium">
                Still unsure? Call us — we'll walk you through how Voxa would
                work for your specific operation, no slides, no sales pressure.
              </p>
              <a
                href="tel:+923426660462"
                className="mt-6 inline-flex items-center gap-3 text-ink hover:text-brand transition-colors group"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white shadow-brand group-hover:scale-105 transition-transform">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="tabular-nums font-bold">
                  +92 342 6660462
                </span>
              </a>
            </Reveal>
          </div>

          {/* Right column — accordion */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="rounded-2xl border border-border bg-white px-5 sm:px-6 hover:border-brand/30 transition-colors data-[state=open]:border-brand/40 data-[state=open]:shadow-soft"
                  >
                    <AccordionTrigger className="text-left font-display text-lg sm:text-xl font-bold text-ink hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 font-medium">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
