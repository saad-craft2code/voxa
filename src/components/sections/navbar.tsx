"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Phone,
  X,
  ChevronDown,
  Headset,
  Bot,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollProgress } from "@/components/shared/scroll-progress";

const productLinks = [
  {
    label: "Voice Agents",
    href: "#voice-agents",
    icon: Headset,
    desc: "AI calls for call centers, marketing & appointments",
  },
  {
    label: "Automation Bots",
    href: "#automation-bots",
    icon: Bot,
    desc: "Custom bots for content, ops & back-office",
  },
];

const resourceLinks = [
  { href: "#how", label: "How it works" },
  { href: "#cases", label: "Projects" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = [
      ...productLinks.map((p) => p.href.replace("#", "")),
      ...resourceLinks.map((l) => l.href.replace("#", "")),
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "py-2.5 bg-background/85 backdrop-blur-xl border-b border-border shadow-soft"
            : "py-4 bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Logo + powered-by badge */}
            <div className="flex items-center gap-3">
              <a href="#top" className="flex items-center gap-2.5 group">
                <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white shadow-brand group-hover:scale-105 transition-transform duration-300">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 12h2l2-6 3 12 3-9 3 6 1-3h4" />
                  </svg>
                </span>
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">
                  Voxa
                </span>
              </a>
              {/* Powered by Agus Systems badge - desktop */}
              <span className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-mist border border-border px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-brand" />
                Powered by
                <span className="text-ink">Agus Systems</span>
              </span>
            </div>

            {/* Desktop nav - centered */}
            <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {/* Products dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductOpen(true)}
                onMouseLeave={() => setProductOpen(false)}
              >
                <button
                  className={cn(
                    "relative px-3 py-2 text-sm font-semibold transition-colors duration-300 flex items-center gap-1 rounded-lg hover:bg-mist",
                    productLinks.some((p) => p.href === `#${activeSection}`)
                      ? "text-brand"
                      : "text-muted-foreground hover:text-ink"
                  )}
                >
                  Products
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform",
                      productOpen && "rotate-180"
                    )}
                  />
                  {productLinks.some((p) => p.href === `#${activeSection}`) && (
                    <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-brand rounded-full" />
                  )}
                </button>
                <AnimatePresence>
                  {productOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[24rem] bg-white rounded-2xl border border-border shadow-luxe p-2 z-50"
                    >
                      {productLinks.map((p) => {
                        const Icon = p.icon;
                        return (
                          <a
                            key={p.href}
                            href={p.href}
                            className="group flex items-start gap-3 rounded-xl p-3 hover:bg-brand-soft transition-colors"
                          >
                            <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-soft border border-brand/20 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                              <Icon className="h-4 w-4" />
                            </span>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold text-ink text-sm flex items-center gap-1">
                                {p.label}
                                <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand" />
                              </p>
                              <p className="text-xs text-muted-foreground font-medium mt-0.5 leading-snug">
                                {p.desc}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {resourceLinks.map((l) => {
                const isActive = activeSection === l.href.replace("#", "");
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-semibold transition-colors duration-300 rounded-lg hover:bg-mist",
                      isActive
                        ? "text-brand"
                        : "text-muted-foreground hover:text-ink"
                    )}
                  >
                    {l.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3 right-3 h-0.5 bg-brand rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right side - phone + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+923426660462"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-brand transition-colors"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-soft border border-brand/15">
                  <Phone className="h-3 w-3 text-brand" />
                </span>
                <span className="tabular-nums text-[13px]">+92 342 6660462</span>
              </a>
              <button
                data-book-demo
                className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark hover:shadow-brand transition-all cursor-pointer hover:-translate-y-0.5"
              >
                Book a demo
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-border bg-white shadow-soft text-ink"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-y-auto"
            >
              <div className="flex items-center justify-between px-5 py-5">
                <div className="flex items-center gap-2.5">
                  <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white shadow-brand">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12h2l2-6 3 12 3-9 3 6 1-3h4" />
                    </svg>
                  </span>
                  <span className="font-display text-2xl font-bold tracking-tight text-ink">
                    Voxa
                  </span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white shadow-soft text-ink"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Powered-by badge - mobile */}
              <div className="px-5 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-mist border border-border px-3 py-1.5 text-[11px] font-semibold text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-brand" />
                  Powered by <span className="text-ink">Agus Systems</span>
                </span>
              </div>

              <div className="px-5 pt-2">
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground font-bold mb-2 mt-4">
                  Products
                </p>
                {productLinks.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.a
                      key={p.href}
                      href={p.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i + 0.05 }}
                      className="flex items-center gap-3 py-3 border-b border-border"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft border border-brand/20 text-brand">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-display text-2xl font-bold text-ink leading-tight">
                          {p.label}
                        </p>
                        <p className="text-xs text-muted-foreground font-medium">
                          {p.desc}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
                <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground font-bold mb-2 mt-6">
                  More
                </p>
                {resourceLinks.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.15 }}
                    className="block font-display text-2xl font-bold py-3 text-ink border-b border-border"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </div>
              <div className="px-5 mt-8 pb-8 flex flex-col gap-3">
                <a
                  href="tel:+923426660462"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white py-3 text-sm font-semibold text-ink shadow-soft"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  +92 342 6660462
                </a>
                <button
                  data-book-demo
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-brand py-3 text-sm font-semibold text-white shadow-brand"
                >
                  Book a demo
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
