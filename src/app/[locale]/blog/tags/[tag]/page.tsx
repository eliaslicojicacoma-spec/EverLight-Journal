import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogArticles } from "@/content/blog/articles";
import { t } from "@/lib/i18nText";

type PageProps = {
  params: { locale: string; tag: string };
};

function decodeTagSlug(tagSlug: string) {
  try {
    return decodeURIComponent(tagSlug);
  } catch {
    return tagSlug;
  }
}

function normalizeTag(tag: string) {
  return tag.trim().toLowerCase();
}

export default function BlogTagPage({ params }: PageProps) {
  const { locale, tag } = params;

  const tagLabel = decodeTagSlug(tag);
  const tagNorm = normalizeTag(tagLabel);

  const articles = getBlogArticles();

  const filtered = articles.filter((a) =>
    (a.tags ?? []).some((t) => normalizeTag(t) === tagNorm)
  );

  if (filtered.length === 0) return notFound();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10">
      <div className="mb-6">
        <div className="text-xs text-zinc-400">Tag</div>
        <h1 className="text-3xl font-semibold tracking-tight">{tagLabel}</h1>
        <p className="mt-2 text-sm text-zinc-400">
          {filtered.length} artigo{filtered.length === 1 ? "" : "s"} com esta tag.
        </p>
      </div>

      <div className="space-y-3">
        {filtered.map((a) => (
          <Link
            key={a.slug}
            href={`/${locale}/blog/${a.slug}`}
            className="block rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
          >
            <div className="text-lg font-medium text-zinc-100">{t((a as any).title, params.locale)}</div>
            {a.excerpt ? (
              <p className="mt-2 text-sm text-zinc-400">{t((a as any).excerpt, params.locale)}</p>
            ) : null}

            <div className="mt-3 flex flex-wrap gap-2">
              {(a.tags ?? []).map((t) => (
                <span
                  key={`${a.slug}-${t}`}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-zinc-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        <Link
          href={`/${locale}/blog/tags`}
          className="text-sm text-zinc-300 hover:text-white"
        >
          ← Todas as tags
        </Link>
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