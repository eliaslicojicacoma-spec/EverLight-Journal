export type ArticleSection = { title: string; content: string[] };

export type AdventistArticle = {
  slug: string;
  locale: "pt" | "en";
  category: string;
  title: string;
  summary: string;
  context: string;
  actions: string[];
  readingTime?: string;
  verse?: { ref: string; text: string };
  sections: ArticleSection[];
};

const ARTICLES: AdventistArticle[] = [
  {
    slug: "o-santuario-e-o-evangelho",
    locale: "pt",
    category: "Adventista",
    title: "O Santuário e o Evangelho",
    summary: "O santuário aponta para Cristo: perdão, intercessão e restauração completa.",
    context: "O santuário revela o plano da salvação — do sacrifício à esperança final.",
    actions: ["Leia Hebreus 8–10", "Anote 3 ideias principais", "Ore agradecendo pela intercessão de Cristo"],
    readingTime: "6 min",
    verse: {
      ref: "Hebreus 8:1–2",
      text: "Temos tal sumo sacerdote... ministro do santuário e do verdadeiro tabernáculo.",
    },
    sections: [
      {
        title: "1) Por que o santuário importa",
        content: [
          "O santuário não é um detalhe histórico: é um mapa do evangelho em símbolos.",
          "Ele liga sacrifício, perdão, intercessão e esperança final num único quadro.",
        ],
      },
      {
        title: "2) Cristo no centro",
        content: [
          "O foco não é o edifício — é o ministério de Cristo.",
          "A mensagem prática: Deus não nos abandona; há intercessão real e graça real.",
        ],
      },
      {
        title: "3) Aplicação para hoje",
        content: [
          "Viver com paz: culpa não é lar do cristão.",
          "Viver com ordem: confissão, fé e obediência são resposta ao amor.",
        ],
      },
      {
        title: "Conclusão",
        content: [
          "O santuário fortalece a esperança: Deus está a conduzir a história para restauração completa.",
        ],
      },
    ],
  },

  // (EN) exemplo
  {
    slug: "the-sanctuary-and-the-gospel",
    locale: "en",
    category: "Adventist",
    title: "The Sanctuary and the Gospel",
    summary: "The sanctuary points to Christ: forgiveness, intercession, and full restoration.",
    context: "The sanctuary reveals the plan of salvation — from sacrifice to final hope.",
    actions: ["Read Hebrews 8–10", "Write down 3 key ideas", "Pray and thank Christ for His intercession"],
    readingTime: "6 min",
    verse: {
      ref: "Hebrews 8:1–2",
      text: "We have such a high priest... a minister in the sanctuary and the true tent.",
    },
    sections: [
      { title: "1) Why it matters", content: ["The sanctuary is the gospel in symbols.", "It connects sacrifice, forgiveness, intercession, and hope."] },
      { title: "2) Christ at the center", content: ["The point is not the building — it’s Christ’s ministry.", "Grace is real; intercession is real."] },
      { title: "Conclusion", content: ["The sanctuary strengthens hope: God is guiding history toward restoration."] },
    ],
  },
];

export function getAdventistArticle(locale: string, slug: string) {
  return ARTICLES.find((a) => a.locale === (locale === "pt" ? "pt" : "en") && a.slug === slug) ?? null;
}

export function getAdventistSlugs(locale: string) {
  return ARTICLES.filter((a) => a.locale === (locale === "pt" ? "pt" : "en")).map((a) => a.slug);
                       }
