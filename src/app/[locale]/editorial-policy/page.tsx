export default function EditorialPolicyPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-extrabold tracking-tight">Política Editorial</h1>
      <p className="text-zinc-600 dark:text-white/70">
        Como publicamos: clareza, transparência e valor original.
      </p>

      <div className="rounded-2xl border p-5 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
        <ul className="space-y-2 text-sm text-zinc-600 dark:text-white/70">
          <li>1) Não copiamos artigos inteiros de terceiros.</li>
          <li>2) Resumimos e adicionamos contexto e análise própria.</li>
          <li>3) Indicamos fontes quando usamos referências externas.</li>
          <li>4) Evitamos links para conteúdos ilegais ou sem licença.</li>
        </ul>
      </div>
    </div>
  );
}
