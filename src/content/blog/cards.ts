export type BlogCard = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  context: string;
  actions: string[];
  date: string; // "2026-02-28"
  readTime: string; // "3 min"
  tags: string[];
};

const BLOG_CARDS_PT: BlogCard[] = [
  {
    slug: "familia-fe-e-habitos-simples",
    category: "Blog",
    title: "Família, Fé e Hábitos Simples que Protegem o Lar",
    summary:
      "Pequenas rotinas espirituais criam uma casa mais segura emocionalmente e mais forte em Deus.",
    context:
      "Quando o lar perde o ritmo espiritual, o stress domina. A consistência vence o caos.",
    actions: [
      "Ore 2 minutos com a família (curto e direto)",
      "Leia 1 verso e diga 1 lição prática",
      "Combine 1 regra de paz: sem gritos, com diálogo",
    ],
    date: "2026-02-28",
    readTime: "3 min",
    tags: ["familia", "habitos", "vida-espiritual"],
  },
  {
    slug: "silencio-em-meio-ao-ruido",
    category: "Sociedade",
    title: "Silêncio em Meio ao Ruído",
    summary: "Vivemos conectados, mas espiritualmente distraídos.",
    context: "O excesso de informação reduz nossa capacidade de reflexão profunda.",
    actions: [
      "Desative notificações desnecessárias",
      "Leia um texto longo sem interrupções",
      "Ore antes de consumir notícias",
    ],
    date: "2026-02-28",
    readTime: "2 min",
    tags: ["silencio", "foco", "mente"],
  },
];

const BLOG_CARDS_EN: BlogCard[] = [
  {
    slug: "family-faith-and-simple-habits",
    category: "Blog",
    title: "Family, Faith and Simple Habits that Protect the Home",
    summary:
      "Small spiritual routines can build a safer home emotionally and stronger in God.",
    context:
      "When the home loses spiritual rhythm, stress wins. Consistency beats chaos.",
    actions: [
      "Pray 2 minutes with family (short and real)",
      "Read 1 verse and share 1 practical lesson",
      "Agree on 1 peace rule: no shouting, more dialogue",
    ],
    date: "2026-02-28",
    readTime: "3 min",
    tags: ["family", "habits", "spiritual-life"],
  },
];

export function getBlogCards(locale: string): BlogCard[] {
  return locale === "pt" ? BLOG_CARDS_PT : BLOG_CARDS_EN;
}
