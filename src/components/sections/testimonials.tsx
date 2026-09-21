"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/shared/motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We replaced 14 outbound seats with Voxa and saw a 38% lift in qualified meetings booked in the first month. The custom script builder meant each campaign dialed with the exact tone our brand needed.",
    author: "Mara Velez",
    role: "VP Sales, Apex Motors",
    initials: "MV",
  },
  {
    quote:
      "Our after-hours call abandon rate dropped from 22% to under 1%. Voxa answers, books, and follows up — and the handoff to our human agents is so clean callers rarely notice the switch.",
    author: "Dr. Irfan Qureshi",
    role: "Operations Director, Verdant Health",
    initials: "IQ",
  },
  {
    quote:
      "We run three call centers. Voxa's per-call pricing let us spin up a Black Friday campaign in 48 hours without committing to annual seats. The ROI math was undeniable.",
    author: "Carlos Mendes",
    role: "Head of CX, Lumen Bank",
    initials: "CM",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 border-t border-border bg-mist/30">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-brand font-bold">
              In production
            </p>
            <h2 className="mt-4 font-display font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-ink">
              What operators say
              <span className="text-brand"> after week one.</span>
            </h2>
          </Reveal>
        </div>

        <Stagger
          className="mt-14 grid md:grid-cols-3 gap-5"
          stagger={0.1}
        >
          {testimonials.map((t) => (
            <StaggerItem
              key={t.author}
              className="flex flex-col rounded-3xl border border-border bg-white p-7 sm:p-8 hover:border-brand/30 hover:shadow-luxe transition-all duration-500 hover-lift"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-coral text-coral"
                  />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-base text-ink leading-relaxed font-medium">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white text-sm font-bold shadow-brand">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{t.author}</p>
                  <p className="text-xs text-muted-foreground font-medium">{t.role}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
