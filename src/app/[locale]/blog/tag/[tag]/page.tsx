import Link from "next/link";
import { getBlogArticlesByTag, getBlogTags } from "@/content/blog/articles";
import { unslugify } from "@/utils/slug";

type PageProps = {
  params: { locale: string; tag: string };
};

export default function BlogTagPage({ params }: PageProps) {
  const { locale, tag } = params;

  const articles = getBlogArticlesByTag(tag);
  const humanTag = unslugify(tag);

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10">
      <div className="mb-8">
        <p className="text-sm text-zinc-400">
          <Link href={`/${locale}/blog`} className="hover:underline">
            Blog
          </Link>{" "}
          <span className="text-zinc-600">/</span>{" "}
          <span className="text-zinc-300">Tag</span>
        </p>

        <h1 className="mt-2 text-3xl font-semibold text-zinc-100">
          Tag: <span className="text-zinc-200">#{humanTag}</span>
        </h1>

        <p className="mt-2 text-zinc-400">
          {articles.length} artigo(s) com esta tag.
        </p>
      </div>

      {articles.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-zinc-300">
          Nada encontrado para esta tag.
        </div>
      ) : (
        <div className="space-y-4">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/${locale}/blog/${a.slug}`}
              className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10"
            >
              <div className="text-xs text-zinc-400">{a.publishedAt}</div>
              <div className="mt-1 text-lg font-semibold text-zinc-100">
                {locale === "en" ? a.title.en : a.title.pt}
              </div>
              <div className="mt-1 text-zinc-300">
                {locale === "en" ? a.excerpt.en : a.excerpt.pt}
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5">
        <div className="text-sm font-semibold text-zinc-100">Outras tags</div>
        <div className="mt-3 flex flex-wrap gap-2">
          {getBlogTags().map((t) => (
            <Link
              key={t}
              href={`/${locale}/blog/tag/${encodeURIComponent(t.toLowerCase().trim().replace(/\s+/g, "-"))}`}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-200 hover:bg-white/10"
            >
              #{t}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
                }
