export type ArticleCategory = "blog" | "society" | "adventist";

export type Article = {
  slug: string;
  category: ArticleCategory;
  title: string;
  summary: string;
  context: string;
  actions: string[];
  tags: string[];
  dateISO: string;
  readTime: string;
  coverImage?: string;
  content: string;
};
