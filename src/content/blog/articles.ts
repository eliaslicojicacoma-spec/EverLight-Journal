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
    slug: "welcome-to-everlight-journal",
    title: {
      pt: "Bem-vindo ao EverLight Journal",
      en: "Welcome to EverLight Journal",
    },
    excerpt: {
      pt: "A base do projeto está pronta: PT/EN, blog por ficheiro, SEO e estrutura escalável.",
      en: "The foundation is ready: PT/EN, file-based blog source, SEO and scalable structure.",
    },
    content: {
      pt: `## Olá!

Este é o primeiro artigo do EverLight Journal.

- PT/EN
- Blog por \`articles.ts\`
- Estrutura profissional
`,
      en: `## Hello!

This is the first article of EverLight Journal.

- PT/EN
- Blog via \`articles.ts\`
- Professional structure
`,
    },
    category: "project",
    tags: ["PT/EN", "Projeto", "SEO"],
    publishedAt: "2026-03-02",
  },
];

// -----------------------------
// Getters (fonte oficial do blog)
// -----------------------------

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
