import blogPosts from "@/content/blogPosts.json";

export type BlogAuthor = {
  name: string;
  image?: string;
};

export type BlogPost = {
  id: string;
  locale: "pt" | "en" | string;
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
  ogImage?: string;
  publishedAt: string; // YYYY-MM-DD
  updatedAt?: string;  // YYYY-MM-DD
  author?: BlogAuthor;
  content: string[]; // linhas markdown-lite
};

function isBlogPost(x: any): x is BlogPost {
  return x && typeof x === "object" && typeof x.slug === "string" && Array.isArray(x.content);
}

export function getAllPosts(): BlogPost[] {
  const arr = Array.isArray(blogPosts) ? blogPosts : [];
  return arr.filter(isBlogPost);
}

export function getPostsByLocale(locale: string): BlogPost[] {
  return getAllPosts()
    .filter((p) => p.locale === locale)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(locale: string, slug: string): BlogPost | null {
  const post = getAllPosts().find((p) => p.locale === locale && p.slug === slug);
  return post ?? null;
}

export function estimateReadingTimeMinutes(text: string): number {
  // ~200 palavras/min (padrão editorial)
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return minutes;
}

export function getPostReadingTime(post: BlogPost): number {
  const raw = [post.title, post.excerpt, ...(post.content ?? [])].join(" ");
  return estimateReadingTimeMinutes(raw);
}

export function getRelatedPosts(locale: string, post: BlogPost, limit = 3): BlogPost[] {
  const tags = new Set((post.tags ?? []).map((t) => t.toLowerCase()));
  const category = (post.category ?? "").toLowerCase();

  const candidates = getPostsByLocale(locale).filter((p) => p.slug !== post.slug);

  const scored = candidates
    .map((p) => {
      const pTags = new Set((p.tags ?? []).map((t) => t.toLowerCase()));
      let score = 0;

      if (category && (p.category ?? "").toLowerCase() === category) score += 3;

      for (const t of tags) {
        if (pTags.has(t)) score += 1;
      }

      // Leve boost por recência
      score += p.publishedAt ? 0.2 : 0;

      return { p, score };
    })
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((x) => x.p);
}

export function formatDate(dateISO: string, locale: string): string {
  // Evita bugs de timezone: trata como data “pura”
  const [y, m, d] = dateISO.split("-").map(Number);
  const dt = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  return new Intl.DateTimeFormat(locale === "pt" ? "pt-PT" : "en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    timeZone: "UTC",
  }).format(dt);
    }
