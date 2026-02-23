import BlogSearchGrid from "@/components/blog/BlogSearchGrid";
import { getAllPosts, getAllCategories } from "@/lib/posts";
import Link from "next/link";

export default async function BlogPage({
  params
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}) {
  const { locale } = await params;

  const posts = getAllPosts(locale);
  const categories = getAllCategories(locale);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border p-6 shadow-sm
                      border-zinc-200 bg-white
                      dark:border-white/10 dark:bg-white/5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold text-indigo-600 dark:text-indigo-300">
              {locale === "pt" ? "REVISTA DIGITAL" : "DIGITAL JOURNAL"}
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
              {locale === "pt" ? "Blog do EverLight Journal" : "EverLight Journal Blog"}
            </h1>
            <p className="mt-2 text-zinc-600 dark:text-white/70">
              {locale === "pt"
                ? "Conteúdo original com foco em sociedade e fé — com responsabilidade editorial."
                : "Original content on society and faith — with editorial responsibility."}
            </p>
          </div>

          <div className="w-full md:w-[360px]">
            <div className="rounded-2xl border p-4
                            border-zinc-200 bg-zinc-50
                            dark:border-white/10 dark:bg-white/5">
              <p className="text-sm font-bold">
                {locale === "pt" ? "Categorias" : "Categories"}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/${locale}/blog/category/${c.slug}`}
                    className="rounded-full border px-3 py-1 text-xs font-bold
                               border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50
                               dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:bg-white/10"
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
