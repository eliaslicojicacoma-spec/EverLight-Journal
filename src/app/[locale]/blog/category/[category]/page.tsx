import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import { getBlogArticles } from "@/content/blog/articles";

type PageProps = {
  params: {
    locale: string;
    category: string;
  };
};

export const dynamic = "force-static";

export function generateStaticParams() {
  const articles = getBlogArticles();
  const categories = Array.from(
    new Set(articles.map((a) => a.category).filter(Boolean) as string[])
  );

  // gera PT e EN para cada categoria
  return categories.flatMap((category) => [
    { locale: "pt", category: encodeURIComponent(category) },
    { locale: "en", category: encodeURIComponent(category) },
  ]);
}

export default function BlogCategoryPage({ params }: PageProps) {
  const { locale } = params;
  const category = decodeURIComponent(params.category);

  const articles = getBlogArticles().filter((a) => a.category === category);

  if (!category) return notFound();

  return (
    <main className="py-10">
      <Container>
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            href={`/${locale}/blog`}
            className="text-sm text-zinc-400 hover:text-zinc-200"
          >
            ← Voltar ao Blog
          </Link>

          <div className="text-xs text-zinc-500">{locale.toUpperCase()}</div>
        </div>

        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
            Categoria: {category}
          </h1>
          <p className="mt-2 text-zinc-300">
            {articles.length} artigo(s) nesta categoria.
          </p>
        </header>

        <section className="space-y-3">
          {articles.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-zinc-300">
              Sem artigos nesta categoria.
            </div>
          ) : (
            articles.map((a) => (
              <Link
                key={a.slug}
                href={`/${locale}/blog/${a.slug}`}
                className="block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
              >
                <div className="text-xs text-zinc-500">{a.publishedAt}</div>
                <h2 className="mt-2 text-lg font-semibold text-zinc-100">
                  {a.title}
                </h2>
                {a.description ? (
                  <p className="mt-2 text-zinc-300">{a.description}</p>
                ) : null}
              </Link>
            ))
          )}
        </section>
      </Container>
    </main>
  );
}
