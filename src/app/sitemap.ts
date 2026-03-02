import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const paths = [
    "",
    "/society",
    "/adventist",
    "/library",
    "/blog",
    "/donate",
    "/contact",
    "/subscribe",
    "/verse-of-day",
    "/about",
    "/privacy",
    "/terms",
  ];

  const urls: MetadataRoute.Sitemap = [];

  for (const locale of siteConfig.locales) {
    for (const p of paths) {
      urls.push({
        url: `${base}/${locale}${p}`,
        lastModified: now,
      });
    }
  }

  return urls;
}
