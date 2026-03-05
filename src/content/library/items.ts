export type LocalizedText = string | { pt: string; en: string };

export type LibraryItem = {
  slug: string;
  title: LocalizedText;
  author?: LocalizedText;
  description?: LocalizedText;
  cover?: string; // ex: "/images/books/grande-conflito.jpg"
  pdf?: string;   // ex: "/downloads/o-grande-conflito.pdf"
  tags?: string[];
  publishedAt?: string; // "YYYY-MM-DD"
};

export const libraryItems: LibraryItem[] = [
  {
    slug: "o-grande-conflito",
    title: { pt: "O Grande Conflito", en: "The Great Controversy" },
    author: { pt: "Ellen G. White", en: "Ellen G. White" },
    description: {
      pt: "Uma visão ampla do conflito entre o bem e o mal ao longo da história, com foco na Bíblia e na esperança.",
      en: "A broad view of the conflict between good and evil through history, centered on the Bible and hope.",
    },
    cover: "/images/books/grande-conflito.jpg",
    pdf: "/downloads/o-grande-conflito.pdf",
    tags: ["profecia", "historia", "esperanca"],
    publishedAt: "2026-03-01",
  },
  {
    slug: "caminho-a-cristo",
    title: { pt: "Caminho a Cristo", en: "Steps to Christ" },
    author: { pt: "Ellen G. White", en: "Ellen G. White" },
    description: {
      pt: "Um guia prático e espiritual para conhecer Jesus, confiar n’Ele e viver uma fé real.",
      en: "A practical spiritual guide to knowing Jesus, trusting Him, and living real faith.",
    },
    cover: "/images/books/caminho-a-cristo.jpg",
    pdf: "/downloads/caminho-a-cristo.pdf",
    tags: ["vida-crista", "fe", "devocional"],
    publishedAt: "2026-03-01",
  },
];
