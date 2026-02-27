import Image from "next/image";
import Link from "next/link";
import blogPosts from "@/content/blogPosts.json";

type BlogPost = {
  id: string;
  locale: string;
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
};

function isPost(x: any): x is BlogPost {
  return x && typeof x.slug === "string";
}

function getRecent(locale: string) {
  const arr = Array.isArray(blogPosts) ? blogPosts : [];
  return arr
    .filter(isPost)
    .filter((p) => p.locale === locale)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))
    .slice(0, 4);
}

export default function SocietyPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "SOCIEDADE" : "SOCIETY",
    headline: isPT
      ? "Clareza editorial para tempos confusos."
      : "Editorial clarity in confusing times.",
    intro: isPT
      ? "A Society do EverLight Journal oferece leitura responsável sobre cultura, ética, economia e comportamento. Sem ruído. Sem sensacionalismo."
      : "EverLight’s Society delivers responsible reading on culture, ethics, economy and behavior. No noise. No sensationalism.",
    readMore: isPT ? "Ler artigo →" : "Read article →",
  };

  const posts = getRecent(locale);

  return (
    <div className="space-y-16">
      {/* HERO EDITORIAL */}
      <section className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2000&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-white/85 dark:bg-zinc-950/85" />
        </div>

        <div className="relative p-10 sm:p-16">
          <div className="text-xs tracking-[0.35em] text-zinc-600 dark:text-zinc-400">
            {t.kicker}
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {t.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {t.intro}
          </p>
        </div>
      </section>

      {/* EDITORIAL GRID */}
      <section className="grid gap-10 md:grid-cols-2">
        {posts.map((p) => (
          <article key={p.id} className="space-y-3">
            <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              {p.publishedAt}
            </div>

            <h2 className="text-2xl font-semibold leading-snug">
              {p.title}
            </h2>

            <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              {p.excerpt}
            </p>

            <Link
              href={`/${locale}/blog/${p.slug}`}
              className="inline-block text-sm font-semibold underline decoration-black/20 underline-offset-4 hover:decoration-black dark:decoration-white/30"
            >
              {t.readMore}
            </Link>

            <div className="border-b border-black/10 pt-6 dark:border-white/10" />
          </article>
        ))}
      </section>

      {/* FOOTER NOTE */}
      <section className="border-t border-black/10 pt-10 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400">
        <p>
          {isPT
            ? "A Society não reage a manchetes. Ela interpreta realidades."
            : "Society does not react to headlines. It interprets realities."}
        </p>
      </section>
    </div>
  );
}
