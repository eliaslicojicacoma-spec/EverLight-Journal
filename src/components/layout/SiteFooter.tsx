import Link from "next/link";

type Props = { locale: string };

export default function SiteFooter({ locale }: Props) {
  const isPT = locale === "pt";
  const withLocale = (href: string) => `/${locale}${href === "/" ? "" : href}`;

  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold">
              EverLight <span className="text-white/70">Journal</span>
            </div>
            <div className="mt-1 text-xs text-white/60">
              {isPT
                ? "Conectando fé e sociedade com clareza bíblica."
                : "Connecting faith and society with biblical clarity."}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-sm">
            <Link className="text-white/70 hover:text-white" href={withLocale("/privacy")}>
              {isPT ? "Privacidade" : "Privacy"}
            </Link>
            <Link className="text-white/70 hover:text-white" href={withLocale("/terms")}>
              {isPT ? "Termos" : "Terms"}
            </Link>
            <Link className="text-white/70 hover:text-white" href={withLocale("/transparency")}>
              {isPT ? "Transparência" : "Transparency"}
            </Link>
          </div>
        </div>

        <div className="mt-8 text-xs text-white/40">
          © {new Date().getFullYear()} EverLight Journal. {isPT ? "Todos os direitos reservados." : "All rights reserved."}
        </div>
      </div>
    </footer>
  );
}
