import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { getBlogArticle, getBlogSlugs } from "@/content/blog/articles";

type PageProps = {
  params: { locale: string; slug: string };
};

export async function generateStaticParams() {
  const locales = siteConfig.locales as readonly string[];
  const items: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const slugs = getBlogSlugs(locale);
    for (const slug of slugs) items.push({ locale, slug });
  }

  return items;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = params?.locale ?? siteConfig.defaultLocale;
  const slug = params?.slug ?? "";
  const article = getBlogArticle(locale, slug);

  if (!article) return { title: "Artigo não encontrado | EverLight Journal" };

  const base = siteConfig.url;
  const url = `${base}/${locale}/blog/${article.slug}`;

  return {
    title: `${article.title} | EverLight Journal`,
    description: article.summary,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.summary,
      url,
      images: article.image ? [{ url: `${base}${article.image}` }] : undefined,
    },
  };
}

export default function BlogSlugPage({ params }: PageProps) {
  const locale = params?.locale ?? siteConfig.defaultLocale;
  const isPT = locale === "pt";
  const slug = params?.slug ?? "";

  const article = getBlogArticle(locale, slug);
  if (!article) notFound();

  return (
    <main className="space-y-10">
      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <div className="text-[11px] font-semibold tracking-[0.22em] text-black/50">
          {article.date} · {article.readTime} · {article.category.toUpperCase()}
        </div>

        <h1 className="mt-3 text-4xl font-bold leading-tight text-black">
          {article.title}
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/60">
          {article.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {(article.tags ?? []).map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-semibold text-black/60"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center border-b-2 border-black pb-1 text-sm font-bold transition hover:border-black/50 hover:text-black/60"
          >
            {isPT ? "Voltar ao Blog" : "Back to Blog"} <span className="ml-2">→</span>
          </Link>
        </div>
      </section>

      <article className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </main>
  );
}
