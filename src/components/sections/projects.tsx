"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  FileText,
  Video,
  Megaphone,
  Hotel,
  Workflow,
  Mail,
  X,
  ArrowUpRight,
  ArrowRight,
  CheckCircle2,
  Clock,
  TrendingUp,
  Layers,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/shared/motion";

type Project = {
  id: string;
  title: string;
  category: string;
  icon: typeof Bot;
  tagline: string;
  summary: string;
  image: string;
  duration: string;
  industry: string;
  stack: string[];
  problem: string;
  solution: string;
  outcomes: string[];
  metrics: { value: string; label: string }[];
};

const projects: Project[] = [
  {
    id: "blog-automation",
    title: "Blog & Content Automation",
    category: "Content",
    icon: FileText,
    tagline: "From keyword to published post — fully automated.",
    summary:
      "AI agent that researches, drafts, generates images, and publishes blog posts to WordPress with full SEO metadata and Google Sheets logging.",
    image: "/cases/case-blog-automation.jpg",
    duration: "9 days to production",
    industry: "Content / Media",
    stack: ["GPT-4.1", "Tavily search", "DALL·E image gen", "WordPress", "Google Sheets"],
    problem:
      "Marketing team was spending 6+ hours per blog post — research, drafting, finding images, formatting, and publishing. Output was capped at 4 posts per month.",
    solution:
      "We built a multi-agent pipeline triggered by a keyword input. One agent researches via Tavily, another drafts with GPT-4.1, a third generates the featured image via DALL·E, and a final step publishes to WordPress with SEO metadata. Every post is logged to Google Sheets for tracking.",
    outcomes: [
      "Blog output went from 4 posts/month to 150+ posts/month",
      "Time per post dropped from 6 hours to ~3 minutes of human QA",
      "SEO traffic grew 3.4× in the first quarter",
      "Marketing team reallocated to strategy instead of writing",
    ],
    metrics: [
      { value: "150+", label: "posts / month" },
      { value: "3 min", label: "human QA time" },
      { value: "3.4×", label: "SEO traffic" },
    ],
  },
  {
    id: "video-pipeline",
    title: "Video Generation Pipeline",
    category: "Media",
    icon: Video,
    tagline: "End-to-end short-form video, on demand.",
    summary:
      "End-to-end pipeline that generates prompts, images, audio, and final rendered short-form videos — auto-published to Telegram and Drive.",
    image: "/cases/case-video-pipeline.jpg",
    duration: "14 days to production",
    industry: "Media / Social",
    stack: ["GPT-4.1", "Audio synthesis", "Video render", "Telegram", "Google Drive"],
    problem:
      "Social media team needed 20+ short-form videos per week for TikTok, Reels, and Shorts. Manual production was capped at 6 per week and cost $80+ per video in freelance fees.",
    solution:
      "We built a pipeline that takes a topic prompt and orchestrates four parallel AI stages: image prompts → image generation → audio synthesis → final video render. Each video is auto-published to Telegram and uploaded to Google Drive, with metadata added via GPT.",
    outcomes: [
      "Video output scaled from 6/week to 100+/week",
      "Cost per video dropped from $80 to under $1",
      "Posting cadence hit 4× per day across all channels",
      "Engagement per video held steady vs. manual production",
    ],
    metrics: [
      { value: "100+", label: "videos / week" },
      { value: "<$1", label: "cost / video" },
      { value: "17×", label: "output increase" },
    ],
  },
  {
    id: "hotel-management",
    title: "Hotel Booking Automation",
    category: "Hospitality",
    icon: Hotel,
    tagline: "Emails in, confirmations out — zero human touch.",
    summary:
      "Email + chat triggered automation that handles bookings, receipt recognition, availability checks, and payment verification end-to-end.",
    image: "/cases/case-hotel-management.jpg",
    duration: "12 days to production",
    industry: "Hospitality",
    stack: ["Gmail trigger", "AI agent", "OCR receipt scan", "Payment verify", "Calendar sync"],
    problem:
      "Boutique hotel chain received 1,000+ booking emails per week. Front desk staff was spending 40+ hours/week manually reading emails, verifying receipts, checking availability, and replying.",
    solution:
      "We built an automation that watches a Gmail inbox, uses an AI agent to extract booking details, OCR to verify payment receipts, checks real-time room availability, and replies with confirmation or rejection emails. All without a human in the loop.",
    outcomes: [
      "1,000+ emails per week handled automatically",
      "Front desk saved 40+ hours per week",
      "Booking confirmation time dropped from hours to under 60 seconds",
      "Zero booking errors in 6 months of production",
    ],
    metrics: [
      { value: "1,000+", label: "emails / week" },
      { value: "40h", label: "saved / week" },
      { value: "<60s", label: "confirm time" },
    ],
  },
  {
    id: "email-followup",
    title: "Telegram Lead Qualifier",
    category: "Sales",
    icon: Mail,
    tagline: "Voice, text, or files — all routed to a sales agent.",
    summary:
      "Telegram-triggered multi-branch bot that handles text, audio transcription, and file extraction through AI agents with tool use.",
    image: "/cases/case-email-followup.jpg",
    duration: "6 days to production",
    industry: "Sales / Lead-gen",
    stack: ["Telegram trigger", "Audio transcription", "File extraction", "AI agent", "Sheets log"],
    problem:
      "Sales team was drowning in Telegram messages — text, voice notes, and files — and qualifying leads took 2+ hours per day of manual triage. Hot leads were going cold.",
    solution:
      "We built a multi-branch Telegram bot. Text messages route to an AI agent directly. Voice notes get transcribed first, then routed. Files get extracted and parsed. All branches converge on a sales agent that qualifies intent, logs to Google Sheets, and pings the right sales rep via Telegram.",
    outcomes: [
      "Lead qualification time dropped from 2+ hours to under 5 minutes",
      "Qualified leads grew 3.2× per week",
      "Sales reps only see pre-qualified leads now",
      "Response time on hot leads dropped from 4 hours to 90 seconds",
    ],
    metrics: [
      { value: "3.2×", label: "qualified leads" },
      { value: "90s", label: "hot-lead response" },
      { value: "5 min", label: "qualify time" },
    ],
  },
  {
    id: "marketing-agent",
    title: "Marketing Team Agent",
    category: "Marketing",
    icon: Megaphone,
    tagline: "One agent, every marketing output.",
    summary:
      "Telegram-triggered marketing bot that handles voice + text, generates LinkedIn posts, blog content, and images on demand.",
    image: "/cases/case-marketing-agent.jpg",
    duration: "8 days to production",
    industry: "Marketing",
    stack: ["Telegram", "Voice transcription", "GPT-4.1", "Image gen", "Multi-output"],
    problem:
      "Marketing team had to context-switch between 5 different tools to produce content for different channels. Output was inconsistent and slow.",
    solution:
      "We built a single Telegram-triggered agent that accepts voice or text briefs and outputs LinkedIn posts, blog drafts, image concepts, and tweets — all from one conversation. The agent has access to memory, search tools, and brand voice guidelines.",
    outcomes: [
      "Content output doubled across all channels",
      "Brief-to-publish time dropped from 2 days to 30 minutes",
      "Brand voice consistency improved measurably",
      "Marketing team consolidated from 5 tools to 1",
    ],
    metrics: [
      { value: "2×", label: "content output" },
      { value: "30 min", label: "brief to publish" },
      { value: "1 tool", label: "vs. 5 before" },
    ],
  },
  {
    id: "full-automation",
    title: "Full Automation System",
    category: "Operations",
    icon: Workflow,
    tagline: "One manager agent, every input channel.",
    summary:
      "Manager AI agent that responds to email + webhook + chat triggers with memory, Google Sheets sync, PDF generation, and tool use.",
    image: "/cases/case-full-automation.jpg",
    duration: "16 days to production",
    industry: "Operations",
    stack: ["IMAP", "Webhook", "Chat trigger", "Sheets sync", "PDF gen"],
    problem:
      "Operations team was manually triaging emails, chat messages, and webhook events into 4 different downstream systems. SLAs were slipping and context was lost across channels.",
    solution:
      "We built a manager AI agent that watches three input channels — IMAP email, webhooks, and chat — and routes each event to the right downstream system. The agent has memory of past interactions, syncs state to Google Sheets, and generates PDFs for formal responses.",
    outcomes: [
      "All three input channels unified into one workflow",
      "Average response SLA dropped from 6 hours to under 2 minutes",
      "Zero context lost across channels — memory persists",
      "Operations team scaled 3× without adding headcount",
    ],
    metrics: [
      { value: "<2 min", label: "response SLA" },
      { value: "3×", label: "team scale" },
      { value: "3", label: "channels unified" },
    ],
  },
];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="cases" className="relative py-24 sm:py-32 border-t border-border bg-mist/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.24em] text-brand font-bold">
              Projects
            </p>
            <h2 className="mt-5 font-display font-semibold text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] tracking-[-0.02em] text-ink">
              Real automations,
              <span className="text-brand"> in production.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed font-medium">
              A sample of the workflows we've shipped for clients. Tap any project
              to see the full case study — problem, solution, stack, and outcomes.
            </p>
          </Reveal>
        </div>

        {/* Project cards — minimal, click to expand */}
        <Stagger className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4" stagger={0.06}>
          {projects.map((p) => (
            <StaggerItem key={p.id}>
              <button
                onClick={() => setSelected(p)}
                className="group w-full text-left rounded-2xl border border-border bg-white p-6 hover:border-brand/30 hover:shadow-luxe transition-all duration-500 cursor-pointer h-full flex flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft border border-brand/20 text-brand group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink tracking-tight leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed font-medium flex-1">
                  {p.tagline}
                </p>
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft border border-brand/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-brand">
                    {p.category}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-medium tabular-nums">
                    {p.metrics[0].value} {p.metrics[0].label}
                  </span>
                </div>
              </button>
            </StaggerItem>
          ))}
        </Stagger>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-12 text-center">
            <p className="text-base text-muted-foreground mb-5 font-medium">
              Have a workflow in mind that's not listed here?
            </p>
            <button
              data-book-demo
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark hover:shadow-brand transition-all cursor-pointer"
            >
              Tell us about it
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </Reveal>
      </div>

      {/* Detail modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 12 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto scroll-luxe bg-white rounded-3xl shadow-luxe border border-border"
            >
              {/* Close */}
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white border border-border text-muted-foreground hover:text-ink hover:border-brand/40 transition-colors shadow-soft"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Image */}
              <div className="relative aspect-[16/9] bg-mist overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-[10px] font-bold uppercase tracking-wide text-brand shadow-soft">
                  <selected.icon className="h-3 w-3" />
                  {selected.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-7 sm:p-9">
                {/* Title + meta */}
                <h3 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight leading-tight">
                  {selected.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-brand uppercase tracking-[0.14em]">
                  {selected.tagline}
                </p>

                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground font-medium">
                    <Clock className="h-3.5 w-3.5 text-brand" />
                    {selected.duration}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground font-medium">
                    <Layers className="h-3.5 w-3.5 text-brand" />
                    {selected.industry}
                  </span>
                </div>

                {/* Problem */}
                <div className="mt-7">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground font-bold mb-2">
                    The problem
                  </p>
                  <p className="text-base text-ink leading-relaxed font-medium">
                    {selected.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground font-bold mb-2">
                    What we built
                  </p>
                  <p className="text-base text-ink leading-relaxed font-medium">
                    {selected.solution}
                  </p>
                </div>

                {/* Stack */}
                <div className="mt-6">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground font-bold mb-3">
                    Tech stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.stack.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft border border-brand/15 px-3 py-1 text-xs font-semibold text-brand"
                      >
                        <span className="h-1 w-1 rounded-full bg-brand" />
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-7 grid grid-cols-3 gap-3">
                  {selected.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-2xl bg-brand-soft border border-brand/15 p-4 text-center"
                    >
                      <p className="font-display text-2xl sm:text-3xl font-semibold text-brand tabular-nums">
                        {m.value}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground font-semibold mt-1 leading-tight">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Outcomes */}
                <div className="mt-7">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground font-bold mb-3">
                    Outcomes
                  </p>
                  <ul className="space-y-2.5">
                    {selected.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-3 text-sm text-ink font-medium"
                      >
                        <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-brand" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
                  <p className="text-sm text-muted-foreground font-medium">
                    Want a similar automation for your business?
                  </p>
                  <button
                    data-book-demo
                    onClick={() => setSelected(null)}
                    className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark hover:shadow-brand transition-all whitespace-nowrap cursor-pointer"
                  >
                    Book a demo
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
