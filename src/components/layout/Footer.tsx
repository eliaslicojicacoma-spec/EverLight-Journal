import Link from "next/link";
import Container from "@/components/layout/Container";
import { siteConfig, type SiteLocale } from "@/config/siteConfig";

export default function Footer({ locale }: { locale: SiteLocale }) {
  return (
    <footer className="mt-16 border-t border-black/10 bg-[#F6F4EF]">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-base font-semibold">{siteConfig.name}</div>
            <p className="mt-3 text-sm leading-relaxed text-black/60">{siteConfig.description}</p>
            <div className="mt-5 space-y-2 text-sm text-black/60">
              <div>{siteConfig.contact.phone}</div>
              <div>{siteConfig.contact.email}</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Links Rápidos</div>
            <div className="mt-4 space-y-2 text-sm text-black/60">
              <Link className="block hover:text-black" href={`/${locale}/blog`}>Blog</Link>
              <Link className="block hover:text-black" href={`/${locale}/society`}>Sociedade</Link>
              <Link className="block hover:text-black" href={`/${locale}/library`}>Biblioteca</Link>
              <Link className="block hover:text-black" href={`/${locale}/adventist`}>Adventista</Link>
              <Link className="block hover:text-black" href={`/${locale}/about`}>Sobre</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Recursos</div>
            <div className="mt-4 space-y-2 text-sm text-black/60">
              <Link className="block hover:text-black" href={`/${locale}/support`}>Apoie o Ministério</Link>
              <Link className="block hover:text-black" href={`/${locale}/subscribe`}>Newsletter</Link>
              <Link className="block hover:text-black" href={`/${locale}/contact`}>Contato</Link>
              <Link className="block hover:text-black" href={`/${locale}/privacy`}>Política de Privacidade</Link>
              <Link className="block hover:text-black" href={`/${locale}/terms`}>Termos de Uso</Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Conecte-se</div>
            <p className="mt-4 text-sm text-black/60">Siga-nos nas redes sociais</p>
            <div className="mt-4 flex items-center gap-3">
              <a className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:text-black" href={siteConfig.social.facebook} target="_blank" rel="noreferrer">Facebook</a>
              <a className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:text-black" href={siteConfig.social.instagram} target="_blank" rel="noreferrer">Instagram</a>
              <a className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-black/70 hover:text-black" href={siteConfig.social.youtube} target="_blank" rel="noreferrer">YouTube</a>
            </div>
            <div className="mt-6">
              <Link
                href={`/${locale}/subscribe`}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Inscrever-se
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-black/10 py-6 text-sm text-black/50">
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.tagline}
        </div>
      </Container>
    </footer>
  );
}
