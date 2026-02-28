import ArticleCard from "@/components/ArticleCard";
import { getBlogCards } from "@/content/blog/articles";

export default function BlogPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const cards = getBlogCards(locale);

  return (
    <main className="space-y-10">
      {/* Header */}
      <section className="rounded-[28px] border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
        <div className="text-[11px] font-black uppercase tracking-[0.25em] text-black/50 dark:text-white/50">
          BLOG
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
          {isPT ? "Fé & Sociedade" : "Faith & Society"}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-black/60 dark:text-white/65">
          {isPT
            ? "Artigos com visão bíblica, linguagem clara e aplicação prática."
            :
