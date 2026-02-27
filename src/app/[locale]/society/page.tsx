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

function isSociety(post: BlogPost) {
  const c = (post.category ?? "").toLowerCase();
  const tags = (post.tags ?? []).map((t) => t.toLowerCase());
  return (
    c.includes("soc") ||
    c.includes("etica") ||
    c.includes("ethic") ||
    c.includes("lead") ||
    tags.includes("tecnologia") ||
    tags.includes("cidadania") ||
    tags.includes("etica-digital") ||
    tags.includes("desinformacao") ||
    tags.includes("leadership") ||
    tags.includes("ethics")
  );
}

function pickSociety(locale: string): BlogPost[] {
  const all = getPosts(locale);
  const filtered = all.filter(isSociety);
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

export default function SocietyPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const t = {
    kicker: isPT ? "SOCIEDADE" : "SOCIETY",
    title: isPT ? "Atualidade sem ruído. Só clareza." : "Current events without noise. Just clarity.",
    desc: isPT
      ? "Resumo, contexto e ações práticas — com postura editorial séria. Nada de hype."
      : "Summary, context, and practical actions — with serious editorial standards. No hype.",
    featured: isPT ? "Em destaque" : "Featured",
    latest: isPT ? "Mais recentes" : "Latest",
    read: isPT ? "Ler artigo →" : "Read article →",
    exploreBlog: isPT ? "Ver todos no Blog →" : "See all on the Blog →",
  };

  const posts = pickSociety(locale);
  const featured = posts[0];
  const rest = posts.slice(1, 4);

  return (
    <div className="space-y-14">
      {/* HERO EDITORIAL */}
      <section className="rounded-[28px] border border-black/10 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-zinc-950 sm:p-10">
        <div className="text-xs tracking-[0.35em] text-zinc-500 dark:text-zinc-400">{t.kicker}</div>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">{t.desc}</p>

        <div className="mt-8 flex items-center justify-between gap-4 border-t border-black/10 pt-6 dark:border-white/10">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            {isPT ? "Padrão EverLight:" : "EverLight standard:"}{" "}
            <span className="font-medium text-zinc-900 dark:text-white">
              {isPT ? "resumo + contexto + ação" : "summary + context + action"}
            </span>
          </div>
          <Link
            href={`/${locale}/blog`}
            className="text-sm font-semibold underline decoration-black/20 underline-offset-4 hover:decoration-black dark:decoration-white/30"
          >
            {t.exploreBlog}
          </Link>
        </div>
      </section>

      {/* FEATURED + 3 */}
      {featured ? (
        <section className="grid gap-6 lg:grid-cols-12">
          {/* FEATURED BIG */}
          <article className="lg:col-span-7 overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm dark:border-white/10 dark:bg-zinc-950">
            <div className="relative h-56 sm:h-72">
              <Image
                src={
                  featured.coverImage?.startsWith("/")
                    ? featured.coverImage
                    : featured.coverImage ?? "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=2000&q=80"
                }
                alt={featured.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute left-6 top-6 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black">
                {t.featured}
              </div>
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

          {/* 3 SMALL */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-end justify-between">
              <h3 className="text-lg font-semibold">{t.latest}</h3>
            </div>

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
      ) : (
        <section className="rounded-[28px] border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-zinc-950">
          <p className="text-zinc-700 dark:text-zinc-300">
            {isPT ? "Ainda não há posts de Society. Publica 1 artigo e volta aqui." : "No Society posts yet. Publish one article and come back."}
          </p>
        </section>
      )}
    </div>
  );
      }
