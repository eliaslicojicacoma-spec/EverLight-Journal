import Link from "next/link";

export default function AboutPage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const t = {
    title: isPT ? "Sobre" : "About",
    intro: isPT
      ? "O EverLight Journal nasceu com o propósito de informar, elevar o pensamento e fortalecer a esperança."
      : "EverLight Journal was created to inform, elevate thinking, and strengthen hope.",
    intro2: isPT
      ? "É um espaço que integra fé e sociedade com equilíbrio, profundidade e responsabilidade, oferecendo uma visão global com atenção especial à comunidade Adventista."
      : "It connects faith and society with balance, depth, and responsibility—offering a global vision with special attention to the Adventist community.",
    intro3: isPT
      ? "Mais do que um portal de conteúdos, é um projeto de edificação intelectual e espiritual."
      : "More than a content portal, it’s a project for intellectual and spiritual growth.",
    authorTitle: isPT ? "Sobre o Autor" : "About the Author",
    authorBody: isPT
      ? "Elias Licoji Cacoma é o idealizador do EverLight Journal. Movido pelo desejo de comunicar com clareza e propósito, dedica-se à curadoria e criação de conteúdos que inspiram, fortalecem a fé e estimulam o pensamento crítico. Seu trabalho reflete um compromisso com o serviço à comunidade, promovendo uma abordagem equilibrada entre espiritualidade, responsabilidade social e reflexão contemporânea."
      : "Elias Licoji Cacoma is the creator of EverLight Journal. Driven by clarity and purpose, he curates and creates content that inspires, strengthens faith, and encourages critical thinking—balancing spirituality, social responsibility, and contemporary reflection.",
    missionTitle: isPT ? "Missão" : "Mission",
    missionBody: isPT
      ? "Informar e elevar o pensamento humano por meio de conteúdos que integrem fé e sociedade, servindo como fonte contínua de inspiração, clareza e fortalecimento espiritual."
      : "To inform and elevate human thought through content that integrates faith and society—serving as a continuous source of inspiration, clarity, and spiritual strengthening.",
    goalsTitle: isPT ? "Objetivos" : "Goals",
    goals: isPT
      ? [
          {
            title: "Informar com Integridade",
            desc: "Oferecer notícias, estudos e reflexões fundamentadas, com visão global e responsabilidade cristã.",
          },
          {
            title: "Fortalecer a Esperança",
            desc: "Publicar mensagens que edifiquem o leitor e promovam equilíbrio espiritual.",
          },
          {
            title: "Apoiar a Comunidade",
            desc: "Dar atenção especial às necessidades, valores e identidade da comunidade Adventista.",
          },
          {
            title: "Promover a Reflexão",
            desc: "Estimular o pensamento crítico e a análise de temas sociais sob a ótica cristã.",
          },
        ]
      : [
          {
            title: "Inform with Integrity",
            desc: "Provide grounded news, studies, and reflections with a global view and Christian responsibility.",
          },
          {
            title: "Strengthen Hope",
            desc: "Publish messages that build up readers and encourage spiritual balance.",
          },
          {
            title: "Support the Community",
            desc: "Give special attention to the needs, values, and identity of the Adventist community.",
          },
          {
            title: "Promote Reflection",
            desc: "Encourage critical thinking and analysis of social themes through a Christian lens.",
          },
        ],
    back: isPT ? "← Voltar ao site" : "← Back to site",
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:py-14">
      <section className="rounded-[28px] border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-10 dark:border-white/10 dark:bg-white/5">
        <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-white">
          {t.title}
        </h1>

        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-black/70 dark:text-white/70">
          <p>{t.intro}</p>
          <p>{t.intro2}</p>
          <p>{t.intro3}</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <Card title={t.authorTitle}>
            <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
              {t.authorBody}
            </p>
          </Card>

          <Card title={t.missionTitle}>
            <p className="text-sm leading-relaxed text-black/70 dark:text-white/70">
              {t.missionBody}
            </p>
          </Card>

          <Card title={t.goalsTitle}>
            <ul className="space-y-4">
              {t.goals.map((g) => (
                <li key={g.title}>
                  <div className="text-sm font-semibold text-black dark:text-white">
                    {g.title}
                  </div>
                  <div className="mt-1 text-sm leading-relaxed text-black/70 dark:text-white/70">
                    {g.desc}
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-10">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-2 rounded-2xl border border-black/15 bg-transparent px-5 py-3 text-sm font-semibold text-black transition hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
          >
            {t.back}
          </Link>
        </div>
      </section>
    </main>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[24px] border border-black/10 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
      <h2 className="text-sm font-semibold tracking-wide text-black dark:text-white">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </div>
  );
                           }
