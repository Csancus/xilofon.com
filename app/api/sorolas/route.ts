import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const confirmationCopy: Record<string, {
  subject: string;
  greeting: (name: string) => string;
  intro: string;
  body: string;
  contactLine: (platform: string) => string;
  closing: string;
  goodbye: string;
  team: string;
}> = {
  hu: {
    subject: "Köszönjük a jelentkezésed! 🎉",
    greeting: (name: string) => `Szia, ${name}!`,
    intro: "Megkaptuk a jelentkezésedet a Xilofon referencia programba.",
    body: "Csapatunk átnézi a beérkezett jelentkezéseket, és hamarosan felvesszük veled a kapcsolatot az általad megadott módon.",
    contactLine: (p: string) => p === "whatsapp"
      ? "📱 WhatsApp-on keresünk majd téged."
      : "📧 E-mailben keresünk majd téged.",
    closing: "Addig is — ha kérdésed van, bátran írj nekünk!",
    goodbye: "Szép napot kívánunk! ☀️",
    team: "A Xilofon Digital csapata",
  },
  en: {
    subject: "Thank you for applying! 🎉",
    greeting: (name: string) => `Hi ${name}!`,
    intro: "We've received your application for the Xilofon reference program.",
    body: "Our team is reviewing all applications and will get back to you soon through your preferred contact method.",
    contactLine: (p: string) => p === "whatsapp"
      ? "📱 We'll reach out to you via WhatsApp."
      : "📧 We'll reach out to you by email.",
    closing: "In the meantime — feel free to reply if you have any questions!",
    goodbye: "Have a wonderful day! ☀️",
    team: "The Xilofon Digital team",
  },
  hr: {
    subject: "Hvala na prijavi! 🎉",
    greeting: (name: string) => `Bok, ${name}!`,
    intro: "Primili smo vašu prijavu za Xilofon referentni program.",
    body: "Naš tim pregledava sve prijave i uskoro ćemo vam se javiti putem vašeg preferiranog kanala kontakta.",
    contactLine: (p: string) => p === "whatsapp"
      ? "📱 Kontaktirat ćemo vas putem WhatsAppa."
      : "📧 Kontaktirat ćemo vas e-mailom.",
    closing: "U međuvremenu — slobodno nam pišite ako imate pitanja!",
    goodbye: "Lijep dan! ☀️",
    team: "Tim Xilofon Digital",
  },
  ro: {
    subject: "Mulțumim pentru aplicație! 🎉",
    greeting: (name: string) => `Bună, ${name}!`,
    intro: "Am primit aplicația ta pentru programul de referință Xilofon.",
    body: "Echipa noastră revizuiește toate aplicațiile și te vom contacta în curând prin metoda preferată de tine.",
    contactLine: (p: string) => p === "whatsapp"
      ? "📱 Te vom contacta pe WhatsApp."
      : "📧 Te vom contacta prin e-mail.",
    closing: "Între timp — nu ezita să ne scrii dacă ai întrebări!",
    goodbye: "O zi minunată! ☀️",
    team: "Echipa Xilofon Digital",
  },
};

function buildConfirmationHtml(name: string, platform: string, locale: string): string {
  const c = confirmationCopy[locale] ?? confirmationCopy.hu;
  const greeting = c.greeting(name);
  const accentColor = "#7c3aed";
  const lightBg = "#f5f3ff";

  return `<!DOCTYPE html>
<html lang="${locale}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f1f5f9;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f1f5f9;padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:${accentColor};padding:32px 40px;text-align:center;">
            <div style="font-size:28px;font-weight:900;color:#fff;letter-spacing:-0.5px;">✕ Xilofon</div>
            <div style="color:rgba(255,255,255,0.7);font-size:13px;margin-top:4px;">Digital</div>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:40px 40px 32px;">
            <p style="margin:0 0 8px;font-size:22px;font-weight:700;color:#0f172a;">${greeting}</p>
            <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.6;">${c.intro}</p>
            <p style="margin:0 0 20px;font-size:15px;color:#475569;line-height:1.6;">${c.body}</p>

            <!-- Contact method highlight -->
            <div style="background:${lightBg};border-left:4px solid ${accentColor};border-radius:8px;padding:14px 18px;margin:0 0 24px;font-size:14px;font-weight:600;color:#4c1d95;">
              ${c.contactLine(platform)}
            </div>

            <p style="margin:0 0 28px;font-size:15px;color:#475569;line-height:1.6;">${c.closing}</p>

            <!-- Goodbye -->
            <div style="background:#fefce8;border:1px solid #fde68a;border-radius:12px;padding:16px 20px;text-align:center;">
              <p style="margin:0;font-size:17px;font-weight:700;color:#92400e;">${c.goodbye}</p>
            </div>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:20px 40px;text-align:center;">
            <p style="margin:0;font-size:13px;font-weight:600;color:#7c3aed;">${c.team}</p>
            <p style="margin:6px 0 0;font-size:12px;color:#94a3b8;">
              <a href="https://xilofon.com" style="color:#7c3aed;text-decoration:none;">xilofon.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, company, email, phone, lottery, interested, platform, domain, industry, locale = "hu" } = body;

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
  const subjectMap: Record<string, string> = {
    hu: `Sorsolás jelentkezés: ${name}`,
    en: `Reference program application: ${name}`,
    hr: `Referentna prijava: ${name}`,
    ro: `Aplicație program referință: ${name}`,
  };

  // Admin notification
  await resend.emails.send({
    from: "Xilofon weboldal <noreply@xilofon.com>",
    to: toEmail,
    replyTo: email,
    subject: subjectMap[locale] ?? subjectMap.hu,
    text: `
Új sorsolás jelentkezés érkezett.

Név: ${name}
Cégnév: ${company || "–"}
E-mail: ${email}
Telefon: ${phone || "–"}
Érdekel weboldal különben is: ${interested}
Kontakt platform: ${platform}
Domain preferencia: ${domain || "–"}
Iparág / weboldal leírás:
${industry}
    `.trim(),
  });

  // Confirmation email to applicant
  const copy = confirmationCopy[locale] ?? confirmationCopy.hu;
  await resend.emails.send({
    from: "Xilofon Digital <noreply@xilofon.com>",
    to: email,
    subject: copy.subject,
    html: buildConfirmationHtml(name, platform, locale),
  });

  return Response.json({ ok: true });
}
