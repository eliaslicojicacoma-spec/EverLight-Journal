// src/lib/blog.ts
import postsRaw from "@/content/blogPosts.json";

export type BlogPost = {
  id: string;
  locale: "pt" | "en" | string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags?: string[];
  coverImage: string;
  ogImage?: string;
  publishedAt: string; // YYYY-MM-DD
  updatedAt?: string;
  author?: { name: string; image?: string };
  content: string[];
};

function normalizeCategory(category: string) {
  return (category || "").trim().toLowerCase();
}

function normalizeLocale(locale: string) {
  return (locale || "pt").trim().toLowerCase();
}

export function getAllPosts(locale?: string): BlogPost[] {
  const loc = normalizeLocale(locale ?? "pt");
  const posts = (postsRaw as BlogPost[])
    .filter((p) => normalizeLocale(p.locale) === loc)
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
  return posts;
}

export function getPostBySlug(locale: string, slug: string): BlogPost | undefined {
  const loc = normalizeLocale(locale);
  return (postsRaw as BlogPost[]).find(
    (p) => normalizeLocale(p.locale) === loc && p.slug === slug
  );
}

export function getPostsByCategory(locale: string, category: string): BlogPost[] {
  const loc = normalizeLocale(locale);
  const cat = normalizeCategory(category);
  return (postsRaw as BlogPost[])
    .filter(
      (p) => normalizeLocale(p.locale) === loc && normalizeCategory(p.category) === cat
    )
    .sort((a, b) => (b.publishedAt || "").localeCompare(a.publishedAt || ""));
}

export function getLatestPosts(locale: string, limit = 4): BlogPost[] {
  return getAllPosts(locale).slice(0, limit);
}
