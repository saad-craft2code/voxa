"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Phone,
  ArrowRight,
  PlayCircle,
  Headset,
  Bot,
  Sparkles,
  Zap,
  Globe,
  Shield,
} from "lucide-react";
import { Magnetic } from "@/components/shared/magnetic";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-aurora pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.48 0.20 268 / 0.05) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.48 0.20 268 / 0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-brand">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-coral opacity-75 pulse-ring" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-coral" />
            </span>
            AI Voice Agents · Automation Bots
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-center font-display font-semibold text-[clamp(2.75rem,8vw,6rem)] leading-[1] tracking-[-0.02em] text-ink"
        >
          Automate calls, content
          <br className="hidden sm:block" />
          <span className="text-brand"> and operations.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 mx-auto max-w-2xl text-center text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium"
        >
          Voxa builds AI voice agents that handle your call center, marketing,
          and appointments — plus custom automation bots that run your back office.
          Built by Agus Systems.
        </motion.p>

        {/* Two product chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#voice-agents"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white border border-border px-5 py-2.5 text-sm font-semibold text-ink hover:border-brand/40 hover:bg-brand-soft transition-all shadow-soft"
          >
            <Headset className="h-4 w-4 text-brand" />
            Voice Agents
          </a>
          <a
            href="#automation-bots"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white border border-border px-5 py-2.5 text-sm font-semibold text-ink hover:border-coral/40 hover:bg-coral-soft transition-all shadow-soft"
          >
            <Bot className="h-4 w-4 text-coral" />
            Automation Bots
          </a>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Magnetic as="a" href="#cta" strength={0.2}>
            <span
              data-book-demo
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white hover:bg-brand-dark hover:shadow-brand transition-all cursor-pointer"
            >
              Book a demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Magnetic>
          <Magnetic as="a" href="#cases" strength={0.2}>
            <span className="group inline-flex items-center gap-2 rounded-full bg-white border border-border px-8 py-4 text-base font-semibold text-ink hover:border-brand/40 hover:bg-brand-soft transition-colors shadow-soft">
              <PlayCircle className="h-4 w-4 text-brand" />
              View projects
            </span>
          </Magnetic>
        </motion.div>

        {/* Phone strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 flex items-center justify-center"
        >
          <a
            href="tel:+923426660462"
            className="inline-flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-ink transition-colors"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft border border-brand/20">
              <Phone className="h-3.5 w-3.5 text-brand" />
            </span>
            Talk to us ·
            <span className="font-bold text-ink tabular-nums text-base">
              +92 342 6660462
            </span>
          </a>
        </motion.div>

        {/* Abstract feature panel — no screenshot, cleaner */}
        {!reduce && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mt-16"
          >
            <div className="mx-auto max-w-4xl">
              <div className="glass rounded-3xl shadow-luxe p-7 sm:p-10">
                <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                  {/* Voice Agents card */}
                  <div className="rounded-2xl bg-brand-soft border border-brand/20 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-brand">
                      <Headset className="h-5 w-5" />
                    </div>
                    <p className="mt-4 font-display text-lg font-semibold text-ink">
                      Voice Agents
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground font-medium leading-relaxed">
                      Call center · marketing · appointments
                    </p>
                    <div className="mt-4 space-y-1.5">
                      <MiniFeature icon={Zap} text="<500ms latency" />
                      <MiniFeature icon={Globe} text="32 languages" />
                      <MiniFeature icon={Shield} text="HIPAA · TCPA" />
                    </div>
                  </div>

                  {/* Center stat block */}
                  <div className="rounded-2xl bg-white border border-border p-5 text-center flex flex-col justify-center">
                    <p className="font-display text-4xl font-semibold text-brand tabular-nums">
                      500+
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground font-medium">
                      workflows shipped
                    </p>
                    <div className="my-4 h-px bg-border" />
                    <p className="font-display text-4xl font-semibold text-coral tabular-nums">
                      &lt;2 wk
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground font-medium">
                      to production
                    </p>
                  </div>

                  {/* Automation Bots card */}
                  <div className="rounded-2xl bg-coral-soft border border-coral/30 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-coral text-white shadow-coral">
                      <Bot className="h-5 w-5" />
                    </div>
                    <p className="mt-4 font-display text-lg font-semibold text-ink">
                      Automation Bots
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground font-medium leading-relaxed">
                      Content · ops · back-office
                    </p>
                    <div className="mt-4 space-y-1.5">
                      <MiniFeature icon={Sparkles} text="Multi-agent" tone="coral" />
                      <MiniFeature icon={Zap} text="24/7 always-on" tone="coral" />
                      <MiniFeature icon={Globe} text="60+ integrations" tone="coral" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function MiniFeature({
  icon: Icon,
  text,
  tone = "brand",
}: {
  icon: typeof Zap;
  text: string;
  tone?: "brand" | "coral";
}) {
  return (
    <div className="flex items-center gap-2 text-xs font-semibold text-ink">
      <Icon
        className={`h-3 w-3 ${tone === "brand" ? "text-brand" : "text-coral"}`}
      />
      {text}
    </div>
  );
}
