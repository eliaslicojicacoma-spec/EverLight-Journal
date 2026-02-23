import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com"; // troca quando tiver domínio
  const locales = ["pt", "en"];
  const paths = ["", "/society", "/adventist", "/library", "/donate", "/about", "/contact", "/privacy", "/terms", "/editorial-policy"];
  const now = new Date();

  return locales.flatMap((loc) =>
    paths.map((p) => ({
      url: `${base}/${loc}${p}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: p === "" ? 1 : 0.7
    }))
  );
}
