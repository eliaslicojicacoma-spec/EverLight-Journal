import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import { getBlogArticles } from "@/content/blog/articles";

type PageProps = { params: { locale: string } };

export default function BlogPage({ params }: PageProps) {
  const locale = (params?.locale ?? siteConfig.defaultLocale) as "pt" | "en";
  const isPT = locale === "pt";
  const articles = getBlogArticles(locale);

  return (
    <main className="space-y-10">
      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <div className="text-[11px] font-semibold tracking-[0.22em] text-black/60">
          {isPT ? "BLOG" : "BLOG"}
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black">
          {isPT ? "Fé & Sociedade" : "Faith & Society"}
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60">
          {isPT
            ? "Artigos cristãos, vida prática e reflexões bíblicas para o dia a dia."
            : "Christian articles, practical life and biblical reflections for daily living."}
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {articles.map((a) => (
          <article
            key={`${a.locale}-${a.slug}`}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <div className="text-[11px] font-semibold tracking-[0.22em] text-black/50">
              {a.date} · {a.readTime} · {a.category.toUpperCase()}
            </div>

            <h2 className="mt-3 text-2xl font-semibold leading-tight text-black">
              {a.title}
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-black/60">
              {a.summary}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {a.tags.map((t) => (
                <Link
                  key={t}
                  href={`/${locale}/blog/category/${encodeURIComponent(a.category)}`}
                  className="rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-xs font-semibold text-black/60"
                >
                  {t}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href={`/${locale}/blog/${a.slug}`}
                className="inline-flex items-center border-b-2 border-black pb-1 text-sm font-bold transition hover:border-black/50 hover:text-black/60"
              >
                {isPT ? "Ler" : "Read"}
                <span className="ml-2">→</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
