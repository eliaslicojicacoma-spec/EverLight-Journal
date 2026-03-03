import Link from "next/link";
import { redirect } from "next/navigation";

import { getBlogArticles } from "@/content/blog/articles";

// Se já tens slugify em src/utils/slugify.ts, importa daqui em vez disso.
// Ex: import { slugify } from "@/utils/slugify";
function slugify(input: string) {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type PageProps = {
  params: { locale: string; tag: string };
};

export default function TagPage({ params }: PageProps) {
  const locale = params.locale;
  const rawTagParam = decodeURIComponent(params.tag);

  // Canonical slug (sempre minúsculo)
  const canonicalTagSlug = slugify(rawTagParam);

  // Se o user abriu com maiúsculas/espacos/etc, redireciona pro canonical
  if (params.tag !== canonicalTagSlug) {
    redirect(`/${locale}/blog/tags/${canonicalTagSlug}`);
  }

  const articles = getBlogArticles(locale);

  // Match por slug da tag (não por texto exato)
  const filtered = articles.filter((a) =>
    (a.tags ?? []).some((t) => slugify(t) === canonicalTagSlug)
  );

  // Se não encontrou, mostra página simples (ou podes chamar notFound())
  if (filtered.length === 0) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Tag não encontrada</h1>
        <p className="mt-2 text-sm text-zinc-400">
          Não há artigos com esta tag.
        </p>

        <div className="mt-6">
          <Link
            href={`/${locale}/blog/tags`}
            className="inline-flex rounded-lg border border-white/10 px-4 py-2 text-sm hover:bg-white/5"
          >
            Voltar às tags
          </Link>
        </div>
      </main>
    );
  }

  // Pega o “nome bonito” (primeira tag real encontrada)
  const displayName =
    filtered[0]?.tags?.find((t) => slugify(t) === canonicalTagSlug) ??
    rawTagParam;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <div className="mb-6">
        <Link
          href={`/${locale}/blog/tags`}
          className="text-sm text-zinc-400 hover:text-zinc-200"
        >
          ← Voltar às tags
        </Link>
      </div>

      <h1 className="text-3xl font-semibold">{displayName}</h1>
      <p className="mt-2 text-sm text-zinc-400">
        {filtered.length} artigo(s) nesta tag.
      </p>

      <div className="mt-8 space-y-3">
        {filtered.map((a) => (
          <Link
            key={a.slug}
            href={`/${locale}/blog/${a.slug}`}
            className="block rounded-xl border border-white/10 p-4 hover:bg-white/5"
          >
            <div className="text-lg font-medium">{a.title}</div>
            {a.excerpt ? (
              <div className="mt-1 text-sm text-zinc-400">{a.excerpt}</div>
            ) : null}
          </Link>
        ))}
      </div>
    </main>
  );
      }
