import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://everlight-journal.com",
      lastModified: new Date(),
    },
    {
      url: "https://everlight-journal.com/pt",
      lastModified: new Date(),
    },
    {
      url: "https://everlight-journal.com/pt/blog",
      lastModified: new Date(),
    },
    {
      url: "https://everlight-journal.com/pt/blog/categories",
      lastModified: new Date(),
    },
    {
      url: "https://everlight-journal.com/pt/blog/tags",
      lastModified: new Date(),
    },
  ];
}
