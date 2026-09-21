"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/shared/motion";
import { CountUp } from "@/components/shared/count-up";

const stats = [
  { end: 12, suffix: "M+", label: "Calls handled monthly" },
  { end: 94, suffix: "%", label: "Answer-rate on outbound" },
  { end: 3.2, suffix: "×", label: "Faster than human agents", decimals: 1 },
  { end: 47, suffix: "%", label: "Cost saved per seat" },
];

const logos = [
  "Helix Care",
  "NorthPeak Insurance",
  "Lumen Bank",
  "Apex Telco",
  "Verdant Health",
  "Atlas Motors",
];

export function TrustBar() {
  return (
    <section className="relative py-14 sm:py-20 border-y border-border bg-mist/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Stats */}
        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border bg-white shadow-soft">
          {stats.map((s) => (
            <StaggerItem
              key={s.label}
              className="bg-white p-6 sm:p-8 text-center"
            >
              <div className="font-display text-5xl sm:text-6xl font-semibold text-brand-gradient">
                <CountUp
                  end={s.end}
                  suffix={s.suffix}
                  decimals={s.decimals ?? 0}
                />
              </div>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground font-medium tracking-wide">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Logos marquee */}
        <Reveal delay={0.1} className="mt-12">
          <p className="text-center text-[10px] uppercase tracking-[0.24em] text-muted-foreground font-semibold">
            Trusted by operations teams worldwide
          </p>
          <div className="mt-6 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex animate-marquee gap-12 w-max">
              {[...logos, ...logos].map((logo, i) => (
                <span
                  key={i}
                  className="font-display text-2xl sm:text-3xl font-semibold text-muted-foreground/60 whitespace-nowrap"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
