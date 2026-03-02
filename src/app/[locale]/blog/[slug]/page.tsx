import Container from "@/components/layout/Container";
import { getBlogArticle } from "@/content/blog/articles";
import { type Locale } from "@/config/siteConfig";
import { notFound } from "next/navigation";

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const article = getBlogArticle(slug, locale as Locale);

  if (!article) return notFound();

  return (
    <main className="py-10">
      <Container>
        <div className="text-xs text-white/60">{new Date(article.date).toLocaleDateString()}</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{article.title}</h1>
        <p className="mt-2 text-white/60">{article.excerpt}</p>

        <article className="prose prose-invert mt-8 max-w-none">
          <pre className="whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/80">
{article.content}
          </pre>
        </article>
      </Container>
    </main>
  );
}
