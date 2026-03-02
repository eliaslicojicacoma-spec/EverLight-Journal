import type { Article } from "@/types/Article";
import type { Locale } from "@/config/siteConfig";

const ARTICLES: Article[] = [
  {
    slug: "bem-vindo-ao-everlight",
    locale: "pt",
    title: "Bem-vindo ao EverLight Journal",
    excerpt:
      "A base do projeto está pronta: PT/EN, blog por ficheiro, SEO e estrutura escalável.",
    content:
      "## Olá!\n\nEste é o primeiro artigo do EverLight Journal.\n\n- PT/EN\n- Blog por `articles.ts`\n- Estrutura profissional\n",
    date: "2026-03-02",
    categories: ["Início", "Projeto"],
    author: "Elias Licoji Cacoma",
  },
  {
    slug: "welcome-to-everlight",
    locale: "en",
    title: "Welcome to EverLight Journal",
    excerpt:
      "The foundation is ready: PT/EN, file-based blog source, SEO and scalable structure.",
    content:
      "## Hello!\n\nThis is the first EverLight Journal article.\n\n- PT/EN\n- Blog via `articles.ts`\n- Pro structure\n",
    date: "2026-03-02",
    categories: ["Start", "Project"],
    author: "Elias Licoji Cacoma",
  },
];

export function getBlogArticles(locale?: Locale) {
  const list = locale ? ARTICLES.filter(a => a.locale === locale) : ARTICLES;
  return [...list].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogArticle(slug: string, locale?: Locale) {
  const list = getBlogArticles(locale);
  return list.find(a => a.slug === slug) || null;
}

export function getBlogSlugs(locale?: Locale) {
  return getBlogArticles(locale).map(a => a.slug);
}

export function getBlogCategories(locale?: Locale) {
  const set = new Set<string>();
  getBlogArticles(locale).forEach(a => a.categories.forEach(c => set.add(c)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
