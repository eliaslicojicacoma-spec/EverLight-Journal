"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export default function BlogSearchGrid({
  locale,
  posts,
  basePath
}: {
  locale: "pt" | "en";
  posts: BlogPost[];
  basePath: string; // ex: "/pt/blog"
}) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return posts;

    return posts.filter((p) => {
      const hay = `${p.title} ${p.excerpt} ${p.category} ${p.tags.join(" ")}`.toLowerCase();
      return hay.includes(query);
    });
  }, [q, posts]);

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Blog</h1>
          <p className="mt-1 text-zinc-600 dark:text-white/70">
            Artigos originais, com profundidade e clareza.
          </p>
        </div>

        <div className="w-full md:w-[360px]">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={locale === "pt" ? "Pesquisar artigos..." : "Search articles..."}
            className="w-full rounded-2xl border px-4 py-3 text-sm font-semibold outline-none
                       border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400
                       focus:ring-2 focus:ring-indigo-500/30
                       dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.id}
            href={`${basePath}/${p.slug}`}
            className="group rounded-2xl border p-5 shadow-sm transition hover:shadow-md
                       border-zinc-200 bg-white hover:bg-zinc-50
                       dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300">
                {p.category}
              </span>
              <span className="text-xs text-zinc-500 dark:text-white/50">
                {formatDate(p.publishedAt, locale)}
              </span>
            </div>

            <h3 className="mt-2 text-lg font-extrabold tracking-tight text-zinc-900 dark:text-white">
              {p.title}
            </h3>

            <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
              {p.excerpt}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-2 py-0.5 text-xs font-semibold
                             border-zinc-200 text-zinc-600
                             dark:border-white/10 dark:text-white/70"
                >
                  #{t}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm font-bold text-indigo-600 dark:text-indigo-300">
              {locale === "pt" ? "Ler artigo →" : "Read →"}
            </p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border p-5 text-sm
                        border-zinc-200 bg-white text-zinc-700
                        dark:border-white/10 dark:bg-white/5 dark:text-white/70">
          {locale === "pt" ? "Nenhum resultado. Tenta outra palavra." : "No results. Try another keyword."}
        </div>
      )}
    </div>
  );
}
