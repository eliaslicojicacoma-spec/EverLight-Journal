import Image from "next/image";
import Link from "next/link";

export default function DonatePage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "APOIE O PROJETO" : "SUPPORT THE PROJECT",
    title: isPT ? "Doar / Apoiar" : "Donate / Support",
    desc: isPT
      ? "O EverLight Journal existe para servir — com qualidade, consistência e acesso. O teu apoio ajuda a manter o projeto vivo."
      : "EverLight Journal exists to serve — with quality, consistency, and access. Your support keeps the project alive.",
    how: isPT ? "Como podes ajudar" : "How you can help",
    opt1: isPT ? "Doação única" : "One-time donation",
    opt2: isPT ? "Apoio mensal" : "Monthly support",
    opt3: isPT ? "Divulgar o projeto" : "Share the project",
    note: isPT
      ? "PayPal:eliaslicojicacoma@gmail.com"
      : "Pix:elias-licoji-cacoma-273@jim.com",
    cta: isPT ? "Voltar ao Blog" : "Back to Blog",
  };

  const options = [
    {
      title: t.opt1,
      desc: isPT ? "Uma ajuda direta para custos e manutenção." : "A direct help for costs and upkeep.",
    },
    {
      title: t.opt2,
      desc: isPT ? "Sustenta consistência: conteúdo semanal + melhorias." : "Sustains consistency: weekly content + improvements.",
    },
    {
      title: t.opt3,
      desc: isPT ? "Partilha com 3 pessoas e já faz diferença." : "Share with 3 people — it helps a lot.",
    },
  ];

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=2200&q=70"
            alt="Donate"
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
              href={`/${locale}/donate`}
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm hover:brightness-95 dark:bg-amber-400"
            >
              {isPT ? "Quero apoiar" : "I want to support"}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-white dark:hover:bg-zinc-900/40"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-lg font-semibold">{t.how}</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {options.map((o) => (
            <div
              key={o.title}
              className="rounded-[24px] border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="text-base font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{o.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200 dark:bg-zinc-900/40 dark:ring-zinc-800">
          <p className="text-sm text-zinc-700 dark:text-zinc-300">{t.note}</p>
        </div>
      </section>
    </div>
  );
}
