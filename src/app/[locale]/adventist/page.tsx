import Image from "next/image";
import Link from "next/link";
import blogPosts from "@/content/blogPosts.json";

type BlogPost = {
  id: string;
  locale: string;
  slug: string;
  title: string;
  excerpt: string;
  category?: string;
  tags?: string[];
  coverImage?: string;
  publishedAt: string;
};

function isPost(x: any): x is BlogPost {
  return x && typeof x === "object" && typeof x.slug === "string" && typeof x.title === "string";
}

function getPosts(locale: string): BlogPost[] {
  const arr = Array.isArray(blogPosts) ? blogPosts : [];
  return arr
    .filter(isPost)
    .filter((p) => p.locale === locale)
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

function isAdventist(post: BlogPost) {
  const c = (post.category ?? "").toLowerCase();
  const tags = (post.tags ?? []).map((t) => t.toLowerCase());
  return (
    c.includes("advent") ||
    c.includes("vida-espiritual") ||
    tags.includes("bible-study") ||
    tags.includes("estudo-biblico") ||
    tags.includes("discipulado") ||
    tags.includes("oracao")
  );
}

function pickAdventist(locale: string) {
  const all = getPosts(locale);
  const filtered = all.filter(isAdventist);
  return (filtered.length ? filtered : all).slice(0, 6);
}

function fmtDate(iso: string, locale: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const dt = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  return new Intl.DateTimeFormat(locale === "pt" ? "pt-PT" : "en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    timeZone: "UTC",
  }).format(dt);
}

export default function AdventistPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "ADVENTISTA" : "ADVENTIST",
    title: isPT ? "Fé com clareza, Bíblia com contexto." : "Faith with clarity, Scripture with context.",
    desc: isPT
      ? "Conteúdo adventista responsável: estudo bíblico, discipulado e vida prática — sem extremos."
      : "Responsible Adventist content: Bible study, discipleship, and practical life — without extremes.",
    openLibrary: isPT ? "Abrir Biblioteca →" : "Open Library →",
    openBlog: isPT ? "Ver artigos no Blog →" : "See articles on the Blog →",
    read: isPT ? "Ler artigo →" : "Read article →",
    section: isPT ? "Seleção editorial" : "Editorial selection",
  };

  const posts = pickAdventist(locale);
  const featured = posts[0];
  const rest = posts.slice(1, 4);

  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1548625361-58a9b86aa83b?auto=format&fit=crop&w=2200&q=80"
            alt=""
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-white/85 dark:bg-zinc-950/85" />
        </div>

        <div className="relative p-10 sm:p-16">
          <div className="text-xs tracking-[0.35em] text-zinc-500 dark:text-zinc-400">{t.kicker}</div>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {t.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">{t.desc}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={`/${locale}/library`}
              className="inline-flex items-center justify-center rounded-xl bg-black px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95 dark:bg-white dark:text-black"
            >
              {t.openLibrary}
            </Link>
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-black hover:bg-black/5 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:hover:bg-white/5"
            >
              {t.openBlog}
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED + 3 */}
      <section className="grid gap-6 lg:grid-cols-12">
        {/* FEATURED */}
        {featured ? (
          <article className="lg:col-span-7 overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <div className="relative h-56 sm:h-72">
              <Image
                src={
                  featured.coverImage?.startsWith("/")
                    ? featured.coverImage
                    : featured.coverImage ?? "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=2000&q=80"
                }
                alt={featured.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            </div>

            <div className="p-7 sm:p-8">
              <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                {fmtDate(featured.publishedAt, locale)}
              </div>
              <h2 className="mt-3 text-2xl font-semibold leading-snug sm:text-3xl">{featured.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">{featured.excerpt}</p>

              <div className="mt-6">
                <Link
                  href={`/${locale}/blog/${featured.slug}`}
                  className="inline-flex items-center rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:opacity-95 dark:bg-white dark:text-black"
                >
                  {t.read}
                </Link>
              </div>
            </div>
          </article>
        ) : (
          <div className="lg:col-span-7 rounded-[28px] border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-zinc-950">
            <p className="text-zinc-700 dark:text-zinc-300">
              {isPT ? "Ainda não há posts adventistas suficientes." : "Not enough Adventist posts yet."}
            </p>
          </div>
        )}

        {/* 3 SMALL */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-lg font-semibold">{t.section}</h3>

          {rest.map((p) => (
            <article
              key={p.id}
              className="rounded-[24px] border border-black/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-zinc-950"
            >
              <div className="text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                {fmtDate(p.publishedAt, locale)}
              </div>
              <h4 className="mt-2 text-lg font-semibold leading-snug">{p.title}</h4>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {p.excerpt}
              </p>
              <Link
                href={`/${locale}/blog/${p.slug}`}
                className="mt-4 inline-block text-sm font-semibold underline decoration-black/20 underline-offset-4 hover:decoration-black dark:decoration-white/30"
              >
                {t.read}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
                }
