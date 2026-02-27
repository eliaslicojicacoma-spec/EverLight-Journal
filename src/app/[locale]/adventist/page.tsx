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
  // tenta puxar category adventist, se não tiver, pega os mais recentes
  const adv = posts.filter((p) => (p.category ?? "").toLowerCase() === "adventist");
  const pick = (adv.length ? adv : posts)
    .slice()
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 3);
  return pick;
}

export default function AdventistPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "ADVENTISTA • FÉ COM INTELIGÊNCIA" : "ADVENTIST • FAITH WITH CLARITY",
    title: isPT ? "Conteúdo adventista com base bíblica e equilíbrio." : "Adventist content with biblical grounding and balance.",
    desc: isPT
      ? "Sem sensacionalismo, sem copiar textos. Aqui é: Bíblia com contexto, fontes oficiais, e aplicação real para a vida."
      : "No sensationalism, no copy-paste. Here: Bible with context, official sources, and real-life application.",
    cta1: isPT ? "Abrir Biblioteca" : "Open Library",
    cta2: isPT ? "Ver artigos no Blog" : "See Blog articles",
    purpose: isPT ? "O propósito desta seção" : "Purpose of this section",
    practices: isPT ? "Boas práticas editoriais" : "Editorial best practices",
    format: isPT ? "Formato recomendado" : "Recommended format",
    topicsTitle: isPT ? "Temas principais" : "Main topics",
    sourcesTitle: isPT ? "Fontes (sem copiar)" : "Sources (without copying)",
    featured: isPT ? "Destaques recentes" : "Recent highlights",
  };

  const topics = [
    {
      title: isPT ? "Estudo bíblico com método" : "Bible study with method",
      desc: isPT ? "Contexto, comparação e aplicação diária." : "Context, comparison, daily application.",
      icon: "📖",
    },
    {
      title: isPT ? "Profecia com equilíbrio" : "Prophecy with balance",
      desc: isPT ? "Daniel e Apocalipse com clareza e responsabilidade." : "Daniel & Revelation with clarity and responsibility.",
      icon: "⏳",
    },
    {
      title: isPT ? "Família e discipulado" : "Family & discipleship",
      desc: isPT ? "Hábitos simples que fortalecem relacionamentos." : "Simple habits that strengthen relationships.",
      icon: "🏠",
    },
    {
      title: isPT ? "Saúde e temperança" : "Health & temperance",
      desc: isPT ? "Sono, alimentação, vícios e rotina saudável." : "Sleep, nutrition, habits, healthy routine.",
      icon: "🍃",
    },
    {
      title: isPT ? "Missão prática" : "Practical mission",
      desc: isPT ? "Serviço real: compaixão e consistência." : "Real service: compassion and consistency.",
      icon: "🤝",
    },
    {
      title: isPT ? "Vida espiritual diária" : "Daily spiritual life",
      desc: isPT ? "Oração objetiva, leitura, silêncio e decisões." : "Focused prayer, reading, silence, decisions.",
      icon: "🙏🏽",
    },
  ];

  const featured = getFeaturedPosts(locale);

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1548625361-58a9b86aa83b?auto=format&fit=crop&w=2200&q=70"
            alt="Luz suave sobre páginas"
            fill
            priority
            className="object-cover opacity-75 dark:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/70 to-white/95 dark:from-zinc-950/45 dark:via-zinc-950/75 dark:to-zinc-950/95" />
        </div>

        <div className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-[36px] bg-amber-200/40 blur-md dark:bg-amber-500/10" />
        <div className="pointer-events-none absolute -left-10 bottom-10 h-44 w-44 rounded-[36px] bg-sky-200/40 blur-md dark:bg-sky-500/10" />

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
              href={`/${locale}/library`}
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              {t.cta1}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950/30 dark:text-white dark:hover:bg-zinc-900/40"
            >
              {t.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* PURPOSE + PRACTICES + FORMAT */}
      <section className="grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <h2 className="text-lg font-semibold">{t.purpose}</h2>
            <div className="mt-3 space-y-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              <p>
                {isPT
                  ? "Esta seção existe para formar caráter e maturidade espiritual com clareza e base bíblica. O foco não é ganhar debate — é viver a verdade com equilíbrio."
                  : "This section exists to build character and spiritual maturity with clarity and biblical grounding. The goal isn’t to win debates—it's to live truth with balance."}
              </p>
              <p>
                {isPT
                  ? "A escrita do EverLight prioriza: leitura simples no telemóvel, fontes oficiais e passos práticos."
                  : "EverLight writing prioritizes: mobile-friendly reading, official sources, and practical steps."}
              </p>

              <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-black/10 dark:bg-zinc-900/40 dark:ring-white/10">
                <p className="text-sm font-semibold">{isPT ? "Tom Premium:" : "Premium tone:"}</p>
                <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                  {isPT
                    ? "Sério, limpo e útil — sem frases bonitas vazias. "
                    : "Serious, clean, useful—no empty pretty phrases. "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <h2 className="text-base font-semibold">{t.practices}</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
              <li><span className="font-semibold">{isPT ? "Não copiar:" : "No copy-paste:"}</span> nem parágrafos.</li>
              <li><span className="font-semibold">{isPT ? "Estrutura:" : "Structure:"}</span> ideia → explicação → aplicação.</li>
              <li><span className="font-semibold">{isPT ? "Fontes:" : "Sources:"}</span> links oficiais no fim.</li>
              <li><span className="font-semibold">{isPT ? "Leitura mobile:" : "Mobile reading:"}</span> parágrafos curtos + subtítulos.</li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <h2 className="text-base font-semibold">{t.format}</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
              <li><span className="font-semibold">{isPT ? "Introdução:" : "Intro:"}</span> problema real + por que importa</li>
              <li><span className="font-semibold">{isPT ? "Base bíblica:" : "Biblical base:"}</span> 2–4 textos com contexto</li>
              <li><span className="font-semibold">{isPT ? "Aplicação:" : "Application:"}</span> 3 passos práticos</li>
              <li><span className="font-semibold">{isPT ? "Fecho:" : "Close:"}</span> decisão clara + oração simples</li>
            </ol>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">{t.topicsTitle}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              {isPT
                ? "Curadoria para 15–30 artigos sólidos. Consistência > hype."
                : "Curated themes for 15–30 solid articles. Consistency > hype."}
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
          {topics.map((x) => (
            <div
              key={x.title}
              className="group overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-950"
            >
              <div className="relative h-36">
                <Image
                  src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=70"
                  alt=""
                  fill
                  className="object-cover opacity-90 transition group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/30 to-transparent dark:from-zinc-950/85 dark:via-zinc-950/20" />
                <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-900 backdrop-blur dark:bg-zinc-950/55 dark:text-white">
                  {x.icon} {isPT ? "Tema" : "Topic"}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold">{x.title}</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{x.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOURCES */}
      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <h2 className="text-lg font-semibold">{t.sourcesTitle}</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>
            {isPT
              ? "O padrão é simples: usa fontes como base e escreve com tuas palavras. Tu ganhas credibilidade e evita plágio."
              : "Simple standard: use sources as a base and write in your own words. You gain credibility and avoid plagiarism."}
          </p>

          <div className="rounded-2xl bg-zinc-50 p-4 ring-1 ring-black/10 dark:bg-zinc-900/40 dark:ring-white/10">
            <p className="text-sm font-semibold">{isPT ? "Modelo no fim de cada artigo:" : "Template at the end:"}</p>
            <ul className="mt-2 list-disc space-y-2 pl-5 text-sm">
              <li>{isPT ? "Fontes: EGW Writings / Adventistas / Novo Tempo / sites oficiais" : "Sources: EGW Writings / Adventist / official websites"}</li>
              <li>{isPT ? "Data de acesso (opcional, mas profissional)" : "Access date (optional, professional)"}</li>
            </ul>
          </div>

          <p>
            {isPT
              ? "Resultado: SEO melhor + confiança maior. Fé com credibilidade."
              : "Result: better SEO + stronger trust. Faith with credibility."}
          </p>
        </div>
      </section>

      {/* FEATURED POSTS */}
      <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">{t.featured}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
              {isPT ? "3 leituras rápidas (puxadas do teu blogPosts.json)." : "3 quick reads (from your blogPosts.json)."}
            </p>
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
          href={`/${locale}/library`}
          className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
        >
          {isPT ? "Abrir Biblioteca (recursos)" : "Open Library (resources)"}
        </Link>
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:hover:bg-zinc-900/40"
        >
          {isPT ? "Ver artigos no Blog" : "See Blog articles"}
        </Link>
      </section>
    </div>
  );
                }
