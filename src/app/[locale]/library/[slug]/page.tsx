type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export default function LibrarySlugPage({ params }: Props) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">Biblioteca</h1>

      <p className="text-zinc-400">
        Esta página será usada para mostrar livros, revistas e materiais cristãos.
      </p>
    </main>
  );
}
