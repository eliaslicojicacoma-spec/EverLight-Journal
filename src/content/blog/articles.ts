export type BlogArticle = {
  locale: "pt" | "en";
  slug: string;
  category: string;
  title: string;
  summary: string;
  date: string;
  readTime: string;
  image?: string;
  tags?: string[];
  content: string;
};

const ARTICLES: BlogArticle[] = [
  {
    locale: "pt",
    slug: "familia-fe-e-habitos-simples-que-protegem-o-lar",
    category: "Adventist",
    title: "Família, Fé e Hábitos Simples que Protegem o Lar",
    summary:
      "Pequenas rotinas espirituais criam uma casa mais segura emocionalmente e mais forte em Deus.",
    date: "2026-02-28",
    readTime: "1 min",
    image: "/images/blog/default.jpg",
    tags: ["familia", "habitos", "vida-espiritual"],
    content:
      "<p>Conteúdo do artigo aqui. Substitui por teu texto completo.</p>",
  },
  {
    locale: "en",
    slug: "family-faith-and-simple-habits-that-protect-the-home",
    category: "Adventist",
    title: "Family, Faith and Simple Habits that Protect the Home",
    summary:
      "Small spiritual routines build a safer home emotionally and stronger in God.",
    date: "2026-02-28",
    readTime: "1 min",
    image: "/images/blog/default.jpg",
    tags: ["family", "habits", "spiritual-life"],
    content: "<p>English article content here.</p>",
  },
];

export function getBlogArticles(locale: string) {
  return ARTICLES.filter((a) => a.locale === (locale === "en" ? "en" : "pt")).sort(
    (a, b) => (a.date < b.date ? 1 : -1)
  );
}

export function getBlogArticle(locale: string, slug: string) {
  const loc = locale === "en" ? "en" : "pt";
  return ARTICLES.find((a) => a.locale === loc && a.slug === slug) ?? null;
}

export function getBlogSlugs(locale: string) {
  return getBlogArticles(locale).map((a) => a.slug);
}

export function getBlogCategories(locale: string) {
  const items = getBlogArticles(locale).map((a) => a.category.trim());
  return Array.from(new Set(items)).sort((a, b) => a.localeCompare(b));
}
