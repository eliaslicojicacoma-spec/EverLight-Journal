import Link from "next/link"
import Container from "@/components/layout/Container"
import { getLibraryItem, getLibrarySlugs } from "@/content/library"

type Props = {
  params: {
    locale: string
    slug: string
  }
}

export function generateStaticParams() {
  const slugs = getLibrarySlugs()

  return slugs.map((slug) => ({
    slug,
  }))
}

export default function LibrarySlugPage({ params }: Props) {
  const { locale, slug } = params

  const item = getLibraryItem(slug)

  if (!item) {
    return (
      <Container>
        <div className="py-10">
          <h1 className="text-2xl font-bold">Not found</h1>
        </div>
      </Container>
    )
  }

  const title = item.title[locale === "pt" ? "pt" : "en"]
  const description = item.description?.[locale === "pt" ? "pt" : "en"]
  const author = item.author?.[locale === "pt" ? "pt" : "en"]

  return (
    <Container>
      <div className="py-10">
        <Link
          href={`/${locale}/library`}
          className="text-sm text-blue-400"
        >
          ← Biblioteca
        </Link>

        <h1 className="mt-4 text-3xl font-bold">{title}</h1>

        {author && (
          <p className="mt-2 text-white/60">{author}</p>
        )}

        {description && (
          <p className="mt-4 text-white/80">{description}</p>
        )}
      </div>
    </Container>
  )
}
