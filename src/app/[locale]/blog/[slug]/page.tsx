import Link from "next/link";
import { notFound } from "next/navigation";

import Container from "@/components/layout/Container";
import {
  getBlogArticle,
  getBlogSlugs,
} from "@/content/blog/articles";

type PageProps = {
  params: {
    locale: string;
    slug: string;
  };
};

export function generateStaticParams() {
  // Gera todas as rotas /[locale]/blog/[slug]
  // Se no teu projeto getBlogSlugs já for multi-língua, mantém assim.
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ locale: "pt", slug })).concat(
    slugs.map((slug) => ({ locale: "en", slug }))
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;

  const article = getBlogArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `/${params.locale}/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `/${params.locale}/blog/${slug}`,
      type: "article",
    },
  };
}

export default function BlogArticlePage({ params }: PageProps) {
  const { locale, slug } = params;

  const article = getBlogArticle(slug);
  if (!article) return notFound();

  const dateLabel =
    typeof article.publishedAt === "string" ? article.publishedAt : "";

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

          <div className="text-xs text-zinc-500">
            {locale.toUpperCase()} • EverLight Journal
          </div>
        </div>

        <header className="mb-6">
          {dateLabel ? (
            <div className="text-xs text-zinc-500">{dateLabel}</div>
          ) : null}

          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-100">
            {article.title}
          </h1>

          {article.description ? (
            <p className="mt-2 max-w-3xl text-zinc-300">{article.description}</p>
          ) : null}

          <div className="mt-4 flex flex-wrap gap-2">
            {article.category ? (
              <Link
                href={`/${locale}/blog/category/${encodeURIComponent(
                  article.category
                )}`}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10"
              >
                {article.category}
              </Link>
            ) : null}

            {Array.isArray(article.tags)
              ? article.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                  >
                    {t}
                  </span>
                ))
              : null}
          </div>
        </header>

        <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          {/* Conteúdo: por enquanto renderiza como texto com quebras de linha (sem MDX) */}
          <div className="whitespace-pre-wrap leading-relaxed text-zinc-200">
            {article.content}
          </div>
        </article>

        <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6 text-sm">
          <Link
            href={`/${locale}/blog`}
            className="text-zinc-400 hover:text-zinc-200"
          >
            Ver mais artigos
          </Link>

          <Link
            href={`/${locale}/newsletter`}
            className="text-zinc-400 hover:text-zinc-200"
          >
            Newsletter →
          </Link>
        </div>
      </Container>
    </main>
  );
            }
