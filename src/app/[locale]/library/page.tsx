import Image from "next/image";
import Link from "next/link";
import { getLibraryCollections, getCollectionTitle, getCollectionDesc } from "@/lib/library";

export default function LibraryPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "RECURSOS & CURADORIA" : "RESOURCES & CURATION",
    title: isPT ? "Biblioteca Essencial" : "Essential Library",
    desc: isPT
      ? "Categorias internas com links oficiais, resumo e acesso rápido."
      : "Internal categories with official links, summary, and quick access.",
    section: isPT ? "Categorias" : "Categories",
    tip: isPT
      ? "Cada coleção tem: Abrir, Fonte oficial e Partilhar."
      : "Each collection has: Open, Official source and Share.",
  };

  const collections = getLibraryCollections();

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=2200&q=70"
            alt="Biblioteca"
            fill
            priority
            className="object-cover opacity-70 dark:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/70 to-white/95 dark:from-zinc-950/45 dark:via-zinc-950/75 dark:to-zinc-950/95" />
        </div>

        <div className="relative p-6 sm:p-10">
          <div className="text-[11px] font-medium tracking-[0.22em] text-zinc-600 dark:text-zinc-300">
            {t.kicker}
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {t.desc}
          </p>

          <div className="mt-5 rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200 dark:bg-zinc-900/40 dark:ring-zinc-800">
            <p className="text-sm text-zinc-700 dark:text-zinc-300">{t.tip}</p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-lg font-semibold">{t.section}</h2>
          </div>
          <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
            Premium
          </span>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((c) => (
            <Link
              key={c.key}
              href={`/${locale}/library/${c.key}`}
              className="group overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="relative h-36">
                <Image
                  src={c.heroImage}
                  alt={getCollectionTitle(c, locale)}
                  fill
                  className="object-cover opacity-90 transition group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/25 to-transparent dark:from-zinc-950/85 dark:via-zinc-950/20" />
                <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-zinc-800 backdrop-blur dark:bg-zinc-950/55 dark:text-zinc-200">
                  {isPT ? c.badgePT : c.badgeEN}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold">{getCollectionTitle(c, locale)}</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
                  {getCollectionDesc(c, locale)}
                </p>
                <div className="mt-4 text-xs font-semibold tracking-wide text-zinc-900 underline decoration-zinc-900/25 underline-offset-4 dark:text-white dark:decoration-white/25">
                  {isPT ? "ABRIR →" : "OPEN →"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
