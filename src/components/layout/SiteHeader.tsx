"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type Props = { locale: string };

const NAV = [
  { href: "", label: { pt: "Início", en: "Home" } },
  { href: "/blog", label: { pt: "Blog", en: "Blog" } },
  { href: "/library", label: { pt: "Biblioteca", en: "Library" } },
  { href: "/verse-of-day", label: { pt: "Versículo do Dia", en: "Verse of the Day" } },
  { href: "/about", label: { pt: "Sobre", en: "About" } },
  { href: "/contact", label: { pt: "Contacto", en: "Contact" } },
];

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function SiteHeader({ locale }: Props) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const t = useMemo(() => (locale === "pt" ? "pt" : "en"), [locale]);

  useEffect(() => {
    // Fecha menu ao navegar
    setOpen(false);
  }, [pathname]);

  const base = `/${locale}`;

  const isActive = (href: string) => {
    const target = `${base}${href || ""}` || base;
    if (!pathname) return false;
    if (href === "") return pathname === base || pathname === `${base}/`;
    return pathname.startsWith(target);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <Link href={`/${locale}`} className="group inline-flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
              <span className="text-sm font-bold tracking-tight">EL</span>
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight text-white/90 group-hover:text-white">
                EverLight Journal
              </div>
              <div className="text-[11px] text-white/60">
                {t === "pt" ? "Espiritualidade & Sociedade" : "Spirituality & Society"}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => {
              const href = `${base}${item.href}`;
              return (
                <Link
                  key={item.href}
                  href={href}
                  className={cx(
                    "rounded-xl px-3 py-2 text-sm transition",
                    isActive(item.href)
                      ? "bg-white/10 text-white ring-1 ring-white/10"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label[t]}
                </Link>
              );
            })}
          </nav>

          {/* Mobile button */}
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-3 py-2 text-sm text-white ring-1 ring-white/10 hover:bg-white/15 md:hidden"
          >
            <span className="mr-2">{t === "pt" ? "Menu" : "Menu"}</span>
            <span className="relative block h-4 w-5">
              <span
                className={cx(
                  "absolute left-0 top-0 h-[2px] w-5 bg-white transition",
                  open && "translate-y-[7px] rotate-45"
                )}
              />
              <span
                className={cx(
                  "absolute left-0 top-[7px] h-[2px] w-5 bg-white transition",
                  open && "opacity-0"
                )}
              />
              <span
                className={cx(
                  "absolute left-0 top-[14px] h-[2px] w-5 bg-white transition",
                  open && "-translate-y-[7px] -rotate-45"
                )}
              />
            </span>
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-black/40 p-2 md:hidden">
            <div className="grid gap-1">
              {NAV.map((item) => {
                const href = `${base}${item.href}`;
                return (
                  <Link
                    key={item.href}
                    href={href}
                    className={cx(
                      "rounded-xl px-3 py-2 text-sm transition",
                      isActive(item.href)
                        ? "bg-white/10 text-white ring-1 ring-white/10"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {item.label[t]}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
  }
