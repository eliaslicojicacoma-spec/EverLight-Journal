import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-white to-zinc-50 p-7 shadow-sm
                          dark:border-white/10 dark:from-white/5 dark:to-white/0">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold
                        border-zinc-200 bg-white text-zinc-700
                        dark:border-white/10 dark:bg-white/5 dark:text-white/80">
          PT/EN • Premium • AdSense-ready
        </div>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-5xl">
          EverLight Journal
        </h1>

        <p className="mt-3 max-w-2xl text-base text-zinc-600 dark:text-white/70">
          Sociedade com visão global, fé com profundidade. Conteúdo original, moderno e confiável —
          para leitores do mundo inteiro e para a comunidade Adventista.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/pt/society" className="rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800
                                             dark:bg-white dark:text-zinc-950 dark:hover:bg-white/90">
            Ver Society
          </Link>

          <Link href="/pt/adventist" className="rounded-2xl border px-5 py-3 text-sm font-semibold
                                               border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50
                                               dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
            Ver Adventist
          </Link>

          <Link href="/pt/library" className="rounded-2xl border px-5 py-3 text-sm font-semibold
                                             border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50
                                             dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10">
            Ir para Biblioteca
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "Society", desc: "Notícias e análises curtas, com impacto real e linguagem clara." },
          { title: "Adventist", desc: "Curadoria + contexto + aplicação prática. Sem copiar artigos inteiros." },
          { title: "Library", desc: "Links oficiais e seguros (EGW Writings, recursos missionários)." }
        ].map((c) => (
          <div
            key={c.title}
            className="rounded-2xl border p-5 shadow-sm
                       border-zinc-200 bg-white
                       dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="text-lg font-semibold">{c.title}</h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-white/70">{c.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
