export type AdventistCard = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  context: string;
  actions: string[];
};

const PT: AdventistCard[] = [
  {
    slug: "santuario-e-evangelho",
    category: "Adventista",
    title: "O Santuário e o Evangelho",
    summary: "O santuário aponta para Cristo: perdão, intercessão e restauração completa.",
    context:
      "Muita gente vê doutrina como ‘teoria’, mas o santuário é uma história viva da salvação — do altar à esperança final.",
    actions: [
      "Leia Hebreus 8–10 com calma",
      "Anote 3 ideias sobre o que Jesus faz hoje por ti",
      "Ore agradecendo pela intercessão de Cristo",
    ],
  },
  {
    slug: "sabado-e-identidade",
    category: "Adventista",
    title: "Sábado e Identidade",
    summary: "O sábado não é peso — é descanso, confiança e aliança.",
    context:
      "Num mundo acelerado, o sábado vira resistência espiritual: Deus no centro, não a performance.",
    actions: [
      "Prepare o sábado na sexta-feira (organiza pequenas coisas)",
      "Faça um ‘detox’ de telas por 2 horas",
      "Partilhe uma refeição com intenção e gratidão",
    ],
  },
];

const EN: AdventistCard[] = [
  {
    slug: "sanctuary-and-gospel",
    category: "Adventist",
    title: "The Sanctuary and the Gospel",
    summary: "The sanctuary points to Christ: forgiveness, intercession, and full restoration.",
    context:
      "Doctrine isn’t just theory. The sanctuary is the story of salvation — from sacrifice to final hope.",
    actions: [
      "Read Hebrews 8–10 slowly",
      "Write 3 ideas about what Jesus does for you today",
      "Pray with gratitude for Christ’s intercession",
    ],
  },
  {
    slug: "sabbath-and-identity",
    category: "Adventist",
    title: "Sabbath and Identity",
    summary: "The Sabbath isn’t a burden — it’s rest, trust, and covenant.",
    context:
      "In a fast world, Sabbath becomes spiritual resistance: God at the center, not performance.",
    actions: [
      "Prepare on Friday (small practical steps)",
      "Do a 2-hour screen detox",
      "Share a meaningful meal with gratitude",
    ],
  },
];

export function getAdventistCards(locale: string): AdventistCard[] {
  return locale === "pt" ? PT : EN;
