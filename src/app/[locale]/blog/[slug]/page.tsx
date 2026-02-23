import Link from "next/link";
import { getPostBySlug, formatDate, renderMarkdownLite, stripMarkdown } from "@/lib/posts";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: "pt" | "en"; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);

  const base = `https://${siteConfig.domain}`;
  const url = `${base}/${locale}/blog/${slug}`;

  if (!post) {
    return {
      title: "Article not found",
      description: "This page does not exist.",
      robots: { index: false, follow: false }
    };
  }

  const title = post.title;
  const description = post.excerpt || stripMarkdown(post.content.join(" ")).slice(0, 160);
  const image = post.ogImage || "/og/og-article.jpg";

  return {
    title: `${title} • ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      locale: locale === "pt" ? "pt_PT" : "en_US",
      images: [{ url: `${base}${image}` }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${base}${image}`]
    }
  };
}

export default async function ArticlePage({
  params
}: {
  params: Promise<{ locale: "pt" | "en"; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);

  if (!post) {
    return (
      <div className="space-y-3">
        <h1 className="text-3xl font-extrabold">404</h1>
        <p className="text-zinc-600 dark:text-white/70">
          {locale === "pt" ? "Artigo não encontrado." : "Article not found."}
        </p>
        <Link
          href={`/${locale}/blog`}
          className="inline-flex rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800
                     dark:bg-white dark:text-zinc-950 dark:hover:bg-white/90"
        >
          {locale === "pt" ? "Voltar ao Blog" : "Back to Blog"}
        </Link>
      </div>
    );
  }

  const blocks = renderMarkdownLite(post.content);

  return (
    <article className="space-y-6">
      <div className="flex items-center justify-between gap-3">
        <Link
          href={`/${locale}/blog`}
          className="text-sm font-bold text-indigo-600 hover:underline dark:text-indigo-300"
        >
          ← {locale === "pt" ? "Voltar ao Blog" : "Back to Blog"}
        </Link>

        <Link
          href={`/${locale}/blog/category/${post.category}`}
          className="rounded-full border px-3 py-1 text-xs font-bold
                     border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50
                     dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10"
        >
          {post.category}
        </Link>
      </div>

      <header className="rounded-3xl border p-6 shadow-sm
                         border-zinc-200 bg-white
                         dark:border-white/10 dark:bg-white/5">
        <p className="text-xs font-bold text-indigo-600 dark:text-indigo-300">
          {locale === "pt" ? "ARTIGO" : "ARTICLE"}
        </p>

        <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
          {post.title}
        </h1>

        <p className="mt-3 text-zinc-600 dark:text-white/70">
          {post.excerpt}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 overflow-hidden rounded-full border border-zinc-200 dark:border-white/10">
              {/* Se não tiver imagem real, o alt já resolve */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.author.image || "/images/autores/pioneiros.jpg"}
                alt={post.author.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="font-extrabold">{post.author.name}</p>
              <p className="text-xs text-zinc-500 dark:text-white/50">
                {formatDate(post.publishedAt, locale)}
                {post.updatedAt ? ` • ${locale === "pt" ? "Atualizado" : "Updated"}: ${formatDate(post.updatedAt, locale)}` : ""}
              </p>
            </div>
          </div>

          <div className="ml-auto flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border px-2 py-0.5 text-xs font-semibold
                           border-zinc-200 text-zinc-600
                           dark:border-white/10 dark:text-white/70"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {post.coverImage && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.coverImage}
              alt={post.title}
              className="h-[220px] w-full object-cover md:h-[320px]"
              loading="lazy"
            />
          </div>
        )}
      </header>

      <section className="rounded-3xl border p-6 shadow-sm
                          border-zinc-200 bg-white
                          dark:border-white/10 dark:bg-white/5">
        <div className="prose max-w-none prose-zinc dark:prose-invert">
          {/* Render markdown-lite */}
          {(() => {
            const elements: React.ReactNode[] = [];
            let listBuffer: string[] = [];

            const flushList = (keyBase: string) => {
              if (listBuffer.length === 0) return;
              elements.push(
                <ul key={`${keyBase}-ul`}>
                  {listBuffer.map((li, i) => (
                    <li key={`${keyBase}-li-${i}`}>{li}</li>
                  ))}
                </ul>
              );
              listBuffer = [];
            };

            blocks.forEach((b, idx) => {
              if (b.type === "li") {
                listBuffer.push(b.text);
                return;
              }
              flushList(`b-${idx}`);

              if (b.type === "h2") {
                elements.push(<h2 key={`h2-${idx}`}>{b.text}</h2>);
                return;
              }

              // paragraphs keep line breaks
              const text = b.text.split("\n").map((line, i) => (
                <span key={`p-${idx}-${i}`}>
                  {line}
                  {i < b.text.split("\n").length - 1 ? <br /> : null}
                </span>
              ));

              elements.push(<p key={`p-${idx}`}>{text}</p>);
            });

            flushList("end");
            return elements;
          })()}
        </div>
      </section>

      <footer className="rounded-3xl border p-6 shadow-sm
                         border-zinc-200 bg-white
                         dark:border-white/10 dark:bg-white/5">
        <p className="text-sm text-zinc-600 dark:text-white/70">
          {locale === "pt"
            ? "Gostaste? Partilha e volta amanhã — o EverLight cresce com consistência."
            : "If it helped you, share it — consistency builds credibility."}
        </p>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/blog`}
            className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800
                       dark:bg-white dark:text-zinc-950 dark:hover:bg-white/90"
          >
            {locale === "pt" ? "Ver mais artigos" : "More articles"}
          </Link>

          <Link
            href={`/${locale}/library`}
            className="rounded-2xl border px-5 py-3 text-sm font-semibold
                       border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50
                       dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {locale === "pt" ? "Ir à Biblioteca" : "Go to Library"}
          </Link>
        </div>
      </footer>
    </article>
  );
          }
