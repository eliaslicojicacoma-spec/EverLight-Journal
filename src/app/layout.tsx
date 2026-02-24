import "./globals.css";

export const metadata = {
  title: "EverLight Journal",
  description: "Sociedade com visão global, fé com profundidade."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
