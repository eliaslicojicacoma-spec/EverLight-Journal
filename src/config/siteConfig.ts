export const siteConfig = {
  name: "EverLight Journal",
  description:
    "Conteúdo original sobre Sociedade e Fé Adventista, com qualidade editorial e design moderno.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  defaultLocale: "pt" as const,
  locales: ["pt", "en"] as const,
  author: {
    name: "Elias Licoji Cacoma",
  },
};

export type Locale = (typeof siteConfig.locales)[number];
