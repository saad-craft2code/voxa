"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/shared/motion";
import {
  Radio,
  Brain,
  PhoneCall,
  CalendarCheck,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Radio,
    title: "Connect a number",
    body: "Port your existing number or get a fresh local, toll-free, or international DID. Voxa routes calls in seconds — no SIP trunking required.",
    meta: ["DID provisioning", "Number porting", "Caller ID match"],
  },
  {
    n: "02",
    icon: Brain,
    title: "Compose a script",
    body: "Use the visual flow builder to draft branching scripts — greeting, qualification, objection handling, transfer triggers. Each campaign gets its own.",
    meta: ["Visual builder", "Branch on intent", "Multi-language"],
  },
  {
    n: "03",
    icon: PhoneCall,
    title: "Launch the agent",
    body: "Pick your audience, set call windows, click go. Voxa answers, listens, responds, and routes with sub-second latency and natural turn-taking.",
    meta: ["Concurrent calls", "Compliance dialing", "Time-zone aware"],
  },
  {
    n: "04",
    icon: CalendarCheck,
    title: "Book, transfer, or follow up",
    body: "Calls can write appointments to your CRM, trigger SMS confirmations, transfer to humans for hot leads, or schedule callbacks — automatically.",
    meta: ["Calendar sync", "CRM write-back", "SMS triggers"],
  },
  {
    n: "05",
    icon: BarChart3,
    title: "Measure & iterate",
    body: "Every call is transcribed, tagged, and scored. Review drop-off points, A/B test scripts, and re-deploy with one click.",
    meta: ["Analytics", "A/B testing", "Real-time dashboards"],
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-brand font-bold">
              How it works
            </p>
            <h2 className="mt-4 font-display font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-ink">
              Live in an afternoon,
              <span className="text-brand"> not a quarter.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed font-medium">
              Five steps from signup to your first live, human-grade call.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 relative">
          <div className="absolute left-[28px] top-2 bottom-2 w-px bg-gradient-to-b from-brand/40 via-border to-transparent hidden sm:block" />

          <Stagger className="space-y-2" stagger={0.07}>
            {steps.map((s) => (
              <StaggerItem key={s.n}>
                <div className="group sm:pl-20 sm:py-5 rounded-2xl hover:bg-mist/60 transition-colors duration-300 p-5 sm:p-6">
                  <div className="flex items-start gap-5 sm:gap-6">
                    <div className="relative flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-white shadow-brand group-hover:scale-105 transition-transform duration-300">
                        <s.icon className="h-5 w-5" />
                      </div>
                      <span className="absolute -top-2 -right-2 text-[10px] tabular-nums tracking-wider text-ink bg-white px-1.5 py-0.5 rounded-full border border-border shadow-soft font-bold">
                        {s.n}
                      </span>
                    </div>
                    <div className="pt-1 flex-1">
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-base text-muted-foreground leading-relaxed font-medium max-w-2xl">
                        {s.body}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {s.meta.map((m) => (
                          <span
                            key={m}
                            className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft border border-brand/15 px-3 py-1 text-xs font-semibold text-brand"
                          >
                            <span className="h-1 w-1 rounded-full bg-brand" />
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
