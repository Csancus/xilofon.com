import { Resend } from "resend";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Hiányzó mezők" }, { status: 400 });
  }

  const toEmail = process.env.CONTACT_EMAIL ?? "info@xilofon.com";

  const { error } = await resend.emails.send({
    from: "Xilofon weboldal <noreply@xilofon.com>",
    to: toEmail,
    replyTo: email,
    subject: `Új üzenet a weboldalról – ${name}`,
    text: `
Új üzenet érkezett a weboldalról.

Név: ${name}
E-mail: ${email}
Telefon: ${phone || "–"}

Üzenet:
${message}
    `.trim(),
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Küldési hiba" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
