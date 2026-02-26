// src/components/layout/Header.tsx
import Link from "next/link";

export default function Header({ locale }: { locale: string }) {
  const isPT = locale === "pt";

  const nav = [
    { href: `/${locale}`, label: isPT ? "Home" : "Home" },
    { href: `/${locale}/society`, label: isPT ? "Sociedade" : "Society" },
    { href: `/${locale}/adventist`, label: isPT ? "Adventista" : "Adventist" },
    { href: `/${locale}/library`, label: isPT ? "Biblioteca" : "Library" },
    { href: `/${locale}/blog`, label: isPT ? "Blog" : "Blog" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#F6F4EF]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#121212] text-white text-sm font-semibold">
            EL
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold">EverLight Journal</div>
            <div className="text-[10px] tracking-[0.22em] text-black/60">
              {isPT ? "FÉ & SOCIEDADE" : "FAITH & SOCIETY"}
            </div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-black/70 transition hover:bg-black/5 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <div className="flex overflow-hidden rounded-full border border-black/10 bg-white">
            <Link
              href={`/pt`}
              className={`px-3 py-2 text-xs font-semibold ${
                locale === "pt" ? "bg-black text-white" : "text-black/70 hover:bg-black/5"
              }`}
            >
              PT
            </Link>
            <Link
              href={`/en`}
              className={`px-3 py-2 text-xs font-semibold ${
                locale === "en" ? "bg-black text-white" : "text-black/70 hover:bg-black/5"
              }`}
            >
              EN
            </Link>
          </div>

          <Link
            href={`/${locale}/donate`}
            className="rounded-full bg-[#F59E0B] px-4 py-2 text-xs font-semibold text-black transition hover:opacity-95"
          >
            {isPT ? "Doar" : "Donate"}
          </Link>

          {/* Mobile menu simple */}
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-semibold">
              ☰
            </summary>
            <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-2xl border border-black/10 bg-white shadow-lg">
              <div className="p-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-black/80 hover:bg-black/5"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
                    }
