import Image from "next/image";
import Link from "next/link";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  return (
    <main className="space-y-10">

      {/* HERO */}
      <section className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-sm">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0d?auto=format&fit=crop&w=2200&q=70"
            alt="EverLight hero"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-white/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/75 to-[#F6F4EF]" />
        </div>

        <div className="relative p-6 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-[11px] font-semibold tracking-[0.22em] text-black/60 backdrop-blur">
            {isPT ? "ESPIRITUALIDADE & SOCIEDADE" : "SPIRITUALITY & SOCIETY"}
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
            {isPT ? "Voz Global" : "Global Voice"}{" "}
            <span className="font-light italic text-black/80">
              {isPT ? "da Fé" : "of Faith"}
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-base">
            {isPT
              ? "Conectando fé e sociedade com clareza bíblica e aplicação prática."
              : "Connecting faith and society with biblical clarity and practical application."}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}/blog`}
              className="rounded-2xl bg-black px-6 py-3 text-xs font-semibold text-white shadow-sm hover:opacity-90"
            >
              {isPT ? "Explorar Artigos" : "Explore Articles"}
            </Link>

            <Link
              href={`/${locale}/verse-of-day`}
              className="rounded-2xl border border-black/10 bg-white/70 px-6 py-3 text-xs font-semibold text-black shadow-sm hover:bg-white"
            >
              {isPT ? "Versículo do Dia" : "Verse of the Day"}
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER (CORRIGIDO) */}
      <section
        id="newsletter"
        className="scroll-mt-24 rounded-[28px] border border-black/10 bg-white p-6 shadow-sm"
      >
        <div className="text-[11px] font-semibold tracking-[0.22em] text-black/55">
          NEWSLETTER
        </div>

        <h3 className="mt-2 text-lg font-semibold text-black">
          {isPT
            ? "Recebe conteúdo premium no email"
            : "Get premium content by email"}
        </h3>

        <p className="mt-2 text-sm text-black/60">
          {isPT
            ? "Sem spam. Só resumos, estudos e links oficiais — com aplicação prática."
            : "No spam. Only summaries, studies and official links."}
        </p>

        <div className="mt-4">
          <Link
            href={`/${locale}/subscribe`}
            className="inline-flex items-center justify-center rounded-2xl bg-black px-5 py-3 text-xs font-semibold text-white shadow-sm hover:opacity-90"
          >
            {isPT ? "Inscrever-me" : "Subscribe"}
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="grid gap-4 sm:grid-cols-3">
        <Feature
          icon="📖"
          title={isPT ? "Fortalecer a Fé" : "Strengthen Faith"}
          desc={
            isPT
              ? "Conteúdos bíblicos profundos que edificam vidas."
              : "Deep biblical content that builds lives."
          }
        />
        <Feature
          icon="❤"
          title={isPT ? "Promover Valores" : "Promote Values"}
          desc={
            isPT
              ? "Princípios cristãos aplicados à sociedade."
              : "Christian principles applied to society."
          }
        />
        <Feature
          icon="🌍"
          title={isPT ? "Alcance Global" : "Global Reach"}
          desc={
            isPT
              ? "Mensagem com impacto internacional."
              : "Message with international impact."
          }
        />
      </section>

      {/* INSPIRAÇÃO */}
      <section className="overflow-hidden rounded-[28px] bg-[#142155] text-white shadow-sm">
        <div className="p-6 sm:p-10 text-center">
          <h2 className="text-4xl font-semibold sm:text-5xl">
            {isPT ? "A Palavra Viva" : "The Living Word"}
          </h2>

          <div className="mt-6">
            <Link
              href={`/${locale}/verse-of-day`}
              className="inline-flex items-center justify-center rounded-2xl border border-white/35 px-6 py-3 text-xs font-semibold text-white hover:bg-white/10"
            >
              {isPT ? "Ler Versículo do Dia" : "Read Verse of the Day"}
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

function Feature({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-[28px] border border-black/10 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/5 text-xl">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-black">{title}</h3>
      <p className="mt-2 text-sm text-black/60">{desc}</p>
    </div>
  );
}
