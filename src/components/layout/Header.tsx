"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";

type HeaderProps = {
  locale: string;
};

const NAV = [
  { key: "home", path: "" },
  { key: "society", path: "society" },
  { key: "adventist", path: "adventist" },
  { key: "library", path: "library" },
  { key: "blog", path: "blog" },
];

export default function Header({ locale }: HeaderProps) {
  const isPT = locale === "pt";
  const [open, setOpen] = useState(false);

  const t = useMemo(() => {
    return {
      brand: "EverLight Journal",
      sub: isPT ? "FÉ & SOCIEDADE" : "FAITH & SOCIETY",
      home: isPT ? "Home" : "Home",
      society: isPT ? "Sociedade" : "Society",
      adventist: isPT ? "Adventista" : "Adventist",
      library: isPT ? "Biblioteca" : "Library",
      blog: isPT ? "Blog" : "Blog",
      donate: isPT ? "Doar" : "Donate",
      close: isPT ? "Fechar" : "Close",
      menu: isPT ? "Menu" : "Menu",
    };
  }, [isPT]);

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F6F4EF]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        {/* Brand */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-[#121212] text-white">
            <span className="text-xs font-bold tracking-wide">EL</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-[#121212]">{t.brand}</div>
            <div className="text-[10px] tracking-[0.28em] text-[#6B6B6B]">{t.sub}</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-2 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={`/${locale}/${item.path}`}
              className="rounded-full px-3 py-2 text-sm font-medium text-[#121212] transition hover:bg-black/5"
            >
              {t[item.key as keyof typeof t] as string}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Locale switch */}
          <div className="hidden overflow-hidden rounded-full border border-black/10 bg-white/60 md:flex">
            <Link
              href={`/pt`}
              className={`px-3 py-2 text-xs font-semibold ${
                locale === "pt" ? "bg-[#121212] text-white" : "text-[#121212]"
              }`}
            >
              PT
            </Link>
            <Link
              href={`/en`}
              className={`px-3 py-2 text-xs font-semibold ${
                locale === "en" ? "bg-[#121212] text-white" : "text-[#121212]"
              }`}
            >
              EN
            </Link>
          </div>

          {/* Donate */}
          <Link
            href={`/${locale}/donate`}
            className="hidden rounded-full bg-[#D8C78C] px-4 py-2 text-xs font-semibold text-[#121212] shadow-sm transition hover:opacity-95 md:inline-flex"
          >
            {t.donate}
          </Link>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            aria-label={t.menu}
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#121212] transition hover:bg-white md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        locale={locale}
        labels={{
          home: t.home,
          society: t.society,
          adventist: t.adventist,
          library: t.library,
          blog: t.blog,
          donate: t.donate,
          brand: t.brand,
          sub: t.sub,
          close: t.close,
        }}
      />
    </header>
  );
}
