import { monetizationConfig } from "@/config/monetizationConfig";

export default function DonationBox() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h3 className="text-white font-semibold text-lg">Apoie o EverLight Journal</h3>
      <p className="text-white/70 mt-1 text-sm">
        Se este conteúdo te ajuda, considera apoiar para manter o projeto vivo.
      </p>

      <div className="mt-4 grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-zinc-950/40 p-4">
          <p className="text-white font-medium">PIX</p>
          <p className="text-white/70 text-sm mt-1 break-all">{monetizationConfig.pixKey}</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-zinc-950/40 p-4">
          <p className="text-white font-medium">PayPal</p>
          <p className="text-white/70 text-sm mt-1 break-all">{monetizationConfig.paypalEmail}</p>
        </div>
      </div>

      <p className="text-xs text-white/50 mt-3">
        Transparência: doações apoiam custos de domínio, hospedagem e produção de conteúdo.
      </p>
    </div>
  );
}
