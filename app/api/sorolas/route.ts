import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, company, email, phone, lottery, interested, platform, domain, industry } = body;

  if (!name || !email) {
    return Response.json({ error: "Hiányzó mezők" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  await supabase.from("contacts").insert({
    name,
    email,
    phone: phone || null,
    message: `Cégnév: ${company || "–"}\nSorsolás: ${lottery}\nÉrdekel weboldal: ${interested}\nKontakt platform: ${platform}\nDomain: ${domain || "–"}\nIparág/leírás: ${industry}`,
    source: "sorolas",
  });

  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");
  const toEmail = process.env.CONTACT_EMAIL ?? "info@xilofon.com";

  await resend.emails.send({
    from: "Xilofon weboldal <noreply@xilofon.com>",
    to: toEmail,
    replyTo: email,
    subject: `Sorsolás jelentkezés: ${name}`,
    text: `
Új sorsolás jelentkezés érkezett.

Név: ${name}
Cégnév: ${company || "–"}
E-mail: ${email}
Telefon: ${phone || "–"}
Sorsolásban részt vesz: ${lottery}
Érdekel weboldal különben is: ${interested}
Kontakt platform: ${platform}
Domain preferencia: ${domain || "–"}
Iparág / weboldal leírás:
${industry}
    `.trim(),
  });

  return Response.json({ ok: true });
}
