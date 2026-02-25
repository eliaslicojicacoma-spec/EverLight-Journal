import Image from "next/image";
import Link from "next/link";

export default function SocietyPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const pillars = [
    {
      title: "Ética digital & desinformação",
      desc: "Como verificar fontes, interpretar manchetes, evitar manipulação e preservar saúde mental.",
    },
    {
      title: "Educação & juventude",
      desc: "Métodos práticos de estudo, disciplina, foco, carreira e futuro — sem “guruísmo”.",
    },
    {
      title: "Economia do dia a dia",
      desc: "Dinheiro prático: hábitos, custo de vida, trabalho e decisões inteligentes.",
    },
    {
      title: "Cultura & comportamento",
      desc: "Como cultura molda escolhas: família, masculinidade/feminilidade, respeito e limites.",
    },
    {
      title: "Cidadania & participação",
      desc: "Como discordar com respeito, entender direitos/deveres e agir sem toxidade.",
    },
    {
      title: "Saúde mental & rotina",
      desc: "Sono, ansiedade, autocontrole, vícios de tela e construção de hábitos reais.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=70"
            alt="Sociedade e informação"
            fill
            className="object-cover opacity-70 dark:opacity-55"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/70 to-white/95 dark:from-zinc-950/45 dark:via-zinc-950/75 dark:to-zinc-950/95" />
        </div>

        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-[34px] bg-sky-200/45 blur-md dark:bg-sky-500/10" />
        <div className="pointer-events-none absolute -left-10 bottom-10 h-44 w-44 rounded-[34px] bg-amber-200/40 blur-md dark:bg-amber-500/10" />

        <div className="relative p-6 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200">
            Society • Atualidade sem hype
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Atualidade com resumo, contexto e ações práticas.
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Conteúdo original com fontes oficiais e postura editorial séria: sem drama, só valor.
            A missão é transformar informação em entendimento — e deixar o leitor com ferramentas reais.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              Ver posts do Blog
            </Link>
            <Link
              href={`/${locale}/library`}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-white dark:hover:bg-zinc-900/40"
            >
              Ir para Biblioteca
            </Link>
          </div>
        </div>
      </section>

      {/* FORMAT + RHYTHM */}
      <section className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold">Formato recomendado (padrão EverLight)</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <span className="font-medium">Resumo:</span> 6–10 linhas (o que aconteceu e por quê importa).
              </li>
              <li>
                <span className="font-medium">Contexto:</span> 2–3 blocos (causas, efeitos, histórico).
              </li>
              <li>
                <span className="font-medium">Ações:</span> 2 ideias práticas (o que o leitor faz hoje).
              </li>
              <li>
                <span className="font-medium">Fontes:</span> links oficiais no fim (sem copiar texto).
              </li>
            </ul>

            <div className="mt-5 rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200 dark:bg-zinc-900/40 dark:ring-zinc-800">
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                Regra de ouro:
              </p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Se não tem “resumo + contexto + ação prática”, não publica. Simples e cruel. 😄
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold">Ritmo editorial (crescimento real)</h2>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              1 post curto por dia + 1 artigo profundo por semana = consistência + SEO forte.
              O segredo não é postar muito, é postar bem e sempre.
            </p>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              Aqui o objetivo é clareza: cortar ruído, explicar o que está por trás e deixar o leitor
              com ferramentas — não só com opinião.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS */}
      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-lg font-semibold">O que é “Society” no EverLight Journal</h2>
        <div className="mt-3 space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            “Society” é onde a gente traduz a realidade sem hype. Notícias e temas sociais aparecem todo dia,
            mas a maioria vem em modo “barulho”: muita emoção, pouca explicação e zero aplicação prática.
            Aqui, a missão é outra: transformar informação em entendimento.
          </p>
          <p>
            Em 2026, o desafio não é “não ter acesso”, é ter filtro. A internet democratizou voz,
            mas também democratizou manipulação. Então a postura editorial do EverLight é simples:
            ser claro, ser honesto, ser útil. Sem sensacionalismo. Sem copiar matéria. Sem viver de “trend”.
          </p>
          <p>
            O leitor sai daqui com 3 coisas: (1) visão rápida do que está acontecendo, (2) contexto suficiente
            para não ser enganado, e (3) ações práticas para melhorar decisões, hábitos e convivência.
            Se o texto não entrega isso, ele volta pra bancada.
          </p>
        </div>
      </section>

      {/* PILLARS */}
      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">6 pilares editoriais</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              Temas principais para conteúdo forte, útil e “anti-ruído”.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              Curadoria
            </span>
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              Leitura mobile
            </span>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="relative h-36">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=70"
                  alt=""
                  fill
                  className="object-cover opacity-90 transition group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/30 to-transparent dark:from-zinc-950/85 dark:via-zinc-950/20" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WEEKLY SKELETON + RULES */}
      <section className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold">Calendário editorial (semana modelo)</h2>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p>Para manter consistência, usamos um “esqueleto semanal”. Isso evita ficar refém de inspiração:</p>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  <span className="font-medium">Segunda:</span> educação/hábitos (curto e útil)
                </li>
                <li>
                  <span className="font-medium">Terça:</span> ética digital/desinformação (curto)
                </li>
                <li>
                  <span className="font-medium">Quarta:</span> cidadania (debate, respeito, convivência)
                </li>
                <li>
                  <span className="font-medium">Quinta:</span> economia prática (vida real)
                </li>
                <li>
                  <span className="font-medium">Sexta:</span> saúde mental & rotina (com ações)
                </li>
                <li>
                  <span className="font-medium">Sábado:</span> artigo profundo (600–1200 palavras)
                </li>
                <li>
                  <span className="font-medium">Domingo:</span> revisão leve + planejamento da semana
                </li>
              </ul>
              <p className="mt-3">Isso cria consistência sem deixar o conteúdo repetitivo. O foco é qualidade + frequência.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold">Regras anti-“conteúdo fino”</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>Todo texto precisa de resumo + contexto + ação prática.</li>
              <li>Nunca copiar parágrafos de fontes; apenas interpretar e citar links.</li>
              <li>Parágrafos curtos, subtítulos e exemplos (para leitura no telemóvel).</li>
              <li>Final sempre com “o que fazer agora” (2 passos simples).</li>
            </ol>

            <div className="mt-5 rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200 dark:bg-zinc-900/40 dark:ring-zinc-800">
              <p className="text-sm font-medium">Checklist antes de publicar:</p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                Resumo? Contexto? 2 ações? Fontes? Se sim, manda bala. Se não, volta pro forno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
        >
          Ver posts do Blog
        </Link>
        <Link
          href={`/${locale}/library`}
          className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900/40"
        >
          Ir para Biblioteca
        </Link>
      </section>
    </div>
  );
                }
