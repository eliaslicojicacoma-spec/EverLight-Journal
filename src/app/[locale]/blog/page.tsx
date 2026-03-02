import Link from "next/link";
import { getBlogArticles } from "@/content/blog/articles";

export default function BlogIndex({ params }: { params: { locale: string } }) {
  const locale = (params.locale === "en" ? "en" : "pt") as "pt" | "en";
  const posts = getBlogArticles(locale);

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="mt-2 text-sm text-white/70">
        {locale === "pt"
          ? "Artigos recentes do EverLight Journal."
          : "Latest articles from EverLight Journal."}
      </p>

      <div className="mt-8 space-y-4">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/${locale}/blog/${p.slug}`}
            className="block rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-medium">{p.title}</h2>
              <span className="text-xs text-white/60">{p.publishedAt}</span>
            </div>
            <p className="mt-2 text-sm text-white/70">{p.excerpt}</p>
            <div className="mt-3 text-xs text-white/60">
              {p.category}{p.readingTime ? ` • ${p.readingTime} min` : ""}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
