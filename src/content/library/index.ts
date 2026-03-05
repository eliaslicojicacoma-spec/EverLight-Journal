import { libraryItems, type LibraryItem } from "./items";

export function getLibraryItems() {
  return [...libraryItems];
}

export function getLibrarySlugs() {
  return libraryItems.map((i) => i.slug);
}

export function getLibraryItem(slug: string): LibraryItem | undefined {
  return libraryItems.find((i) => i.slug === slug);
}

export function getLibraryTags(): string[] {
  const set = new Set<string>();
  for (const item of libraryItems) {
    for (const t of item.tags ?? []) set.add(t);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}
