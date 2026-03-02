import Link from "next/link";
import Container from "@/components/layout/Container";
import { siteConfig, type SiteLocale } from "@/config/siteConfig";

export default function Header({ locale }: { locale: SiteLocale }) {
  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-[#F6F4EF]/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white text-sm font-black">
              EL
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{siteConfig.name}</div>
              <div className="text-[11px] tracking-[0.28em] text-black/50 uppercase">
                {siteConfig.tagline}
              </div>
            </div>
          </Link>

          <nav className="flex items-center gap-5 text-sm font-semibold text-black/70">
            <Link className="hover:text-black" href={`/${locale}/blog`}>Blog</Link>
            <Link className="hover:text-black" href={`/${locale}/society`}>Sociedade</Link>
            <Link className="hover:text-black" href={`/${locale}/adventist`}>Adventista</Link>
            <Link className="hover:text-black" href={`/${locale}/library`}>Biblioteca</Link>
            <Link className="hover:text-black" href={`/${locale}/about`}>Sobre</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
