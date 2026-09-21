"use client";

import { Reveal } from "@/components/shared/motion";
import { Phone, MessageCircle, Mail, ArrowRight, Check } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/923426660462?text=" + encodeURIComponent(
  "Hi Voxa team — I'd like to book a live demo of your AI voice agents / automation bots."
);

const perks = [
  "Live call with a real Voxa agent",
  "Custom script or bot drafted for your use-case",
  "Pricing plan recommendation",
];

export function CTA() {
  return (
    <section
      id="cta"
      className="relative py-24 sm:py-32 border-t border-border overflow-hidden bg-mist/30"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[800px] rounded-full bg-brand/15 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="rounded-[2rem] border border-brand/20 bg-white shadow-luxe overflow-hidden">
          <div className="h-1.5 bg-gradient-to-r from-brand via-brand-dark to-coral" />
          <div className="p-8 sm:p-12 lg:p-16 text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-4 py-1.5 text-xs tracking-[0.18em] uppercase text-brand font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-coral pulse-ring" />
                Book a demo
              </span>
              <h2 className="mt-6 font-display font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-[-0.03em] text-ink">
                Let's automate
                <span className="text-brand"> your operation.</span>
              </h2>
              <p className="mt-5 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed font-medium">
                Tell us about your workflow. We'll draft a custom voice script or
                automation bot, set up a phone number, and walk you through a
                live demo — all in under 30 minutes.
              </p>

              {/* Perks */}
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
                {perks.map((p) => (
                  <div
                    key={p}
                    className="inline-flex items-center gap-2 text-sm text-ink font-medium"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand text-white">
                      <Check className="h-3 w-3" />
                    </span>
                    {p}
                  </div>
                ))}
              </div>

              {/* Contact options — direct */}
              <div className="mt-10 grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
                {/* WhatsApp */}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 hover:border-emerald-400 hover:shadow-md transition-all"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-sm group-hover:scale-105 transition-transform">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-ink text-sm">WhatsApp</p>
                    <p className="text-[11px] text-muted-foreground font-medium mt-0.5">
                      Fastest reply
                    </p>
                  </div>
                </a>
                {/* Email */}
                <a
                  href="mailto:info@aguss.co?subject=Book%20a%20Voxa%20demo"
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-brand/20 bg-brand-soft p-5 hover:border-brand/40 hover:shadow-md transition-all"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-brand group-hover:scale-105 transition-transform">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-ink text-sm">Email</p>
                    <p className="text-[11px] text-muted-foreground font-medium mt-0.5 truncate">
                      info@aguss.co
                    </p>
                  </div>
                </a>
                {/* Phone */}
                <a
                  href="tel:+923426660462"
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-white p-5 hover:border-brand/30 hover:shadow-md transition-all"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ink text-white shadow-soft group-hover:scale-105 transition-transform">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-ink text-sm">Phone</p>
                    <p className="text-[11px] text-muted-foreground font-medium mt-0.5 tabular-nums">
                      +92 342 6660462
                    </p>
                  </div>
                </a>
              </div>

              {/* Modal trigger */}
              <button
                data-book-demo
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white hover:bg-brand-dark hover:shadow-brand transition-all cursor-pointer"
              >
                Open booking options
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>

              <p className="mt-6 text-xs text-muted-foreground font-medium">
                Powered by <span className="font-bold text-ink">Agus Systems</span> · Islamabad · Chicago
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
