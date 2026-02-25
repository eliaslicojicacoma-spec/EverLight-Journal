import Image from "next/image";
import Link from "next/link";
import SubscribeForm from "@/components/subscribe/SubscribeForm";

export default function SubscribePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isPT = locale === "pt";

  const t = {
    kicker: "NEWSLETTER",
    title: isPT ? "Inscrever-se" : "Subscribe",
    desc: isPT
      ? "Recebe devocionais, reflexões e artigos úteis. Sem spam. Sem drama. Só valor."
      : "Get devotionals, reflections, and useful articles. No spam. No drama. Just value.",
    cardTitle: isPT ? "O que tu vais receber" : "What you’ll get",
    perks: isPT
      ? ["Versículo do dia (curto)", "1 artigo forte por semana", "Recursos da Biblioteca", "Atualizações do projeto"]
      : ["Daily verse (short)", "1 strong article per week", "Library resources", "Project updates"],
    back: isPT ? "Voltar ao Blog" : "Back to Blog",
    note: isPT
      ? "Dica: no início, melhor enviar pouco e sempre (consistência > volume)."
      : "Tip: at the start, send less but consistently (consistency > volume).",
  };

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=70"
            alt="Subscribe background"
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

          <div className="mt-4 flex items-center gap-3">
            <div className="h-[1px] w-10 bg-zinc-900/25 dark:bg-white/20" />
            <div className="text-xs font-semibold tracking-[0.22em] text-zinc-900 dark:text-white">
              EverLight Journal
            </div>
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {t.desc}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              {t.back}
            </Link>
            <Link
              href={`/${locale}/verse-of-day`}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-white dark:hover:bg-zinc-900/40"
            >
              {isPT ? "Versículo do Dia →" : "Verse of the Day →"}
            </Link>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold">{t.cardTitle}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              {t.perks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <div className="mt-5 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-200 dark:bg-amber-500/10 dark:ring-amber-500/20">
              <p className="text-sm text-zinc-800 dark:text-zinc-200">{t.note}</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <SubscribeForm locale={locale} />
        </div>
      </section>
    </div>
  );
}
