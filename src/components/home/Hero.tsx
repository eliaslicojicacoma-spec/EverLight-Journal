import Link from "next/link";

export default function Hero({ locale }: { locale: string }) {
  const isPT = locale === "pt";

  return (
    <section className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5 sm:p-12">
      
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute -top-20 -right-20 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl dark:bg-amber-500/10" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl dark:bg-sky-500/10" />

      <div className="relative z-10 max-w-3xl">
        
        <div className="inline-block rounded-full border border-black/10 bg-white/60 px-4 py-2 text-xs tracking-[0.25em] text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
          ESPIRITUALIDADE & SOCIEDADE
        </div>

        <div className="mt-6 text-sm tracking-[0.3em] text-black/50 dark:text-white/50">
          EverLight Journal
        </div>

        {/* TÍTULO CORRIGIDO */}
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-black dark:text-white sm:text-5xl">
          {isPT ? (
            <>
              Voz{" "}
              <span className="bg-gradient-to-r from-black to-black/60 bg-clip-text text-transparent dark:from-white dark:to-white/70">
                Global
              </span>{" "}
              da Fé
            </>
          ) : (
            <>
              Global Voice of Faith
            </>
          )}
        </h1>

        <p className="mt-6 text-base text-black/70 dark:text-white/70 sm:text-lg">
          {isPT
            ? "Uma plataforma dedicada a conectar fé e sociedade de forma equilibrada, bíblica e relevante para os desafios contemporâneos."
            : "A platform dedicated to connecting faith and society in a balanced, biblical and relevant way for contemporary challenges."}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={`/${locale}/blog`}
            className="rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-black"
          >
            {isPT ? "Explorar Artigos" : "Explore Articles"}
          </Link>

          <Link
            href={`/${locale}#verse`}
            className="rounded-2xl border border-black/20 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
          >
            {isPT ? "Versículo do Dia" : "Verse of the Day"}
          </Link>

          <Link
            href={`/${locale}/library`}
            className="text-sm font-semibold text-black underline underline-offset-4 dark:text-white"
          >
            {isPT ? "Abrir Biblioteca →" : "Open Library →"}
          </Link>
        </div>
      </div>
    </section>
  );
            }
