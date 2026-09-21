"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/shared/motion";
import {
  Headset,
  PhoneCall,
  CalendarClock,
  Megaphone,
  ArrowUpRight,
  Check,
  Zap,
  Globe,
  Shield,
  PhoneForwarded,
} from "lucide-react";

const useCases = [
  {
    icon: PhoneCall,
    title: "Call Center Inbound",
    summary: "Tier-1 support, fully automated.",
    body: "Voxa answers Tier-1 calls, authenticates callers, resolves routine requests, and escalates to a human the moment sentiment dips or a complex case is detected. Your agents only handle what truly needs them.",
    stats: [
      { value: "78%", label: "auto-resolved" },
      { value: "<1s", label: "pickup time" },
      { value: "0", label: "on-hold queue" },
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing Outbound",
    summary: "Compliant cold calls that convert.",
    body: "Dials your segmented lists, opens with TCPA-compliant disclosures, qualifies intent in under 90 seconds, and routes hot leads straight to your sales team — with full caller context for a warm handoff.",
    stats: [
      { value: "94%", label: "pickup rate" },
      { value: "90s", label: "qualify time" },
      { value: "3.2×", label: "hot leads" },
    ],
  },
  {
    icon: CalendarClock,
    title: "Appointment Booking",
    summary: "24/7 booking with zero no-shows.",
    body: "Answers booking calls around the clock, checks live calendar availability, books appointments, sends confirmations, and — crucially — auto-calls no-shows 24 hours later to rebook. Your front desk stops being a bottleneck.",
    stats: [
      { value: "52%", label: "no-show drop" },
      { value: "0s", label: "on-hold time" },
      { value: "24/7", label: "always-on" },
    ],
  },
];

const capabilities = [
  { icon: Zap, label: "Sub-500ms latency", desc: "Sounds present, not robotic" },
  { icon: Globe, label: "32 languages", desc: "Switches mid-call if caller does" },
  { icon: Shield, label: "Compliant by default", desc: "TCPA · GDPR · HIPAA BAA" },
  { icon: PhoneForwarded, label: "Human handoff", desc: "Full transcript to your rep" },
];

export function VoiceAgents() {
  return (
    <section
      id="voice-agents"
      className="relative py-24 sm:py-32 border-t border-border"
    >
      <div className="absolute inset-0 bg-aurora opacity-50 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-soft border border-brand/20 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand">
                <Headset className="h-3.5 w-3.5" />
                Product 01 · Voice Agents
              </span>
              <h2 className="mt-6 font-display font-semibold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-ink">
                AI voice agents that
                <br />
                <span className="text-brand">sound human.</span>
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl">
                Run your call center, marketing, and appointments on voice agents
                that talk, listen, and reason like your best human operators —
                each with a custom script tailored to every campaign you launch.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {capabilities.map((c) => (
                  <div
                    key={c.label}
                    className="rounded-2xl border border-border bg-white p-4 shadow-soft"
                  >
                    <c.icon className="h-4 w-4 text-brand mb-2" />
                    <p className="text-sm font-semibold text-ink leading-tight">
                      {c.label}
                    </p>
                    <p className="text-xs text-muted-foreground font-medium mt-1 leading-snug">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Use cases — vertical layout, distinct from bots */}
        <div className="mt-20 space-y-6">
          {useCases.map((u, i) => (
            <Reveal key={u.title} delay={i * 0.05}>
              <div className="group grid lg:grid-cols-12 gap-6 lg:gap-10 items-start rounded-3xl border border-border bg-white p-7 sm:p-9 hover:border-brand/30 hover:shadow-luxe transition-all duration-500">
                {/* Left: icon + index */}
                <div className="lg:col-span-2 flex lg:flex-col items-center lg:items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft border border-brand/20 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    <u.icon className="h-6 w-6" />
                  </div>
                  <span className="font-display text-5xl font-light text-brand/30 tabular-nums">
                    0{i + 1}
                  </span>
                </div>

                {/* Middle: title + body */}
                <div className="lg:col-span-6">
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight">
                    {u.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-brand uppercase tracking-[0.14em]">
                    {u.summary}
                  </p>
                  <p className="mt-4 text-base text-muted-foreground leading-relaxed font-medium">
                    {u.body}
                  </p>
                </div>

                {/* Right: stats */}
                <div className="lg:col-span-4 grid grid-cols-3 gap-3">
                  {u.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl bg-brand-soft border border-brand/15 p-3 text-center"
                    >
                      <p className="font-display text-xl sm:text-2xl font-semibold text-brand tabular-nums">
                        {s.value}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-semibold mt-1 leading-tight">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-brand-soft border border-brand/20 p-6 sm:p-8">
            <div>
              <p className="font-display text-xl sm:text-2xl font-semibold text-ink">
                Want a custom voice script for your business?
              </p>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                We'll draft one for your use-case in under 24 hours.
              </p>
            </div>
            <button
              data-book-demo
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark hover:shadow-brand transition-all whitespace-nowrap cursor-pointer"
            >
              Book a demo
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
