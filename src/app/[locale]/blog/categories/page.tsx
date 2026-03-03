import { getBlogArticles } from "@/content/blog/articles";
import Container from "@/components/layout/Container";
import Link from "next/link";

type Props = {
  params: {
    locale: string;
  };
};

export default function CategoriesPage({ params }: Props) {
  const articles = getBlogArticles();

  const categoriesMap: Record<string, number> = {};

  articles.forEach((article) => {
    const slug = article.category.toLowerCase().replace(/\s+/g, "-");

    if (!categoriesMap[slug]) {
      categoriesMap[slug] = 0;
    }

    categoriesMap[slug]++;
  });

  const categories = Object.entries(categoriesMap);

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-6">Categorias</h1>

      <div className="space-y-4">
        {categories.map(([slug, count]) => (
          <Link
            key={slug}
            href={`/${params.locale}/blog/category/${slug}`}
            className="block border border-zinc-700 rounded-lg p-4 hover:bg-zinc-800"
          >
            <div className="flex justify-between">
              <span className="capitalize">
                {slug.replace("-", " ")}
              </span>

              <span className="opacity-70">
                {count} artigo{count > 1 ? "s" : ""}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
