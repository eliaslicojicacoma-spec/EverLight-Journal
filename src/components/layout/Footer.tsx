import Link from "next/link";

type Props = { locale: string };

export default function Footer({ locale }: Props) {
  const isPT = locale === "pt";

  const t = {
    title: isPT ? "Voz Global da Fé" : "Global Voice of Faith",
    desc: isPT
      ? "Conectando religião e sociedade de forma equilibrada, bíblica e relevante para os desafios atuais."
      : "Connecting faith and society in a balanced, biblical and relevant way for today’s challenges.",
    quick: isPT ? "Links Rápidos" : "Quick Links",
    resources: isPT ? "Recursos" : "Resources",
    connect: isPT ? "Conecte-se" : "Connect",
    newsletter: isPT ? "Newsletter" : "Newsletter",
    subscribe: isPT ? "Inscrever-se" : "Subscribe",
    blog: isPT ? "Blog" : "Blog",
    society: isPT ? "Sociedade" : "Society",
    books: isPT ? "Livros" : "Books",
    devotionals: isPT ? "Devocionais" : "Devotionals",
    about: isPT ? "Sobre" : "About",
    support: isPT ? "Apoie o Ministério" : "Support the Ministry",
    contact: isPT ? "Contato" : "Contact",
    privacy: isPT ? "Política de Privacidade" : "Privacy Policy",
    terms: isPT ? "Termos de Uso" : "Terms of Use",
    follow: isPT ? "Siga-nos nas redes sociais" : "Follow us on social media",
  };

  const homeNewsletter = `/${locale}#newsletter`;

  const socials: Array<{ name: string; href: string | null; label: string }> = [
    { name: "f", href: "https://facebook.com/EliasCacoma", label: "Facebook" },
    { name: "⌁", href: "https://instagram.com/EliasCacoma", label: "Instagram" },
    { name: "▶", href: null, label: "YouTube" }, // se tiver, troca para: "https://youtube.com/@teucanal"
    { name: "in", href: null, label: "LinkedIn" }, // se tiver, troca para: "https://linkedin.com/in/teuperfil"
  ];

  return (
    <footer className="mt-16 border-t border-black/10 dark:border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">{t.title}</h3>
          <p className="mt-3 text-sm text-black/60 dark:text-white/70">{t.desc}</p>

          <div className="mt-5 space-y-2 text-sm text-black/70 dark:text-white/70">
            <div className="flex items-center gap-2">
              <span aria-hidden>📞</span>
              <a className="hover:underline" href="tel:+244933522616">
                +244 933 522 616
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span aria-hidden>✉️</span>
              <a className="hover:underline" href="mailto:eliaslicojicacoma@gmail.com">
                eliaslicojicacoma@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide">{t.quick}</h4>
          <ul className="mt-4 space-y-2 text-sm text-black/70 dark:text-white/70">
            <li>
              <Link className="hover:underline" href={`/${locale}/blog`}>
                {t.blog}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/${locale}/society`}>
                {t.society}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/${locale}/library`}>
                {t.books}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/${locale}/adventist`}>
                {t.devotionals}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/${locale}/about`}>
                {t.about}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide">{t.resources}</h4>
          <ul className="mt-4 space-y-2 text-sm text-black/70 dark:text-white/70">
            <li>
              <Link className="hover:underline" href={`/${locale}/donate`}>
                {t.support}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={homeNewsletter}>
                {t.newsletter}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/${locale}/contact`}>
                {t.contact}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/${locale}/privacy`}>
                {t.privacy}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/${locale}/terms`}>
                {t.terms}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide">{t.connect}</h4>
          <p className="mt-4 text-sm text-black/60 dark:text-white/70">{t.follow}</p>

          <div className="mt-4 flex items-center gap-3">
            {socials
              .filter((s) => Boolean(s.href))
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/60 text-sm text-black shadow-sm hover:bg-white/80 active:scale-95 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                >
                  {s.name}
                </a>
              ))}
          </div>

          <Link
            href={homeNewsletter}
            className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border border-black/15 bg-transparent px-4 py-3 text-sm font-semibold text-black hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
          >
            {t.subscribe}
          </Link>
        </div>
      </div>

      <div className="border-t border-black/10 py-6 text-center text-xs text-black/50 dark:border-white/10 dark:text-white/50">
        © {new Date().getFullYear()} EverLight Journal — Faith & Society
      </div>
    </footer>
  );
            }
