import Link from "next/link";
import { notFound } from "next/navigation";
import { getAdventistCards } from "@/content/adventist/cards";

export default function AdventistArticlePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = params?.locale ?? "pt";
  const slug = params?.slug;

  const cards = getAdventistCards(locale);
  const article = cards.find((c) => c.slug === slug);

  if (!article) return notFound();

  const isPT = locale === "pt";

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link
        href={`/${locale}/adventist`}
        className="inline-flex items-center gap-2 text-sm font-semibold text-black/70 hover:text-black"
      >
        ← {isPT ? "Voltar para Adventista" : "Back to Adventist"}
      </Link>

      <header className="mt-6 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/45">
          {article.category}
        </div>

        <h1 className="mt-2 text-3xl font-bold leading-tight text-black">
          {article.title}
        </h1>

        <p className="mt-4 border-l-2 border-black pl-4 text-base italic leading-relaxed text-black/70">
          {article.summary}
        </p>
      </header>

      <section className="mt-6 grid gap-6 rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black">
            {isPT ? "Contexto" : "Context"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-black/60">
            {article.context}
          </p>
        </div>

        <div>
          <h2 className="text-[11px] font-bold uppercase tracking-wider text-black">
            {isPT ? "Ação" : "Action"}
          </h2>
          <ul className="mt-3 space-y-2">
            {article.actions.map((item, index) => (
              <li key={index} className="flex items-start text-sm text-black/60">
                <span className="mr-2 text-black">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
