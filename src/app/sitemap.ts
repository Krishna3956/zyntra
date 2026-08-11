import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { insights } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes = [
    "",
    "/buy",
    "/sell",
    "/rent",
    "/joint-ventures",
    "/joint-ventures/revenue-share",
    "/joint-ventures/area-share",
    "/joint-ventures/process",
    "/joint-ventures/landowner-protection",
    "/joint-ventures/eligibility",
    "/joint-ventures/faq",
    "/services",
    "/services/advisory",
    "/services/legal-due-diligence",
    "/services/home-loans",
    "/services/property-management",
    "/services/valuation",
    "/services/nri",
    "/services/documentation",
    "/about",
    "/how-we-work",
    "/locations",
    "/locations/gurugram",
    "/locations/indore",
    "/insights",
    "/faq",
    "/careers",
    "/contact",
    "/sitemap",
    "/privacy",
    "/terms",
    "/cookie-policy",
    "/disclaimer",
    "/rera",
    "/refund-policy",
    "/grievance-redressal",
    "/aml-kyc",
    "/accessibility",
    "/code-of-conduct",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const insightRoutes = insights.map((p) => ({
    url: `${base}/insights/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...insightRoutes];
}
