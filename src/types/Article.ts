import type { Locale } from "@/config/siteConfig";

export type Article = {
  slug: string;
  locale: Locale;
  title: string;
  excerpt: string;
  content: string; // markdown/plain
  date: string; // ISO
  categories: string[];
  cover?: string;
  author?: string;
};
