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

  const ctaPrimary = isPT ? "Ver Society" : "See Society";
  const ctaSecondary = isPT ? "Ver Adventist" : "See Adventist";

  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-[78vh] overflow-hidden">
        {/* Background (no image needed) */}
        <div className="absolute inset-0 bg-black" />

        {/* Premium gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(900px_circle_at_80%_30%,rgba(59,130,246,0.22),transparent_55%),radial-gradient(900px_circle_at_50%_90%,rgba(168,85,247,0.18),transparent_60%)]" />

        {/* Soft noise (gives texture) */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-soft-light [background-image:radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl items-center px-5 py-16">
          <div className="w-full max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {isPT
                ? "PT/EN • Revista Digital • SEO-ready"
                : "PT/EN • Digital Magazine • SEO-ready"}
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
              {subtitle}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/${locale}/society`}
                className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-lg shadow-black/30 transition hover:opacity-90"
              >
                {ctaPrimary}
              </Link>

              <Link
                href={`/${locale}/adventist`}
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                {ctaSecondary}
              </Link>

              <Link
                href={`/${locale}/library`}
                className="rounded-2xl border border-white/15 bg-black/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                {isPT ? "Ir para Biblioteca" : "Go to Library"}
              </Link>

              <Link
                href={`/${locale}/blog`}
                className="rounded-2xl border border-white/15 bg-black/10 px-5 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                {isPT ? "Ver Blog" : "See Blog"}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom glow blobs */}
        <div className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/30 via-cyan-400/20 to-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/2 h-72 w-[1100px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-pink-500/15 blur-3xl" />
      </section>

      {/* BELOW HERO */}
      <section className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h2 className="text-lg font-semibold">{isPT ? "Society" : "Society"}</h2>
            <p className="mt-2 text-sm text-white/70">
              {isPT
                ? "Atualidade com clareza, contexto e ação."
                : "Current topics with clarity, context, and action."}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h2 className="text-lg font-semibold">{isPT ? "Adventist" : "Adventist"}</h2>
            <p className="mt-2 text-sm text-white/70">
              {isPT
                ? "Curadoria + aplicação prática. Fé com inteligência."
                : "Curated + practical. Faith with clarity."}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <h2 className="text-lg font-semibold">{isPT ? "Library" : "Library"}</h2>
            <p className="mt-2 text-sm text-white/70">
              {isPT
                ? "Links oficiais e seguros (EGW + recursos)."
                : "Official and safe links (EGW + resources)."}
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
          <h3 className="text-base font-semibold">{isPT ? "Próximo passo" : "Next step"}</h3>
          <p className="mt-2 text-sm text-white/70">
            {isPT
              ? "Agora o site já tem presença visual forte. Próximo upgrade: imagens por categoria (Society/Adventist) e cards do blog com thumbnails."
              : "Now your site has a strong visual identity. Next upgrade: category hero images and blog cards with thumbnails."}
          </p>
        </div>
      </section>
    </main>
  );
}
