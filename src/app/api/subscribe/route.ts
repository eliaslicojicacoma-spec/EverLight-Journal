import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { email, name } = (await req.json()) as { email?: string; name?: string };

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Email inválido." }, { status: 400 });
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listIdRaw = process.env.BREVO_LIST_ID;

    if (!apiKey || !listIdRaw) {
      return NextResponse.json(
        { ok: false, error: "Variáveis BREVO_* não configuradas no servidor." },
        { status: 500 }
      );
    }

    const listId = Number(listIdRaw);
    if (!Number.isFinite(listId)) {
      return NextResponse.json({ ok: false, error: "BREVO_LIST_ID inválido." }, { status: 500 });
    }

    // ✅ Brevo: Create contact (com listIds e updateEnabled)
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        listIds: [listId],
        attributes: name ? { FNAME: name } : undefined,
      }),
    });

    // Brevo pode responder 201 (criou) ou 204/400 dependendo do caso
    const text = await res.text();
    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: "Falha ao inscrever. Verifica a API key e List ID.", details: text },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Erro inesperado." }, { status: 500 });
  }
}
