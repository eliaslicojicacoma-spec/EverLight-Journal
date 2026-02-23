import { siteConfig } from "@/config/siteConfig";

export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-extrabold tracking-tight">Contacto</h1>
      <p className="text-zinc-600 dark:text-white/70">
        Para parcerias, correções ou sugestões, contacta:
      </p>

      <div className="rounded-2xl border p-5 shadow-sm border-zinc-200 bg-white dark:border-white/10 dark:bg-white/5">
        <p className="font-semibold">{siteConfig.email}</p>
      </div>
    </div>
  );
}
