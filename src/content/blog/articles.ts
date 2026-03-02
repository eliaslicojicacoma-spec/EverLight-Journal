export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
};

export const articles: BlogArticle[] = [
  {
    slug: "o-poder-da-fe",
    title: "O Poder da Fé na Sociedade Moderna",
    excerpt:
      "Como a fé bíblica continua relevante no mundo contemporâneo.",
    content:
      "A fé sempre foi um elemento central na transformação social...",
    date: "2026-03-02",
    category: "espiritualidade",
  },
];

export function getBlogArticles() {
  return articles;
}

export function getBlogArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getBlogSlugs() {
  return articles.map((article) => article.slug);
}

export function getBlogCategories() {
  return [...new Set(articles.map((article) => article.category))];
}
