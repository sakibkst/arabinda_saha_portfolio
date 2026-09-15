import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

const routes = [
  "",
  "/about",
  "/education",
  "/career",
  "/research",
  "/publications",
  "/books",
  "/supervision",
  "/supervision/mphil",
  "/supervision/phd",
  "/examinations",
  "/seminars",
  "/conferences",
  "/academic-service",
  "/archive",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
