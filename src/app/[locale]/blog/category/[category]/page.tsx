import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { getBlogArticles, getBlogCategories } from "@/content/blog/articles";

type PageProps = {
  params: { locale: string; category: string };
};

export function generateStaticParams() {
  const locales = ["pt", "en"];
  const items: { locale: string; category: string }[] = [];

  for (const locale of locales) {
    const categories = getBlogCategories(locale);
    for (const category of categories) items.push({ locale, category });
  }

  return items;
}

export function generateMetadata({ params }: PageProps) {
  const locale = params?.locale ?? "pt";
  const category = decodeURIComponent(params?.category ?? "");

  const base = siteConfig.url;
  const url = `${base}/${locale}/blog/category/${encodeURIComponent(category)}`;

  const title =
    locale === "pt"
      ? `Categoria: ${category} | EverLight Journal`
      : `Category: ${category} | EverLight Journal`;

  const description =
    locale === "pt"
      ? `Artigos do EverLight Journal na categoria “${category}”.`
      : `EverLight Journal articles in the “${category}” category.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default function CategoryPage({ params }: PageProps) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";
  const category = decodeURIComponent(params?.category ?? "");

  const articles = getBlogArticles(locale).filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <main className="space-y-10">
      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm sm:p-10">
        <div className="text-[11px] font-semibold tracking-[0.22em] text-black/55">
          {isPT ? "BLOG • CATEGORIA" : "BLOG • CATEGORY"}
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-5xl">
          {category}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
          {isPT
            ? "Artigos selecionados com foco em clareza, Bíblia e aplicação prática."
            : "Curated articles with clarity, Bible grounding, and practical application."}
        </p>

        <div className="mt-6">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center rounded-2xl border border-black/10 bg-white px-5 py-2.5 text-xs font-semibold text-black shadow-sm transition hover:bg-black/5"
          >
            {isPT ? "← Voltar ao Blog" : "← Back to Blog"}
          </Link>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <article
            key={a.slug}
            className="flex flex-col rounded-[28px] border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
              {a.category}
            </div>

            <h2 className="mt-2 text-2xl font-bold leading-tight text-black">
              {a.title}
            </h2>

            <p className="mt-4 border-l-2 border-black pl-4 text-base italic leading-relaxed text-black/70">
              {a.excerpt}
            </p>

            <div className="mt-auto pt-6">
              <Link
                href={`/${locale}/blog/${a.slug}`}
                className="inline-flex items-center border-b-2 border-black pb-1 text-sm font-bold transition hover:border-black/50 hover:text-black/60"
              >
                {isPT ? "Ler" : "Read"} <span className="ml-2">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      {articles.length === 0 && (
        <section className="rounded-[28px] border border-black/10 bg-white p-8 text-center text-black/70 shadow-sm">
          {isPT
            ? "Ainda não há artigos nesta categoria."
            : "There are no articles in this category yet."}
        </section>
      )}
    </main>
  );
                }
