import Link from "next/link";
import { getBlogArticles } from "@/content/blog/articles";
import TagPills from "@/components/blog/TagPills";

type PageProps = {
  params: { locale: string };
};

export default function BlogIndexPage({ params }: PageProps) {
  const { locale } = params;
  const articles = getBlogArticles();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold text-zinc-100">Blog</h1>
        <p className="mt-2 text-zinc-400">
          Artigos carregados diretamente de{" "}
          <span className="font-mono text-zinc-300">src/content/blog/articles.ts</span>.
        </p>
      </header>

      <section className="space-y-4">
        {articles.map((a) => (
          <article
            key={a.slug}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
          >
            <div className="text-xs text-zinc-400">{a.publishedAt}</div>

            <h2 className="mt-1 text-lg font-semibold text-zinc-100">
              <Link href={`/${locale}/blog/${a.slug}`} className="hover:underline">
                {locale === "en" ? a.title.en : a.title.pt}
              </Link>
            </h2>

            <p className="mt-2 text-zinc-300">
              {locale === "en" ? a.excerpt.en : a.excerpt.pt}
            </p>

            {/* Tags clicáveis */}
            <TagPills locale={locale} tags={a.tags || []} className="mt-4" />

            <div className="mt-4 flex flex-wrap gap-2">
              {a.category ? (
                <Link
                  href={`/${locale}/blog/category/${a.category}`}
                  className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10"
                >
                  {a.category}
                </Link>
              ) : null}

              <Link
                href={`/${locale}/blog/${a.slug}`}
                className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10"
              >
                {locale === "en" ? "Read" : "Ler"}
              </Link>
            </div>
          </article>
        ))}
      </section>

      <footer className="mt-12 text-sm text-zinc-500">
        © {new Date().getFullYear()} EverLight Journal · Built with Next.js + Tailwind
      </footer>
    </main>
  );
}
