type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export default function LibrarySlugPage({ params }: Props) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">Biblioteca – {params.slug}</h1>

      <p className="text-zinc-400">
        Esta página será usada para mostrar recursos da biblioteca como livros,
        revistas e materiais cristãos.
      </p>
    </main>
  );
}
