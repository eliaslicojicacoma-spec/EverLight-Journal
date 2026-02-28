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
      "O santuário revela o plano da salvação — do sacrifício à esperança final.",
    actions: [
      "Leia Hebreus 8–10",
      "Anote 3 ideias principais",
      "Ore agradecendo pela intercessão de Cristo",
    ],
  },
  {
    slug: "sabado-e-identidade",
    category: "Adventista",
    title: "Sábado e Identidade",
    summary: "O sábado é descanso, confiança e aliança.",
    context:
      "Num mundo acelerado, o sábado é resistência espiritual.",
    actions: [
      "Prepare o sábado na sexta",
      "Reduza o uso do telefone",
      "Faça um momento de gratidão",
    ],
  },
];

const EN: AdventistCard[] = [
  {
    slug: "sanctuary-and-gospel",
    category: "Adventist",
    title: "The Sanctuary and the Gospel",
    summary: "The sanctuary points to Christ and full restoration.",
    context:
      "The sanctuary reveals the story of salvation from sacrifice to hope.",
    actions: [
      "Read Hebrews 8–10",
      "Write 3 key ideas",
      "Pray with gratitude",
    ],
  },
  {
    slug: "sabbath-and-identity",
    category: "Adventist",
    title: "Sabbath and Identity",
    summary: "The Sabbath is rest, trust, and covenant.",
    context:
      "In a fast world, Sabbath becomes spiritual resistance.",
    actions: [
      "Prepare on Friday",
      "Reduce screen time",
      "Practice gratitude",
    ],
  },
];

export function getAdventistCards(locale: string): AdventistCard[] {
  return locale === "pt" ? PT : EN;
}
