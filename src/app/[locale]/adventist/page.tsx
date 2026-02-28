import ArticleCard from "@/components/ArticleCard";
import { getAdventistCards } from "@/content/adventist/cards";

export default function AdventistPage({
  params,
}: {
  params: { locale: string };
}) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const cards = getAdventistCards(locale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-black">
          {isPT ? "Adventista" : "Adventist"}
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-black/60">
          {isPT
            ? "Estudos e reflexões fundamentadas na fé Adventista."
            : "Studies and reflections grounded in Adventist faith."}
        </p>
      </header>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <ArticleCard
            key={card.slug}
            category={card.category}
            title={card.title}
            summary={card.summary}
            context={card.context}
            actions={card.actions}
            href={`/${locale}/adventist/${card.slug}`}
          />
        ))}
      </section>
    </main>
  );
}
