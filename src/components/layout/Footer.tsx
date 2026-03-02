import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-white/10">
      <Container>
        <div className="py-8 text-sm text-white/60">
          © {new Date().getFullYear()} EverLight Journal · Built with Next.js + Tailwind
        </div>
      </Container>
    </footer>
  );
}
