import type { ReactNode } from "react";
import Link from "next/link";

type Props = { locale: string };

function SocialIcon({
  href,
  label,
  children,
}: {
  href?: string | null;
  label: string;
  children: ReactNode;
}) {
  if (!href) return null;

  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target="_blank"
      rel="noopener noreferrer"
      className="grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white/60 text-black/70 shadow-sm transition hover:bg-white hover:text-black active:scale-95 dark:border-white/10 dark:bg-white/5 dark:text-white/80 dark:hover:bg-white/10"
    >
      {children}
    </a>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.7c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.3h-1.1c-1.1 0-1.4.7-1.4 1.4V12H16l-.4 3h-2.3v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9z" />
      <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
      <path d="M17.5 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg>
  );
}

function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.6A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12s.1 2.8.4 4.8a3 3 0 0 0 2.1 2.1c1.8.6 7.5.6 7.5.6s5.7 0 7.5-.6a3 3 0 0 0 2.1-2.1c.3-2 .4-4.8.4-4.8s-.1-2.8-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M6.94 6.5A2.44 2.44 0 1 1 7 1.62a2.44 2.44 0 0 1-.06 4.88zM3.5 22V8.5H6.8V22H3.5zM9.2 22V8.5h3.2v1.85h.05c.44-.83 1.5-2.05 3.4-2.05 3.64 0 4.3 2.4 4.3 5.5V22h-3.3v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.27V22H9.2z" />
    </svg>
  );
}

export default function Footer({ locale }: Props) {
  const isPT = locale === "pt";

  const t = {
    title: "EverLight Journal",
    desc: isPT
      ? "Conectando fé e sociedade de forma equilibrada, bíblica e relevante para os desafios atuais."
      : "Connecting faith and society in a balanced, biblical, and relevant way for today’s challenges.",
    quick: isPT ? "Links Rápidos" : "Quick Links",
    resources: isPT ? "Recursos" : "Resources",
    connect: isPT ? "Conecte-se" : "Connect",
    newsletter: "Newsletter",
    subscribe: isPT ? "Inscrever-se" : "Subscribe",
    blog: "Blog",
    society: isPT ? "Sociedade" : "Society",
    library: isPT ? "Biblioteca" : "Library",
    adventist: isPT ? "Adventista" : "Adventist",
    about: isPT ? "Sobre" : "About",
    support: isPT ? "Apoie o Ministério" : "Support the Ministry",
    contact: isPT ? "Contato" : "Contact",
    privacy: isPT ? "Política de Privacidade" : "Privacy Policy",
    terms: isPT ? "Termos de Uso" : "Terms of Use",
    follow: isPT ? "Siga-nos nas redes sociais" : "Follow us on social media",
  };

  const SOCIAL = {
    facebook: "https://www.facebook.com/share/1L9YyUSD2x/",
    instagram: "https://www.instagram.com/eliascacoma?igsh=bmM3MHg3NXp2Z3h3",
    youtube: "https://youtube.com/@eliaslicojicacoma?si=WX-GbCP0z9kW2vV4",
    linkedin: null as string | null,
  };

  const homeNewsletter = `/${locale}#newsletter`;

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
                {t.library}
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href={`/${locale}/adventist`}>
                {t.adventist}
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
            <SocialIcon href={SOCIAL.facebook} label="Facebook">
              <IconFacebook />
            </SocialIcon>
            <SocialIcon href={SOCIAL.instagram} label="Instagram">
              <IconInstagram />
            </SocialIcon>
            <SocialIcon href={SOCIAL.youtube} label="YouTube">
              <IconYouTube />
            </SocialIcon>
            <SocialIcon href={SOCIAL.linkedin} label="LinkedIn">
              <IconLinkedIn />
            </SocialIcon>
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
