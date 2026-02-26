"use client";

import Link from "next/link";

type Props = {
  open: boolean;
  onClose: () => void;
  locale: string;
  labels: {
    brand: string;
    sub: string;
    home: string;
    society: string;
    adventist: string;
    library: string;
    blog: string;
    donate: string;
    close: string;
  };
};

export default function MobileMenu({ open, onClose, locale, labels }: Props) {
  return (
    <div
      className={`fixed inset-0 z-[60] transition ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
    >
      {/* overlay */}
      <button
        type="button"
        aria-label={labels.close}
        onClick={onClose}
        className="absolute inset-0 bg-black/30"
      />

      {/* panel */}
      <div
        className={`absolute right-0 top-0 h-full w-[86%] max-w-sm transform bg-[#F6F4EF] shadow-2xl transition duration-200 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <div className="leading-tight">
            <div className="text-sm font-semibold text-[#121212]">{labels.brand}</div>
            <div className="text-[10px] tracking-[0.28em] text-[#6B6B6B]">{labels.sub}</div>
          </div>

          <button
            type="button"
            aria-label={labels.close}
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-5">
          <div className="grid gap-2">
            <NavLink href={`/${locale}`} onClick={onClose} label={labels.home} />
            <NavLink href={`/${locale}/society`} onClick={onClose} label={labels.society} />
            <NavLink href={`/${locale}/adventist`} onClick={onClose} label={labels.adventist} />
            <NavLink href={`/${locale}/library`} onClick={onClose} label={labels.library} />
            <NavLink href={`/${locale}/blog`} onClick={onClose} label={labels.blog} />
          </div>

          <div className="mt-6 flex overflow-hidden rounded-full border border-black/10 bg-white/70">
            <Link
              onClick={onClose}
              href={`/pt`}
              className={`flex-1 px-3 py-3 text-center text-xs font-semibold ${
                locale === "pt" ? "bg-[#121212] text-white" : "text-[#121212]"
              }`}
            >
              PT
            </Link>
            <Link
              onClick={onClose}
              href={`/en`}
              className={`flex-1 px-3 py-3 text-center text-xs font-semibold ${
                locale === "en" ? "bg-[#121212] text-white" : "text-[#121212]"
              }`}
            >
              EN
            </Link>
          </div>

          <Link
            onClick={onClose}
            href={`/${locale}/donate`}
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#D8C78C] px-5 py-3 text-sm font-semibold text-[#121212] shadow-sm transition hover:opacity-95"
          >
            {labels.donate}
          </Link>
        </div>
      </div>
    </div>
  );
}

function NavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm font-semibold text-[#121212] transition hover:bg-white"
    >
      {label}
    </Link>
  );
}
