import { NextResponse } from "next/server";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const RESEND_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

    if (!RESEND_API_KEY || !RESEND_AUDIENCE_ID) {
      return NextResponse.json(
        { ok: false, message: "Missing server configuration." },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => null);
    const email = String(body?.email ?? "").trim().toLowerCase();
    const name = String(body?.name ?? "").trim();
    const company = String(body?.company ?? "").trim(); // honeypot

    // Honeypot anti-bot (se vier preenchido, é bot)
    if (company) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, message: "Invalid email." },
        { status: 400 }
      );
    }

    // Resend: create contact in audience
    const r = await fetch(`https://api.resend.com/audiences/${RESEND_AUDIENCE_ID}/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        first_name: name || undefined,
        unsubscribed: false,
      }),
    });

    const data = await r.json().catch(() => ({}));

    // Resend pode responder 409/400 se já existir; tratamos como ok
    if (!r.ok) {
      const msg = String(data?.message ?? "");
      const already =
        r.status === 409 ||
        msg.toLowerCase().includes("already") ||
        msg.toLowerCase().includes("exists");

      if (already) {
        return NextResponse.json({ ok: true, already: true }, { status: 200 });
      }

      return NextResponse.json(
        { ok: false, message: msg || "Subscription failed." },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unexpected error." },
      { status: 500 }
    );
  }
}
