import Link from "next/link";
import { getBlogArticles } from "@/content/blog/articles";

export default function BlogCategory({
  params,
}: {
  params: { locale: string; category: string };
}) {
  const locale = (params.locale === "en" ? "en" : "pt") as "pt" | "en";
  const cat = decodeURIComponent(params.category);
  const posts = getBlogArticles(locale).filter((p) => p.category === cat);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link className="text-sm underline text-white/70" href={`/${locale}/blog`}>
        {locale === "pt" ? "← Voltar ao blog" : "← Back to blog"}
      </Link>

      <h1 className="mt-4 text-3xl font-semibold">{cat}</h1>
      <p className="mt-2 text-sm text-white/70">
        {locale === "pt"
          ? `${posts.length} artigo(s) nesta categoria.`
          : `${posts.length} post(s) in this category.`}
      </p>

      <div className="mt-8 space-y-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/${locale}/blog/${p.slug}`}
            className="block rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <h2 className="text-lg font-medium">{p.title}</h2>
            <p className="mt-2 text-sm text-white/70">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
