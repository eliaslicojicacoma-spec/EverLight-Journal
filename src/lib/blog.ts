// src/lib/blog.ts
import postsRaw from "@/content/blogPosts.json";

export type BlogPost = {
  id: string;
  locale: "pt" | "en";
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  coverImage: string;
  ogImage?: string;
  publishedAt: string;
  updatedAt?: string;
  author?: { name: string; image?: string };
  content: string[];
};

const posts = postsRaw as BlogPost[];

export function getAllPosts(locale?: string) {
  const list = locale ? posts.filter((p) => p.locale === locale) : posts;
  return list.slice().sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(locale: string, slug: string) {
  return posts.find((p) => p.locale === locale && p.slug === slug) ?? null;
}
