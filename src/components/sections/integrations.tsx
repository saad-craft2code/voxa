"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/shared/motion";
import {
  Calendar,
  Mail,
  MessageSquare,
  Phone,
  Webhook,
  Database,
  Cloud,
  CreditCard,
  ArrowUpRight,
} from "lucide-react";

const integrations = [
  { name: "HubSpot", category: "CRM", icon: Database },
  { name: "Salesforce", category: "CRM", icon: Database },
  { name: "Zoho", category: "CRM", icon: Database },
  { name: "Zendesk", category: "Support", icon: MessageSquare },
  { name: "Calendly", category: "Calendar", icon: Calendar },
  { name: "Google Calendar", category: "Calendar", icon: Calendar },
  { name: "Twilio", category: "Telephony", icon: Phone },
  { name: "Vonage", category: "Telephony", icon: Phone },
  { name: "SendGrid", category: "Email", icon: Mail },
  { name: "Twilio SMS", category: "SMS", icon: MessageSquare },
  { name: "Stripe", category: "Payments", icon: CreditCard },
  { name: "AWS", category: "Cloud", icon: Cloud },
  { name: "Webhooks", category: "Custom", icon: Webhook },
  { name: "REST API", category: "Custom", icon: Webhook },
];

const categories = [
  "CRM",
  "Calendar",
  "Telephony",
  "Support",
  "Email",
  "SMS",
  "Payments",
  "Cloud",
  "Custom",
];

export function Integrations() {
  return (
    <section
      id="integrations"
      className="relative py-24 sm:py-36 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-4xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-brand font-bold">
              Integrations
            </p>
            <h2 className="mt-4 font-display font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-ink">
              Plays nicely with
              <span className="text-brand"> your stack.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed font-medium">
              Native two-way sync with CRMs, calendars, telephony providers, and your own custom webhooks. Real-time, no batch jobs.
            </p>
          </Reveal>
        </div>

        {/* Categories */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft border border-brand/15 px-3 py-1.5 text-xs font-semibold text-brand"
              >
                <span className="h-1 w-1 rounded-full bg-brand" />
                {cat}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <Stagger
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          stagger={0.05}
        >
          {integrations.map((it) => (
            <StaggerItem
              key={it.name}
              className="card-premium group rounded-2xl border border-border bg-white p-5 sm:p-6 hover:border-brand/30"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-soft border border-brand/15 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                  <it.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">
                    {it.name}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium mt-0.5">
                    {it.category}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Custom integration callout */}
        <Reveal delay={0.15}>
          <div className="mt-12 rounded-3xl border border-brand/20 bg-gradient-to-br from-brand-soft/60 to-white p-7 sm:p-10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold text-ink tracking-tight">
                  Need a custom integration?
                </h3>
                <p className="mt-3 text-base text-muted-foreground font-medium leading-relaxed max-w-2xl">
                  Every Voxa plan includes webhooks and a REST API. Enterprise
                  plans get custom integration work — we'll build the connector
                  your stack needs, at no extra cost.
                </p>
              </div>
              <a
                href="#cta"
                className="hover-lift inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark hover:shadow-brand transition-all whitespace-nowrap"
              >
                Talk to engineering
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
