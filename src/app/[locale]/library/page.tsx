import livros from "@/data/livros.json";
import artigos from "@/data/artigos.json";
import LibraryExplorer from "@/components/library/LibraryExplorer";

type Livro = {
  id: string;
  title: string;
  author: string;
  type: string;
  category: string;
  language: string;
  url: string;
};

type Recurso = {
  id: string;
  title: string;
  category: string;
  language: string;
  url: string;
};

export default async function LibraryPage({
  params
}: {
  params: Promise<{ locale: "pt" | "en" }>;
}) {
  const { locale } = await params;

  const books = livros as Livro[];
  const resources = artigos as Recurso[];

  return <LibraryExplorer locale={locale} books={books} resources={resources} />;
}
