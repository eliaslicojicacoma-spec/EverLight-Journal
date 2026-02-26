// src/app/api/subscribe/route.ts
import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = (formData.get("email") || "").toString().trim();
    const locale = ((formData.get("locale") || "pt").toString().trim() || "pt") as "pt" | "en";

    if (!email || !isValidEmail(email)) {
      return NextResponse.redirect(new URL(`/${locale}/subscribe?status=invalid`, req.url));
    }

    const apiKey = process.env.BREVO_API_KEY;
    const listIdRaw = process.env.BREVO_LIST_ID;

    if (!apiKey || !listIdRaw) {
      return NextResponse.redirect(new URL(`/${locale}/subscribe?status=server`, req.url));
    }

    const listId = Number(listIdRaw);
    if (!Number.isFinite(listId)) {
      return NextResponse.redirect(new URL(`/${locale}/subscribe?status=server`, req.url));
    }

    // 1) Criar/atualizar contacto no Brevo
    const createContactRes = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        updateEnabled: true,
        listIds: [listId],
        attributes: {
          LOCALE: locale.toUpperCase(), // PT / EN
          SOURCE: "EverLight Subscribe",
        },
      }),
    });

    // Brevo pode responder 201 (created) ou 204/400 em casos específicos.
    // Se já existir e updateEnabled=true, normalmente fica ok.
    if (!createContactRes.ok) {
      // Em alguns casos, Brevo devolve detalhes no json
      return NextResponse.redirect(new URL(`/${locale}/subscribe?status=error`, req.url));
    }

    return NextResponse.redirect(new URL(`/${locale}/subscribe?status=ok`, req.url));
  } catch {
    // fallback
    return NextResponse.redirect(new URL(`/pt/subscribe?status=error`, req.url));
  }
}
