import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { getBlogArticles, getBlogCategories } from "@/content/blog/articles";
import ArticleCard from "@/components/blog/ArticleCard";

type PageProps = {
  params: { locale: string; category: string };
};

export function generateStaticParams() {
  const locales = siteConfig.locales;
  const items: { locale: string; category: string }[] = [];

  for (const locale of locales) {
    const categories = getBlogCategories(locale);
    for (const category of categories) items.push({ locale, category });
  }

  return items;
}

export function generateMetadata({ params }: PageProps) {
  const locale = params?.locale === "en" ? "en" : "pt";
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
  const locale = params?.locale === "en" ? "en" : "pt";
  const category = decodeURIComponent(params?.category ?? "");

  const articles = getBlogArticles(locale).filter(
    (a) => a.category.toLowerCase() === category.toLowerCase()
  );

  const isPT = locale === "pt";

  return (
    <main className="space-y-10">
      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
        <div className="text-[11px] font-semibold tracking-[0.22em] text-black/60">
          {isPT ? "BLOG · CATEGORIA" : "BLOG · CATEGORY"}
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black">
          {category}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
          {isPT
            ? "Explora artigos relacionados com esta categoria."
            : "Explore articles related to this category."}
        </p>

        <div className="mt-5">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm font-bold text-black underline decoration-black/30 underline-offset-4 hover:decoration-black/70"
          >
            {isPT ? "Voltar ao Blog" : "Back to Blog"}
            <span>→</span>
          </Link>
        </div>
      </section>

      {articles.length === 0 ? (
        <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
          <p className="text-sm text-black/60">
            {isPT
              ? "Ainda não há artigos nesta categoria."
              : "There are no articles in this category yet."}
          </p>
        </section>
      ) : (
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {articles.map((a) => (
            <ArticleCard
              key={a.slug}
              category={a.category}
              title={a.title}
              summary={a.summary}
              context={a.excerpt}
              actions={[
                isPT ? "Ler o artigo completo" : "Read the full article",
                isPT ? "Anotar 3 ideias" : "Write 3 takeaways",
                isPT ? "Orar e aplicar" : "Pray and apply",
              ]}
              href={`/${locale}/blog/${a.slug}`}
            />
          ))}
        </section>
      )}
    </main>
  );
          }
