import Image from "next/image";
import Link from "next/link";
import { formatDate, getPostReadingTime, getPostsByLocale } from "@/lib/blog";

export default function BlogIndexPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "BLOG" : "BLOG",
    title: isPT ? "Artigos & Reflexões" : "Articles & Reflections",
    desc: isPT
      ? "Conteúdo original com clareza, contexto e aplicação prática. Leitura leve no telemóvel — valor alto na mente."
      : "Original content with clarity, context, and practical application. Mobile-friendly, high-value.",
    empty: isPT ? "Ainda não há artigos aqui." : "No articles yet.",
    backHome: isPT ? "Voltar ao início" : "Back to home",
  };

  const posts = getPostsByLocale(locale);

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=2200&q=70"
            alt="Blog"
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

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
            >
              {t.backHome}
            </Link>
          </div>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="rounded-[28px] border border-zinc-200 bg-white p-6">
          <p className="text-sm text-zinc-700">{t.empty}</p>
        </section>
      ) : (
        <section className="grid gap-4 md:grid-cols-2">
          {posts.map((p) => {
            const minutes = getPostReadingTime(p);
            const dateLabel = formatDate(p.publishedAt, locale);

            return (
              <Link
                key={p.id}
                href={`/${locale}/blog/${p.slug}`}
                className="group overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative h-44 bg-[#E9E6DF]">
                  <Image
                    src={p.coverImage || "https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0d?auto=format&fit=crop&w=1600&q=70"}
                    alt={p.title}
                    fill
                    className="object-cover opacity-95 transition group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/25 to-transparent" />
                </div>

                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] tracking-[0.18em] text-zinc-500">
                    <span>{dateLabel}</span>
                    <span>•</span>
                    <span>{minutes} min</span>
                    {p.category ? (
                      <>
                        <span>•</span>
                        <span className="uppercase">{p.category}</span>
                      </>
                    ) : null}
                  </div>

                  <h2 className="mt-2 text-xl font-semibold leading-snug">{p.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{p.excerpt}</p>

                  {p.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold text-zinc-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-5 text-xs font-semibold tracking-wide text-zinc-900 underline decoration-zinc-900/25 underline-offset-4">
                    {isPT ? "LER →" : "READ →"}
                  </div>
                </div>
              </Link>
            );
          })}
        </section>
      )}
    </div>
  );
}
