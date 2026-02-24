"use client";

import { useMemo, useState } from "react";

type Book = {
  id: string;
  title: string;
  author: string;
  type: string;
  category: string;
  language: string;
  url: string;
};

type Resource = {
  id: string;
  title: string;
  category: string;
  language: string;
  url: string;
};

type Tab = "books" | "resources";

function uniqSorted(items: string[]) {
  return Array.from(new Set(items)).sort((a, b) => a.localeCompare(b));
}

export default function LibraryExplorer({
  locale,
  books,
  resources
}: {
  locale: "pt" | "en";
  books: Book[];
  resources: Resource[];
}) {
  const [tab, setTab] = useState<Tab>("books");
  const [q, setQ] = useState("");
  const [lang, setLang] = useState<"all" | "pt" | "en">("all");
  const [category, setCategory] = useState<string>("all");

  const data = tab === "books" ? books : resources;

  const categories = useMemo(() => {
    return uniqSorted(data.map((d: any) => d.category || "other"));
  }, [data]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    return data.filter((item: any) => {
      const okLang = lang === "all" ? true : (item.language || "").toLowerCase() === lang;
      const okCat = category === "all" ? true : (item.category || "") === category;

      const hay = `${item.title} ${item.author || ""} ${item.category || ""} ${(item.tags || []).join(" ")}`
        .toLowerCase();

      const okQ = query ? hay.includes(query) : true;

      return okLang && okCat && okQ;
    });
  }, [data, q, lang, category]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Library</h1>
          <p className="mt-1 text-zinc-600 dark:text-white/70">
            {locale === "pt"
              ? "Recursos oficiais e confiáveis. Sem links duvidosos."
              : "Official, trustworthy resources. No sketchy links."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setTab("books");
              setCategory("all");
              setQ("");
            }}
            className={`rounded-2xl border px-4 py-2 text-sm font-extrabold transition
              ${tab === "books"
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              }`}
            type="button"
          >
            {locale === "pt" ? "Livros" : "Books"}
          </button>

          <button
            onClick={() => {
              setTab("resources");
              setCategory("all");
              setQ("");
            }}
            className={`rounded-2xl border px-4 py-2 text-sm font-extrabold transition
              ${tab === "resources"
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950"
                : "border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              }`}
            type="button"
          >
            {locale === "pt" ? "Recursos" : "Resources"}
          </button>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={locale === "pt" ? "Pesquisar..." : "Search..."}
          className="md:col-span-2 w-full rounded-2xl border px-4 py-3 text-sm font-semibold outline-none
                     border-zinc-200 bg-white text-zinc-900 placeholder:text-zinc-400
                     focus:ring-2 focus:ring-indigo-500/30
                     dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-white/40"
        />

        <select
          value={lang}
          onChange={(e) => setLang(e.target.value as any)}
          className="w-full rounded-2xl border px-4 py-3 text-sm font-extrabold outline-none
                     border-zinc-200 bg-white text-zinc-900
                     dark:border-white/10 dark:bg-white/5 dark:text-white"
        >
          <option value="all">{locale === "pt" ? "Idioma: Todos" : "Language: All"}</option>
          <option value="pt">PT</option>
          <option value="en">EN</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-2xl border px-4 py-3 text-sm font-extrabold outline-none
                     border-zinc-200 bg-white text-zinc-900
                     dark:border-white/10 dark:bg-white/5 dark:text-white"
        >
          <option value="all">{locale === "pt" ? "Categoria: Todas" : "Category: All"}</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((item: any) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border p-5 shadow-sm transition hover:shadow-md
                       border-zinc-200 bg-white hover:bg-zinc-50
                       dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-300">
                {item.category || "other"}
              </span>
              <span className="rounded-full border px-2 py-0.5 text-xs font-semibold
                               border-zinc-200 text-zinc-600
                               dark:border-white/10 dark:text-white/70">
                {(item.language || "").toUpperCase()}
              </span>
            </div>

            <h3 className="mt-2 text-lg font-extrabold tracking-tight">
              {item.title}
            </h3>

            {item.author && (
              <p className="mt-1 text-sm text-zinc-600 dark:text-white/70">
                {item.author}
              </p>
            )}

            <p className="mt-3 text-sm font-extrabold text-indigo-600 dark:text-indigo-300">
              {locale === "pt" ? "Abrir →" : "Open →"}
            </p>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="rounded-2xl border p-5 text-sm
                        border-zinc-200 bg-white text-zinc-700
                        dark:border-white/10 dark:bg-white/5 dark:text-white/70">
          {locale === "pt"
            ? "Nada encontrado. Tenta outra palavra ou muda filtros."
            : "No results. Try another keyword or filters."}
        </div>
      )}
    </div>
  );
          }
