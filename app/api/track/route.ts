import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const { event, target, locale, page } = await request.json();
    if (!event) return Response.json({ ok: false }, { status: 400 });

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    await supabase.from("events").insert({
      event,
      target: target ?? null,
      locale: locale ?? null,
      page: page ?? null,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
