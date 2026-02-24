import Link from "next/link";
import FeaturedPosts from "@/components/home/FeaturedPosts";

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}) {
  const { locale } = await params;

  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-7 shadow-sm
                          dark:border-white/10 dark:from-white/5 dark:to-white/0">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-extrabold
                        border-zinc-200 bg-white text-zinc-700
                        dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          PT/EN • Revista Digital • AdSense-ready
        </div>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          EverLight Journal
        </h1>

        <p className="mt-3 max-w-2xl text-base text-zinc-600 dark:text-white/70">
          {locale === "pt"
            ? "Sociedade com visão global, fé com profundidade. Conteúdo original, moderno e confiável."
            : "Global society, grounded faith. Original, modern, trustworthy content."}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/society`}
            className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-zinc-800
                       dark:bg-white dark:text-zinc-950 dark:hover:bg-white/90"
          >
            {locale === "pt" ? "Ver Society" : "Go to Society"}
          </Link>

          <Link
            href={`/${locale}/adventist`}
            className="rounded-2xl border px-5 py-3 text-sm font-extrabold
                       border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50
                       dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {locale === "pt" ? "Ver Adventist" : "Go to Adventist"}
          </Link>

          <Link
            href={`/${locale}/library`}
            className="rounded-2xl border px-5 py-3 text-sm font-extrabold
                       border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50
                       dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {locale === "pt" ? "Ir para Biblioteca" : "Go to Library"}
          </Link>

          <Link
            href={`/${locale}/verse-of-day`}
            className="rounded-2xl border px-5 py-3 text-sm font-extrabold
                       border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50
                       dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {locale === "pt" ? "Versículo do Dia" : "Verse of the Day"}
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Society",
            desc:
              locale === "pt"
                ? "Atualidade com clareza, contexto e ação."
                : "News with clarity, context, and action."
          },
          {
            title: "Adventist",
            desc:
              locale === "pt"
                ? "Curadoria + aplicação prática. Fé com inteligência."
                : "Curation + practical application. Faith with depth."
          },
          {
            title: "Library",
            desc:
              locale === "pt"
                ? "Links oficiais e seguros (EGW + recursos missionários)."
                : "Official, safe links (EGW + mission resources)."
          }
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border p-5 shadow-sm
                       border-zinc-200 bg-white
                       dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-lg font-extrabold">{c.title}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-white/70">
              {c.desc}
            </p>
          </div>
        ))}
      </section>

      <FeaturedPosts locale={locale} />
    </div>
  );
}
