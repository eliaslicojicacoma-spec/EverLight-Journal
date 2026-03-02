import Link from "next/link";
import { contactConfig } from "@/config/contactConfig";
import { siteConfig } from "@/config/siteConfig";
import SocialLinks from "@/components/social/SocialLinks";
import DonationBox from "@/components/monetization/DonationBox";

type Props = {
  locale?: string;
};

export default function Footer({ locale = "pt" }: Props) {
  const isPT = locale === "pt";

  return (
    <footer className="mt-14 border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-base font-semibold text-black">{siteConfig.name}</div>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-black/60">
              {siteConfig.description}
            </p>

            <div className="mt-5 space-y-2 text-sm text-black/70">
              <div>{contactConfig.phone}</div>
              <div>{contactConfig.email}</div>
            </div>

            <SocialLinks className="mt-5" />
          </div>

          <div>
            <div className="text-sm font-semibold text-black">
              {isPT ? "Links Rápidos" : "Quick Links"}
            </div>
            <div className="mt-4 flex flex-col gap-2 text-sm text-black/70">
              <Link className="hover:text-black" href={`/${locale}/blog`}>
                Blog
              </Link>
              <Link className="hover:text-black" href={`/${locale}/society`}>
                {isPT ? "Sociedade" : "Society"}
              </Link>
              <Link className="hover:text-black" href={`/${locale}/library`}>
                {isPT ? "Biblioteca" : "Library"}
              </Link>
              <Link className="hover:text-black" href={`/${locale}/adventist`}>
                {isPT ? "Adventista" : "Adventist"}
              </Link>
              <Link className="hover:text-black" href={`/${locale}/about`}>
                {isPT ? "Sobre" : "About"}
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-black">
              {isPT ? "Recursos" : "Resources"}
            </div>

            <div className="mt-4 flex flex-col gap-2 text-sm text-black/70">
              <Link className="hover:text-black" href={`/${locale}/support`}>
                {isPT ? "Apoie o Ministério" : "Support"}
              </Link>
              <Link className="hover:text-black" href={`/${locale}/subscribe`}>
                Newsletter
              </Link>
              <Link className="hover:text-black" href={`/${locale}/contact`}>
                {isPT ? "Contato" : "Contact"}
              </Link>
              <Link className="hover:text-black" href={`/${locale}/privacy`}>
                {isPT ? "Política de Privacidade" : "Privacy"}
              </Link>
              <Link className="hover:text-black" href={`/${locale}/terms`}>
                {isPT ? "Termos de Uso" : "Terms"}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <DonationBox locale={locale} />
        </div>

        <div className="mt-10 border-t border-black/10 pt-6 text-xs text-black/50">
          © {new Date().getFullYear()} {siteConfig.name} — {siteConfig.tagline}
        </div>
      </div>
    </footer>
  );
}
