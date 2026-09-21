"use client";

import { Reveal, Stagger, StaggerItem } from "@/components/shared/motion";
import {
  Bot,
  FileText,
  Video,
  Megaphone,
  Hotel,
  Workflow,
  Mail,
  ArrowRight,
  Zap,
  Webhook,
  Brain,
  Clock,
} from "lucide-react";

const capabilities = [
  {
    icon: Brain,
    title: "AI agent orchestration",
    body: "Multi-agent pipelines where each agent handles one stage — research, drafting, generation, publishing — and hands off to the next.",
  },
  {
    icon: Webhook,
    title: "Trigger from anything",
    body: "Email, webhook, Telegram, Slack, chat, scheduled timer — your bot wakes up when the right event fires.",
  },
  {
    icon: Zap,
    title: "Tool use & integrations",
    body: "Agents call external APIs, write to Sheets, query CRMs, generate PDFs, and push to your stack — no human glue code.",
  },
  {
    icon: Clock,
    title: "Runs 24/7, never sleeps",
    body: "Once deployed, your bot handles volume at any hour. No headcount, no overtime, no sick days.",
  },
];

const botTypes = [
  { icon: FileText, label: "Content & blog" },
  { icon: Video, label: "Video generation" },
  { icon: Megaphone, label: "Marketing agents" },
  { icon: Hotel, label: "Operations & ops" },
  { icon: Workflow, label: "Full back-office" },
  { icon: Mail, label: "Email & follow-up" },
];

export function AutomationBots() {
  return (
    <section
      id="automation-bots"
      className="relative py-24 sm:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-coral-soft border border-coral/30 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-coral">
                <Bot className="h-3.5 w-3.5" />
                Product 02 · Automation Bots
              </span>
              <h2 className="mt-6 font-display font-semibold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-ink">
                Bots that run your
                <br />
                <span className="text-coral">back office.</span>
              </h2>
              <p className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium max-w-2xl">
                Custom-built automation bots that handle content generation,
                hotel operations, email follow-ups, video pipelines, and more.
                Powered by AI agents, triggered by anything, integrated with everything.
              </p>
            </Reveal>
          </div>

          {/* Bot type chips */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground font-bold mb-3">
                What we build
              </p>
              <div className="grid grid-cols-2 gap-2">
                {botTypes.map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-2.5 rounded-xl border border-border bg-white p-3 shadow-soft"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-coral-soft border border-coral/20 text-coral">
                      <b.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-semibold text-ink">{b.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Capabilities — distinct vertical card layout */}
        <Stagger className="mt-20 grid sm:grid-cols-2 gap-5" stagger={0.08}>
          {capabilities.map((c) => (
            <StaggerItem
              key={c.title}
              className="card-premium group rounded-3xl border border-border bg-white p-7 sm:p-8 hover:border-coral/30"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-coral-soft border border-coral/20 text-coral group-hover:bg-coral group-hover:text-white transition-all duration-500">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed font-medium">
                    {c.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* CTA — links to projects section */}
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-gradient-to-br from-coral-soft to-white border border-coral/30 p-6 sm:p-8">
            <div>
              <p className="font-display text-xl sm:text-2xl font-semibold text-ink">
                See the bots we've built for clients.
              </p>
              <p className="text-sm text-muted-foreground font-medium mt-1">
                Real workflows in production — tap any project for the full case study.
              </p>
            </div>
            <a
              href="#cases"
              className="group inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white hover:shadow-coral transition-all whitespace-nowrap"
              style={{ backgroundColor: "var(--coral)", color: "white" }}
            >
              View projects
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
