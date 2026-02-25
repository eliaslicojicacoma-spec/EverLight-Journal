import Image from "next/image";
import Link from "next/link";

export default function LibraryPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "RECURSOS OFICIAIS & ESTUDO" : "OFFICIAL RESOURCES & STUDY",
    title: isPT ? "Biblioteca Essencial" : "Essential Library",
    desc: isPT
      ? "Livros, guias e materiais para estudo bíblico e crescimento espiritual — com curadoria e padrão editorial."
      : "Books, guides, and materials for Bible study and spiritual growth — curated and editorial-grade.",
    cta1: isPT ? "Explorar Coleções" : "Explore Collections",
    cta2: isPT ? "Ver no Blog →" : "Go to Blog →",
    section: isPT ? "Coleções em destaque" : "Featured collections",
    note: isPT
      ? "Dica: cada recurso deve ter fonte/autor + resumo + link oficial de download/consulta."
      : "Tip: each resource should have source/author + summary + official link.",
  };

  const collections = [
    {
      title: isPT ? "Estudo Bíblico" : "Bible Study",
      desc: isPT ? "Método, contexto e aplicação diária." : "Method, context, and daily application.",
      href: `/${locale}/library`,
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1400&q=70",
      tag: isPT ? "GUIAS" : "GUIDES",
    },
    {
      title: isPT ? "Vida Cristã" : "Christian Living",
      desc: isPT ? "Caráter, hábitos e espiritualidade prática." : "Character, habits, and practical spirituality.",
      href: `/${locale}/library`,
      img: "https://images.unsplash.com/photo-1455885666463-3d1c6b7c5b78?auto=format&fit=crop&w=1400&q=70",
      tag: isPT ? "HÁBITOS" : "HABITS",
    },
    {
      title: isPT ? "Missão & Serviço" : "Mission & Service",
      desc: isPT ? "Evangelismo respeitoso e compaixão real." : "Respectful evangelism and real compassion.",
      href: `/${locale}/library`,
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=70",
      tag: isPT ? "AÇÃO" : "ACTION",
    },
  ];

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=2200&q=70"
            alt="Biblioteca"
            fill
            priority
            className="object-cover opacity-70 dark:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/65 to-white/95 dark:from-zinc-950/40 dark:via-zinc-950/70 dark:to-zinc-950/95" />
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

          <h1 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
            {t.desc}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/library`}
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              {t.cta1}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-white dark:hover:bg-zinc-900/40"
            >
              {t.cta2}
            </Link>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">{t.section}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{t.note}</p>
          </div>
          <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
            Curadoria
          </span>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {collections.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="relative h-40">
                <Image src={c.img} alt={c.title} fill className="object-cover opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/25 to-transparent dark:from-zinc-950/85 dark:via-zinc-950/20" />
                <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-zinc-800 backdrop-blur dark:bg-zinc-950/50 dark:text-zinc-200">
                  {c.tag}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{c.desc}</p>
                <div className="mt-4 text-xs font-semibold tracking-wide text-zinc-900 underline decoration-zinc-900/25 underline-offset-4 dark:text-white dark:decoration-white/25">
                  {isPT ? "ABRIR →" : "OPEN →"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
      }
