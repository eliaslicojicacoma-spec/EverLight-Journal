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

  return (
    <main className="min-h-screen bg-[#070A12] text-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_20%_15%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(700px_500px_at_80%_20%,rgba(167,139,250,0.22),transparent_55%),radial-gradient(900px_600px_at_50%_90%,rgba(16,185,129,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/90" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* Glow blobs */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -top-56 left-[10%] h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -top-56 right-[8%] h-[520px] w-[520px] rounded-full bg-emerald-400/15 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-16 sm:py-20">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {isPT ? "PT/EN • Revista Digital • SEO-ready" : "PT/EN • Digital Magazine • SEO-ready"}
          </div>

          {/* Title */}
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              {title}
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/society`}
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-black/30 transition hover:opacity-90"
            >
              {isPT ? "Ver Society" : "See Society"}
            </Link>

            <Link
              href={`/${locale}/adventist`}
              className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              {isPT ? "Ver Adventist" : "See Adventist"}
            </Link>

            <Link
              href={`/${locale}/library`}
              className="rounded-2xl border border-white/15 bg-black/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              {isPT ? "Ir para Biblioteca" : "Go to Library"}
            </Link>

            <Link
              href={`/${locale}/verse-of-day`}
              className="rounded-2xl border border-white/15 bg-black/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              {isPT ? "Versículo do Dia" : "Verse of the Day"}
            </Link>
          </div>

          {/* Mini stats */}
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              { k: isPT ? "Leitura rápida" : "Fast reads", v: isPT ? "valor real, sem enrolação" : "real value, no fluff" },
              { k: isPT ? "SEO pronto" : "SEO ready", v: isPT ? "sitemap + robots alinhados" : "sitemap + robots aligned" },
              { k: isPT ? "PT / EN" : "PT / EN", v: isPT ? "conteúdo em duas línguas" : "bilingual content" },
            ].map((item) => (
              <div
                key={item.k}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:bg-white/7"
              >
                <div className="text-sm font-semibold">{item.k}</div>
                <div className="mt-1 text-xs text-white/70">{item.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom glow */}
        <div className="pointer-events-none absolute -bottom-28 left-1/2 h-72 w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/25 via-cyan-400/20 to-emerald-400/20 blur-3xl" />
      </section>

      {/* BELOW HERO */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <Card
            title={isPT ? "Society" : "Society"}
            desc={isPT ? "Atualidade com clareza, contexto e ação." : "Current topics with clarity, context, and action."}
            href={`/${locale}/society`}
          />
          <Card
            title={isPT ? "Adventist" : "Adventist"}
            desc={isPT ? "Curadoria + aplicação prática. Fé com inteligência." : "Curated + practical. Faith with clarity."}
            href={`/${locale}/adventist`}
          />
          <Card
            title={isPT ? "Library" : "Library"}
            desc={isPT ? "Links oficiais e seguros (EGW + recursos)." : "Official and safe links (EGW + resources)."}
            href={`/${locale}/library`}
          />
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/0 p-6">
          <h3 className="text-base font-semibold">{isPT ? "Próximo passo" : "Next step"}</h3>
          <p className="mt-2 text-sm text-white/70">
            {isPT
              ? "Agora o site já tem presença visual forte. Próximo upgrade: cards do blog com thumbnails + capa por categoria."
              : "Now your site has a strong visual identity. Next upgrade: blog cards with thumbnails + category covers."}
          </p>
        </div>
      </section>
    </main>
  );
}

function Card({ title, desc, href }: { title: string; desc: string; href: string }) {
  return (
    <Link
      href={href}
      className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/7 hover:border-white/15"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">{title}</h2>
        <span className="text-white/60 transition group-hover:translate-x-0.5 group-hover:text-white/80">→</span>
      </div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <p className="mt-3 text-xs text-white/60">Open</p>
    </Link>
  );
}
