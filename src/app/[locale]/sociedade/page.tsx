import Container from "@/components/layout/Container";
import Link from "next/link";

type Props = {
  params: {
    locale: string;
  };
};

export default function SociedadePage({ params }: Props) {
  const base = `/${params.locale}/sociedade`;

  const items = [
    { slug: "sociedade-e-fe", title: "Sociedade e Fé", desc: "Reflexões e textos que ligam fé, cultura e vida real." },
    { slug: "familia", title: "Família", desc: "Princípios, conselhos e vida cristã no lar." },
    { slug: "juventude", title: "Juventude", desc: "Conteúdos para crescer em propósito e caráter." },
  ];

  return (
    <Container>
      <h1 className="text-3xl font-bold mb-2">Sociedade</h1>
      <p className="opacity-70 mb-8">
        Uma área dedicada a temas sociais com uma lente cristã e prática.
      </p>

      <div className="space-y-4">
        {items.map((it) => (
          <Link
            key={it.slug}
            href={`${base}/${it.slug}`}
            className="block rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <div className="text-lg font-semibold">{it.title}</div>
            <div className="text-sm opacity-70 mt-1">{it.desc}</div>
            <div className="text-sm text-blue-400 mt-3">Abrir →</div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
