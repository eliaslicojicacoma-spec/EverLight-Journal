import Image from "next/image";
import Link from "next/link";
import blogPosts from "@/content/blogPosts.json";

type BlogPost = {
  id: string;
  locale: string;
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
  publishedAt: string;
};

function isPost(x: any): x is BlogPost {
  return (
    x &&
    typeof x === "object" &&
    typeof x.slug === "string" &&
    typeof x.title === "string" &&
    typeof x.excerpt === "string" &&
    typeof x.publishedAt === "string"
  );
}

function getFeaturedPosts(locale: string) {
  const arr = Array.isArray(blogPosts) ? blogPosts : [];
  const posts = arr.filter(isPost).filter((p) => p.locale === locale);
  // tenta puxar category society, se não tiver, pega os mais recentes
  const society = posts.filter((p) => (p.category ?? "").toLowerCase() === "society");
  const pick = (society.length ? society : posts)
    .slice()
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 3);
  return pick;
}

export default function SocietyPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "SOCIEDADE • ATUALIDADE COM CLAREZA" : "SOCIETY • CLARITY OVER NOISE",
    title: isPT ? "Atualidade com resumo, contexto e ação prática." : "Current events with summary, context, and practical action.",
    desc: isPT
      ? "Aqui a gente traduz a realidade sem hype: menos barulho, mais entendimento. Conteúdo original com postura editorial séria, leitura mobile e fontes oficiais."
      : "We translate reality without hype: less noise, more understanding. Original content, editorial seriousness, mobile-first reading, and official sources.",
    cta1: isPT ? "Ver posts do Blog" : "See Blog posts",
    cta2: isPT ? "Ir para Biblioteca" : "Go to Library",
    blockTitle: isPT ? "Padrão EverLight (Premium)" : "EverLight Standard (Premium)",
    ruleTitle: isPT ? "Regra de ouro" : "Golden rule",
    pillarsTitle: isPT ? "6 pilares editoriais" : "6 editorial pillars",
    pillarsDesc: isPT ? "Temas para conteúdo forte, útil e anti-ruído." : "Themes for strong, useful, anti-noise content.",
    featured: isPT ? "Destaques recentes" : "Recent highlights",
    featuredDesc: isPT ? "3 leituras rápidas para manter consistência." : "3 quick reads to stay consistent.",
    checklist: isPT ? "Checklist antes de publicar" : "Pre-publish checklist",
    footerCTA: isPT ? "Quero ler Society no Blog" : "Read Society on Blog",
  };

  const pillars = [
    {
      title: isPT ? "Ética digital & desinformação" : "Digital ethics & misinformation",
      desc: isPT
        ? "Verificar fontes, interpretar manchetes, evitar manipulação e preservar saúde mental."
        : "Verify sources, read headlines wisely, avoid manipulation, protect mental health.",
      icon: "🧠",
    },
    {
      title: isPT ? "Educação & juventude" : "Education & youth",
      desc: isPT ? "Métodos práticos de estudo, disciplina, foco, carreira e futuro." : "Practical study methods, discipline, focus, career, future.",
      icon: "🎓",
    },
    {
      title: isPT ? "Economia do dia a dia" : "Everyday economics",
      desc: isPT ? "Dinheiro prático: hábitos, custo de vida, trabalho e decisões inteligentes." : "Money habits, cost of living, work, smarter decisions.",
      icon: "💸",
    },
    {
      title: isPT ? "Cultura & comportamento" : "Culture & behavior",
      desc: isPT ? "Como cultura molda escolhas: família, respeito, limites e caráter." : "How culture shapes choices: family, respect, boundaries, character.",
      icon: "🧩",
    },
    {
      title: isPT ? "Cidadania & participação" : "Citizenship & participation",
      desc: isPT ? "Discordar com respeito, entender direitos/deveres e agir sem toxidade." : "Disagree respectfully, know rights/duties, act without toxicity.",
      icon: "🗳️",
    },
    {
      title: isPT ? "Saúde mental & rotina" : "Mental health & routine",
      desc: isPT ? "Sono, ansiedade, autocontrole, vícios de tela e hábitos reais." : "Sleep, anxiety, self-control, screen addiction, real habits.",
      icon: "🌿",
    },
  ];

  const featured = getFeaturedPosts(locale);

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=70"
            alt="Sociedade e informação"
            fill
            priority
            className="object-cover opacity-75 dark:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/70 to-white/95 dark:from-zinc-950/45 dark:via-zinc-950/75 dark:to-zinc-950/95" />
        </div>

        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-[36px] bg-sky-200/45 blur-md dark:bg-sky-500/10" />
        <div className="pointer-events-none absolute -left-10 bottom-10 h-44 w-44 rounded-[36px] bg-amber-200/40 blur-md dark:bg-amber-500/10" />

        <div className="relative p-6 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-white/10 dark:bg-zinc-950/40 dark:text-zinc-200">
            {t.kicker}
          </div>

          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.title}
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {t.desc}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              {t.cta1}
            </Link>
            <Link
              href={`/${locale}/library`}
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950/30 dark:text-white dark:hover:bg-zinc-900/40"
            >
              {t.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* STANDARD + GOLDEN RULE */}
      <section className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold">{t.blockTitle}</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li><span className="font-semibold">Resumo:</span> 6–10 linhas (o que aconteceu + por que importa).</li>
              <li><span className="font-semibold">Contexto:</span> 2–3 blocos (causas, efeitos, histórico).</li>
              <li><span className="font-semibold">Ações:</span> 2 passos práticos (o leitor aplica hoje).</li>
              <li><span className="font-semibold">Fontes:</span> links oficiais no fim (sem copiar texto).</li>
            </ul>

            <div className="mt-5 rounded-2xl bg-zinc-50 p-4 ring-1 ring-black/10 dark:bg-zinc-900/40 dark:ring-white/10">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t.ruleTitle}:</p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                {isPT
                  ? "Se não tem resumo + contexto + ação prática, não publica. Simples e cruel. 😄"
                  : "If it doesn’t have summary + context + practical action, don’t publish. Simple and brutal. 😄"}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold">{t.checklist}</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li>{isPT ? "Resumo claro em 10 linhas." : "Clear 10-line summary."}</li>
              <li>{isPT ? "Contexto suficiente para não ser enganado." : "Enough context to avoid being fooled."}</li>
              <li>{isPT ? "2 ações práticas aplicáveis hoje." : "2 practical actions for today."}</li>
              <li>{isPT ? "Fontes oficiais (links), sem copiar texto." : "Official sources (links), no copy-paste."}</li>
            </ol>

            <div className="mt-5 rounded-2xl bg-zinc-50 p-4 ring-1 ring-black/10 dark:bg-zinc-900/40 dark:ring-white/10">
              <p className="text-sm font-semibold">{isPT ? "Bónus Premium:" : "Premium bonus:"}</p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                {isPT
                  ? "Parágrafos curtos + subtítulos + exemplos = leitura mobile perfeita."
                  : "Short paragraphs + subheadings + examples = perfect mobile reading."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">{t.pillarsTitle}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{t.pillarsDesc}</p>
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
              className="group overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-950"
            >
              <div className="relative h-36">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=70"
                  alt=""
                  fill
                  className="object-cover opacity-90 transition group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/30 to-transparent dark:from-zinc-950/85 dark:via-zinc-950/20" />
                <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur dark:bg-zinc-950/55 dark:text-white">
                  {item.icon} {isPT ? "Pilar" : "Pillar"}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED POSTS */}
      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">{t.featured}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{t.featuredDesc}</p>
          </div>

          <Link
            href={`/${locale}/blog`}
            className="text-sm font-semibold underline decoration-black/20 underline-offset-4 hover:decoration-black/50 dark:decoration-white/20 dark:hover:decoration-white/50"
          >
            {isPT ? "Ver todos →" : "View all →"}
          </Link>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.id}
              href={`/${locale}/blog/${p.slug}`}
              className="group rounded-[24px] border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-950"
            >
              <div className="text-xs font-semibold tracking-wide text-zinc-500 dark:text-zinc-300">
                {p.publishedAt}
              </div>
              <div className="mt-2 text-base font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{p.excerpt}</p>
              <div className="mt-4 text-xs font-semibold underline decoration-black/20 underline-offset-4 group-hover:decoration-black/50 dark:decoration-white/20 dark:group-hover:decoration-white/50">
                {isPT ? "Ler →" : "Read →"}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
        >
          {t.footerCTA}
        </Link>
        <Link
          href={`/${locale}/library`}
          className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900/40"
        >
          {isPT ? "Abrir Biblioteca (recursos)" : "Open Library (resources)"}
        </Link>
      </section>
    </div>
  );
        }
