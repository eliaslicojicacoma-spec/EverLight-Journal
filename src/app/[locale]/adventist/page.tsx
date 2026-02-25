import Image from "next/image";
import Link from "next/link";

export default function AdventistPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  const topics = [
    {
      title: "Estudo bíblico com método",
      desc: "Como estudar sem se perder: contexto, comparação e aplicação diária.",
    },
    {
      title: "Profecia com equilíbrio",
      desc: "Daniel e Apocalipse com clareza e responsabilidade (sem pânico).",
    },
    {
      title: "Família e discipulado",
      desc: "Hábitos simples que protegem o lar e fortalecem relacionamentos.",
    },
    {
      title: "Saúde e temperança",
      desc: "Saúde como mordomia: sono, alimentação, vícios e rotina saudável.",
    },
    {
      title: "Missão prática",
      desc: "Serviço real: compaixão, consistência e evangelismo respeitoso.",
    },
    {
      title: "Vida espiritual diária",
      desc: "Oração objetiva, leitura bíblica, silêncio e decisões guiadas pela Palavra.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1548625361-58a9b86aa83b?auto=format&fit=crop&w=2200&q=70"
            alt="Luz suave sobre páginas"
            fill
            className="object-cover opacity-70 dark:opacity-55"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/65 to-white/95 dark:from-zinc-950/40 dark:via-zinc-950/70 dark:to-zinc-950/95" />
        </div>

        <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-[34px] bg-amber-200/40 blur-md dark:bg-amber-500/10" />
        <div className="pointer-events-none absolute -left-10 bottom-10 h-44 w-44 rounded-[34px] bg-sky-200/40 blur-md dark:bg-sky-500/10" />

        <div className="relative p-6 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-200">
            Adventist • Fé com inteligência
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Conteúdo adventista com clareza, equilíbrio e base bíblica.
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            Temas com fontes confiáveis, resumo + valor adicional e aplicação prática. Sem copiar artigos.
            Sem sensacionalismo. O objetivo aqui é formar caráter — não ganhar debate.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/library`}
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              Abrir Biblioteca
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-white dark:hover:bg-zinc-900/40"
            >
              Ver artigos no Blog
            </Link>
          </div>
        </div>
      </section>

      {/* PURPOSE + GUIDELINES */}
      <section className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold">O propósito desta seção</h2>
            <div className="mt-3 space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p>
                Esta seção existe para ajudar pessoas a crescerem espiritualmente com clareza, equilíbrio e
                base bíblica. O mundo religioso às vezes vira “guerra de opinião”, ou então vira “frase bonita
                sem profundidade”. Aqui a gente vai no meio termo certo: Bíblia, contexto e aplicação diária.
              </p>
              <p>
                O foco não é ganhar debate — é formar caráter. Por isso, a escrita do EverLight prioriza:
                (1) leitura simples no telemóvel, (2) referências oficiais, e (3) passos práticos para a vida.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-base font-semibold">Boas práticas editoriais</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <span className="font-medium">Não copiar</span> artigos inteiros (nem parágrafos).
              </li>
              <li>
                <span className="font-medium">Estrutura:</span> ideia central → explicação → aplicação.
              </li>
              <li>
                <span className="font-medium">Sempre “Fontes”</span> no fim (links oficiais).
              </li>
              <li>
                <span className="font-medium">Evergreen:</span> família, saúde, estudo bíblico, missão, profecia.
              </li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="text-base font-semibold">Formato recomendado</h2>
            <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
              Para manter consistência e profundidade, um artigo bom aqui costuma seguir:
            </p>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>
                <span className="font-medium">Introdução:</span> problema real + por que importa
              </li>
              <li>
                <span className="font-medium">Base bíblica:</span> 2–4 textos com contexto
              </li>
              <li>
                <span className="font-medium">Aplicação:</span> 3 passos práticos (vida real)
              </li>
              <li>
                <span className="font-medium">Fecho:</span> uma decisão clara + oração simples
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Temas principais</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              Ideias fortes para 15–30 artigos bem feitos, com consistência e profundidade.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              Curadoria
            </span>
            <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
              Aplicação prática
            </span>
          </div>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {topics.map((t) => (
            <div
              key={t.title}
              className="group overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="relative h-36">
                <Image
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=70"
                  alt=""
                  fill
                  className="object-cover opacity-90 transition group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/30 to-transparent dark:from-zinc-950/85 dark:via-zinc-950/20" />
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold">{t.title}</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOURCES */}
      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-lg font-semibold">Como citar fontes (sem copiar)</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            O padrão é simples: tu não precisas copiar texto de sites oficiais. Tu usas as fontes como base
            e escreves com tuas palavras, trazendo resumo e aplicação.
          </p>

          <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200 dark:bg-zinc-900/40 dark:ring-zinc-800">
            <p className="text-sm font-medium">Modelo no fim de cada artigo:</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
              <li>Fontes: EGW Writings / Adventistas / Novo Tempo / sites oficiais</li>
              <li>Data de acesso (opcional, mas profissional)</li>
            </ul>
          </div>

          <p>Isso evita plágio, fortalece SEO e cria confiança. “Fé com credibilidade”, basicamente.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/${locale}/library`}
          className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
        >
          Abrir Biblioteca (recursos)
        </Link>
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900/40"
        >
          Ver artigos no Blog
        </Link>
      </section>
    </div>
  );
              }
