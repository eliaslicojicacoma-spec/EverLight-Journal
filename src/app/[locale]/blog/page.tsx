import ArticleCard from "@/components/ArticleCard";
import { getBlogCards } from "@/content/blog/cards";

type Props = { params: { locale: string } };

export default function BlogPage({ params }: Props) {
  const locale = params.locale ?? "pt";
  const cards = getBlogCards(locale);

  return (
    <main className="space-y-10">
      <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <h1 className="text-3xl font-bold text-black">
          {locale === "pt" ? "Blog" : "Blog"}
        </h1>
        <p className="mt-2 text-sm text-black/60">
          {locale === "pt"
            ? "Artigos de fé, sociedade e vida cristã — com clareza e prática."
            : "Articles on faith, society and Christian life — clear and practical."}
        </p>
      </section>

      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <ArticleCard
            key={c.slug}
            category={c.category}
            title={c.title}
            summary={c.summary}
            context={c.context}
            actions={c.actions}
            href={`/${locale}/blog/${c.slug}`}
          />
        ))}
      </section>
    </main>
  );
}
