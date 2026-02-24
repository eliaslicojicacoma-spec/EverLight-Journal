import Link from "next/link";
import BlogSearchGrid from "@/components/blog/BlogSearchGrid";
import { getPostsByCategory, getAllCategories } from "@/lib/posts";
import type { Metadata } from "next";
import { siteConfig } from "@/config/siteConfig";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: "pt" | "en"; category: string }>;
}): Promise<Metadata> {
  const { locale, category } = await params;

  const base = `https://${siteConfig.domain}`;
  const url = `${base}/${locale}/blog/category/${category}`;

  const title = locale === "pt" ? `Categoria: ${category}` : `Category: ${category}`;
  const description =
    locale === "pt"
      ? `Artigos do EverLight Journal na categoria "${category}".`
      : `EverLight Journal posts in "${category}".`;

  const image = `${base}/og/og-article.jpg`;

  return {
    title: `${title} • ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images: [{ url: image }] },
    twitter: { card: "summary_large_image", title, description, images: [image] }
  };
}

export default async function CategoryPage({
  params
}: {
  params: Promise<{ locale: "pt" | "en"; category: string }>;
}) {
  const { locale, category } = await params;

  const posts = getPostsByCategory(locale, category);
  const categories = getAllCategories(locale);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border p-6 shadow-sm
                      border-zinc-200 bg-white
                      dark:border-white/10 dark:bg-white/5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <Link
              href={`/${locale}/blog`}
              className="text-sm font-extrabold text-indigo-600 hover:underline dark:text-indigo-300"
            >
              ← {locale === "pt" ? "Voltar ao Blog" : "Back to Blog"}
            </Link>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
              {locale === "pt" ? "Categoria" : "Category"}: {category}
            </h1>
            <p className="mt-2 text-zinc-600 dark:text-white/70">
              {locale === "pt"
                ? `Artigos filtrados por "${category}".`
                : `Posts filtered by "${category}".`}
            </p>
          </div>

          <div className="w-full md:w-[360px]">
            <div className="rounded-2xl border p-4
                            border-zinc-200 bg-zinc-50
                            dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-extrabold">
                {locale === "pt" ? "Outras categorias" : "Other categories"}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${locale}/blog/category/${c.slug}`}
                    className={`rounded-full border px-3 py-1 text-xs font-extrabold
                      border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50
                      dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10
                      ${c.slug === category ? "ring-2 ring-indigo-500/30" : ""}`}
                  >
                    {c.slug} <span className="opacity-60">({c.count})</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <BlogSearchGrid locale={locale} posts={posts} basePath={`/${locale}/blog`} />
    </div>
  );
}
