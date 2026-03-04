import { MetadataRoute } from "next";
import { siteConfig } from "@/config/siteConfig";
import { getBlogArticles } from "@/content/blog/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const articles = getBlogArticles();

  const blogUrls = articles.map((article) => ({
    url: `${baseUrl}/pt/blog/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pt/blog`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pt/blog/categories`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pt/blog/tags`,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
