import Link from "next/link";

type Props = {
  locale: string;
  basePath: string;
  slug: string;
  category: string;
  title: string;
  summary: string;
  context: string;
  actions: string[];
  readingTime?: string;
};

export default function ArticleCard({
  locale,
  basePath,
  slug,
  category,
  title,
  summary,
  context,
  actions,
  readingTime,
}: Props) {
  const href = `/${locale}/${basePath}/${slug}`;

  return (
    <article className="group rounded-[28px] border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
      <header className="mb-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black/40 dark:text-white/40">
            {category}
          </span>
          {readingTime && (
            <span className="text-[11px] font-semibold text-black/45 dark:text-white/45">
              {readingTime}
            </span>
          )}
        </div>

        <h3 className="mt-2 text-2xl font-semibold text-black dark:text-white">
          {title}
        </h3>
      </header>

      <div className="mb-6">
        <p className="border-l-2 border-black pl-4 italic text-black/70 dark:border-white dark:text-white/70">
          {summary}
        </p>
      </div>

      <div className="grid gap-4 border-t border-black/5 pt-4 dark:border-white/10">
        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider">
            Contexto
          </h4>
          <p className="mt-2 text-sm text-black/60 dark:text-white/65">
            {context}
          </p>
        </div>

        <div>
          <h4 className="text-[11px] font-bold uppercase tracking-wider">
            Ação
          </h4>
          <ul className="mt-2 space-y-1 text-sm text-black/60 dark:text-white/65">
            {actions.map((a, i) => (
              <li key={i}>• {a}</li>
            ))}
          </ul>
        </div>
      </div>

      <footer className="mt-6">
        <Link
          href={href}
          className="inline-flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-bold transition hover:border-black/50 dark:border-white dark:hover:border-white/60"
        >
          Ler análise completa →
        </Link>
      </footer>
    </article>
  );
}
