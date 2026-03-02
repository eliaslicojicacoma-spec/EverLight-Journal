export type BlogLocale = "pt" | "en";

export type BlogArticle = {
  locale: BlogLocale;
  slug: string;
  category: string;
  title: string;
  summary: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  coverImage: string;
  content: string;
};

const ARTICLES: BlogArticle[] = [
  {
    locale: "pt",
    slug: "familia-fe-e-habitos-simples-que-protegem-o-lar",
    category: "Adventista",
    title: "Família, Fé e Hábitos Simples que Protegem o Lar",
    summary:
      "Pequenas rotinas espirituais criam uma casa mais segura emocionalmente.",
    excerpt:
      "Quando a fé vira rotina saudável, o lar ganha estabilidade e direção.",
    date: "2026-02-28",
    readTime: "4 min",
    tags: ["familia", "habitos"],
    coverImage: "/images/blog/default.jpg",
    content: `
## Introdução
A fé prática fortalece o lar.

## Ação
- Culto familiar
- Planeamento do sábado
`,
  },
];

export function getBlogArticles(locale: BlogLocale): BlogArticle[] {
  return ARTICLES.filter((a) => a.locale === locale);
}

export function getBlogArticle(
  locale: BlogLocale,
  slug: string
): BlogArticle | null {
  return (
    ARTICLES.find((a) => a.locale === locale && a.slug === slug) ?? null
  );
}

export function getBlogSlugs(locale: BlogLocale): string[] {
  return getBlogArticles(locale).map((a) => a.slug);
}

export function getBlogCategories(locale: BlogLocale): string[] {
  const set = new Set(getBlogArticles(locale).map((a) => a.category));
  return Array.from(set);
}
