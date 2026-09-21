import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { SeoJsonLd } from "@/components/seo/seo-json-ld";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL = "https://voxa.aguss.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Voxa — AI Voice Agents & Automation Bots for Call Centers | Agus Systems",
    template: "%s | Voxa by Agus Systems",
  },
  description:
    "Voxa builds AI voice agents for call centers, marketing campaigns & appointment booking — plus custom automation bots for content, hotel operations, and email follow-ups. Trusted AI automation agency. Book a demo.",
  keywords: [
    // Primary niche
    "AI voice agents",
    "AI calling system",
    "call center automation",
    "automation bots",
    "voice AI for business",
    "AI call center software",
    // Voice use cases
    "AI appointment scheduling",
    "outbound calling AI",
    "AI marketing calls",
    "automated voice campaigns",
    "AI receptionist",
    "voice AI for call centers",
    "AI voice bot",
    "AI telemarketing",
    // Automation bots
    "workflow automation",
    "custom automation bots",
    "AI agent orchestration",
    "n8n automation",
    "AI back office automation",
    "content automation",
    "email follow-up automation",
    // Industry-specific
    "AI for hotels",
    "hotel booking automation",
    "lead qualification AI",
    "AI sales agent",
    "AI customer support",
    "automated booking system",
    // Local & brand
    "Agus Systems",
    "Voxa",
    "AI automation agency Islamabad",
    "AI automation Chicago",
    "voice AI Pakistan",
    "AI automation company",
    // Long-tail
    "how to automate call center",
    "AI voice agents for small business",
    "automate appointment booking with AI",
    "custom AI bot development",
    "enterprise voice AI solutions",
  ],
  authors: [{ name: "Agus Systems", url: SITE_URL }],
  creator: "Agus Systems",
  publisher: "Agus Systems",
  applicationName: "Voxa",
  category: "Technology",
  classification: "AI Voice & Automation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/favicon.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Voxa by Agus Systems",
    title:
      "Voxa — AI Voice Agents & Automation Bots for Call Centers and Marketing",
    description:
      "AI voice agents that handle call center, marketing, and appointments — plus custom automation bots for content, ops, and back-office. Built by Agus Systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voxa — AI Voice Agents & Automation Bots by Agus Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@agussystems",
    creator: "@agussystems",
    title: "Voxa — AI Voice Agents & Automation Bots",
    description:
      "AI voice agents for call centers, marketing & appointments. Plus custom automation bots. Built by Agus Systems.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-token-here",
  },
  other: {
    // Local SEO for both offices
    "geo.region": "PK-IS, US-IL",
    "geo.placename": "Islamabad, Pakistan · Chicago, Illinois",
    "geo.position": "33.6844;73.0479;41.8781;-87.6298",
    "ICBM": "33.6844, 73.0479",
    "theme-color": "#3D4FCC",
    "color-scheme": "light",
    "msapplication-TileColor": "#3D4FCC",
    // AI search / LLM optimization
    "ai-context":
      "Voxa is an AI automation agency offering AI voice agents and custom automation bots. Built by Agus Systems. Offices in Islamabad, Pakistan and Chicago, Illinois. Contact: info@aguss.co, +92 342 6660462.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <SeoJsonLd />
      </head>
      <body
        className={`${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
