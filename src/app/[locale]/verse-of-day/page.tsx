import Link from "next/link";
import { getVerseOfDay } from "@/lib/verse";

export default function VerseOfDayPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";
  const verse = getVerseOfDay(locale);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="card p-6 sm:p-10">
        <div className="text-[11px] tracking-[0.22em] text-black/55 dark:text-white/60">
          {isPT ? "VERSÍCULO DO DIA" : "VERSE OF THE DAY"}
        </div>

        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {isPT ? "A Palavra Viva" : "The Living Word"}
        </h1>

        <div className="mt-6 rounded-3xl border border-black/10 bg-white/60 p-6 dark:border-white/10 dark:bg-white/5 sm:p-8">
          <p className="text-lg leading-relaxed text-black/85 dark:text-white/85 sm:text-xl">
            “{verse.text}”
          </p>
          <p className="mt-4 text-sm text-black/60 dark:text-white/60">— {verse.ref}</p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/blog`}
            className="rounded-2xl bg-black px-5 py-3 text-xs font-semibold tracking-wide text-white"
          >
            {isPT ? "Explorar Artigos" : "Explore Articles"}
          </Link>

          <Link
            href={`/${locale}`}
            className="rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-xs font-semibold tracking-wide text-black dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            {isPT ? "Voltar ao Início" : "Back to Home"}
          </Link>
        </div>
      </div>
    </div>
  );
}
