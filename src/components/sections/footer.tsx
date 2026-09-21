"use client";

import { Phone, Mail, MapPin, ArrowUpRight, Building2 } from "lucide-react";

const footerNav = [
  {
    title: "Products",
    links: [
      { label: "Voice Agents", href: "#voice-agents" },
      { label: "Automation Bots", href: "#automation-bots" },
      { label: "Projects", href: "#cases" },
      { label: "Pricing", href: "#pricing" },
      { label: "Features", href: "#features" },
    ],
  },
  {
    title: "Campaigns",
    links: [
      { label: "Call center", href: "#campaigns" },
      { label: "Marketing outreach", href: "#campaigns" },
      { label: "Appointment booking", href: "#campaigns" },
      { label: "Customer support", href: "#campaigns" },
      { label: "No-show recovery", href: "#campaigns" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API reference", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Compliance", href: "#faq" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Agus Systems", href: "#" },
      { label: "Contact", href: "#cta" },
      { label: "Careers", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-white mt-auto">
      {/* Top */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5">
              <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand text-white shadow-brand">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h2l2-6 3 12 3-9 3 6 1-3h4" />
                </svg>
              </span>
              <span className="font-display text-2xl font-extrabold tracking-tight text-ink">
                Voxa
              </span>
            </a>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-sm font-medium">
              AI voice agents and custom automation bots — built and operated by Agus Systems.
            </p>

            {/* Powered by badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-soft border border-brand/20 px-3 py-1.5 text-xs font-semibold text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand pulse-ring" />
              Powered by Agus Systems
            </div>

            <div className="mt-7 space-y-2.5 text-sm">
              <a
                href="tel:+923426660462"
                className="flex items-center gap-3 text-ink hover:text-brand transition-colors font-medium"
              >
                <Phone className="h-4 w-4 text-brand" />
                <span className="tabular-nums font-bold">+92 342 6660462</span>
              </a>
              <a
                href="mailto:info@aguss.co"
                className="flex items-center gap-3 text-ink hover:text-brand transition-colors font-medium"
              >
                <Mail className="h-4 w-4 text-brand" />
                info@aguss.co
              </a>
            </div>

            {/* Offices */}
            <div className="mt-6 space-y-3">
              <OfficeRow
                icon={Building2}
                label="Head Office"
                city="Islamabad 44000"
                country="Pakistan"
                primary
              />
              <OfficeRow
                icon={MapPin}
                label="Branch Office"
                city="Chicago 60601"
                country="Illinois, USA"
              />
            </div>
          </div>

          {/* Nav */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs uppercase tracking-[0.18em] text-brand font-bold">
                  {col.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-ink transition-colors font-medium"
                      >
                        {l.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Big wordmark */}
        <div className="mt-16 pt-10 border-t border-border overflow-hidden">
          <p className="font-display font-extrabold text-[clamp(4rem,16vw,16rem)] leading-none text-center text-brand/[0.06] tracking-tighter select-none">
            VOXA
          </p>
        </div>

        {/* Bottom row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p className="font-medium">
            © {new Date().getFullYear()} <span className="text-ink font-bold">Agus Systems</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-ink transition-colors font-medium">
              Privacy
            </a>
            <a href="#" className="hover:text-ink transition-colors font-medium">
              Terms
            </a>
            <a href="#" className="hover:text-ink transition-colors font-medium">
              Security
            </a>
            <span className="flex items-center gap-1.5 font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function OfficeRow({
  icon: Icon,
  label,
  city,
  country,
  primary,
}: {
  icon: typeof Building2;
  label: string;
  city: string;
  country: string;
  primary?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border ${
          primary
            ? "bg-brand-soft border-brand/20 text-brand"
            : "bg-mist border-border text-muted-foreground"
        }`}
      >
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-bold">
          {label}
        </p>
        <p className="text-sm text-ink font-semibold">
          {city}{`, `}{country}
        </p>
      </div>
    </div>
  );
}
