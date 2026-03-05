import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Props = { locale: string };

type NavItem = {
  href: string; // sem locale (vamos prefixar)
  label: { pt: string; en: string };
};

const NAV: NavItem[] = [
  { href: "/", label: { pt: "Início", en: "Home" } },
  { href: "/blog", label: { pt: "Blog", en: "Blog" } },
  { href: "/library", label: { pt: "Biblioteca", en: "Library" } },
  { href: "/verse-of-day", label: { pt: "Versículo", en: "Verse" } },
  { href: "/transparency", label: { pt: "Transparência", en: "Transparency" } },
  { href: "/contact", label: { pt: "Contacto", en: "Contact" } },
];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export default function SiteHeader({ locale }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isPT = locale === "pt";
  const t = useMemo(() => (isPT ? "pt" : "en"), [isPT]);

  // Fecha menu ao mudar de rota
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloqueia scroll quando menu mobile abre
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const withLocale = (href: string) => `/${locale}${href === "/" ? "" : href}`;

  const isActive = (href: string) => {
    const full = withLocale(href);
    if (href === "/") return pathname === full;
    return pathname?.startsWith(full);
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/10 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link href={withLocale("/")} className="group inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-sm">
              <span className="text-sm font-black tracking-tight">EL</span>
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">
                EverLight <span className="text-white/70">Journal</span>
              </div>
              <div className="text-xs text-white/60">
                {isPT ? "Espiritualidade & Sociedade" : "Spirituality & Society"}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={withLocale(item.href)}
                className={cx(
                  "rounded-xl px-3 py-2 text-sm transition",
                  "hover:bg-white/5 hover:text-white",
                  isActive(item.href)
                    ? "bg-white/10 text-white"
                    : "text-white/70"
                )}
              >
                {item.label[t]}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href={withLocale("/blog")}
              className="ml-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-white/15"
            >
              {isPT ? "Explorar" : "Explore"}
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 text-white/80 shadow-sm transition hover:bg-white/10 md:hidden"
          >
            <HamburgerIcon />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-white/10 bg-background/95 backdrop-blur">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <div className="text-sm font-semibold">
                {isPT ? "Menu" : "Menu"}
              </div>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 hover:bg-white/10"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="p-3">
              <div className="space-y-1">
                {NAV.map((item) => (
                  <Link
                    key={item.href}
                    href={withLocale(item.href)}
                    className={cx(
                      "flex items-center justify-between rounded-2xl px-4 py-3 text-sm transition",
                      "hover:bg-white/5",
                      isActive(item.href) ? "bg-white/10 text-white" : "text-white/80"
                    )}
                  >
                    <span>{item.label[t]}</span>
                    <span className="text-white/40">›</span>
                  </Link>
                ))}
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-xs text-white/60">
                  {isPT
                    ? "Design premium, performance e foco em conteúdo."
                    : "Premium design, performance and content-first."}
                </div>
                <div className="mt-3">
                  <Link
                    href={withLocale("/subscribe")}
                    className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                  >
                    {isPT ? "Subscrever" : "Subscribe"}
                  </Link>
                </div>
              </div>

              <div className="mt-3 text-center text-xs text-white/40">
                EverLight Journal
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
          }
