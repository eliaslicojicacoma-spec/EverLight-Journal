import Link from "next/link";
import Container from "@/components/layout/Container";
import { getBlogArticles } from "@/content/blog/articles";
import { type Locale } from "@/config/siteConfig";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const articles = getBlogArticles(locale as Locale);

  return (
    <main className="py-10">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
        <p className="mt-2 text-white/60">
          Artigos carregados diretamente de <code className="text-white/80">src/content/blog/articles.ts</code>.
        </p>

        <div className="mt-8 grid gap-4">
          {articles.map((a) => (
            <Link
              key={a.slug}
              href={`/${locale}/blog/${a.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="text-xs text-white/60">{new Date(a.date).toLocaleDateString()}</div>
              <div className="mt-2 text-lg font-medium">{a.title}</div>
              <div className="mt-1 text-white/60">{a.excerpt}</div>

              <div className="mt-3 flex flex-wrap gap-2">
                {a.categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </main>
  );
}
