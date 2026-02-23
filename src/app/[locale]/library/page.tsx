import livros from "@/data/livros.json";
import artigos from "@/data/artigos.json";

type Livro = {
  id: string;
  title: string;
  author: string;
  category: string;
  language: string;
  url: string;
};

type Recurso = {
  id: string;
  title: string;
  category: string;
  language: string;
  url: string;
};

export default function LibraryPage() {
  const books = livros as Livro[];
  const resources = artigos as Recurso[];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-extrabold tracking-tight">Library</h1>
      <p className="text-zinc-600 dark:text-white/70">
        Recursos oficiais e seguros. Aqui a regra é simples: linkar fontes confiáveis.
      </p>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Ellen G. White (EGW Writings)</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {books.map((b) => (
            <a
              key={b.id}
              href={b.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border p-5 shadow-sm hover:shadow-md transition
                         border-zinc-200 bg-white hover:bg-zinc-50
                         dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">{b.category}</p>
              <h3 className="mt-1 text-lg font-extrabold">{b.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-white/70">{b.author} • {b.language.toUpperCase()}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Recursos Missionários</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {resources.map((r) => (
            <a
              key={r.id}
              href={r.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border p-4 shadow-sm hover:shadow-md transition
                         border-zinc-200 bg-white hover:bg-zinc-50
                         dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-semibold">{r.title}</h3>
                <span className="text-xs rounded-full border px-2 py-0.5
                                 border-zinc-200 text-zinc-600
                                 dark:border-white/10 dark:text-white/70">
                  {r.language.toUpperCase()}
                </span>
              </div>
              <p className="mt-1 text-sm text-zinc-600 dark:text-white/70">{r.category}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
