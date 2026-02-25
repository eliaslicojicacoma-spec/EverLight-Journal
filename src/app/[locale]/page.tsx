// src/app/[locale]/page.tsx
import Image from "next/image";
import Link from "next/link";

type PageProps = {
  params: { locale: string };
};

export default function HomePage({ params }: PageProps) {
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const t = {
    brand: "EverLight Journal",
    heroKicker: isPT ? "ESPIRITUALIDADE & SOCIEDADE" : "SPIRITUALITY & SOCIETY",
    heroTitle: isPT ? "Voz Global" : "Global Voice",
    heroTitle2: isPT ? "da Fé" : "of Faith",
    heroDesc: isPT
      ? "Uma plataforma dedicada a conectar fé e sociedade de forma equilibrada, bíblica e relevante para os desafios contemporâneos."
      : "A platform connecting faith and society in a balanced, biblical, and relevant way for today’s challenges.",
    cta1: isPT ? "Explorar Artigos" : "Explore Articles",
    cta2: isPT ? "Versículo do Dia →" : "Verse of the Day →",

    f1t: isPT ? "Fortalecer a Fé" : "Strengthen Faith",
    f1d: isPT ? "Conteúdos bíblicos profundos que edificam e transformam vidas." : "Deep biblical content that builds and transforms lives.",
    f2t: isPT ? "Promover Valores" : "Promote Values",
    f2d: isPT ? "Princípios cristãos aplicados aos desafios atuais da sociedade." : "Christian principles applied to modern challenges.",
    f3t: isPT ? "Alcance Global" : "Global Reach",
    f3d: isPT ? "Impacto com mensagem universal em diferentes lugares do mundo." : "Impact with a universal message across the world.",

    verseK: isPT ? "INSPIRAÇÃO DIÁRIA" : "DAILY INSPIRATION",
    verseTitle: isPT ? "A Palavra Viva" : "The Living Word",
    verseBtn: isPT ? "Ler Reflexão" : "Read Reflection",
    verseText:
      isPT
        ? "“Porque Deus amou o mundo de tal maneira que deu o Seu Filho unigênito, para que todo aquele que Nele crê não pereça, mas tenha a vida eterna.”"
        : "“For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.”",
    verseRef: "— João 3:16",

    sectionArticles: isPT ? "Diálogos de Fé" : "Faith Dialogues",
    read: isPT ? "LER ARTIGO →" : "READ →",
    viewAll: isPT ? "VER TODOS OS ARTIGOS" : "VIEW ALL ARTICLES",

    libraryTitle: isPT ? "Biblioteca Essencial" : "Essential Library",
    viewBooks: isPT ? "VER TODOS OS LIVROS" : "VIEW ALL BOOKS",

    joinTitle: isPT ? "Junte-se à Nossa Comunidade" : "Join Our Community",
    joinDesc: isPT
      ? "Receba conteúdos exclusivos, devocionais diários e reflexões que transformam vidas diretamente em sua caixa de entrada."
      : "Get exclusive content, daily devotionals, and reflections delivered to your inbox.",
    joinBtn: isPT ? "INSCREVER-SE AGORA" : "SUBSCRIBE NOW",
    privacyNote: isPT
      ? "Respeitamos sua privacidade. Cancele a inscrição a qualquer momento."
      : "We respect your privacy. Unsubscribe anytime.",
  };

  const articles = [
    {
      title: isPT ? "O Papel da Fé na Sociedade Moderna" : "The Role of Faith in Modern Society",
      excerpt: isPT
        ? "Como a fé molda ética, comunidade e bem-estar num mundo cada vez mais secular."
        : "How faith shapes ethics, community, and well-being in an increasingly secular world.",
      href: `/${locale}/blog`,
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=70",
      tag: isPT ? "FÉ" : "FAITH",
    },
    {
      title: isPT ? "Laços Fortes em Tempos Difíceis" : "Building Stronger Bonds in Challenging Times",
      excerpt: isPT
        ? "Estratégias práticas para resiliência, esperança e ação comunitária."
        : "Practical strategies for resilience, hope, and community action.",
      href: `/${locale}/blog`,
      img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1600&q=70",
      tag: isPT ? "SOCIEDADE" : "SOCIETY",
    },
  ];

  const books = [
    {
      title: isPT ? "Caminho da Esperança" : "Path of Hope",
      author: isPT ? "Coleção Essencial" : "Essential Collection",
      href: `/${locale}/library`,
      img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1400&q=70",
    },
    {
      title: isPT ? "O Evangelho em Profundidade" : "Gospel in Depth",
      author: isPT ? "Estudo & Reflexão" : "Study & Reflection",
      href: `/${locale}/library`,
      img: "https://images.unsplash.com/photo-1455885666463-3d1c6b7c5b78?auto=format&fit=crop&w=1400&q=70",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F6F4EF] text-[#121212]">
      {/* HERO (imagem cinza + overlay) */}
      <section className="relative overflow-hidden">
        <div className="relative h-[76vh] min-h-[560px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0d?auto=format&fit=crop&w=1800&q=70"
            alt="Hero background"
            fill
            priority
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-white/55" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-white/45 to-[#F6F4EF]" />

          <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-center px-5">
            <div className="max-w-2xl">
              <div className="text-[11px] tracking-[0.22em] text-[#6B6B6B]">
                {t.heroKicker}
              </div>

              <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl">
                {t.heroTitle}{" "}
                <span className="font-light italic text-[#2A2A2A]">{t.heroTitle2}</span>
              </h1>

              <p className="mt-5 text-[15px] leading-relaxed text-[#555] sm:text-base">
                {t.heroDesc}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={`/${locale}/blog`}
                  className="rounded-none bg-[#121212] px-6 py-3 text-xs font-semibold tracking-wide text-white shadow-sm transition hover:opacity-90"
                >
                  {t.cta1}
                </Link>

                <Link
                  href={`/${locale}/verse-of-day`}
                  className="text-xs font-semibold tracking-wide text-[#121212] underline decoration-[#121212]/25 underline-offset-4 transition hover:decoration-[#121212]/60"
                >
                  {t.cta2}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES (3 colunas) */}
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="grid gap-8 sm:grid-cols-3">
            <Feature icon="📖" title={t.f1t} desc={t.f1d} />
            <Feature icon="❤" title={t.f2t} desc={t.f2d} />
            <Feature icon="🌍" title={t.f3t} desc={t.f3d} />
          </div>
        </div>
      </section>

      {/* BLOCO AZUL (A Palavra Viva) */}
      <section className="bg-[#1A2A78] text-white">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="text-center">
            <div className="text-[11px] tracking-[0.22em] text-white/70">{t.verseK}</div>
            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">{t.verseTitle}</h2>

            <div className="mt-6">
              <Link
                href={`/${locale}/verse-of-day`}
                className="inline-block border border-white/35 px-6 py-3 text-xs font-semibold tracking-wide text-white transition hover:bg-white/10"
              >
                {t.verseBtn}
              </Link>
            </div>

            <div className="mx-auto mt-10 max-w-3xl border border-white/15 bg-white/5 p-7 sm:p-10">
              <p className="text-lg font-medium leading-relaxed text-white/90 sm:text-xl">
                {t.verseText}
              </p>
              <p className="mt-4 text-sm text-white/70">{t.verseRef}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIGOS (cards com imagens) */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="text-center">
          <h3 className="text-4xl font-semibold tracking-tight">{t.sectionArticles}</h3>
          <div className="mx-auto mt-4 h-[2px] w-12 bg-[#D8C78C]" />
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {articles.map((a) => (
            <article key={a.title} className="bg-transparent">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#E9E6DF]">
                <Image src={a.img} alt={a.title} fill className="object-cover" />
              </div>

              <div className="mt-5">
                <div className="text-[11px] tracking-[0.22em] text-[#8A8A8A]">{a.tag}</div>
                <h4 className="mt-2 text-3xl font-semibold leading-tight">{a.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-[#5E5E5E]">{a.excerpt}</p>

                <Link
                  href={a.href}
                  className="mt-5 inline-block text-xs font-semibold tracking-wide text-[#121212] underline decoration-[#121212]/25 underline-offset-4 hover:decoration-[#121212]/60"
                >
                  {t.read}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href={`/${locale}/blog`}
            className="border border-[#121212]/30 px-8 py-3 text-xs font-semibold tracking-wide text-[#121212] transition hover:bg-black/5"
          >
            {t.viewAll}
          </Link>
        </div>
      </section>

      {/* BIBLIOTECA */}
      <section className="bg-[#F1EEE7]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="text-center">
            <h3 className="text-4xl font-semibold tracking-tight">{t.libraryTitle}</h3>
          </div>

          <div className="mt-10 grid gap-12 md:grid-cols-2">
            {books.map((b) => (
              <Link key={b.title} href={b.href} className="group text-center">
                <div className="mx-auto w-full max-w-[420px] overflow-hidden bg-[#E9E6DF]">
                  <div className="relative aspect-[3/4] w-full">
                    <Image src={b.img} alt={b.title} fill className="object-cover transition group-hover:scale-[1.02]" />
                  </div>
                </div>

                <div className="mt-5 text-xl font-semibold">{b.title}</div>
                <div className="mt-1 text-xs tracking-[0.18em] text-[#777]">{b.author}</div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link
              href={`/${locale}/library`}
              className="border border-[#121212]/30 px-8 py-3 text-xs font-semibold tracking-wide text-[#121212] transition hover:bg-black/5"
            >
              {t.viewBooks}
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="text-center">
          <h3 className="text-4xl font-semibold tracking-tight">{t.joinTitle}</h3>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-[#666]">{t.joinDesc}</p>

          <div className="mt-8 flex justify-center">
            <Link
              href={`/${locale}/subscribe`}
              className="bg-[#1A2A78] px-10 py-4 text-xs font-semibold tracking-wide text-white shadow-sm transition hover:opacity-95"
            >
              {t.joinBtn}
            </Link>
          </div>

          <p className="mt-4 text-xs text-[#7A7A7A]">{t.privacyNote}</p>
        </div>
      </section>

      {/* FOOTER (forte) */}
      <footer className="bg-[#1F1F1F] text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2">
          <div>
            <div className="text-lg font-semibold">{t.brand}</div>
            <p className="mt-3 max-w-md text-sm text-white/70">
              {isPT
                ? "Conectando fé e sociedade de forma equilibrada, bíblica e relevante para os desafios atuais."
                : "Connecting faith and society in a balanced, biblical, and relevant way for today’s challenges."}
            </p>

            <div className="mt-6 space-y-2 text-sm text-white/70">
              <div>📞 +244 933 522 616</div>
              <div>✉️ eliaslicojicacoma@gmail.com</div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <div className="text-sm font-semibold">Links Rápidos</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li><Link className="hover:text-white" href={`/${locale}/blog`}>Blog</Link></li>
                <li><Link className="hover:text-white" href={`/${locale}/society`}>Sociedade</Link></li>
                <li><Link className="hover:text-white" href={`/${locale}/library`}>Livros</Link></li>
                <li><Link className="hover:text-white" href={`/${locale}/about`}>Sobre</Link></li>
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold">Recursos</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li><Link className="hover:text-white" href={`/${locale}/donate`}>Apoie</Link></li>
                <li><Link className="hover:text-white" href={`/${locale}/subscribe`}>Newsletter</Link></li>
                <li><Link className="hover:text-white" href={`/${locale}/contact`}>Contato</Link></li>
                <li><Link className="hover:text-white" href={`/${locale}/privacy`}>Privacidade</Link></li>
              </ul>

              <div className="mt-6">
                <Link
                  href={`/${locale}/subscribe`}
                  className="inline-block w-full border border-white/25 px-6 py-3 text-center text-xs font-semibold tracking-wide text-white transition hover:bg-white/10"
                >
                  Inscrever-se
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs text-white/55">
          © {new Date().getFullYear()} {t.brand}. {isPT ? "Todos os direitos reservados." : "All rights reserved."}
        </div>
      </footer>
    </main>
  );
}

function Feature({ icon, title, desc }: { icon: string; title: string; desc: string }) {
  return (
    <div className="text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#EFECE5] text-xl">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-[#6B6B6B]">{desc}</p>
    </div>
  );
                }
