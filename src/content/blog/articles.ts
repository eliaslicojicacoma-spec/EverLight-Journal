import type { BlogCard } from "./cards";

export type BlogArticle = BlogCard & {
  cover?: string; // opcional
  content: Array<
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "quote"; text: string; ref?: string }
    | { type: "ul"; items: string[] }
  >;
};

const ARTICLES_PT: BlogArticle[] = [
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
    content: [
      { type: "p", text: "A maioria das famílias não precisa de um plano gigante — precisa de um ritmo simples." },
      { type: "h2", text: "1) O lar aprende pelo que repetimos" },
      { type: "p", text: "O ambiente espiritual do lar é moldado por hábitos pequenos: como falamos, como reagimos e como encerramos o dia." },
      { type: "h2", text: "2) Três hábitos que funcionam de verdade" },
      { type: "ul", items: [
        "Um verso por dia (sem pressa).",
        "Uma oração curta em conjunto.",
        "Um pedido de perdão antes de dormir."
      ]},
      { type: "quote", text: "O lar vira forte quando Deus vira hábito, não só visita.", ref: "EverLight Journal" },
      { type: "h2", text: "3) Um plano de 7 dias" },
      { type: "p", text: "Durante 7 dias, faz só isto: 1 verso + 1 oração + 1 ação prática. O teu lar vai sentir a diferença." },
    ],
  },
];

const ARTICLES_EN: BlogArticle[] = [
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
    content: [
      { type: "p", text: "Most families don’t need a massive plan — they need a simple rhythm." },
      { type: "h2", text: "1) The home learns from repetition" },
      { type: "p", text: "Your home’s spiritual atmosphere is shaped by small habits: how you speak, how you react, and how you end the day." },
      { type: "h2", text: "2) Three habits that actually work" },
      { type: "ul", items: [
        "One verse a day (no rush).",
        "One short prayer together.",
        "One apology before sleep."
      ]},
      { type: "quote", text: "A strong home is built when God becomes a habit, not just a visit.", ref: "EverLight Journal" },
    ],
  },
];

export function getBlogArticle(locale: string, slug: string): BlogArticle | null {
  const list = locale === "pt" ? ARTICLES_PT : ARTICLES_EN;
  return list.find((a) => a.slug === slug) ?? null;
}
