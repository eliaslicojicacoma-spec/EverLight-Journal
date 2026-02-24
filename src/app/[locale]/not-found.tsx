import Link from "next/link";

export default function NotFound({
  params
}: {
  params: { locale: "pt" | "en" };
}) {
  const locale = params?.locale === "en" ? "en" : "pt";

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border p-7 shadow-sm
                      border-zinc-200 bg-white
                      dark:border-white/10 dark:bg-white/5">
        <p className="text-xs font-extrabold text-indigo-600 dark:text-indigo-300">
          404
        </p>

        <h1 className="mt-2 text-3xl font-extrabold tracking-tight">
          {locale === "pt" ? "Página não encontrada" : "Page not found"}
        </h1>

        <p className="mt-3 text-zinc-600 dark:text-white/70">
          {locale === "pt"
            ? "Esta página não existe (ou mudou de lugar)."
            : "This page does not exist (or moved)."}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/${locale}`}
            className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-extrabold text-white hover:bg-zinc-800
                       dark:bg-white dark:text-zinc-950 dark:hover:bg-white/90"
          >
            {locale === "pt" ? "Voltar para Home" : "Back to Home"}
          </Link>

          <Link
            href={`/${locale}/blog`}
            className="rounded-2xl border px-5 py-3 text-sm font-extrabold
                       border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50
                       dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {locale === "pt" ? "Ir ao Blog" : "Go to Blog"}
          </Link>

          <Link
            href={`/${locale}/library`}
            className="rounded-2xl border px-5 py-3 text-sm font-extrabold
                       border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50
                       dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {locale === "pt" ? "Ir à Biblioteca" : "Go to Library"}
          </Link>
        </div>
      </div>

      <div className="rounded-2xl border p-5 shadow-sm
                      border-zinc-200 bg-white
                      dark:border-white/10 dark:bg-white/5">
        <p className="text-sm text-zinc-600 dark:text-white/70">
          {locale === "pt"
            ? "Se chegaste aqui por um link quebrado, manda-nos o link para corrigirmos."
            : "If you got here from a broken link, send it so we can fix it."}
        </p>
      </div>
    </div>
  );
}
