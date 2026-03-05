export type LibraryItem = {
  slug: string
  title: { pt: string; en: string }
  author?: { pt: string; en: string }
  description?: { pt: string; en: string }
  pdf?: string
  externalUrl?: string
}

export const libraryItems: LibraryItem[] = [
  {
    slug: "conflito-dos-seculos",
    title: {
      pt: "O Conflito dos Séculos",
      en: "The Great Controversy",
    },
    author: {
      pt: "Ellen G. White",
      en: "Ellen G. White",
    },
    description: {
      pt: "Uma obra clássica sobre o conflito entre o bem e o mal na história.",
      en: "A classic book about the conflict between good and evil.",
    },
  },
]

export function getLibraryItems(): LibraryItem[] {
  return libraryItems
}

export function getLibrarySlugs(): string[] {
  return libraryItems.map((item) => item.slug)
}

export function getLibraryItem(slug: string): LibraryItem | undefined {
  return libraryItems.find((item) => item.slug === slug)
}
