import Link from "next/link";
import Container from "./Container";

type Props = {
  params?: { locale?: string };
};

export default function Footer({ params }: Props) {
  // Fallback seguro caso o Footer seja usado fora de [locale]
  const locale = params?.locale ?? "pt";
  const isPT = locale === "pt";

  const t = {
    brand: "EverLight Journal",
    tagline: isPT
      ? "Conectando fé e sociedade com clareza, equilíbrio e profundidade."
      : "Connecting faith and society with clarity, balance, and depth.",
    quick: isPT ? "Links Rápidos" : "Quick Links",
    legal: isPT ? "Legal" : "Legal",
    resources: isPT ? "Recursos" : "Resources",
    donate: isPT ? "Doar" : "Donate",
    donateLong: isPT ? "Apoiar o projeto" : "Support the project",
    newsletter: isPT ? "Newsletter" : "Newsletter",
    contact: isPT ? "Contato" : "Contact",
    privacy: isPT ? "Privacidade" : "Privacy",
    terms: isPT ? "Termos" : "Terms",
    editorial: isPT ? "Política Editorial" : "Editorial Policy",
    transparency: isPT ? "Transparência" : "Transparency",
    share: isPT ? "Partilhar" : "Share",
    rights: isPT ? "Todos os direitos reservados." : "All rights reserved.",
  };

  const linksQuick = [
    { label: "Blog", href: `/${locale}/blog` },
    { label: isPT ? "Sociedade" : "Society", href: `/${locale}/society` },
    { label: isPT ? "Adventista" : "Adventist", href: `/${locale}/adventist` },
    { label: isPT ? "Biblioteca" : "Library", href: `/${locale}/library` },
  ];

  const linksLegal = [
    { label: t.privacy, href: `/${locale}/privacy` },
    { label: t.terms, href: `/${locale}/terms` },
    { label: t.editorial, href: `/${locale}/editorial-policy` },
    { label: t.transparency, href: `/${locale}/transparency` },
    { label: t.share, href: `/${locale}/share` },
  ];

  const linksResources = [
    { label: t.donateLong, href: `/${locale}/donate` },
    { label: t.newsletter, href: `/${locale}/subscribe` },
    { label: t.contact, href: `/${locale}/contact` },
  ];

  return (
    <footer className="mt-12 border-t border-zinc-200/70 bg-white/40 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/30">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-900 text-sm font-semibold text-white shadow-sm dark:bg-white dark:text-zinc-950">
                EL
              </div>
              <div className="leading-tight">
                <div className="text-base font-semibold tracking-tight">
                  EverLight <span className="text-zinc-500 dark:text-zinc-400">Journal</span>
                </div>
                <div className="text-[11px] tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
                  {isPT ? "FÉ & SOCIEDADE" : "FAITH & SOCIETY"}
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {t.tagline}
            </p>

            {/* Donate destaque */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href={`/${locale}/donate`}
                className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 shadow-sm transition hover:brightness-95 dark:bg-amber-400"
              >
                {t.donate}
              </Link>

              <Link
                href={`/${locale}/subscribe`}
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white/70 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-white dark:border-zinc-800 dark:bg-zinc-950/30 dark:text-white dark:hover:bg-zinc-900/40"
              >
                {t.newsletter}
              </Link>
            </div>
          </div>

          {/* Columns */}
          <div className="md:col-span-7">
            <div className="grid gap-8 sm:grid-cols-3">
              <FooterCol title={t.quick} links={linksQuick} />
              <FooterCol title={t.resources} links={linksResources} />
              <FooterCol title={t.legal} links={linksLegal} />
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="flex flex-col gap-3 border-t border-zinc-200/70 py-6 text-sm text-zinc-600 dark:border-zinc-800/60 dark:text-zinc-300 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {t.brand}. {t.rights}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link
              href={`/${locale}/privacy`}
              className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              {t.privacy}
            </Link>
            <Link
              href={`/${locale}/terms`}
              className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              {t.terms}
            </Link>
            <Link
              href={`/${locale}/donate`}
              className="font-semibold text-zinc-900 underline decoration-zinc-900/25 underline-offset-4 hover:decoration-zinc-900/60 dark:text-white dark:decoration-white/25 dark:hover:decoration-white/60"
            >
              {t.donateLong}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="text-xs font-semibold tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
        {title.toUpperCase()}
      </div>

      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
