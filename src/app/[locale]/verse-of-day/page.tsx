import Image from "next/image";
import Link from "next/link";

export default function VerseOfDayPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "INSPIRAÇÃO DIÁRIA" : "DAILY INSPIRATION",
    title: isPT ? "Versículo do Dia" : "Verse of the Day",
    desc: isPT
      ? "Um texto bíblico + uma reflexão curta com aplicação prática (sem enrolação)."
      : "A Bible text + a short reflection with practical application (no fluff).",
    cta1: isPT ? "Ver Blog" : "Go to Blog",
    cta2: isPT ? "Abrir Adventista →" : "Open Adventist →",
    blockTitle: isPT ? "A Palavra Viva" : "The Living Word",
    readMore: isPT ? "Explorar a Biblioteca" : "Explore the Library",
    tipsTitle: isPT ? "Modelo de reflexão (padrão EverLight)" : "Reflection template (EverLight standard)",
    tips: isPT
      ? [
          "1 ideia central em 1 frase",
          "2–3 linhas de contexto (o que o texto está a dizer)",
          "2 aplicações práticas (o que fazer hoje)",
          "1 oração simples (opcional)",
          "Fontes no fim (se citar comentário/EGW/etc.)",
        ]
      : [
          "1 central idea in 1 sentence",
          "2–3 lines of context (what the text is saying)",
          "2 practical actions (what to do today)",
          "1 simple prayer (optional)",
          "Sources at the end (if citing commentary/EGW/etc.)",
        ],
  };

  // Exemplo fixo (depois tu podes trocar por fetch/DB)
  const verse = {
    text: isPT
      ? "“Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho.”"
      : "“Your word is a lamp to my feet and a light to my path.”",
    ref: "— Salmos 119:105",
    reflectionTitle: isPT ? "Reflexão (curta e prática)" : "Reflection (short & practical)",
    reflection:
      isPT
        ? "Quando a vida fica confusa, a Palavra não remove todos os desafios — mas ilumina o próximo passo. Hoje, escolhe uma decisão pequena guiada pelo que Deus já te mostrou."
        : "When life gets confusing, the Word doesn’t remove all challenges — but it lights the next step. Today, choose one small decision guided by what God has already shown you.",
    actionsTitle: isPT ? "Ações para hoje" : "Actions for today",
    actions: isPT
      ? ["Separar 7 minutos para leitura + silêncio", "Anotar 1 decisão prática e cumprir"]
      : ["Set aside 7 minutes for reading + silence", "Write 1 practical decision and follow through"],
  };

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1548625361-58a9b86aa83b?auto=format&fit=crop&w=2200&q=70"
            alt="Verse background"
            fill
            priority
            className="object-cover opacity-70 dark:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/70 to-white/95 dark:from-zinc-950/45 dark:via-zinc-950/75 dark:to-zinc-950/95" />
        </div>

        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-[34px] bg-amber-200/40 blur-md dark:bg-amber-500/10" />
        <div className="pointer-events-none absolute -left-10 bottom-10 h-44 w-44 rounded-[34px] bg-sky-200/40 blur-md dark:bg-sky-500/10" />

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
              {t.cta1}
            </Link>
            <Link
              href={`/${locale}/adventist`}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-white dark:hover:bg-zinc-900/40"
            >
              {t.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* MAIN BLOCK */}
      <section className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold">{t.blockTitle}</h2>

            <div className="mt-4 rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-200 dark:bg-zinc-900/40 dark:ring-zinc-800">
              <p className="text-lg font-medium leading-relaxed text-zinc-900 dark:text-white">
                {verse.text}
              </p>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">{verse.ref}</p>
            </div>

            <div className="mt-5">
              <h3 className="text-base font-semibold">{verse.reflectionTitle}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {verse.reflection}
              </p>
            </div>

            <div className="mt-5">
              <h3 className="text-base font-semibold">{verse.actionsTitle}</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {verse.actions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6">
              <Link
                href={`/${locale}/library`}
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900/40"
              >
                {t.readMore}
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-base font-semibold">{t.tipsTitle}</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              {t.tips.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>

            <div className="mt-5 rounded-2xl bg-amber-50 p-4 ring-1 ring-amber-200 dark:bg-amber-500/10 dark:ring-amber-500/20">
              <p className="text-sm text-zinc-800 dark:text-zinc-200">
                {isPT
                  ? "Se quiser, eu também monto um sistema pra gerar o versículo do dia automaticamente (API/DB)."
                  : "If you want, I can also set up an automatic daily verse system (API/DB)."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
      }
