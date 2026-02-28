export type BlogArticle = {
  slug: string;
  locale: "pt" | "en";
  category: string;
  title: string;
  summary: string;
  context: string;
  actions: string[];
  readingTime?: string;
  sections: { title: string; content: string[] }[];
};

const BLOG: BlogArticle[] = [
  {
    slug: "o-culto-a-performance",
    locale: "pt",
    category: "Sociedade",
    title: "O Culto à Performance",
    summary: "A sociedade moderna transformou o descanso em culpa e a produtividade em identidade.",
    context: "A comparação constante (principalmente nas redes) cria ansiedade e cansaço emocional.",
    actions: ["Desliga notificações 1h antes de dormir", "Escolhe 1 prioridade por dia", "Reserva 10 minutos de silêncio"],
    readingTime: "7 min",
    sections: [
      { title: "O problema", content: ["Produzir virou religião. Descansar virou pecado.", "Isso mata a paz e a presença."] },
      { title: "O que a fé corrige", content: ["Identidade não é performance — é graça.", "Trabalho é bom, mas não é deus."] },
      { title: "Passo prático", content: ["Define limites claros: hora de parar.", "Conversa com Deus antes de consumir informação."] },
    ],
  },
];

export function getBlogCards(locale: string) {
  const l = locale === "pt" ? "pt" : "en";
  return BLOG.filter((a) => a.locale === l);
}

export function getBlogArticle(locale: string, slug: string) {
  const l = locale === "pt" ? "pt" : "en";
  return BLOG.find((a) => a.locale === l && a.slug === slug) ?? null;
}

export function getBlogSlugs(locale: string) {
  const l = locale === "pt" ? "pt" : "en";
  return BLOG.filter((a) => a.locale === l).map((a) => a.slug);
    }
