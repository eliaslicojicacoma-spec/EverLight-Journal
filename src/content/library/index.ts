export type LibraryLocale = "pt" | "en";

export type LibraryItem = {
  slug: string;
  title: { pt: string; en: string };
  author?: { pt: string; en: string };
  description?: { pt: string; en: string };
  tags?: string[];
  pdf?: string; // ex: "/downloads/algum.pdf"
  externalUrl?: string; // ex: "https://..."
};

import { libraryItems } from "./items";

export function getLibraryItems(): LibraryItem[] {
  return libraryItems;
}

export function getLibrarySlugs(): string[] {
  return libraryItems.map((x) => x.slug);
}

export function getLibraryItem(slug: string): LibraryItem | undefined {
  return libraryItems.find((x) => x.slug === slug);
}
