import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !isValidEmail(email)) {
      return NextResponse.json(
        { message: "Email inválido." },
        { status: 400 }
      );
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listIdRaw = process.env.BREVO_LIST_ID;

    if (!apiKey || !listIdRaw) {
      return NextResponse.json(
        { message: "BREVO_API_KEY ou BREVO_LIST_ID não configurado." },
        { status: 500 }
      );
    }

    const listId = Number(listIdRaw);
    if (!Number.isFinite(listId)) {
      return NextResponse.json(
        { message: "BREVO_LIST_ID inválido (tem que ser número)." },
        { status: 500 }
      );
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      return NextResponse.json(
        { message: "Brevo recusou a inscrição.", details: errText },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}
