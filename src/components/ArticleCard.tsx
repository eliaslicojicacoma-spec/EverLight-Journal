import Link from "next/link";

type Props = {
  locale: string;
  basePath: string; // ex: "adventist" | "society" | "blog"
  slug: string;
  category: string;
  title: string;
  summary: string;
  context: string;
  actions: string[];
  readingTime?: string; // ex: "6 min"
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
    <article className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-white/70 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/5">
      {/* glow suave */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-black/5 blur-3xl transition group-hover:blur-[60px] dark:bg-white/10" />

      <div className="relative p-6">
        <header className="mb-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
              {category}
            </span>
            {readingTime ? (
              <span className="text-[11px] font-semibold text-black/45 dark:text-white/45">
                {readingTime}
              </span>
            ) : null}
          </div>

          <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-tight text-black dark:text-white">
            {title}
          </h3>
        </header>

        {/* resumo em destaque */}
        <div className="mb-6">
          <p className="border-l-2 border-black/70 pl-4 text-[15px] italic leading-relaxed text-black/70 dark:border-white/60 dark:text-white/70">
            {summary}
          </p>
        </div>

        <div className="grid gap-5 border-t border-black/5 pt-5 dark:border-white/10">
          <section>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-black dark:text-white">
              Contexto
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-black/60 dark:text-white/65">
              {context}
            </p>
          </section>

          <section>
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-black dark:text-white">
              Ação
            </h4>
            <ul className="mt-2 space-y-2 text-sm text-black/60 dark:text-white/65">
              {actions.slice(0, 3).map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-black/60 dark:bg-white/60" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="mt-6 pt-4">
          <Link
            href={href}
            className="inline-flex items-center gap-2 border-b-2 border-black pb-1 text-sm font-black text-black transition group-hover:gap-3 group-hover:border-black/60 dark:border-white dark:text-white dark:group-hover:border-white/60"
          >
            Ler análise completa
            <span aria-hidden>→</span>
          </Link>
        </footer>
      </div>
    </article>
  );
      }
