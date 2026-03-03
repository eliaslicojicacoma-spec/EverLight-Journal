import Link from "next/link";

import Container from "@/components/layout/Container";
import {
  getBlogArticles,
} from "@/content/blog/articles";

type PageProps = {
  params: {
    locale: string;
  };
};

export const dynamic = "force-static";

export default function BlogIndexPage({ params }: PageProps) {
  const { locale } = params;

  const articles = getBlogArticles();

  return (
    <main className="py-10">
      <Container>
        <header className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100">
            Blog
          </h1>
          <p className="mt-2 text-zinc-300">
            Artigos carregados diretamente de{" "}
            <code className="rounded bg-white/5 px-2 py-1 text-zinc-200">
              src/content/blog/articles.ts
            </code>
            .
          </p>
        </header>

        <section className="space-y-3">
          {articles.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-zinc-300">
              Ainda não há artigos.
            </div>
          ) : (
            articles.map((a) => (
              <Link
                key={a.slug}
                href={`/${locale}/blog/${a.slug}`}
                className="block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs text-zinc-500">
                      {a.publishedAt}
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-zinc-100">
                      {a.title}
                    </h2>
                    {a.description ? (
                      <p className="mt-2 text-zinc-300">{a.description}</p>
                    ) : null}

                    <div className="mt-3 flex flex-wrap gap-2">
                      {a.category ? (
                        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                          {a.category}
                        </span>
                      ) : null}
                      {Array.isArray(a.tags)
                        ? a.tags.map((t) => (
                            <span
                              key={`${a.slug}-${t}`}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                            >
                              {t}
                            </span>
                          ))
                        : null}
                    </div>
                  </div>

                  <span className="mt-1 text-sm text-zinc-400">Abrir →</span>
                </div>
              </Link>
            ))
          )}
        </section>
      </Container>
    </main>
  );
}
