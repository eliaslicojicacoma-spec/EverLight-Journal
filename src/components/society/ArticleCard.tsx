import Link from "next/link";

type Props = {
  category: string;
  title: string;
  summary: string;
  context: string;
  actions?: string[];
  href: string;
};

export default function ArticleCard({
  category,
  title,
  summary,
  context,
  actions = [],
  href,
}: Props) {
  return (
    <article className="flex flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      {/* Categoria e Título */}
      <header className="mb-4">
        <span className="mb-1 block text-[10px] font-black uppercase tracking-[0.2em] text-black/40">
          {category}
        </span>
        <h3 className="text-2xl font-bold leading-tight text-black">{title}</h3>
      </header>

      {/* Resumo */}
      <div className="mb-6">
        <p className="border-l-2 border-black pl-4 italic leading-relaxed text-black/70">
          {summary}
        </p>
      </div>

      {/* Contexto e Ação */}
      <div className="grid grid-cols-1 gap-5 border-t border-black/5 pt-5">
        <section>
          <h4 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-black">
            Contexto
          </h4>
          <p className="text-sm leading-snug text-black/60">{context}</p>
        </section>

        <section>
          <h4 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-black">
            Ação
          </h4>
          <ul className="space-y-1">
            {actions.map((item, index) => (
              <li key={`${item}-${index}`} className="flex items-start text-sm text-black/60">
                <span className="mr-2 text-black">•</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Link de Rodapé */}
      <footer className="mt-6 pt-4">
        <Link
          href={href}
          className="inline-flex items-center border-b-2 border-black pb-1 text-sm font-bold text-black transition-colors hover:border-black/40 hover:text-black/70"
        >
          Ler análise completa
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </footer>
    </article>
  );
        }
