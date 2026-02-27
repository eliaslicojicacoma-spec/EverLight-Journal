import Link from "next/link";

type FooterProps = {
  locale: string;
};

const SOCIALS = [
  { key: "facebook", href: "https://facebook.com/", label: "Facebook" },
  { key: "instagram", href: "https://instagram.com/", label: "Instagram" },
  { key: "youtube", href: "https://youtube.com/", label: "YouTube" },
  { key: "linkedin", href: "https://linkedin.com/", label: "LinkedIn" },
];

function t(locale: string) {
  const isPT = locale === "pt";
  return {
    title: isPT ? "Voz Global da Fé" : "Global Voice of Faith",
    desc: isPT
      ? "Conectando religião e sociedade de forma equilibrada, bíblica e relevante para os desafios atuais."
      : "Connecting faith and society in a balanced, biblical, and relevant way for today’s challenges.",
    quick: isPT ? "Links Rápidos" : "Quick Links",
    resources: isPT ? "Recursos" : "Resources",
    connect: isPT ? "Conecte-se" : "Connect",
    follow: isPT ? "Siga-nos nas redes sociais" : "Follow us on social media",
    subscribe: isPT ? "Inscrever-se" : "Subscribe",
    ministry: isPT ? "Apoie o Ministério" : "Support the Ministry",
    newsletter: isPT ? "Newsletter" : "Newsletter",
    contact: isPT ? "Contato" : "Contact",
    privacy: isPT ? "Política de Privacidade" : "Privacy Policy",
    terms: isPT ? "Termos de Uso" : "Terms of Use",
    blog: isPT ? "Blog" : "Blog",
    society: isPT ? "Sociedade" : "Society",
    books: isPT ? "Livros" : "Books",
    devotionals: isPT ? "Devocionais" : "Devotionals",
    about: isPT ? "Sobre" : "About",
  };
}

export default function Footer({ locale }: FooterProps) {
  const labels = t(locale);

  return (
    <footer className="mt-16 border-t border-black/10 el-surface dark:border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand + Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold tracking-tight">{labels.title}</h3>
          <p className="text-sm leading-relaxed text-black/60 dark:text-white/60">
            {labels.desc}
          </p>

          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-black/70 dark:text-white/70">
              <PhoneIcon />
              <a href="tel:+244933522616" className="hover:underline underline-offset-4">
                +244 933 522 616
              </a>
            </div>

            <div className="flex items-center gap-2 text-black/70 dark:text-white/70">
              <MailIcon />
              <a
                href="mailto:eliaslicojicacoma@gmail.com"
                className="hover:underline underline-offset-4"
              >
                eliaslicojicacoma@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick links */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold tracking-wide">{labels.quick}</h4>
          <ul className="space-y-2 text-sm text-black/65 dark:text-white/65">
            <li>
              <Link className="hover:underline underline-offset-4" href={`/${locale}/blog`}>
                {labels.blog}
              </Link>
            </li>
            <li>
              <Link className="hover:underline underline-offset-4" href={`/${locale}/society`}>
                {labels.society}
              </Link>
            </li>
            <li>
              <Link className="hover:underline underline-offset-4" href={`/${locale}/library`}>
                {labels.books}
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline underline-offset-4"
                href={`/${locale}/verse-of-day`}
              >
                {labels.devotionals}
              </Link>
            </li>
            <li>
              <Link className="hover:underline underline-offset-4" href={`/${locale}/about`}>
                {labels.about}
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold tracking-wide">{labels.resources}</h4>
          <ul className="space-y-2 text-sm text-black/65 dark:text-white/65">
            <li>
              <Link className="hover:underline underline-offset-4" href={`/${locale}/donate`}>
                {labels.ministry}
              </Link>
            </li>
            <li>
              <Link className="hover:underline underline-offset-4" href={`/${locale}/newsletter`}>
                {labels.newsletter}
              </Link>
            </li>
            <li>
              <Link className="hover:underline underline-offset-4" href={`/${locale}/contact`}>
                {labels.contact}
              </Link>
            </li>
            <li>
              <Link className="hover:underline underline-offset-4" href={`/${locale}/privacy`}>
                {labels.privacy}
              </Link>
            </li>
            <li>
              <Link className="hover:underline underline-offset-4" href={`/${locale}/terms`}>
                {labels.terms}
              </Link>
            </li>
          </ul>
        </div>

        {/* Connect + CTA */}
        <div className="space-y-4">
          <h4 className="text-sm font-semibold tracking-wide">{labels.connect}</h4>
          <p className="text-sm text-black/60 dark:text-white/60">{labels.follow}</p>

          <div className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.key}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/60 text-black/70 transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white/70"
              >
                {s.key === "facebook" ? <FbIcon /> : null}
                {s.key === "instagram" ? <IgIcon /> : null}
                {s.key === "youtube" ? <YtIcon /> : null}
                {s.key === "linkedin" ? <InIcon /> : null}
              </a>
            ))}
          </div>

          <Link
            href={`/${locale}/newsletter`}
            className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-2xl border border-black/20 bg-transparent text-sm font-semibold tracking-wide text-black transition hover:bg-black/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
          >
            {labels.subscribe}
          </Link>
        </div>
      </div>

      <div className="border-t border-black/10 px-4 py-6 text-center text-xs text-black/50 dark:border-white/10 dark:text-white/50">
        © {new Date().getFullYear()} EverLight Journal — Faith & Society
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8c1.5 3 3.6 5.1 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1.3.4 2.7.6 4.2.6.7 0 1.2.5 1.2 1.2V21c0 .7-.5 1.2-1.2 1.2C10 22.2 1.8 14 1.8 3c0-.7.5-1.2 1.2-1.2h3.8c.7 0 1.2.5 1.2 1.2 0 1.5.2 2.9.6 4.2.1.4 0 .9-.2 1.2l-2.2 2.2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16v12H4V6z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M4 7l8 6 8-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.2l.8-3H13V9c0-.6.4-1 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}
function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 16a4 4 0 100-8 4 4 0 000 8z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}
function YtIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 12s0-4-1-5-3-1-9-1-8 0-9 1-1 5-1 5 0 4 1 5 3 1 9 1 8 0 9-1 1-5 1-5z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path d="M11 9l5 3-5 3V9z" fill="currentColor" />
    </svg>
  );
}
function InIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 9H3v12h3V9zM4.5 7.5a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6zM21 21h-3v-6.2c0-1.5-.5-2.5-2-2.5-1.1 0-1.8.7-2.1 1.4-.1.3-.1.7-.1 1.1V21H9V9h3v1.7c.4-.8 1.5-1.9 3.5-1.9 2.4 0 4.5 1.6 4.5 5.1V21z"
        fill="currentColor"
      />
    </svg>
  );
                }
