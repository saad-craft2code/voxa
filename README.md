# Voxa — AI Voice Agents & Automation Bots

A complete portfolio website for an AI automation agency, built by **Agus Systems**. Features two product lines (Voice Agents + Automation Bots), a projects showcase with detail modals, a "Book a Demo" flow with WhatsApp/Email/Phone options, full SEO, and a refined light theme.

## 🛠 Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui (New York style)
- **Animations**: Framer Motion
- **Fonts**: Space Grotesk (loaded via `next/font/google`)
- **ORM**: Prisma (SQLite for local, compatible with Vercel Postgres)
- **Linting**: ESLint

## 📦 Local Development

```bash
# 1. Install dependencies
bun install

# 2. Set up environment
cp .env.example .env.local

# 3. (Optional) Initialize database
bun run db:push

# 4. Start dev server
bun run dev
```

Open http://localhost:3000

## 🚀 Deploy to Vercel

### Option A: One-Click via Vercel Dashboard

1. Push this code to a GitHub repository
2. Go to https://vercel.com/new
3. Import the repository
4. Vercel auto-detects Next.js — no config needed
5. Click "Deploy"

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy (preview)
vercel

# Deploy to production
vercel --prod
```

## 🔧 Environment Variables

Set these in the Vercel dashboard (Project Settings → Environment Variables):

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | Postgres connection string (Vercel Postgres recommended) |
| `NEXT_PUBLIC_SITE_URL` | Optional | Your production URL (for SEO + canonical) |
| `NEXT_PUBLIC_PHONE` | Optional | Phone number (defaults to +92 342 6660462) |
| `NEXT_PUBLIC_EMAIL` | Optional | Email (defaults to info@aguss.co) |
| `NEXT_PUBLIC_WHATSAPP` | Optional | WhatsApp number |

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, SEO metadata, JSON-LD)
│   ├── page.tsx            # Home page (assembles all sections)
│   ├── globals.css         # Theme tokens + animations
│   ├── sitemap.ts          # Auto-generated /sitemap.xml
│   ├── manifest.ts         # PWA manifest
│   └── api/route.ts        # API health check
├── components/
│   ├── seo/
│   │   └── seo-json-ld.tsx # All JSON-LD structured data
│   ├── sections/           # Page sections
│   │   ├── navbar.tsx
│   │   ├── hero.tsx
│   │   ├── trust-bar.tsx
│   │   ├── voice-agents.tsx
│   │   ├── automation-bots.tsx
│   │   ├── projects.tsx    # Clickable cards → detail modal
│   │   ├── how-it-works.tsx
│   │   ├── features.tsx
│   │   ├── metrics.tsx
│   │   ├── integrations.tsx
│   │   ├── pricing.tsx
│   │   ├── testimonials.tsx
│   │   ├── faq.tsx
│   │   ├── cta.tsx
│   │   └── footer.tsx
│   └── shared/
│       ├── motion.tsx          # Reveal/Stagger/Float
│       ├── count-up.tsx        # Animated number counters
│       ├── scroll-progress.tsx # Top progress bar
│       ├── magnetic.tsx        # Magnetic hover effect
│       ├── book-demo-modal.tsx # Modal: WhatsApp/Email/Phone
│       └── book-demo-wrapper.tsx
public/
├── og-image.png          # Social sharing image
├── robots.txt            # Search engine crawl rules
└── cases/                # Project screenshots
    ├── case-blog-automation.jpg
    ├── case-video-pipeline.jpg
    ├── case-marketing-agent.jpg
    ├── case-hotel-management.jpg
    ├── case-full-automation.jpg
    └── case-email-followup.jpg
vercel.json               # Vercel deployment config
.env.example              # Environment variable template
```

## ✨ Features

- **Two product categories**: AI Voice Agents (indigo) + Automation Bots (amber)
- **Project showcase**: 6 case studies with click-to-expand detail modals
- **Book a Demo modal**: WhatsApp + Email + Phone options
- **Full SEO**: 40+ keywords, JSON-LD structured data, sitemap, robots.txt, OG image
- **Local SEO**: Islamabad (HQ) + Chicago (Branch) office structured data
- **Animations**: Framer Motion scroll reveals, magnetic hover, count-up stats
- **Responsive**: Mobile-first, sticky footer, accessible
- **Light theme**: Off-white bg, indigo brand, amber accent, Space Grotesk font

## 📞 Contact

- **Phone**: +92 342 6660462
- **Email**: info@aguss.co
- **WhatsApp**: https://wa.me/923426660462
- **Head Office**: Islamabad 44000, Pakistan
- **Branch Office**: Chicago 60601, Illinois, USA

## 📄 License

© 2026 Agus Systems. All rights reserved.
