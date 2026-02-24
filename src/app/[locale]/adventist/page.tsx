import Link from "next/link";

export default function AdventistPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Adventist</h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">
          Temas com fontes confiáveis, resumo + valor adicional e aplicação prática.
          Sem copiar artigos. Sem sensacionalismo. Fé com inteligência.
        </p>
      </header>

      <section className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold">O propósito desta seção</h2>
        <div className="mt-3 space-y-4 text-sm leading-relaxed text-zinc-700">
          <p>
            Esta seção existe para ajudar pessoas a crescerem espiritualmente com clareza, equilíbrio e
            base bíblica. O mundo religioso às vezes vira “guerra de opinião”, ou então vira “frase bonita
            sem profundidade”. Aqui a gente vai no meio termo certo: Bíblia, contexto e aplicação diária.
          </p>
          <p>
            O foco não é ganhar debate — é formar caráter. Por isso, a escrita do EverLight prioriza:
            (1) leitura simples no telemóvel, (2) referências oficiais, e (3) passos práticos para a vida.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5">
          <h2 className="text-base font-semibold">Boas práticas editoriais</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li><span className="font-medium">Não copiar</span> artigos inteiros (nem parágrafos).</li>
            <li><span className="font-medium">Escrever com estrutura:</span> ideia central → explicação → aplicação.</li>
            <li><span className="font-medium">Sempre “Fontes”</span> no fim (links oficiais).</li>
            <li><span className="font-medium">Evergreen:</span> família, saúde, estudo bíblico, missão, profecia.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5">
          <h2 className="text-base font-semibold">Formato recomendado</h2>
          <p className="mt-3 text-sm text-zinc-700">
            Para manter consistência e profundidade, um artigo bom aqui costuma seguir:
          </p>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-700">
            <li><span className="font-medium">Introdução:</span> problema real + por que importa</li>
            <li><span className="font-medium">Base bíblica:</span> 2–4 textos com contexto</li>
            <li><span className="font-medium">Aplicação:</span> 3 passos práticos (vida real)</li>
            <li><span className="font-medium">Fecho:</span> uma decisão clara + oração simples</li>
          </ol>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Temas principais (para 15–30 artigos fortes)</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {[
            {
              title: "Estudo bíblico com método",
              desc: "Como estudar sem se perder: contexto, comparação e aplicação diária.",
            },
            {
              title: "Profecia com equilíbrio",
              desc: "Daniel e Apocalipse com clareza e responsabilidade (sem pânico).",
            },
            {
              title: "Família e discipulado",
              desc: "Hábitos simples que protegem o lar e fortalecem relacionamentos.",
            },
            {
              title: "Saúde e temperança",
              desc: "Saúde como mordomia: sono, alimentação, vícios e rotina saudável.",
            },
            {
              title: "Missão prática",
              desc: "Serviço real: compaixão, consistência e evangelismo respeitoso.",
            },
            {
              title: "Vida espiritual diária",
              desc: "Oração objetiva, leitura bíblica, silêncio e decisões guiadas pela Palavra.",
            },
          ].map((t) => (
            <div key={t.title} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Como citar fontes (sem copiar)</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-700">
          <p>
            O padrão é simples: tu não precisas copiar texto de sites oficiais. Tu usas as fontes como
            base e escreve com tuas palavras, trazendo resumo e aplicação.
          </p>
          <p className="font-medium">Modelo no fim de cada artigo:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Fontes: EGW Writings / Adventistas / Novo Tempo / sites oficiais</li>
            <li>Data de acesso (opcional, mas profissional)</li>
          </ul>
          <p>
            Isso evita plágio, fortalece SEO e cria confiança. “Fé com credibilidade”, basicamente.
          </p>
        </div>
      </section>

      <section className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/pt/library"
          className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Abrir Biblioteca (recursos oficiais)
        </Link>
        <Link
          href="/pt/blog"
          className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
        >
          Ver artigos no Blog
        </Link>
      </section>
    </main>
  );
}
