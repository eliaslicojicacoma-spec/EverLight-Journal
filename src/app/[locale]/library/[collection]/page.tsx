import Image from "next/image";
import Link from "next/link";
import { getLibraryCollectionByKey, getCollectionTitle, getCollectionDesc } from "@/lib/library";

export default function LibraryCollectionPage({
  params,
}: {
  params: { locale: string; collection: string };
}) {
  const { locale, collection } = params;
  const isPT = locale === "pt";

  const c = getLibraryCollectionByKey(collection);
  if (!c) {
    return (
      <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <h1 className="text-xl font-semibold">{isPT ? "Coleção não encontrada." : "Collection not found."}</h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          {isPT ? "Volta para a Biblioteca." : "Go back to Library."}
        </p>
        <Link
          href={`/${locale}/library`}
          className="mt-4 inline-flex rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold dark:border-zinc-800 dark:bg-zinc-950"
        >
          {isPT ? "Biblioteca" : "Library"}
        </Link>
      </div>
    );
  }

  const title = getCollectionTitle(c, locale);
  const desc = getCollectionDesc(c, locale);

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src={c.heroImage}
            alt={title}
            fill
            priority
            className="object-cover opacity-70 dark:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/70 to-white/95 dark:from-zinc-950/45 dark:via-zinc-950/75 dark:to-zinc-950/95" />
        </div>

        <div className="relative p-6 sm:p-10">
          <div className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
            {isPT ? c.badgePT : c.badgeEN}
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{desc}</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/library`}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-white dark:hover:bg-zinc-900/40"
            >
              {isPT ? "Voltar" : "Back"}
            </Link>
          </div>
        </div>
      </section>

      {/* ITEMS */}
      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">{isPT ? "Recursos" : "Resources"}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              {isPT ? "Links oficiais + acesso rápido." : "Official links + quick access."}
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
            {isPT ? "Fonte oficial" : "Official source"}
          </span>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {c.items.map((it) => {
            const shareText = encodeURIComponent(`${it.title} — ${it.href}`);
            const shareLink = `https://wa.me/?text=${shareText}`; // WhatsApp share (mobile-friendly)

            return (
              <div
                key={it.id}
                className="overflow-hidden rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-base font-semibold">{it.title}</h3>
                    <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{it.desc}</p>

                    <div className="mt-3 text-xs text-zinc-600 dark:text-zinc-300">
                      <span className="font-semibold">{isPT ? "Fonte:" : "Source:"}</span>{" "}
                      <a className="underline underline-offset-4" href={it.sourceUrl} target="_blank" rel="noreferrer">
                        {it.sourceName}
                      </a>
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-col gap-2">
                    <a
                      href={it.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
                    >
                      {isPT ? "Abrir" : "Open"}
                    </a>

                    <a
                      href={it.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900/40"
                    >
                      {isPT ? "Fonte oficial" : "Official source"}
                    </a>

                    <a
                      href={shareLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900/40"
                    >
                      {isPT ? "Partilhar" : "Share"}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
          }
