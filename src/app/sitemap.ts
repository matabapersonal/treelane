import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${site.domain}`;

  return [
    "",
    "/about",
    "/gallery",
    "/admissions",
    "/resources",
    "/contact",
    "/privacy",
    "/accessibility",
    "/nondiscrimination",
  ].map((path) => ({
    url: `${base}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
