// src/components/layout/Header.tsx
import Link from "next/link";

export default function Header({ locale }: { locale: string }) {
  const isPT = locale === "pt";

  const nav = [
    { href: `/${locale}`, label: isPT ? "Home" : "Home" },
    { href: `/${locale}/society`, label: isPT ? "Sociedade" : "Society" },
    { href: `/${locale}/adventist`, label: isPT ? "Adventista" : "Adventist" },
    { href: `/${locale}/library`, label: isPT ? "Biblioteca" : "Library" },
    { href: `/${locale}/blog`, label: "Blog" },
  ];

  const langHref = (to: "pt" | "en") => `/${to}`;

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/70 backdrop-blur">
      <div className="container-xl flex h-16 items-center justify-between gap-3">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white text-sm font-semibold">
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
              className="rounded-full px-4 py-2 text-sm font-medium text-black/80 hover:bg-black/5"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* idioma */}
          <div className="flex overflow-hidden rounded-full border border-black/10 bg-white">
            <Link
              href={langHref("pt")}
              className={`px-3 py-2 text-xs font-semibold ${
                locale === "pt" ? "bg-black text-white" : "text-black/70 hover:bg-black/5"
              }`}
            >
              PT
            </Link>
            <Link
              href={langHref("en")}
              className={`px-3 py-2 text-xs font-semibold ${
                locale === "en" ? "bg-black text-white" : "text-black/70 hover:bg-black/5"
              }`}
            >
              EN
            </Link>
          </div>

          {/* doar */}
          <Link
            href={`/${locale}/donate`}
            className="rounded-full bg-[#D8C78C] px-4 py-2 text-sm font-semibold text-black shadow-sm hover:opacity-95"
          >
            {isPT ? "Doar" : "Donate"}
          </Link>
        </div>
      </div>
    </header>
  );
}
