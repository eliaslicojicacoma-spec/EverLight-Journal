import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  formatDate,
  getPostBySlug,
  getPostReadingTime,
  getRelatedPosts,
} from "@/lib/blog";

type PageProps = {
  params: { locale: string; slug: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = params;
  const post = getPostBySlug(locale, slug);
  if (!post) return {};

  const title = `${post.title} • EverLight Journal`;
  const description = post.excerpt;
  const ogImage = post.ogImage || post.coverImage || "/og/og-article.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      images: [{ url: ogImage }],
      locale: locale === "pt" ? "pt_PT" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function renderContent(lines: string[]) {
  const out: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = (lines[i] ?? "").trim();

    // H2
    if (line.startsWith("## ")) {
      out.push(
        <h2 key={`h2-${i}`} className="mt-10 scroll-mt-28 text-2xl font-semibold tracking-tight">
          {line.replace(/^##\s+/, "")}
        </h2>
      );
      i++;
      continue;
    }

    // Lista "- "
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && (lines[i] ?? "").trim().startsWith("- ")) {
        items.push((lines[i] ?? "").trim().replace(/^-+\s+/, ""));
        i++;
      }
      out.push(
        <ul key={`ul-${i}`} className="mt-4 list-disc space-y-2 pl-6 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-200">
          {items.map((it, idx) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Linha vazia
    if (!line) {
      i++;
      continue;
    }

    // Parágrafo
    out.push(
      <p key={`p-${i}`} className="mt-4 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-200">
        {lines[i]}
      </p>
    );
    i++;
  }

  return out;
}

export default function ArticlePage({ params }: PageProps) {
  const { locale, slug } = params;
  const isPT = locale === "pt";

  const post = getPostBySlug(locale, slug);
  if (!post) return notFound();

  const readingTime = getPostReadingTime(post);
  const published = formatDate(post.publishedAt, locale);
  const updated = post.updatedAt ? formatDate(post.updatedAt, locale) : null;

  const related = getRelatedPosts(locale, post, 3);

  const siteUrl = "https://ever-light-journal.vercel.app"; // se tiveres domínio, trocamos depois
  const url = `${siteUrl}/${locale}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [post.coverImage || "/og/og-article.jpg"],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author?.name || "EverLight Journal",
    },
    publisher: {
      "@type": "Organization",
      name: "EverLight Journal",
    },
    mainEntityOfPage: url,
  };

  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-8">
      {/* Top bar */}
      <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-600 dark:text-zinc-300">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900/40"
        >
          ← {isPT ? "Voltar ao Blog" : "Back to Blog"}
        </Link>

        {post.category ? (
          <span className="rounded-full bg-zinc-100 px-3 py-1 font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
            {post.category}
          </span>
        ) : null}

        <span className="text-zinc-400">•</span>
        <span>
          {published} {updated ? `(${isPT ? "atualizado" : "updated"}: ${updated})` : ""}
        </span>
        <span className="text-zinc-400">•</span>
        <span>{readingTime} min</span>
      </div>

      {/* HERO */}
      <section className="mt-6 overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div className="relative aspect-[16/8] w-full">
          <Image
            src={post.coverImage || "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0d?auto=format&fit=crop&w=1800&q=70"}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/30 to-transparent dark:from-zinc-950/92 dark:via-zinc-950/20" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-[36px] bg-sky-200/50 blur-md dark:bg-sky-500/10" />
          <div className="pointer-events-none absolute -left-12 bottom-10 h-56 w-56 rounded-[36px] bg-amber-200/45 blur-md dark:bg-amber-500/10" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            <div className="text-[11px] font-medium tracking-[0.22em] text-zinc-600 dark:text-zinc-300">
              {isPT ? "EVERLIGHT JOURNAL • FÉ & SOCIEDADE" : "EVERLIGHT JOURNAL • FAITH & SOCIETY"}
            </div>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {post.excerpt}
            </p>
          </div>
        </div>

        {/* AUTHOR STRIP */}
        <div className="flex flex-col gap-4 border-t border-zinc-200 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src={post.author?.image || "/images/autores/elias-licoji-cacoma.jpg"}
                alt={post.author?.name || "Autor"}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                {post.author?.name || "EverLight Journal"}
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-300">
                {isPT ? "Edição & Curadoria" : "Editorial & Curation"}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {(post.tags ?? []).slice(0, 6).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* BODY + SIDEBAR */}
      <section className="mt-10 grid gap-8 lg:grid-cols-12">
        {/* CONTENT */}
        <article className="lg:col-span-8">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 sm:p-10 dark:border-zinc-800 dark:bg-zinc-950">
            <div className="prose prose-zinc max-w-none dark:prose-invert">
              {renderContent(post.content)}
            </div>

            {/* MID CTA */}
            <div className="mt-12 rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/40">
              <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                {isPT ? "Receba os próximos artigos no teu email" : "Get the next articles in your inbox"}
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                {isPT
                  ? "Sem spam. Só conteúdo útil — fé com clareza e vida real."
                  : "No spam. Just useful content — faith with clarity and real life."}
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <Link
                  href={`/${locale}/subscribe`}
                  className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-xs font-semibold tracking-wide text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
                >
                  {isPT ? "Inscrever na Newsletter" : "Subscribe to Newsletter"}
                </Link>
                <Link
                  href={`/${locale}/donate`}
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-xs font-semibold tracking-wide text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900/40"
                >
                  {isPT ? "Apoiar o projeto" : "Support the project"}
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4 space-y-4">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h3 className="text-sm font-semibold">{isPT ? "Resumo rápido" : "Quick summary"}</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-200">
              <li>• {isPT ? "Leitura" : "Reading"}: {readingTime} min</li>
              <li>• {isPT ? "Publicado" : "Published"}: {published}</li>
              {updated ? <li>• {isPT ? "Atualizado" : "Updated"}: {updated}</li> : null}
              <li>• {isPT ? "Autor" : "Author"}: {post.author?.name || "EverLight Journal"}</li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h3 className="text-sm font-semibold">{isPT ? "Leia também" : "Related reads"}</h3>
            <div className="mt-4 space-y-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/${locale}/blog/${p.slug}`}
                  className="group block rounded-2xl border border-zinc-200 bg-white p-4 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-900/40"
                >
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {p.category ? p.category : isPT ? "Artigo" : "Article"}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-zinc-900 group-hover:underline dark:text-white">
                    {p.title}
                  </div>
                  <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-300 line-clamp-2">
                    {p.excerpt}
                  </div>
                </Link>
              ))}
              {related.length === 0 ? (
                <div className="text-sm text-zinc-600 dark:text-zinc-300">
                  {isPT ? "Sem relacionados ainda." : "No related posts yet."}
                </div>
              ) : null}
            </div>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h3 className="text-sm font-semibold">{isPT ? "Ação prática" : "Practical action"}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
              {isPT
                ? "Escolhe 1 ideia do texto e aplica hoje. Consistência > intensidade. 😄"
                : "Pick 1 idea and apply it today. Consistency > intensity. 😄"}
            </p>
          </div>
        </aside>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
              }
