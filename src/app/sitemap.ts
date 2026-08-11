import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { properties } from "@/lib/properties";
import { insights } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/buy",
    "/sell",
    "/rent",
    "/joint-ventures",
    "/properties",
    "/services",
    "/about",
    "/locations",
    "/insights",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const propertyRoutes = properties.map((p) => ({
    url: `${base}/properties/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const insightRoutes = insights.map((p) => ({
    url: `${base}/insights/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...propertyRoutes, ...insightRoutes];
}
