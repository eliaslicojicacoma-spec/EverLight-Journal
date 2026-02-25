"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header({ locale }: { locale: string }) {
  const pathname = usePathname();
  const isPT = locale === "pt";

  const switchLocale = (nextLocale: "pt" | "en") => {
    // troca /pt/... por /en/... mantendo a rota
    if (!pathname) return `/${nextLocale}`;
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length === 0) return `/${nextLocale}`;
    parts[0] = nextLocale;
    return "/" + parts.join("/");
  };

  const nav = [
    { href: `/${locale}`, label: isPT ? "Home" : "Home" },
    { href: `/${locale}/society`, label: isPT ? "Sociedade" : "Society" },
    { href: `/${locale}/adventist`, label: isPT ? "Adventista" : "Adventist" },
    { href: `/${locale}/library`, label: isPT ? "Biblioteca" : "Library" },
    { href: `/${locale}/blog`, label: "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
            EL
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">EverLight Journal</div>
            <div className="text-[11px] tracking-[0.22em] text-black/55">
              {isPT ? "FÉ & SOCIEDADE" : "FAITH & SOCIETY"}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-black/70 transition hover:bg-black/5 hover:text-black"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={switchLocale("pt")}
            className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
              locale === "pt" ? "bg-black text-white" : "bg-black/5 text-black"
            }`}
          >
            PT
          </Link>
          <Link
            href={switchLocale("en")}
            className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
              locale === "en" ? "bg-black text-white" : "bg-black/5 text-black"
            }`}
          >
            EN
          </Link>

          <Link
            href={`/${locale}/donate`}
            className="ml-1 rounded-full bg-[#F59E0B] px-4 py-2 text-xs font-extrabold tracking-wide text-black transition hover:opacity-95"
          >
            {isPT ? "Doar" : "Donate"}
          </Link>
        </div>
      </div>
    </header>
  );
}
