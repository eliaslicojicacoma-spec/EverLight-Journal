type Props = {
  category: string;
  title: string;
  summary: string;
  context: string;
  actions: string[];
  readingTime?: string;
  verse?: { ref: string; text: string };
  sections: { title: string; content: string[] }[];
};

export default function ArticleLayout({
  category,
  title,
  summary,
  context,
  actions,
  readingTime,
  verse,
  sections,
}: Props) {
  return (
    <article className="space-y-10">
      <header className="rounded-[28px] border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-10">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-black/45 dark:text-white/45">
            {category}
          </span>
          {readingTime ? (
            <span className="text-[12px] font-semibold text-black/45 dark:text-white/45">
              {readingTime}
            </span>
          ) : null}
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl border-l-2 border-black/60 pl-4 text-[15px] italic leading-relaxed text-black/70 dark:border-white/60 dark:text-white/70">
          {summary}
        </p>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/60 dark:text-white/65">
          {context}
        </p>

        {verse ? (
          <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-5 text-sm text-black/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70">
            <div className="text-[11px] font-black uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
              Verso-chave
            </div>
            <p className="mt-2 leading-relaxed">“{verse.text}”</p>
            <p className="mt-2 text-xs font-semibold text-black/50 dark:text-white/50">— {verse.ref}</p>
          </div>
        ) : null}
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
        <div className="space-y-8">
          {sections.map((s, idx) => (
            <div key={idx} className="rounded-[28px] border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                {s.title}
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-black/65 dark:text-white/70">
                {s.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-[28px] border border-black/10 bg-white/60 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 sm:p-8">
          <div className="text-[11px] font-black uppercase tracking-[0.25em] text-black/45 dark:text-white/45">
            Ação prática
          </div>
          <ul className="mt-4 space-y-3 text-sm text-black/65 dark:text-white/70">
            {actions.map((a, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-black/60 dark:bg-white/60" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>
    </article>
  );
}
