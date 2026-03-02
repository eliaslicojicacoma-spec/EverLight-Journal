import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { getBlogArticles, getBlogCategories } from "@/content/blog/articles";

type PageProps = {
  params: { locale: string; category: string };
};

export async function generateStaticParams() {
  const locales = siteConfig.locales;
  const items: { locale: string; category: string }[] = [];

  for (const locale of locales) {
    const categories = getBlogCategories(locale);
    for (const category of categories) items.push({ locale, category });
  }

  return items;
}

export function generateMetadata({ params }: PageProps) {
  const locale = (params?.locale ?? siteConfig.defaultLocale) as "pt" | "en";
  const category = decodeURIComponent(params?.category ?? "");

  const base = siteConfig.url;
  const url = `${base}/${locale}/blog/category/${encodeURIComponent(category)}`;

  const title =
    locale === "pt"
      ? `Categoria: ${category} | EverLight Journal`
      : `Category: ${category} | EverLight Journal`;

  const description =
    locale === "pt"
      ? `Artigos do EverLight Journal na categoria "${category}".`
      : `EverLight Journal articles in the "${category}" category.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
  };
}

export default function CategoryPage({ params }: PageProps) {
  const locale = (params?.locale ?? siteConfig.defaultLocale) as "pt" | "en";
  const isPT = locale === "pt";
  const category = decodeURIComponent(params?.category ?? "");

  const articles = getBlogArticles(locale).filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <main className="space-y-10">
      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <div className="text-[11px] font-semibold tracking-[0.22em] text-black/60">
          {isPT ? "BLOG · CATEGORIA" : "BLOG · CATEGORY"}
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black">
          {category}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
          {isPT
            ? `Artigos do EverLight Journal na categoria "${category}".`
            : `EverLight Journal articles in the "${category}" category.`}
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {articles.map((a) => (
          <article
            key={`${a.locale}-${a.slug}`}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <div className="text-[11px] font-semibold tracking-[0.22em] text-black/50">
              {a.date} · {a.readTime} · {a.category.toUpperCase()}
            </div>

            <h2 className="mt-3 text-2xl font-semibold leading-tight text-black">
              {a.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-black/60">
              {a.summary}
            </p>

            <div className="mt-5">
              <Link
                href={`/${locale}/blog/${a.slug}`}
                className="inline-flex items-center border-b-2 border-black pb-1 text-sm font-bold transition hover:border-black/50 hover:text-black/60"
              >
                {isPT ? "Ler" : "Read"}
                <span className="ml-2">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>

      <div>
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center text-sm font-bold text-black/70 hover:text-black"
        >
          ← {isPT ? "Voltar ao Blog" : "Back to Blog"}
        </Link>
      </div>
    </main>
  );
}
