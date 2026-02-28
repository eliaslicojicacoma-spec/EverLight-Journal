import Link from "next/link";
import { getBlogArticle } from "@/content/blog/articles";

type Props = { params: { locale: string; slug: string } };

export default function BlogArticlePage({ params }: Props) {
  const locale = params.locale ?? "pt";
  const slug = params.slug;

  const article = getBlogArticle(locale, slug);

  if (!article) {
    return (
      <main className="space-y-6">
        <section className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm">
          <h1 className="text-3xl font-bold text-black">
            {locale === "pt" ? "Artigo não encontrado" : "Article not found"}
          </h1>
          <p className="mt-2 text-sm text-black/60">
            {locale === "pt"
              ? "Pode ter sido removido, renomeado, ou o link está errado."
              : "It may have been removed, renamed, or the link is wrong."}
          </p>

          <Link
            href={`/${locale}/blog`}
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            {locale === "pt" ? "Voltar ao Blog" : "Back to Blog"}
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="space-y-10">
      <section className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="text-[11px] font-semibold tracking-[0.22em] text-black/50">
          {article.date} • {article.readTime} • {article.category.toUpperCase()}
        </div>

        <h1 className="mt-3 text-4xl font-bold leading-tight text-black">
          {article.title}
        </h1>

        <p className="mt-4 text-base text-black/60">{article.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {article.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold text-black/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center border-b-2 border-black pb-1 text-sm font-bold hover:border-black/50 hover:text-black/60"
          >
            ← {locale === "pt" ? "Voltar ao Blog" : "Back to Blog"}
          </Link>
        </div>
      </section>

      <article className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="prose prose-neutral max-w-none">
          {article.content.map((block, idx) => {
            if (block.type === "h2") return <h2 key={idx}>{block.text}</h2>;
            if (block.type === "p") return <p key={idx}>{block.text}</p>;
            if (block.type === "ul")
              return (
                <ul key={idx}>
                  {block.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              );
            if (block.type === "quote")
              return (
                <blockquote key={idx}>
                  {block.text}
                  {block.ref ? <cite> — {block.ref}</cite> : null}
                </blockquote>
              );
            return null;
          })}
        </div>
      </article>
    </main>
  );
          }
