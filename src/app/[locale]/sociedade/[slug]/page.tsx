type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export default function SociedadeSlugPage({ params }: Props) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-6">
        Sociedade – {params.slug}
      </h1>

      <p className="text-zinc-400">
        Esta página será usada para artigos relacionados com sociedade e fé.
      </p>
    </main>
  );
}
