import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { getBlogArticle, getBlogSlugs } from "@/content/blog/articles";

type PageProps = { params: { locale: string; slug: string } };

export async function generateStaticParams() {
  const locales = siteConfig.locales;
  const items: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    const slugs = getBlogSlugs(locale);
    for (const slug of slugs) items.push({ locale, slug });
  }

  return items;
}

export default function BlogArticlePage({ params }: PageProps) {
  const locale = (params?.locale ?? siteConfig.defaultLocale) as "pt" | "en";
  const isPT = locale === "pt";
  const slug = params?.slug ?? "";

  const article = getBlogArticle(locale, slug);
  if (!article) return notFound();

  return (
    <main className="space-y-10">
      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <div className="text-[11px] font-semibold tracking-[0.22em] text-black/50">
          {article.date} · {article.readTime} · {article.category.toUpperCase()}
        </div>

        <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-black">
          {article.title}
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/60">
          {article.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {article.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-semibold text-black/60"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <div className="prose prose-zinc max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-black/70">
            {article.content}
          </pre>
        </div>
      </section>

      <div className="flex gap-4">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center text-sm font-bold text-black/70 hover:text-black"
        >
          ← {isPT ? "Voltar ao Blog" : "Back to Blog"}
        </Link>

        <Link
          href={`/${locale}/blog/category/${encodeURIComponent(article.category)}`}
          className="inline-flex items-center text-sm font-bold text-black/70 hover:text-black"
        >
          {isPT ? "Ver categoria" : "See category"} →
        </Link>
      </div>
    </main>
  );
}
