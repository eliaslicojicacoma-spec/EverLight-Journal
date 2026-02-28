export type SocietyCard = {
  category: string;
  title: string;
  summary: string;
  context: string;
  actions: string[];
  slug: string;
};

export const getSocietyCards = (locale: string): SocietyCard[] => {
  const isPT = locale === "pt";

  return [
    {
      category: isPT ? "Sociedade" : "Society",
      title: isPT ? "O Culto à Performance" : "The Cult of Performance",
      summary: isPT
        ? "A sociedade moderna transformou o descanso em culpa e a produtividade em identidade única."
        : "Modern society turned rest into guilt and productivity into identity.",
      context: isPT
        ? "A comparação constante nas redes sociais nos faz sentir que estamos sempre atrás de alguém."
        : "Constant comparison on social media makes us feel we’re always behind someone.",
      actions: isPT
        ? [
            "Pratique o desligamento digital antes de dormir",
            "Defina uma tarefa única como prioridade",
            "Reserve 15 minutos de silêncio absoluto",
          ]
        : [
            "Disconnect from screens before sleep",
            "Choose one priority task",
            "Take 15 minutes of silence",
          ],
      slug: "o-culto-a-performance",
    },

    {
      category: isPT ? "Sociedade" : "Society",
      title: isPT ? "Silêncio em Meio ao Ruído" : "Silence in the Noise",
      summary: isPT
        ? "Vivemos conectados, mas espiritualmente distraídos."
        : "We live connected, but spiritually distracted.",
      context: isPT
        ? "O excesso de informação reduz nossa capacidade de reflexão profunda."
        : "Information overload reduces our capacity for deep reflection.",
      actions: isPT
        ? [
            "Desative notificações desnecessárias",
            "Leia um texto longo sem interrupções",
            "Ore antes de consumir notícias",
          ]
        : [
            "Disable unnecessary notifications",
            "Read long-form content without interruptions",
            "Pray before consuming news",
          ],
      slug: "silencio-em-meio-ao-ruido",
    },
  ];
};
