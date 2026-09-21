"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/shared/motion";
import { PhoneCall, Clock, TrendingUp, DollarSign } from "lucide-react";

const metrics = [
  {
    icon: PhoneCall,
    value: "94%",
    label: "Outbound answer-rate",
    body: "Voxa detects voicemail and skips it — your team only talks to humans who picked up.",
  },
  {
    icon: Clock,
    value: "480ms",
    label: "Median response latency",
    body: "Faster than the average human pause. Callers feel the agent is present and attentive.",
  },
  {
    icon: TrendingUp,
    value: "3.2×",
    label: "Throughput vs. human agents",
    body: "One Voxa agent runs up to 50 concurrent calls. Your human team handles the high-value ones.",
  },
  {
    icon: DollarSign,
    value: "47%",
    label: "Cost saved per seat",
    body: "Replace three outbound seats with one Voxa plan and keep your conversion rate intact — or higher.",
  },
];

export function Metrics() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-border bg-mist/30 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.24em] text-brand font-bold">
                The numbers
              </p>
              <h2 className="mt-4 font-display font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-ink">
                Performance you can
                <span className="text-brand"> actually measure.</span>
              </h2>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed font-medium">
                Median results across 500+ call centers running Voxa in production today.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Stagger
              className="grid sm:grid-cols-2 gap-4"
              stagger={0.08}
            >
              {metrics.map((m) => (
                <StaggerItem
                  key={m.label}
                  className="rounded-2xl border border-border bg-white p-6 sm:p-7 hover:border-brand/30 hover:shadow-luxe transition-all duration-500 hover-lift"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft border border-brand/20 text-brand">
                      <m.icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-4xl sm:text-5xl font-extrabold text-brand tabular-nums">
                      {m.value}
                    </span>
                  </div>
                  <p className="mt-5 text-sm font-bold text-ink">
                    {m.label}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-medium">
                    {m.body}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
