import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const posts = getAllPosts(locale);

  return (
    <main className="space-y-8">
      <section className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-8">
        <div className="absolute inset-0 opacity-[0.35]">
          <Image
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=2200&q=70"
            alt="Blog hero"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/75 to-white" />
        <div className="relative">
          <div className="text-[11px] tracking-[0.22em] text-black/60">
            {isPT ? "ARTIGOS • CLAREZA • APLICAÇÃO" : "ARTICLES • CLARITY • ACTION"}
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight">
            {isPT ? "Blog" : "Blog"}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/65">
            {isPT
              ? "Conteúdo original com contexto, resumo e passos práticos. Sem copiar artigos. Sem sensacionalismo."
              : "Original content with context, summaries, and practical steps. No copy-paste. No sensationalism."}
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <Link
            key={p.id}
            href={`/${locale}/blog/${p.slug}`}
            className="group overflow-hidden rounded-[26px] border border-black/10 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="relative aspect-[16/10] w-full bg-black/5">
              <Image src={p.coverImage} alt={p.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-black backdrop-blur">
                {p.category.toUpperCase()}
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold leading-tight">{p.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-black/65">{p.excerpt}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags?.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[11px] font-semibold text-black/70"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="mt-6 text-xs font-semibold tracking-wide text-black underline decoration-black/20 underline-offset-4">
                {isPT ? "LER ARTIGO →" : "READ →"}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
