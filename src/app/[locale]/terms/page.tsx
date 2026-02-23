export default function TermsPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-extrabold tracking-tight">Termos de Uso</h1>
      <p className="text-zinc-600 dark:text-white/70">
        Termos gerais para uso do site.
      </p>

      <div className="rounded-2xl border p-5 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
        <h2 className="text-lg font-semibold">Conteúdo</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
          O conteúdo é original (salvo indicação). Links externos pertencem aos seus respetivos autores/plataformas.
        </p>

        <h2 className="mt-5 text-lg font-semibold">Responsabilidade</h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-white/70">
          Informações têm caráter educativo. Confirma sempre fontes oficiais em temas sensíveis.
        </p>
      </div>
    </div>
  );
}
