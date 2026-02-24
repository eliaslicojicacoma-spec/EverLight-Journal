import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";
import { getAllPosts, getAllCategories } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${siteConfig.domain}`;
  const locales: ("pt" | "en")[] = ["pt", "en"];

  const staticPaths = [
    "",
    "/society",
    "/adventist",
    "/library",
    "/blog",
    "/donate",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/editorial-policy",
    "/transparency",
    "/share",
    "/verse-of-day",
    "/team"
  ];

  const now = new Date();

  const out: MetadataRoute.Sitemap = [];

  for (const loc of locales) {
    // estáticas
    for (const p of staticPaths) {
      out.push({
        url: `${base}/${loc}${p}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: p === "" ? 1 : 0.7
      });
    }

    // posts
    const posts = getAllPosts(loc);
    for (const post of posts) {
      out.push({
        url: `${base}/${loc}/blog/${post.slug}`,
        lastModified: new Date((post.updatedAt || post.publishedAt) + "T00:00:00"),
        changeFrequency: "monthly",
        priority: 0.8
      });
    }

    // categorias
    const cats = getAllCategories(loc);
    for (const c of cats) {
      out.push({
        url: `${base}/${loc}/blog/category/${c.slug}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6
      });
    }
  }

  return out;
}
