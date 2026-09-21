"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/shared/motion";
import {
  Languages,
  Gauge,
  ShieldCheck,
  Webhook,
  Brain,
  PhoneForwarded,
  FileText,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Conversational reasoning",
    body: "Our agents understand intent, handle interruptions, and recover gracefully from off-script chatter — no rigid IVR trees, no dead-ends.",
  },
  {
    icon: Gauge,
    title: "Sub-second latency",
    body: "Average 480ms response time means callers don't notice the seam. Voxa sounds present, attentive, and quick — even in noisy call-center rooms.",
  },
  {
    icon: Languages,
    title: "32 languages, 60+ accents",
    body: "Pick a voice that matches your brand persona and your caller's locale. Voxa switches mid-call if the caller switches languages.",
  },
  {
    icon: ShieldCheck,
    title: "Compliant by default",
    body: "TCPA, GDPR, HIPAA BAA, and PCI-aware call flows baked in. Every call is recorded, redacted, and stored per your data residency.",
  },
  {
    icon: PhoneForwarded,
    title: "Human handoff",
    body: "Smart escalation routes the call to the right rep with full transcript, intent, and sentiment — so the human never starts cold.",
  },
  {
    icon: Webhook,
    title: "Integrations everywhere",
    body: "Native sync with HubSpot, Salesforce, Zoho, Calendly, Google Calendar, Twilio, Vonage, Zendesk, and your custom webhooks.",
  },
  {
    icon: FileText,
    title: "Custom scripts per campaign",
    body: "Build branching scripts visually. Branch on caller answer, sentiment, CRM data, or external API responses — no code required.",
  },
  {
    icon: Clock,
    title: "24/7 always-on",
    body: "Voxa never takes a break. After-hours, weekends, holidays — your agents keep answering, booking, and qualifying leads.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-brand font-bold">
              What's inside
            </p>
            <h2 className="mt-4 font-display font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-ink">
              Engineered for calls
              <span className="text-brand"> that convert.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed font-medium">
              Purpose-built for high-volume voice operations. No fluff — just the toolkit your team needs to replace seats with software.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          stagger={0.06}
        >
          {features.map((f) => (
            <StaggerItem
              key={f.title}
              className="group relative rounded-2xl border border-border bg-white p-6 hover:bg-white hover:border-brand/30 hover:shadow-luxe transition-all duration-500 overflow-hidden hover-lift"
            >
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-brand-soft blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft border border-brand/20 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed font-medium">
                  {f.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
