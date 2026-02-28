import ArticleCard from "@/components/society/ArticleCard";
import { getSocietyCards } from "@/content/society/cards";

export default function SocietyPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const cards = getSocietyCards(locale);

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
          <ArticleCard
            key={c.slug}
            category={c.category}
            title={c.title}
            summary={c.summary}
            context={c.context}
            actions={c.actions}
            href={`/${locale}/society/${c.slug}`}
          />
        ))}
      </section>
    </main>
  );
}
