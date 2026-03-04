import { getBlogArticles } from "@/content/blog/articles";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { t } from "@/lib/i18nText";

type Props = {
  params: {
    locale: string;
    category: string;
  };
};

export default function CategoryPage({ params }: Props) {
  const articles = getBlogArticles();

  const filtered = articles.filter((article) =>
    article.category.toLowerCase().replace(/\s+/g, "-") === params.category
  );

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">
        Categoria: {params.category.replace("-", " ")}
      </h1>

      {filtered.length === 0 && (
        <p>Nenhum artigo encontrado nesta categoria.</p>
      )}

      <div className="space-y-6">
        {filtered.map((article) => (
          <div
            key={article.slug}
            className="border border-zinc-700 rounded-lg p-5"
          >
            <h2 className="text-xl font-semibold">{t(article.title as any, params.locale)}</h2>

            <p className="text-sm opacity-70 mb-2">{(article as any).date}</p>

            <Link
              href={`/${params.locale}/blog/${article.slug}`}
              className="text-blue-400"
            >
              Ler artigo →
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}