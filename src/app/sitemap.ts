import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://voxa.aguss.co";
  const lastModified = new Date();

  const sections = [
    { path: "/", anchor: "", priority: 1.0, changeFreq: "weekly" as const },
    {
      path: "/#voice-agents",
      anchor: "#voice-agents",
      priority: 0.9,
      changeFreq: "monthly" as const,
    },
    {
      path: "/#automation-bots",
      anchor: "#automation-bots",
      priority: 0.9,
      changeFreq: "monthly" as const,
    },
    {
      path: "/#cases",
      anchor: "#cases",
      priority: 0.8,
      changeFreq: "weekly" as const,
    },
    {
      path: "/#how",
      anchor: "#how",
      priority: 0.7,
      changeFreq: "monthly" as const,
    },
    {
      path: "/#features",
      anchor: "#features",
      priority: 0.7,
      changeFreq: "monthly" as const,
    },
    {
      path: "/#integrations",
      anchor: "#integrations",
      priority: 0.7,
      changeFreq: "monthly" as const,
    },
    {
      path: "/#pricing",
      anchor: "#pricing",
      priority: 0.9,
      changeFreq: "monthly" as const,
    },
    {
      path: "/#faq",
      anchor: "#faq",
      priority: 0.6,
      changeFreq: "monthly" as const,
    },
    {
      path: "/#cta",
      anchor: "#cta",
      priority: 0.8,
      changeFreq: "monthly" as const,
    },
  ];

  return sections.map((s) => ({
    url: `${base}/${s.anchor}`,
    lastModified,
    changeFrequency: s.changeFreq,
    priority: s.priority,
  }));
}
