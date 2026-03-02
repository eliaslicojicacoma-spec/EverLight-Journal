import Link from "next/link";

type Props = {
  category: string;
  title: string;
  summary: string;
  context: string;
  actions: string[];
  href: string;
};

export default function ArticleCard({
  category,
  title,
  summary,
  context,
  actions,
  href,
}: Props) {
  return (
    <article className="flex flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
      <header className="mb-4">
        <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
          {category}
        </span>

        <h3 className="mt-1 text-2xl font-bold leading-tight text-black">
          {title}
        </h3>
      </header>

      <div className="mb-6">
        <p className="border-l-2 border-black pl-4 text-base italic leading-relaxed text-black/70">
          {summary}
        </p>
      </div>

      <div className="grid gap-5 border-t border-black/5 pt-5">
        <section>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-black">
            Contexto
          </h4>
          <p className="mt-2 text-sm leading-snug text-black/60">{context}</p>
        </section>

        <section>
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-black">
            Ação
          </h4>
          <ul className="mt-2 space-y-1">
            {actions.map((item, index) => (
              <li key={index} className="flex items-start text-sm text-black/60">
                <span className="mr-2 text-black">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <footer className="mt-6 pt-4">
        <Link
          href={href}
          className="inline-flex items-center border-b-2 border-black pb-1 text-sm font-bold transition hover:border-black/50 hover:text-black/60"
        >
          Ler análise completa <span className="ml-2">→</span>
        </Link>
      </footer>
    </article>
  );
}
