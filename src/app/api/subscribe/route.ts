import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const email = formData.get("email")?.toString();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Aqui depois vamos integrar com Brevo
    console.log("Novo inscrito:", email);

    return NextResponse.redirect(new URL("/pt/subscribe?success=true", req.url));
  } catch (error) {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
