import { monetizationConfig } from "@/config/monetizationConfig";

type Props = {
  className?: string;
  locale?: string;
};

export default function DonationBox({ className, locale = "pt" }: Props) {
  const isPT = locale === "pt";

  return (
    <section
      className={
        className ??
        "rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur"
      }
    >
      <div className="text-[11px] font-semibold tracking-[0.22em] text-black/55">
        {isPT ? "APOIE O MINISTÉRIO" : "SUPPORT THE MINISTRY"}
      </div>

      <h3 className="mt-2 text-lg font-semibold text-black">
        {isPT ? "Ajude a manter o EverLight ativo" : "Help keep EverLight running"}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-black/60">
        {isPT
          ? "Contribuições voluntárias apoiam produção de estudos, manutenção do site e expansão do conteúdo."
          : "Your support helps with studies, site maintenance, and content growth."}
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <div className="text-xs font-semibold text-black">PayPal</div>
          <div className="mt-1 text-sm text-black/70">{monetizationConfig.paypalEmail}</div>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-4">
          <div className="text-xs font-semibold text-black">Pix</div>
          <div className="mt-1 break-all text-sm text-black/70">{monetizationConfig.pixKey}</div>
        </div>
      </div>
    </section>
  );
}
