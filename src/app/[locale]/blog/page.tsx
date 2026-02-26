import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const isPT = locale === "pt";

  const posts = getAllPosts(locale);

  return (
    <div className="space-y-8">
      <header className="rounded-[28px] border border-black/10 bg-white p-6">
        <div className="text-[11px] tracking-[0.22em] text-black/60">
          {isPT ? "ARTIGOS & REFLEXÕES" : "ARTICLES & REFLECTIONS"}
        </div>
        <h1 className="mt-3 text-3xl font-semibold">{isPT ? "Blog" : "Blog"}</h1>
        <p className="mt-2 max-w-2xl text-sm text-black/60">
          {isPT
            ? "Conteúdo original com clareza, fontes e aplicação prática."
            : "Original content with clarity, sources, and practical application."}
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-[24px] border border-black/10 bg-white">
            <div className="relative h-44 bg-[#E9E6DF]">
              <Image
                src={p.coverImage.startsWith("http") ? p.coverImage : p.coverImage}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <div className="text-[11px] tracking-[0.22em] text-black/50">{p.category}</div>
              <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 text-sm text-black/60">{p.excerpt}</p>

              <Link
                href={`/${locale}/blog/${p.slug}`}
                className="mt-4 inline-block text-xs font-semibold underline decoration-black/20 underline-offset-4 hover:decoration-black/60"
              >
                {isPT ? "Ler →" : "Read →"}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
