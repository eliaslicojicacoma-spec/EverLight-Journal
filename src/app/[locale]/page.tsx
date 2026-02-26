import Image from "next/image";
import Link from "next/link";

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  return (
    <main className="space-y-10">
      {/* HERO */}
      <section className="card relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0d?auto=format&fit=crop&w=2200&q=70"
            alt="Hero background"
            fill
            priority
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-white/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/55 to-[#F6F4EF]" />
        </div>

        <div className="relative p-6 sm:p-10">
          <div className="text-[11px] tracking-[0.22em] text-black/55">
            {isPT ? "ESPIRITUALIDADE & SOCIEDADE" : "SPIRITUALITY & SOCIETY"}
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="h-[1px] w-10 bg-black/20" />
            <div className="text-xs font-semibold tracking-[0.22em] text-black">
              EverLight Journal
            </div>
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
            {isPT ? "Voz Global" : "Global Voice"}{" "}
            <span className="font-light italic text-black/80">
              {isPT ? "da Fé" : "of Faith"}
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-black/60 sm:text-base">
            {isPT
              ? "Uma plataforma dedicada a conectar fé e sociedade de forma equilibrada, bíblica e relevante para os desafios contemporâneos."
              : "A platform connecting faith and society in a balanced, biblical, and relevant way for today’s challenges."}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`/${locale}/blog`}
              className="rounded-2xl bg-black px-6 py-3 text-xs font-semibold tracking-wide text-white shadow-sm hover:opacity-90"
            >
              {isPT ? "Explorar Artigos" : "Explore Articles"}
            </Link>
            <Link
              href={`/${locale}/verse-of-day`}
              className="text-xs font-semibold tracking-wide text-black underline decoration-black/25 underline-offset-4 hover:decoration-black/60"
            >
              {isPT ? "Versículo do Dia →" : "Verse of the Day →"}
            </Link>
          </div>
        </div>
      </section>

      {/* 3 FEATURES */}
      <section className="grid gap-4 sm:grid-cols-3">
        <Feature icon="📖" title={isPT ? "Fortalecer a Fé" : "Strengthen Faith"} desc={isPT ? "Conteúdos bíblicos profundos que edificam e transformam vidas." : "Deep biblical content that builds and transforms lives."} />
        <Feature icon="❤" title={isPT ? "Promover Valores" : "Promote Values"} desc={isPT ? "Princípios cristãos aplicados aos desafios atuais da sociedade." : "Christian principles applied to modern challenges."} />
        <Feature icon="🌍" title={isPT ? "Alcance Global" : "Global Reach"} desc={isPT ? "Impacto com mensagem universal em diferentes lugares do mundo." : "Impact with a universal message across the world."} />
      </section>

      {/* BLOCO AZUL */}
      <section className="overflow-hidden rounded-[28px] bg-[#1A2A78] text-white">
        <div className="p-6 sm:p-10 text-center">
          <div className="text-[11px] tracking-[0.22em] text-white/70">
            {isPT ? "INSPIRAÇÃO DIÁRIA" : "DAILY INSPIRATION"}
          </div>
          <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
            {isPT ? "A Palavra Viva" : "The Living Word"}
          </h2>

          <div className="mt-6">
            <Link
              href={`/${locale}/verse-of-day`}
              className="inline-block rounded-2xl border border-white/35 px-6 py-3 text-xs font-semibold tracking-wide text-white hover:bg-white/10"
            >
              {isPT ? "Ler Reflexão" : "Read Reflection"}
            </Link>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/15 bg-white/5 p-7 sm:p-10">
            <p className="text-lg font-medium leading-relaxed text-white/90 sm:text-xl">
              {isPT
                ? "“Porque Deus amou o mundo de tal maneira que deu o Seu Filho unigênito, para que todo aquele que Nele crê não pereça, mas tenha a vida eterna.”"
                : "“For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.”"}
            </p>
            <p className="mt-4 text-sm text-white/70">— João 3:16</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Feature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="card p-6 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/5 text-xl">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-black/60">{desc}</p>
    </div>
  );
}
