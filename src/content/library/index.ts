export type LibraryLocaleText = {
  pt: string;
  en: string;
};

export type LibraryItem = {
  slug: string;
  title: LibraryLocaleText;
  author?: LibraryLocaleText;
  description?: LibraryLocaleText;

  // links/opções de recurso
  pdf?: string;          // ex: "/downloads/arquivo.pdf"
  url?: string;          // ex: "https://..."
  coverImage?: string;   // ex: "/images/capas/xxx.jpg"

  // ✅ agora existe (resolve o teu erro)
  tags?: string[];
  category?: string;

  // metadados
  publishedAt?: string;  // "2026-03-05"
};

import { libraryItems } from "./items";

/** Todos os itens */
export function getLibraryItems(): LibraryItem[] {
  return libraryItems;
}

/** Um item por slug */
export function getLibraryItem(slug: string): LibraryItem | undefined {
  return libraryItems.find((i) => i.slug === slug);
}

/** Slugs (para rotas estáticas) */
export function getLibrarySlugs(): string[] {
  return libraryItems.map((i) => i.slug);
}

/** Tags únicas */
export function getLibraryTags(): string[] {
  const set = new Set<string>();
  for (const item of libraryItems) {
    for (const t of item.tags ?? []) set.add(t);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
