import Image from "next/image";
import Link from "next/link";
import { getPostsByLocale, formatDate, getPostReadingTime } from "@/lib/blog";

type PageProps = {
  params: { locale: string };
  searchParams?: { q?: string; cat?: string };
};

export default function BlogIndexPage({ params, searchParams }: PageProps) {
  const { locale } = params;
  const isPT = locale === "pt";

  const q = (searchParams?.q ?? "").trim().toLowerCase();
  const cat = (searchParams?.cat ?? "").trim().toLowerCase();

  // ✅ AQUI está a correção: NÃO é getAllPosts(locale)
  const posts = getPostsByLocale(locale);

  const categories = Array.from(
    new Set(posts.map((p) => (p.category ?? "").toLowerCase()).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b));

  const filtered = posts.filter((p) => {
    const hay = `${p.title} ${p.excerpt} ${(p.tags ?? []).join(" ")} ${p.category ?? ""}`.toLowerCase();
    const okQ = q ? hay.includes(q) : true;
    const okCat = cat ? (p.category ?? "").toLowerCase() === cat : true;
    return okQ && okCat;
  });

  return (
    <main className="mx-auto max-w-6xl px-5 pb-20 pt-8">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=70"
            alt="Blog"
            fill
            priority
            className="object-cover opacity-70 dark:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/75 to-white/95 dark:from-zinc-950/45 dark:via-zinc-950/80 dark:to-zinc-950/95" />
        </div>

        <div className="relative p-6 sm:p-10">
          <div className="text-[11px] font-medium tracking-[0.22em] text-zinc-600 dark:text-zinc-300">
            {isPT ? "BLOG • FÉ & SOCIEDADE" : "BLOG • FAITH & SOCIETY"}
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {isPT ? "Artigos com clareza, contexto e aplicação prática." : "Articles with clarity, context, and practical action."}
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {isPT
              ? "Sem copiar conteúdo. Sempre com postura editorial séria e leitura fácil no telemóvel."
              : "No copying. Always with serious editorial posture and mobile-first readability."}
          </p>

          {/* Search + Filters */}
          <div className="mt-6 grid gap-3 sm:grid-cols-12">
            <form className="sm:col-span-8" action={`/${locale}/blog`} method="get">
              <div className="flex overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                <input
                  name="q"
                  defaultValue={searchParams?.q ?? ""}
                  placeholder={isPT ? "Pesquisar por título, tema, tags..." : "Search by title, topic, tags..."}
                  className="w-full bg-transparent px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:text-white"
                />
                {cat ? <input type="hidden" name="cat" value={cat} /> : null}
                <button
                  type="submit"
                  className="bg-zinc-900 px-5 py-3 text-xs font-semibold tracking-wide text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
                >
                  {isPT ? "Buscar" : "Search"}
                </button>
              </div>
            </form>

            <div className="sm:col-span-4">
              <form action={`/${locale}/blog`} method="get">
                {q ? <input type="hidden" name="q" value={q} /> : null}
                <select
                  name="cat"
                  defaultValue={cat}
                  className="w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
                >
                  <option value="">{isPT ? "Todas as categorias" : "All categories"}</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900/40"
                >
                  {isPT ? "Aplicar filtro" : "Apply filter"}
                </button>
              </form>

              {(q || cat) ? (
                <Link
                  href={`/${locale}/blog`}
                  className="mt-2 block text-center text-xs font-semibold text-zinc-700 underline decoration-zinc-700/30 underline-offset-4 hover:decoration-zinc-700/70 dark:text-zinc-200 dark:decoration-zinc-200/30 dark:hover:decoration-zinc-200/70"
                >
                  {isPT ? "Limpar filtros" : "Clear filters"}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">
            {isPT ? "Últimos artigos" : "Latest articles"}
          </h2>
          <div className="text-xs text-zinc-600 dark:text-zinc-300">
            {filtered.length} {isPT ? "resultados" : "results"}
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((p) => {
            const date = formatDate(p.publishedAt, locale);
            const mins = getPostReadingTime(p);

            return (
              <Link
                key={p.id}
                href={`/${locale}/blog/${p.slug}`}
                className="group overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="relative h-44">
                  <Image
                    src={
                      p.coverImage ||
                      "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0d?auto=format&fit=crop&w=1600&q=70"
                    }
                    alt={p.title}
                    fill
                    className="object-cover opacity-95 transition group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/92 via-white/20 to-transparent dark:from-zinc-950/92 dark:via-zinc-950/15" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-zinc-800 backdrop-blur dark:bg-zinc-950/50 dark:text-zinc-200">
                    {(p.category ?? (isPT ? "ARTIGO" : "ARTICLE")).toUpperCase()}
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400">
                    {date} • {mins} min
                  </div>

                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
                    {p.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 line-clamp-3">
                    {p.excerpt}
                  </p>

                  <div className="mt-4 text-xs font-semibold tracking-wide text-zinc-900 underline decoration-zinc-900/25 underline-offset-4 dark:text-white dark:decoration-white/25">
                    {isPT ? "LER ARTIGO →" : "READ →"}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-[24px] border border-zinc-200 bg-white p-6 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
            {isPT ? "Nenhum artigo encontrado com esses filtros." : "No posts found with those filters."}
          </div>
        ) : null}
      </section>
    </main>
  );
                    }
