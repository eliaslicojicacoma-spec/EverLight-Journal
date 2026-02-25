import posts from "@/data/blogPosts.json";

export type BlogPost = {
  id: string;
  locale: "pt" | "en";
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  coverImage: string;
  ogImage?: string;
  publishedAt: string;
  updatedAt?: string;
  author?: { name: string; image?: string };
  content: string[];
};

export function getAllPosts(locale: string) {
  return (posts as BlogPost[])
    .filter((p) => p.locale === locale)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export function getPostBySlug(locale: string, slug: string) {
  return (posts as BlogPost[]).find((p) => p.locale === locale && p.slug === slug);
}
