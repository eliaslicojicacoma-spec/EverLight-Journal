import Image from "next/image";
import Link from "next/link";
import resources from "@/content/library.json";

type Resource = {
  id: string;
  type: "collection" | "tool" | string;
  title_pt: string;
  title_en: string;
  desc_pt: string;
  desc_en: string;
  href: string;
  badge_pt?: string;
  badge_en?: string;
};

export default function LibraryPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "RECURSOS OFICIAIS & ESTUDO" : "OFFICIAL RESOURCES & STUDY",
    title: isPT ? "Biblioteca Essencial" : "Essential Library",
    desc: isPT
      ? "Curadoria com foco em fontes oficiais (EGW Writings, Adventistas, Novo Tempo) e materiais de estudo."
      : "Curated resources with official sources (EGW Writings, Adventist channels) and study materials.",
    egw: isPT ? "Destaque: EGW Writings (Oficial)" : "Featured: EGW Writings (Official)",
    open: isPT ? "ABRIR →" : "OPEN →",
  };

  const list = (Array.isArray(resources) ? (resources as Resource[]) : []).filter(
    (x) => x && typeof x.href === "string"
  );

  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=2200&q=70"
            alt="Biblioteca"
            fill
            priority
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/75 to-white/95" />
        </div>

        <div className="relative p-6 sm:p-10">
          <div className="text-[11px] font-semibold tracking-[0.22em] text-zinc-600">{t.kicker}</div>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">{t.title}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">{t.desc}</p>

          <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-4">
            <div className="text-xs font-semibold tracking-[0.18em] text-zinc-700">{t.egw}</div>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <Link
                href="https://egwwritings.org/"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-[#121212] px-5 py-3 text-xs font-semibold tracking-wide text-white hover:opacity-95"
              >
                EGW Writings
              </Link>
              <Link
                href="https://egwwritings.org/books"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-5 py-3 text-xs font-semibold tracking-wide text-[#121212] hover:bg-black/5"
              >
                {isPT ? "Livros (Online)" : "Books (Online)"}
              </Link>
              <Link
                href="https://egwwritings.org/search"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-black/15 bg-white px-5 py-3 text-xs font-semibold tracking-wide text-[#121212] hover:bg-black/5"
              >
                {isPT ? "Pesquisar" : "Search"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES GRID */}
      <section className="rounded-[28px] border border-zinc-200 bg-white p-6">
        <div className="grid gap-4 md:grid-cols-2">
          {list.map((r) => {
            const title = isPT ? r.title_pt : r.title_en;
            const desc = isPT ? r.desc_pt : r.desc_en;
            const badge = isPT ? r.badge_pt : r.badge_en;

            return (
              <Link
                key={r.id}
                href={r.href}
                target="_blank"
                className="group overflow-hidden rounded-[24px] border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-base font-semibold text-[#121212]">{title}</h2>
                    {badge ? (
                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-zinc-700">
                        {badge}
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{desc}</p>

                  <div className="mt-4 text-xs font-semibold tracking-wide text-zinc-900 underline decoration-zinc-900/25 underline-offset-4">
                    {t.open}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
                }
