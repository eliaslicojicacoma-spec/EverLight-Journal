import Link from "next/link";

export type ArticleCardData = {
  category: string;
  title: string;
  summary: string;
  context: string;
  actions: string[];
  slug: string;
  href: string; // ✅ rota final já pronta
  tags?: string[];
  date?: string; // opcional
  readingTime?: string; // opcional
};

export default function ArticleCard({
  category,
  title,
  summary,
  context,
  actions,
  href,
  tags = [],
  date,
  readingTime,
}: ArticleCardData) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[28px] border border-black/10 bg-white/70 shadow-sm backdrop-blur transition hover:shadow-md">
      <div className="p-6">
        {(date || readingTime) && (
          <div className="mb-3 text-[11px] font-semibold tracking-[0.22em] text-black/45">
            {date ? date : ""}{date && readingTime ? " • " : ""}{readingTime ? readingTime : ""}
          </div>
        )}

        <span className="text-[11px] font-black uppercase tracking-[0.22em] text-black/35">
          {category}
        </span>

        <h3 className="mt-3 text-2xl font-bold leading-tight text-black">
          {title}
        </h3>

        <p className="mt-4 border-l-2 border-black pl-4 text-[15px] italic leading-relaxed text-black/65">
          {summary}
        </p>

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs font-semibold text-black/65"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 border-t border-black/10 pt-6">
          <h4 className="text-[12px] font-black uppercase tracking-[0.18em] text-black">
            CONTEXTO
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-black/60">{context}</p>

          <h4 className="mt-6 text-[12px] font-black uppercase tracking-[0.18em] text-black">
            AÇÃO
          </h4>
          <ul className="mt-2 space-y-2 text-sm text-black/60">
            {actions.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-black/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-sm font-black text-black underline decoration-black/20 underline-offset-8 hover:decoration-black/60"
            >
              Ler análise completa <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
