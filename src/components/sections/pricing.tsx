"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/shared/motion";
import { Check, Phone, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "monthly",
    name: "Monthly",
    tagline: "Unlimited seats, flat fee",
    price: "$499",
    cadence: "/ month",
    description:
      "Predictable pricing for call centers that run a steady volume. Unlimited agents, unlimited campaigns, unlimited minutes within your tier.",
    features: [
      "Up to 10,000 minutes / month included",
      "Unlimited AI agents & campaigns",
      "Custom scripts per campaign",
      "CRM + calendar integrations",
      "Email & SMS follow-ups",
      "Standard support (24h response)",
    ],
    cta: "Start monthly",
    highlighted: false,
  },
  {
    id: "call",
    name: "Call-based",
    tagline: "Pay only for connected calls",
    price: "$0.18",
    cadence: "/ connected call",
    description:
      "Perfect for marketing campaigns and seasonal spikes. No seat fees, no monthly minimums — you only pay when Voxa actually connects with a human.",
    features: [
      "No monthly minimum",
      "Per-call pricing on connected calls only",
      "Voicemail detection — no charges for machine pickups",
      "Real-time spend dashboard & alerts",
      "All integrations included",
      "Priority support (4h response)",
    ],
    cta: "Start call-based",
    highlighted: true,
  },
  {
    id: "custom",
    name: "Custom",
    tagline: "Enterprise-grade, white-glove",
    price: "Tailored",
    cadence: "",
    description:
      "For high-volume operators with custom compliance, dedicated infrastructure, voice cloning, on-prem deployment, or private telephony requirements.",
    features: [
      "Dedicated infrastructure & phone numbers",
      "Custom voice cloning & brand persona",
      "On-prem / VPC deployment available",
      "HIPAA BAA, SOC 2, custom DPAs",
      "Dedicated success manager",
      "99.95% uptime SLA",
    ],
    cta: "Talk to sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-brand font-bold">
              Pricing
            </p>
            <h2 className="mt-4 font-display font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-ink">
              Pick the plan that fits
              <span className="text-brand"> your call volume.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed font-medium">
              Flat monthly, per-call, or fully custom. No setup fees, no hidden add-ons. Cancel anytime.
            </p>
          </Reveal>
        </div>

        <Stagger
          className="mt-14 grid lg:grid-cols-3 gap-5 lg:gap-6 items-stretch"
          stagger={0.1}
        >
          {plans.map((p) => (
            <StaggerItem
              key={p.id}
              className={cn(
                "relative flex flex-col rounded-3xl p-7 sm:p-8 border transition-all duration-500",
                p.highlighted
                  ? "border-brand bg-white shadow-brand lg:-translate-y-3 ring-2 ring-brand/30"
                  : "border-border bg-white hover:border-brand/30 hover:shadow-luxe hover-lift"
              )}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-coral px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white font-bold shadow-coral">
                    <Sparkles className="h-3 w-3" />
                    Most popular
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-display text-3xl font-extrabold text-ink tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-brand font-bold">
                  {p.tagline}
                </p>
              </div>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-5xl font-extrabold text-ink tracking-tight">
                  {p.price}
                </span>
                {p.cadence && (
                  <span className="text-sm text-muted-foreground font-medium">
                    {p.cadence}
                  </span>
                )}
              </div>

              <p className="mt-5 text-sm text-muted-foreground leading-relaxed font-medium">
                {p.description}
              </p>

              <ul className="mt-7 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-ink font-medium"
                  >
                    <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={cn(
                  "mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-bold transition-all duration-300 hover-lift",
                  p.highlighted
                    ? "bg-brand text-white hover:bg-brand-dark hover:shadow-brand"
                    : "bg-white border border-brand text-brand hover:bg-brand hover:text-white hover:shadow-brand"
                )}
              >
                {p.cta}
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Below pricing: call us strip */}
        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-muted-foreground font-medium">
            <span>Not sure which plan fits?</span>
            <a
              href="tel:+923426660462"
              className="inline-flex items-center gap-2 text-ink hover:text-brand transition-colors group"
            >
              <Phone className="h-3.5 w-3.5 text-brand" />
              <span className="font-bold tabular-nums">
                +92 342 6660462
              </span>
              <span className="text-muted-foreground">· 15-min scoping call</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
