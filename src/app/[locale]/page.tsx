// src/app/[locale]/page.tsx
import Link from "next/link";

type PageProps = {
  params: { locale: string };
};

export default function HomePage({ params }: PageProps) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const title = "EverLight Journal";
  const subtitle = isPT
    ? "Sociedade com visão global, fé com profundidade. Conteúdo original, moderno e confiável."
    : "Society with global vision, faith with depth. Original, modern, trustworthy content.";

  const badge = isPT
    ? "PT/EN • Revista Digital • SEO-ready"
    : "PT/EN • Digital Magazine • SEO-ready";

  const ctaPrimary = isPT ? "Explorar Society" : "Explore Society";
  const ctaSecondary = isPT ? "Explorar Adventist" : "Explore Adventist";

  return (
    <main className="min-h-screen bg-[#05060a] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Deep base */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05060a] via-[#070817] to-[#05060a]" />

        {/* Aurora gradients (premium look) */}
        <div className="absolute inset-0 opacity-90 [background-image:radial-gradient(900px_circle_at_15%_20%,rgba(16,185,129,0.30),transparent_60%),radial-gradient(900px_circle_at_85%_25%,rgba(59,130,246,0.28),transparent_60%),radial-gradient(900px_circle_at_50%_90%,rgba(168,85,247,0.22),transparent_65%)]" />

        {/* Subtle grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

        {/* Top vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />

        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-14 sm:pb-20 sm:pt-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(16,185,129,0.65)]" />
            {badge}
          </div>

          {/* Title */}
          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/society`}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-black/30 transition hover:opacity-95"
            >
              {ctaPrimary}
              <span className="transition group-hover:translate-x-0.5">→</span>
            </Link>

            <Link
              href={`/${locale}/adventist`}
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              {ctaSecondary}
              <span className="transition group-hover:translate-x-0.5">→</span>
            </Link>

            <Link
              href={`/${locale}/library`}
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              {isPT ? "Abrir Biblioteca" : "Open Library"}
            </Link>

            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-black/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              {isPT ? "Ver Blog" : "See Blog"}
            </Link>
          </div>

          {/* Mini stats */}
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              {
                t: isPT ? "Conteúdo original" : "Original content",
                d: isPT ? "Sem cópia. Sem ruído." : "No copy. No noise.",
              },
              {
                t: isPT ? "PT/EN" : "PT/EN",
                d: isPT ? "Internacional desde o início." : "International from day one.",
              },
              {
                t: isPT ? "SEO pronto" : "SEO ready",
                d: isPT ? "Sitemap + robots alinhados." : "Sitemap + robots aligned.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <p className="text-sm font-semibold">{x.t}</p>
                <p className="mt-1 text-xs text-white/70">{x.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom glow */}
        <div className="pointer-events-none absolute -bottom-28 left-1/2 h-72 w-[1050px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/18 via-sky-500/14 to-fuchsia-500/14 blur-3xl" />
      </section>

      {/* FEATURE GRID */}
      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">
              {isPT ? "Destaques" : "Highlights"}
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              {isPT
                ? "Uma estrutura editorial simples, mas poderosa: clareza, contexto e aplicação."
                : "A simple but powerful editorial structure: clarity, context, and application."}
            </p>
          </div>
          <div className="hidden sm:block">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              {isPT ? "Atualiza semanalmente" : "Updated weekly"}
            </span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: isPT ? "Society" : "Society",
              desc: isPT
                ? "Temas atuais com leitura rápida + profundidade real."
                : "Current topics with fast reading + real depth.",
              href: `/${locale}/society`,
              accent: "from-emerald-500/25 via-emerald-500/0 to-transparent",
            },
            {
              title: isPT ? "Adventist" : "Adventist",
              desc: isPT
                ? "Bíblia, missão e vida espiritual sem sensacionalismo."
                : "Bible, mission and spiritual life—no sensationalism.",
              href: `/${locale}/adventist`,
              accent: "from-sky-500/25 via-sky-500/0 to-transparent",
            },
            {
              title: isPT ? "Biblioteca" : "Library",
              desc: isPT
                ? "Recursos oficiais (EGW + estudos) bem organizados."
                : "Official resources (EGW + studies), organized.",
              href: `/${locale}/library`,
              accent: "from-fuchsia-500/25 via-fuchsia-500/0 to-transparent",
            },
          ].map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:bg-white/[0.07]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${c.accent}`} />
              <div className="relative">
                <h3 className="text-base font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm text-white/70">{c.desc}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/85">
                  {isPT ? "Abrir" : "Open"}
                  <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA PANEL */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/6 to-white/0 p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-base font-semibold">
                {isPT ? "Quer crescer rápido com qualidade?" : "Want fast growth with quality?"}
              </h3>
              <p className="mt-2 text-sm text-white/70">
                {isPT
                  ? "Vamos publicar 15–30 artigos longos (600–1200 palavras) com consistência editorial e SEO."
                  : "We’ll publish 15–30 long articles (600–1200 words) with editorial consistency and SEO."}
              </p>
            </div>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-95"
            >
              {isPT ? "Começar pelo Blog" : "Start with Blog"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
              }
