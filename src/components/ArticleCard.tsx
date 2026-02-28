import ArticleCard from "@/components/ArticleCard";
import { getAdventistCards } from "@/content/adventist/cards";

export default function AdventistPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params?.locale ?? "pt";
  const cards = getAdventistCards(locale);

  return (
    <main className="space-y-10">
      {/* Header */}
      <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-black">Adventista</h1>
        <p className="mt-2 text-sm text-black/60">
          Estudos e reflexões fundamentadas na fé Adventista.
        </p>
      </section>

      {/* Cards */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <ArticleCard
            key={card.slug}
            category={card.category}
            title={card.title}
            summary={card.summary}
            context={card.context}
            actions={card.actions}
            href={`/${locale}/adventist/${card.slug}`}   {/* 👈 AQUI está o segredo */}
          />
        ))}
      </section>
    </main>
  );
}
