import Link from "next/link";

export default function SocietyPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Society</h1>
        <p className="mt-2 max-w-3xl text-sm text-zinc-600">
          Atualidade com resumo + contexto + ações práticas. Sempre conteúdo original,
          com fontes oficiais e postura editorial séria (sem drama, só valor).
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5">
          <h2 className="text-base font-semibold">Formato recomendado (padrão EverLight)</h2>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            <li>
              <span className="font-medium">Resumo:</span> 6–10 linhas (o que aconteceu e por quê importa).
            </li>
            <li>
              <span className="font-medium">Contexto:</span> 2–3 blocos (causas, efeitos, histórico).
            </li>
            <li>
              <span className="font-medium">Ações:</span> 2 ideias práticas (o que o leitor faz hoje).
            </li>
            <li>
              <span className="font-medium">Fontes:</span> links oficiais no fim (sem copiar texto).
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-5">
          <h2 className="text-base font-semibold">Ritmo editorial (crescimento real)</h2>
          <p className="mt-3 text-sm text-zinc-700">
            1 post curto por dia + 1 artigo profundo por semana = consistência + SEO forte.
            O segredo não é postar muito, é postar bem e sempre.
          </p>
          <p className="mt-3 text-sm text-zinc-700">
            Aqui o objetivo é clareza: cortar ruído, explicar o que está por trás e deixar o leitor
            com ferramentas — não só com opinião.
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold">O que é “Society” no EverLight Journal</h2>
        <div className="mt-3 space-y-4 text-sm leading-relaxed text-zinc-700">
          <p>
            “Society” é onde a gente traduz a realidade sem hype. Notícias e temas sociais aparecem
            todo dia, mas a maioria vem em modo “barulho”: muita emoção, pouca explicação e zero
            aplicação prática. Aqui, a missão é outra: transformar informação em entendimento.
          </p>
          <p>
            Em 2026, o desafio não é “não ter acesso”, é ter filtro. A internet democratizou voz,
            mas também democratizou manipulação. Então a postura editorial do EverLight é simples:
            ser claro, ser honesto, ser útil. Sem sensacionalismo. Sem copiar matéria. Sem viver de
            “trend”.
          </p>
          <p>
            O leitor sai daqui com 3 coisas: (1) uma visão rápida do que está acontecendo,
            (2) contexto suficiente para não ser enganado, e (3) ações práticas para melhorar
            decisões, hábitos e convivência. Se o texto não entrega isso, ele volta pra bancada.
          </p>
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-semibold">6 pilares editoriais (temas principais)</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Ética digital & desinformação",
              desc: "Como verificar fontes, interpretar manchetes, evitar manipulação e preservar saúde mental.",
            },
            {
              title: "Educação & juventude",
              desc: "Métodos práticos de estudo, disciplina, foco, carreira e futuro — sem “guruísmo”.",
            },
            {
              title: "Economia do dia a dia",
              desc: "Dinheiro prático: hábitos, custo de vida, trabalho e decisões inteligentes.",
            },
            {
              title: "Cultura & comportamento",
              desc: "Como cultura molda escolhas: família, masculinidade/feminilidade, respeito e limites.",
            },
            {
              title: "Cidadania & participação",
              desc: "Como discordar com respeito, entender direitos/deveres e agir sem toxidade.",
            },
            {
              title: "Saúde mental & rotina",
              desc: "Sono, ansiedade, autocontrole, vícios de tela e construção de hábitos reais.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-5">
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Calendário editorial (semana modelo)</h2>
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-zinc-700">
          <p>
            Para manter consistência, usamos um “esqueleto semanal”. Isso evita ficar refém de inspiração:
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5">
            <li><span className="font-medium">Segunda:</span> tema de educação/hábitos (curto e útil)</li>
            <li><span className="font-medium">Terça:</span> ética digital/desinformação (curto)</li>
            <li><span className="font-medium">Quarta:</span> cidadania (debate, respeito, convivência)</li>
            <li><span className="font-medium">Quinta:</span> economia prática (vida real)</li>
            <li><span className="font-medium">Sexta:</span> saúde mental & rotina (com ações)</li>
            <li><span className="font-medium">Sábado:</span> artigo profundo (600–1200 palavras)</li>
            <li><span className="font-medium">Domingo:</span> revisão leve + planejamento da semana</li>
          </ul>
          <p className="mt-3">
            Isso cria consistência sem deixar o conteúdo repetitivo. O foco é qualidade + frequência.
          </p>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6">
        <h2 className="text-lg font-semibold">Regras anti-“conteúdo fino” (nosso padrão)</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-zinc-700">
          <li>Todo texto precisa de resumo + contexto + ação prática.</li>
          <li>Nunca copiar parágrafos de fontes; apenas interpretar e citar links.</li>
          <li>Parágrafos curtos, subtítulos e exemplos (para leitura no telemóvel).</li>
          <li>Final sempre com “o que fazer agora” (2 passos simples).</li>
        </ol>
      </section>

      <section className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/pt/blog"
          className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
        >
          Ver posts do Blog
        </Link>
        <Link
          href="/pt/library"
          className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
        >
          Ir para Biblioteca
        </Link>
      </section>
    </main>
  );
}
