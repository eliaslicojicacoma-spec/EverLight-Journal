import postsRaw from "@/data/blogPosts.json";

export type PostAuthor = {
  name: string;
  image?: string;
};

export type BlogPost = {
  id: string;
  locale: "pt" | "en";
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  coverImage?: string;
  ogImage?: string;
  publishedAt: string; // YYYY-MM-DD
  updatedAt?: string;
  author: PostAuthor;
  content: string[]; // markdown-lite
};

const posts = postsRaw as BlogPost[];

export function getAllPosts(locale: "pt" | "en"): BlogPost[] {
  return posts
    .filter((p) => p.locale === locale)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(locale: "pt" | "en", slug: string): BlogPost | null {
  return posts.find((p) => p.locale === locale && p.slug === slug) ?? null;
}

export function getAllCategories(locale: "pt" | "en"): { slug: string; count: number }[] {
  const map = new Map<string, number>();
  for (const p of getAllPosts(locale)) {
    map.set(p.category, (map.get(p.category) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .map(([slug, count]) => ({ slug, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByCategory(locale: "pt" | "en", categorySlug: string): BlogPost[] {
  return getAllPosts(locale).filter((p) => p.category === categorySlug);
}

export function formatDate(iso: string, locale: "pt" | "en") {
  const [y, m, d] = iso.split("-").map((x) => Number(x));
  const dt = new Date(y, (m ?? 1) - 1, d ?? 1);
  return dt.toLocaleDateString(locale === "pt" ? "pt-PT" : "en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
}

/**
 * Markdown-lite renderer:
 * - "## " headings
 * - "- " lists
 * - bold with ** **
 * - line breaks preserved
 */
export function renderMarkdownLite(lines: string[]) {
  const blocks: { type: "h2" | "p" | "li"; text: string }[] = [];

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;

    if (line.startsWith("## ")) {
      blocks.push({ type: "h2", text: line.replace(/^##\s+/, "") });
      continue;
    }
    if (line.startsWith("- ")) {
      blocks.push({ type: "li", text: line.replace(/^-+\s+/, "") });
      continue;
    }
    blocks.push({ type: "p", text: raw });
  }

  return blocks;
}

export function stripMarkdown(text: string) {
  return text
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/#+\s/g, "")
    .replace(/-\s/g, "")
    .replace(/\s+/g, " ")
    .trim();
    }
