import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/posts";

export default function FeaturedPosts({ locale }: { locale: "pt" | "en" }) {
  const posts = getAllPosts(locale).slice(0, 3);

  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight">
            {locale === "pt" ? "Destaques do Blog" : "Featured Posts"}
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-white/70">
            {locale === "pt"
              ? "Leitura rápida com valor real. Sem enrolação."
              : "Short reads with real value. No fluff."}
          </p>
        </div>

        <Link
          href={`/${locale}/blog`}
          className="text-sm font-extrabold text-indigo-600 hover:underline dark:text-indigo-300"
        >
          {locale === "pt" ? "Ver tudo →" : "View all →"}
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((p) => (
          <Link
            key={p.id}
            href={`/${locale}/blog/${p.slug}`}
            className="group rounded-2xl border p-5 shadow-sm transition hover:shadow-md
                       border-zinc-200 bg-white hover:bg-zinc-50
                       dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-300">
                {p.category}
              </span>
              <span className="text-xs text-zinc-500 dark:text-white/50">
                {formatDate(p.publishedAt, locale)}
              </span>
            </div>

            <h3 className="mt-2 text-lg font-extrabold tracking-tight">
              {p.title}
            </h3>

            <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
              {p.excerpt}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-2 py-0.5 text-xs font-semibold
                             border-zinc-200 text-zinc-600
                             dark:border-white/10 dark:text-white/70"
                >
                  #{t}
                </span>
              ))}
            </div>

            <p className="mt-4 text-sm font-extrabold text-indigo-600 dark:text-indigo-300">
              {locale === "pt" ? "Ler →" : "Read →"}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
