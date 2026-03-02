export type BlogArticle = {
  slug: string;
  locale: "pt" | "en";
  title: string;
  excerpt: string;
  content: string; // (por agora, string simples; depois trocamos para MDX)
  category: string;
  tags?: string[];
  publishedAt: string; // ISO date
  updatedAt?: string;  // ISO date
  readingTime?: number;
  coverImage?: string;
};

const articles: BlogArticle[] = [
  {
    slug: "bem-vindo-ao-everlight",
    locale: "pt",
    title: "Bem-vindo ao EverLight Journal",
    excerpt: "O que é o EverLight, por que existe, e como vais usá-lo no dia a dia.",
    content:
      "Este é o teu primeiro artigo. Em seguida vamos ligar isto a páginas de artigo, categoria e SEO.",
    category: "Sociedade e Fé",
    tags: ["everlight", "introdução"],
    publishedAt: "2026-03-03",
    updatedAt: "2026-03-03",
    readingTime: 3,
  },
  {
    slug: "welcome-to-everlight",
    locale: "en",
    title: "Welcome to EverLight Journal",
    excerpt: "What EverLight is, why it exists, and how you’ll use it daily.",
    content:
      "This is your first EN article. Next we’ll wire this to post pages, category pages, and SEO.",
    category: "Society & Faith",
    tags: ["everlight", "intro"],
    publishedAt: "2026-03-03",
    updatedAt: "2026-03-03",
    readingTime: 3,
  },
];

export function getBlogArticles(locale?: "pt" | "en") {
  const list = locale ? articles.filter(a => a.locale === locale) : [...articles];
  return list.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getBlogSlugs(locale?: "pt" | "en") {
  return getBlogArticles(locale).map(a => a.slug);
}

export function getBlogArticle(slug: string, locale?: "pt" | "en") {
  const list = getBlogArticles(locale);
  return list.find(a => a.slug === slug) ?? null;
}

export function getBlogCategories(locale?: "pt" | "en") {
  const list = getBlogArticles(locale);
  const map = new Map<string, number>();
  for (const a of list) map.set(a.category, (map.get(a.category) ?? 0) + 1);
  return Array.from(map.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}
