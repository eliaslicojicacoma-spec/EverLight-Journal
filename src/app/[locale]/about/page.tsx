import { siteConfig } from "@/config/siteConfig";

export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-extrabold tracking-tight">Sobre</h1>
      <p className="text-zinc-600 dark:text-white/70">
        O {siteConfig.name} existe para informar, elevar o pensamento e fortalecer a esperança —
        com visão global e atenção especial à comunidade Adventista.
      </p>
    </div>
  );
}
