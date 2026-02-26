import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20">
      <h1 className="text-3xl font-semibold">Artigo não encontrado</h1>
      <p className="mt-3 text-zinc-600 dark:text-zinc-300">
        Pode ter sido removido, renomeado, ou o link está errado.
      </p>
      <div className="mt-6">
        <Link
          href="/pt/blog"
          className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
        >
          Voltar ao Blog
        </Link>
      </div>
    </main>
  );
}
