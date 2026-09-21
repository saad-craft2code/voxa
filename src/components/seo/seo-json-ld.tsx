/**
 * JSON-LD structured data for SEO
 * - Organization (Agus Systems)
 * - Service: AI Voice Agents
 * - Service: Automation Bots
 * - LocalBusiness: Islamabad office
 * - LocalBusiness: Chicago office
 * - WebSite with SearchAction
 * - FAQPage (matches the FAQ section on the site)
 */
export function SeoJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://voxa.aguss.co/#organization",
    name: "Agus Systems",
    alternateName: "Voxa",
    url: "https://voxa.aguss.co",
    logo: "https://voxa.aguss.co/logo.svg",
    description:
      "AI automation agency building AI voice agents for call centers and marketing, plus custom automation bots for content, hotel operations, and email follow-ups.",
    foundingDate: "2024",
    email: "info@aguss.co",
    telephone: "+923426660462",
    sameAs: [
      "https://www.linkedin.com/company/agus-systems",
      "https://twitter.com/agussystems",
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "Islamabad",
        addressLocality: "Islamabad",
        addressRegion: "Islamabad Capital Territory",
        addressCountry: "PK",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Chicago",
        addressLocality: "Chicago",
        addressRegion: "IL",
        addressCountry: "US",
      },
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://voxa.aguss.co/#website",
    url: "https://voxa.aguss.co",
    name: "Voxa — AI Voice Agents & Automation Bots",
    description:
      "AI voice agents for call centers, marketing, and appointments. Plus custom automation bots that run your back office. Built by Agus Systems.",
    publisher: { "@id": "https://voxa.aguss.co/#organization" },
    inLanguage: "en",
  };

  const serviceVoice = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://voxa.aguss.co/#voice-agents-service",
    name: "AI Voice Agents",
    serviceType: "AI Voice Agent Platform",
    provider: { "@id": "https://voxa.aguss.co/#organization" },
    areaServed: "Worldwide",
    description:
      "AI voice agents that handle call center inbound support, marketing outbound calls, and appointment booking. Sub-500ms latency, 32 languages, TCPA/HIPAA/GDPR compliant, with custom branching scripts per campaign.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "0.18",
      highPrice: "499",
      offerCount: "3",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Voice Agents Pricing Plans",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Monthly Plan",
          price: "499",
          priceCurrency: "USD",
          description:
            "Flat monthly fee for call centers. Up to 10,000 minutes included.",
        },
        {
          "@type": "Offer",
          name: "Call-based Plan",
          price: "0.18",
          priceCurrency: "USD",
          description: "Pay per connected call. No monthly minimum.",
        },
        {
          "@type": "Offer",
          name: "Custom Plan",
          description:
            "Enterprise-grade with dedicated infrastructure, voice cloning, and on-prem deployment.",
        },
      ],
    },
  };

  const serviceBots = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://voxa.aguss.co/#automation-bots-service",
    name: "Custom Automation Bots",
    serviceType: "AI Workflow Automation",
    provider: { "@id": "https://voxa.aguss.co/#organization" },
    areaServed: "Worldwide",
    description:
      "Custom-built automation bots for content generation, hotel operations, email follow-ups, video pipelines, marketing agents, and back-office workflows. Powered by multi-agent AI orchestration with integrations to HubSpot, Salesforce, Twilio, Stripe, Google Workspace, and custom webhooks.",
  };

  const islamabad = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://voxa.aguss.co/#islamabad-office",
    name: "Agus Systems — Islamabad HQ",
    parentOrganization: { "@id": "https://voxa.aguss.co/#organization" },
    image: "https://voxa.aguss.co/logo.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      postalCode: "44000",
      addressRegion: "Islamabad Capital Territory",
      addressCountry: "PK",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.6844,
      longitude: 73.0479,
    },
    telephone: "+923426660462",
    email: "info@aguss.co",
    url: "https://voxa.aguss.co",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  const chicago = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://voxa.aguss.co/#chicago-office",
    name: "Agus Systems — Chicago Branch",
    parentOrganization: { "@id": "https://voxa.aguss.co/#organization" },
    image: "https://voxa.aguss.co/logo.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chicago",
      postalCode: "60601",
      addressRegion: "IL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.8781,
      longitude: -87.6298,
    },
    telephone: "+923426660462",
    email: "info@aguss.co",
    url: "https://voxa.aguss.co",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does it take to launch my first AI voice agent campaign?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most customers are live within 24 to 48 hours. After signup, you connect a phone number, draft your first campaign script in the visual builder, pick your audience, and click launch. Our team helps with the first campaign at no extra cost.",
        },
      },
      {
        "@type": "Question",
        name: "Do callers know they're talking to an AI voice agent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voxa discloses the AI nature where required by local regulations (TCPA in the US, GDPR in the EU). For inbound customer-service calls, callers can usually tell there's something unusual — but most don't mind, because the call gets resolved faster than with a human queue.",
        },
      },
      {
        "@type": "Question",
        name: "Can Voxa integrate with our existing CRM and telephony?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We have native integrations with HubSpot, Salesforce, Zoho, Zendesk, Calendly, Google Calendar, Twilio, Vonage, and more. For anything else, we expose webhooks and a REST API. Enterprise plans include custom integration work.",
        },
      },
      {
        "@type": "Question",
        name: "Is the call data secure and compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All calls are encrypted in transit and at rest. We support HIPAA BAA, SOC 2 Type II, GDPR, and PCI-aware call flows. Enterprise customers can choose data residency (US, EU, or APAC) and request on-prem / VPC deployment.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize the AI voice and personality?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Voxa ships with 40+ stock voices across 32 languages and 60+ accents. Enterprise plans include custom voice cloning — we train a voice on as little as 30 minutes of sample audio to match your brand persona.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between the Monthly, Call-based, and Custom plans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Monthly is a flat fee for predictable call centers — best when you know your volume. Call-based charges you only for connected calls — best for marketing campaigns with variable volume. Custom is for enterprises with dedicated infrastructure, compliance, or voice-cloning needs.",
        },
      },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://voxa.aguss.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Voice Agents",
        item: "https://voxa.aguss.co/#voice-agents",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Automation Bots",
        item: "https://voxa.aguss.co/#automation-bots",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: "https://voxa.aguss.co/#cases",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Pricing",
        item: "https://voxa.aguss.co/#pricing",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceVoice) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceBots) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(islamabad) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chicago) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
