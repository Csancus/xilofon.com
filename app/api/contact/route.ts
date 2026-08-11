import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";
import { createCaptchaChallenge, verifyCaptcha } from "@/lib/captcha";

// Kontakt form kikapcsolva (spam miatt). Visszakapcsoláshoz: true
// — a kliens oldali párja: components/ContactForm.tsx FORM_ENABLED
const FORM_ENABLED = false;

export async function GET() {
  if (!FORM_ENABLED) {
    return new Response(null, { status: 404 });
  }
  return Response.json(createCaptchaChallenge(), {
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  // Semmilyen feldolgozás: nincs DB-írás, nincs e-mail
  if (!FORM_ENABLED) {
    return new Response(null, { status: 404 });
  }

  const body = await request.json();
  const { name, email, phone, message } = body;

  // Honeypot: rejtett mező, amit csak botok töltenek ki — csendben "siker"
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  if (!verifyCaptcha(body.captcha)) {
    return Response.json({ error: "captcha" }, { status: 400 });
  }

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
