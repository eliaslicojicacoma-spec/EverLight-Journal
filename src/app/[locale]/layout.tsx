import "@/styles/globals.css";
import EverLightBackground from "@/components/ui/EverLightBackground";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params?.locale ?? "pt";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen text-zinc-100 antialiased">
        
        {/* Fundo EverLight */}
        <EverLightBackground />

        {/* Conteúdo do site */}
        <main className="relative mx-auto max-w-5xl px-4 py-10">
          {children}
        </main>

      </body>
    </html>
  );
}
