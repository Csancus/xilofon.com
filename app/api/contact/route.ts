import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: "Hiányzó mezők" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const { error: dbError } = await supabase.from("contacts").insert({
    name,
    email,
    phone: phone || null,
    message,
    source: "website",
  });

  if (dbError) {
    console.error("Supabase insert error:", dbError);
  }

  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");
  const toEmail = process.env.CONTACT_EMAIL ?? "info@xilofon.com";

  const { error: emailError } = await resend.emails.send({
    from: "Xilofon weboldal <noreply@xilofon.com>",
    to: toEmail,
    replyTo: email,
    subject: `Új érdeklődő: ${name}`,
    text: `
Új üzenet érkezett a weboldalról.

Név: ${name}
E-mail: ${email}
Telefon: ${phone || "–"}

Üzenet:
${message}
    `.trim(),
  });

  if (emailError) {
    console.error("Resend error:", emailError);
    if (dbError) {
      return Response.json({ error: "Küldési hiba" }, { status: 500 });
    }
  }

  return Response.json({ ok: true });
}
