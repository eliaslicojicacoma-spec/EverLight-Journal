import { notFound } from "next/navigation";
import Link from "next/link";
import ArticleLayout from "@/components/article/ArticleLayout";
import { getBlogArticle, getBlogSlugs } from "@/content/blog/articles";

export function generateStaticParams({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  return getBlogSlugs(locale).map((slug) => ({ slug }));
}

export default function BlogArticlePage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = params?.locale ?? "pt";
  const slug = params?.slug;

  const article = getBlogArticle(locale, slug);
  if (!article) return notFound();

  return (
    <main className="space-y-8">
      <div className="text-sm">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 font-semibold text-black/70 hover:text-black dark:text-white/70 dark:hover:text-white"
        >
          ← Voltar ao Blog
        </Link>
      </div>

      <ArticleLayout
        category={article.category}
        title={article.title}
        summary={article.summary}
        context={article.context}
        actions={article.actions}
        readingTime={article.readingTime}
        sections={article.sections}
      />
    </main>
  );
}
