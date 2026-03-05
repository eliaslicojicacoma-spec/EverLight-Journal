import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { getLibraryItem, getLibrarySlugs } from "@/content/library";
import { t } from "@/lib/i18nText";

type Props = {
  params: { locale: string; slug: string };
};

export function generateStaticParams() {
  const slugs = getLibrarySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function LibrarySlugPage({ params }: Props) {
  const { locale, slug } = params;
  const item = getLibraryItem(slug);

  if (!item) return notFound();

  const title = t(item.title as any, locale);
  const author = item.author ? t(item.author as any, locale) : "";
  const description = item.description ? t(item.description as any, locale) : "";

  return (
    <Container>
      <div className="space-y-6 py-10">
        <Link href={`/${locale}/library`} className="text-sm opacity-70 hover:opacity-100">
          ← {locale === "pt" ? "Voltar à Biblioteca" : "Back to Library"}
        </Link>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">{title}</h1>
            {author ? <p className="text-sm opacity-70">{author}</p> : null}
            {description ? <p className="opacity-80">{description}</p> : null}

            {item.tags?.length ? (
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs opacity-80"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3 pt-4">
              {item.pdf ? (
                <a
                  href={item.pdf}
                  className="rounded-xl bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200 hover:bg-blue-500/30 transition"
                  download
                >
                  {locale === "pt" ? "Baixar PDF" : "Download PDF"}
                </a>
              ) : (
                <span className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm opacity-70">
                  {locale === "pt" ? "PDF ainda não disponível" : "PDF not available yet"}
                </span>
              )}

              <button
                type="button"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm hover:bg-white/10 transition"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    navigator.clipboard?.writeText(window.location.href);
                    alert(locale === "pt" ? "Link copiado!" : "Link copied!");
                  }
                }}
              >
                {locale === "pt" ? "Copiar link" : "Copy link"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
