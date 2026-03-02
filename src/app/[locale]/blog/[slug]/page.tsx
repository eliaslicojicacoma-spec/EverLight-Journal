import Link from "next/link";
import { getBlogArticle } from "@/content/blog/articles";

export default function BlogPost({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  const locale = (params.locale === "en" ? "en" : "pt") as "pt" | "en";
  const post = getBlogArticle(params.slug, locale);

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold">404</h1>
        <p className="mt-2 text-white/70">
          {locale === "pt" ? "Artigo não encontrado." : "Post not found."}
        </p>
        <Link className="mt-6 inline-block underline" href={`/${locale}/blog`}>
          {locale === "pt" ? "Voltar ao blog" : "Back to blog"}
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Link className="text-sm underline text-white/70" href={`/${locale}/blog`}>
        {locale === "pt" ? "← Voltar" : "← Back"}
      </Link>

      <h1 className="mt-4 text-3xl font-semibold">{post.title}</h1>
      <div className="mt-2 text-sm text-white/60">
        {post.publishedAt} • {post.category}
        {post.readingTime ? ` • ${post.readingTime} min` : ""}
      </div>

      <article className="prose prose-invert mt-8 max-w-none">
        <p>{post.content}</p>
      </article>
    </main>
  );
}
