import { NextResponse } from "next/server";

export const runtime = "nodejs"; // garante Node runtime (bom para fetch externo)

function json(data: any, status = 200) {
  return NextResponse.json(data, { status });
}

export async function POST(req: Request) {
  try {
    const { email } = (await req.json()) as { email?: string };

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return json({ message: "Email inválido." }, 400);
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listIdRaw = process.env.BREVO_LIST_ID;

    if (!apiKey || !listIdRaw) {
      return json(
        {
          message:
            "Configuração em falta (BREVO_API_KEY / BREVO_LIST_ID). Confere no Vercel e faz redeploy.",
        },
        500
      );
    }

    const listId = Number(listIdRaw);
    if (!Number.isFinite(listId)) {
      return json(
        { message: "BREVO_LIST_ID tem de ser número (ex: 12)." },
        500
      );
    }

    // 1) Criar/atualizar contacto
    const createRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true,
      }),
    });

    const createData = await createRes.json().catch(() => ({}));

    // Se falhar, manda erro detalhado
    if (!createRes.ok) {
      const msg =
        createData?.message ||
        createData?.error ||
        "Brevo: não foi possível inscrever.";
      return json({ message: msg }, 500);
    }

    return json({ ok: true, message: "Inscrição feita com sucesso ✅" }, 200);
  } catch (err: any) {
    return json({ message: "Erro interno no servidor." }, 500);
  }
}

// opcional: bloquear GET para ninguém abrir no browser
export async function GET() {
  return json({ message: "Use POST." }, 405);
}
