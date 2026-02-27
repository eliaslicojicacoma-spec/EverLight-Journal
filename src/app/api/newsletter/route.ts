import { NextResponse } from "next/server";

function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { email } = (await req.json()) as { email?: string };

    if (!email || !isEmail(email)) {
      return NextResponse.json({ ok: false, error: "Email inválido." }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listIdRaw = process.env.BREVO_LIST_ID;

    if (!apiKey || !listIdRaw) {
      return NextResponse.json(
        { ok: false, error: "Configuração ausente (BREVO_API_KEY/BREVO_LIST_ID)." },
        { status: 500 }
      );
    }

    const listId = Number(listIdRaw);
    if (!Number.isFinite(listId)) {
      return NextResponse.json({ ok: false, error: "BREVO_LIST_ID inválido." }, { status: 500 });
    }

    const r = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true, // se já existir, atualiza sem dar erro
      }),
    });

    // Brevo retorna JSON (geralmente)
    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      // Mensagem amigável (sem vazar segredo)
      const msg =
        (data && (data.message || data.error || data.code)) ||
        "Erro ao inscrever. Tenta novamente.";
      return NextResponse.json({ ok: false, error: String(msg) }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Erro inesperado." }, { status: 500 });
  }
}
