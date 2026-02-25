import Image from "next/image";
import Link from "next/link";

export default function BlogPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "ARTIGOS & REFLEXÕES" : "ARTICLES & REFLECTIONS",
    title: isPT ? "Blog" : "Blog",
    desc: isPT
      ? "Artigos com estrutura (resumo → contexto → aplicação), fontes no fim e leitura perfeita no telemóvel."
      : "Articles with structure (summary → context → application), sources at the end, and mobile-friendly reading.",
    cta1: isPT ? "Explorar Society" : "Explore Society",
    cta2: isPT ? "Abrir Adventista →" : "Open Adventist →",
    latest: isPT ? "Em destaque" : "Featured",
  };

  const featured = [
    {
      title: isPT ? "Fé com inteligência: como filtrar ruído" : "Faith with clarity: filtering noise",
      excerpt: isPT
        ? "A internet amplifica tudo. Aqui vai um método simples pra não cair em manipulação."
        : "The internet amplifies everything. Here’s a simple method to avoid manipulation.",
      href: `/${locale}/society`,
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=70",
      tag: isPT ? "SOCIEDADE" : "SOCIETY",
    },
    {
      title: isPT ? "Como estudar a Bíblia sem se perder" : "How to study the Bible without getting lost",
      excerpt: isPT
        ? "Contexto, comparação e aplicação — em passos curtos e práticos."
        : "Context, comparison, and application — in short, practical steps.",
      href: `/${locale}/adventist`,
      img: "https://images.unsplash.com/photo-1548625361-58a9b86aa83b?auto=format&fit=crop&w=1600&q=70",
      tag: isPT ? "ADVENTISTA" : "ADVENTIST",
    },
  ];

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=70"
            alt="Blog"
            fill
            priority
            className="object-cover opacity-70 dark:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/65 to-white/95 dark:from-zinc-950/40 dark:via-zinc-950/70 dark:to-zinc-950/95" />
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
              href={`/${locale}/society`}
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

      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-lg font-semibold">{t.latest}</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {featured.map((a) => (
            <Link
              key={a.title}
              href={a.href}
              className="group overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="relative h-44">
                <Image src={a.img} alt={a.title} fill className="object-cover opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/25 to-transparent dark:from-zinc-950/85 dark:via-zinc-950/20" />
                <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-zinc-800 backdrop-blur dark:bg-zinc-950/50 dark:text-zinc-200">
                  {a.tag}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{a.excerpt}</p>
                <div className="mt-4 text-xs font-semibold tracking-wide text-zinc-900 underline decoration-zinc-900/25 underline-offset-4 dark:text-white dark:decoration-white/25">
                  {isPT ? "LER →" : "READ →"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
            }
