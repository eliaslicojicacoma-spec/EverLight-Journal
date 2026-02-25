// src/app/[locale]/library/page.tsx
import Image from "next/image";
import Link from "next/link";

type Resource = {
  title: string;
  desc: string;
  url: string;
  badge?: string;
};

type Collection = {
  title: string;
  desc: string;
  href: string; // pode ser interno (route) ou externo
  img: string;
  tag: string;
  items: Resource[];
};

function ExternalLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

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
      ? "Dica: cada recurso tem fonte oficial + resumo curto + link direto."
      : "Tip: each resource includes official source + short summary + direct link.",
    resourcesTitle: isPT ? "Recursos oficiais (clique e abra)" : "Official resources (click to open)",
    open: isPT ? "ABRIR →" : "OPEN →",
    visit: isPT ? "Visitar" : "Visit",
    official: isPT ? "OFICIAL" : "OFFICIAL",
  };

  const collections: Collection[] = [
    {
      title: isPT ? "Ellen G. White (EGW)" : "Ellen G. White (EGW)",
      desc: isPT
        ? "Escritos e livros com acesso oficial e busca."
        : "Official writings and books with search access.",
      href: "https://egwwritings.org/",
      img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=2200&q=70",
      tag: "EGW",
      items: [
        {
          title: isPT ? "EGW Writings (biblioteca)" : "EGW Writings (library)",
          desc: isPT ? "Portal oficial com livros, artigos e pesquisa." : "Official portal with books, articles and search.",
          url: "https://egwwritings.org/",
          badge: t.official,
        },
        {
          title: isPT ? "Busca avançada EGW" : "EGW Advanced Search",
          desc: isPT ? "Pesquisar por termos e referências." : "Search by terms and references.",
          url: "https://egwwritings.org/search",
          badge: t.official,
        },
      ],
    },
    {
      title: isPT ? "Escola Sabatina (Guias)" : "Sabbath School (Guides)",
      desc: isPT
        ? "Lições e materiais oficiais para estudo."
        : "Official lessons and study materials.",
      href: "https://www.adultbiblestudyguide.org/",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2200&q=70",
      tag: isPT ? "GUIAS" : "GUIDES",
      items: [
        {
          title: isPT ? "Adult Bible Study Guide" : "Adult Bible Study Guide",
          desc: isPT ? "Site oficial das lições." : "Official lesson site.",
          url: "https://www.adultbiblestudyguide.org/",
          badge: t.official,
        },
      ],
    },
    {
      title: isPT ? "Doutrina & Identidade" : "Beliefs & Identity",
      desc: isPT
        ? "Crenças fundamentais e recursos oficiais."
        : "Fundamental beliefs and official resources.",
      href: "https://www.adventist.org/beliefs/",
      img: "https://images.unsplash.com/photo-1455885666463-3d1c6b7c5b78?auto=format&fit=crop&w=2200&q=70",
      tag: isPT ? "CRENÇAS" : "BELIEFS",
      items: [
        {
          title: isPT ? "Crenças (Adventist.org)" : "Beliefs (Adventist.org)",
          desc: isPT ? "Página oficial das crenças." : "Official beliefs page.",
          url: "https://www.adventist.org/beliefs/",
          badge: t.official,
        },
        {
          title: isPT ? "Manual da Igreja (links oficiais)" : "Church Manual (official links)",
          desc: isPT ? "Referências institucionais." : "Institutional references.",
          url: "https://www.adventist.org/",
          badge: t.official,
        },
      ],
    },
    {
      title: isPT ? "Mídia & Missão" : "Media & Mission",
      desc: isPT
        ? "Canais e conteúdos oficiais de edificação."
        : "Official uplifting channels and content.",
      href: "https://hopetv.org/",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2200&q=70",
      tag: isPT ? "AÇÃO" : "ACTION",
      items: [
        {
          title: "Hope Channel",
          desc: isPT ? "TV e conteúdos oficiais." : "Official TV and content.",
          url: "https://hopetv.org/",
          badge: t.official,
        },
        {
          title: "Adventist Review",
          desc: isPT ? "Notícias e análises (oficial)." : "News and analysis (official).",
          url: "https://www.adventistreview.org/",
          badge: t.official,
        },
      ],
    },
  ];

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2200&q=70"
            alt="Biblioteca"
            fill
            priority
            className="object-cover opacity-75 dark:opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/70 to-white/95 dark:from-zinc-950/35 dark:via-zinc-950/75 dark:to-zinc-950/95" />
        </div>

        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-[38px] bg-amber-200/45 blur-md dark:bg-amber-500/10" />
        <div className="pointer-events-none absolute -left-12 bottom-10 h-52 w-52 rounded-[38px] bg-sky-200/45 blur-md dark:bg-sky-500/10" />

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
            <a
              href="#colecoes"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            >
              {t.cta1}
            </a>

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
      <section
        id="colecoes"
        className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">{t.section}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{t.note}</p>
          </div>
          <span className="inline-flex items-center rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
            Curadoria
          </span>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((c) => (
            <ExternalLink
              key={c.title}
              href={c.href}
              className="group overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="relative h-40">
                <Image
                  src={c.img}
                  alt={c.title}
                  fill
                  className="object-cover opacity-90 transition group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/25 to-transparent dark:from-zinc-950/85 dark:via-zinc-950/20" />
                <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-zinc-800 backdrop-blur dark:bg-zinc-950/55 dark:text-zinc-200">
                  {c.tag}
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{c.desc}</p>
                <div className="mt-4 text-xs font-semibold tracking-wide text-zinc-900 underline decoration-zinc-900/25 underline-offset-4 dark:text-white dark:decoration-white/25">
                  {t.open}
                </div>
              </div>
            </ExternalLink>
          ))}
        </div>
      </section>

      {/* OFFICIAL RESOURCES LIST (isto traz de volta os “links que sumiram”) */}
      <section className="rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-lg font-semibold">{t.resourcesTitle}</h2>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {collections.map((c) => (
            <div
              key={c.title}
              className="rounded-[22px] border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/30"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="text-base font-semibold">{c.title}</div>
                <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-zinc-700 dark:bg-zinc-950 dark:text-zinc-200">
                  {c.tag}
                </span>
              </div>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{c.desc}</p>

              <div className="mt-4 space-y-3">
                {c.items.map((r) => (
                  <div
                    key={r.title}
                    className="flex items-start justify-between gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <div className="text-sm font-semibold">{r.title}</div>
                        {r.badge && (
                          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
                            {r.badge}
                          </span>
                        )}
                      </div>
                      <div className="mt-1 text-xs text-zinc-600 dark:text-zinc-300">
                        {r.desc}
                      </div>
                    </div>

                    <a
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-lg bg-zinc-900 px-3 py-2 text-xs font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
                    >
                      {t.visit}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
    }
