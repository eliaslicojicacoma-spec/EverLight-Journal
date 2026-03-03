import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogArticle } from "@/content/blog/articles";
import TagPills from "@/components/blog/TagPills";

type PageProps = {
  params: { locale: string; slug: string };
};

export default function BlogArticlePage({ params }: PageProps) {
  const { locale, slug } = params;

  const article = getBlogArticle(slug);
  if (!article) return notFound();

  const title = locale === "en" ? article.title.en : article.title.pt;
  const excerpt = locale === "en" ? article.excerpt.en : article.excerpt.pt;
  const content = locale === "en" ? article.content.en : article.content.pt;

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10">
      <div className="mb-6 text-sm text-zinc-400">
        <Link href={`/${locale}/blog`} className="hover:underline">
          Blog
        </Link>{" "}
        <span className="text-zinc-600">/</span>{" "}
        <span className="text-zinc-300">{title}</span>
      </div>

      <header className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-xs text-zinc-400">{article.publishedAt}</div>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-100">{title}</h1>
        <p className="mt-2 text-zinc-300">{excerpt}</p>

        {/* Tags clicáveis */}
        <TagPills locale={locale} tags={article.tags || []} className="mt-4" />

        <div className="mt-4 flex flex-wrap gap-2">
          {article.category ? (
            <Link
              href={`/${locale}/blog/category/${article.category}`}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10"
            >
              {article.category}
            </Link>
          ) : null}
        </div>
      </header>

      <section className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
        {/* Por agora conteúdo é string simples */}
        <pre className="whitespace-pre-wrap break-words text-sm leading-6 text-zinc-200">
          {content}
        </pre>
      </section>

      <div className="mt-10">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10"
        >
          ← {locale === "en" ? "Back to Blog" : "Voltar ao Blog"}
        </Link>
      </div>
    </main>
  );
}
