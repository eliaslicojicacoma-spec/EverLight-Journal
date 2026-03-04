import { slugify } from "@/utils/slug";

export type BlogArticle = {
  slug: string;

  title: {
    pt: string;
    en: string;
  };

  excerpt: {
    pt: string;
    en: string;
  };

  content: {
    pt: string; // por agora string simples (mais tarde podemos suportar MDX/Markdown real)
    en: string;
  };

  category: string; // exemplo: "project", "faith", "society"
  tags: string[]; // exemplo: ["PT/EN", "Projeto", "SEO"]

  publishedAt: string; // ISO: "2026-03-02"
  updatedAt?: string; // ISO opcional
  readingTime?: string; // opcional
};

const articles: BlogArticle[] = [
  {
    slug: "bem-vindo-ao-everlight",
    title: { pt: "Bem-vindo ao EverLight Journal", en: "Bem-vindo ao EverLight Journal" },
    excerpt: { pt: "O que é o EverLight, por que existe, e como vais usá-lo no dia a dia.", en: "O que é o EverLight, por que existe, e como vais usá-lo no dia a dia." },
    content: { pt: "Este é o teu primeiro artigo. Em seguida vamos ligar isto a páginas de artigo, categoria e SEO.", en: "Este é o teu primeiro artigo. Em seguida vamos ligar isto a páginas de artigo, categoria e SEO." },
    category: "Sociedade e Fé",
    tags: ["everlight", "introdução"],
    publishedAt: "2026-03-03",
    updatedAt: "2026-03-03",
    readingTime: "3",
  },
  {
    slug: "welcome-to-everlight",
    title: { pt: "Welcome to EverLight Journal", en: "Welcome to EverLight Journal" },
    excerpt: { pt: "What EverLight is, why it exists, and how you’ll use it daily.", en: "What EverLight is, why it exists, and how you’ll use it daily." },
    content: { pt: "This is your first EN article. Next we’ll wire this to post pages, category pages, and SEO.", en: "This is your first EN article. Next we’ll wire this to post pages, category pages, and SEO." },
    category: "Society & Faith",
    tags: ["everlight", "intro"],
    publishedAt: "2026-03-03",
    updatedAt: "2026-03-03",
    readingTime: "3",
  },
];

export function getBlogArticles(): BlogArticle[] {
  return [...articles].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getBlogSlugs(): string[] {
  return articles.map((a) => a.slug);
}

export function getBlogCategories(): string[] {
  const set = new Set(articles.map((a) => a.category).filter(Boolean));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function getBlogTags(): string[] {
  const set = new Set<string>();
  for (const a of articles) {
    for (const t of a.tags || []) set.add(t);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function getBlogArticlesByCategory(category: string): BlogArticle[] {
  const c = category.toLowerCase().trim();
  return getBlogArticles().filter((a) => a.category.toLowerCase() === c);
}

export function getBlogArticlesByTag(tagOrSlug: string): BlogArticle[] {
  // Aceita "SEO" ou "seo" ou "pt-en" (slug). Vamos comparar por slugify
  const target = slugify(tagOrSlug);

  return getBlogArticles().filter((a) => {
    const tags = a.tags || [];
    return tags.some((t) => slugify(t) === target);
  });
  }
