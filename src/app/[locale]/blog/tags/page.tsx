import Link from "next/link";
import { getBlogArticles } from "@/content/blog/articles";

type PageProps = {
  params: { locale: string };
};

function normalizeTag(tag: string) {
  return tag.trim();
}

function tagToSlug(tag: string) {
  return encodeURIComponent(tag.trim().toLowerCase());
}

export default function BlogTagsPage({ params }: PageProps) {
  const { locale } = params;

  const articles = getBlogArticles();
  const counts = new Map<string, number>();

  for (const a of articles) {
    const tags = (a.tags ?? []).map(normalizeTag).filter(Boolean);
    for (const t of tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }

  const tagsSorted = Array.from(counts.entries())
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([tag, count]) => ({ tag, count }));

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Tags</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Explora os temas do blog por tag.
        </p>
      </div>

      {tagsSorted.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-zinc-300">
          Ainda não há tags.
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {tagsSorted.map(({ tag, count }) => (
            <Link
              key={tag}
              href={`/${locale}/blog/tags/${tagToSlug(tag)}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-base font-medium text-zinc-100 group-hover:text-white">
                    {tag}
                  </div>
                  <div className="mt-1 text-xs text-zinc-400">
                    {count} artigo{count === 1 ? "" : "s"}
                  </div>
                </div>

                <div className="text-zinc-500 group-hover:text-zinc-300">→</div>
              </div>
            </Link>
          ))}
        </div>
      )}

      <div className="mt-10">
        <Link
          href={`/${locale}/blog`}
          className="text-sm text-zinc-300 hover:text-white"
        >
          ← Voltar ao Blog
        </Link>
      </div>
    </main>
  );
}
