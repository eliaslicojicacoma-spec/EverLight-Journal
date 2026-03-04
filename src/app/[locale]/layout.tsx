import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <>
      <Header />
      <main className="py-10">{children}</main>
      <Footer />
    </>
  );
}
