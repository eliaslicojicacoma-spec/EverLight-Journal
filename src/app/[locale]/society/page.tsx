import ArticleCard from "@/components/society/ArticleCard";

export default function SocietyPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const cards = [
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
        : ["Disconnect from screens before sleep", "Pick one priority task", "Take 15 minutes of silence"],
      href: `/${locale}/society/o-culto-a-performance`,
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-black">
          {isPT ? "Sociedade" : "Society"}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-black/60">
          {isPT
            ? "Análises curtas, contexto claro e ações práticas — sem drama, só direção."
            : "Short analysis, clear context, and practical actions — no drama, just direction."}
        </p>
      </header>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <ArticleCard key={c.href} {...c} />
        ))}
      </section>
    </main>
  );
}
