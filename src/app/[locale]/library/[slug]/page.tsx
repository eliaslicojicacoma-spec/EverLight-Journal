import Link from "next/link";
import Container from "@/components/layout/Container";
import { getLibraryItem, getLibrarySlugs } from "@/content/library";

type Props = {
  params: { locale: string; slug: string };
};

export function generateStaticParams() {
  // gera slugs para build (SSG)
  return getLibrarySlugs().map((slug) => ({ slug }));
}

export default function LibrarySlugPage({ params }: Props) {
  const { locale, slug } = params;
  const item = getLibraryItem(slug);

  if (!item) {
    return (
      <Container>
        <div className="py-10">
          <h1 className="text-2xl font-bold">Not found</h1>
          <p className="mt-2 text-white/70">Esse recurso não existe.</p>
          <Link
            className="mt-4 inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm ring-1 ring-white/10 hover:bg-white/15"
            href={`/${locale}/library`}
          >
            Voltar
          </Link>
        </div>
      </Container>
    );
  }

  const title = item.title[locale === "pt" ? "pt" : "en"];
  const author = item.author?.[locale === "pt" ? "pt" : "en"];
  const desc = item.description?.[locale === "pt" ? "pt" : "en"];

  return (
    <Container>
      <div className="py-10">
        <div className="mb-6">
          <Link className="text-sm text-white/70 hover:text-white" href={`/${locale}/library`}>
            ← {locale === "pt" ? "Biblioteca" : "Library"}
          </Link>
        </div>

        <h1 className="text-3xl font-bold">{title}</h1>
        {author && <p className="mt-2 text-white/70">{author}</p>}
        {desc && <p className="mt-4 max-w-2xl text-white/75">{desc}</p>}

        <div className="mt-8 flex flex-wrap gap-3">
          {item.pdf ? (
            <a
              href={item.pdf}
              className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black hover:opacity-95"
            >
              {locale === "pt" ? "Baixar PDF" : "Download PDF"}
            </a>
          ) : (
            <span className="rounded-xl bg-white/10 px-4 py-2 text-sm text-white/70 ring-1 ring-white/10">
              {locale === "pt" ? "PDF ainda não disponível" : "PDF not available yet"}
            </span>
          )}

          {item.externalUrl ? (
            <a
              href={item.externalUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/15"
            >
              {locale === "pt" ? "Abrir link" : "Open link"}
            </a>
          ) : null}
        </div>
      </div>
    </Container>
  );
}
