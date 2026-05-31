import { createClient } from "@supabase/supabase-js";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { event, target, locale, page } = await request.json();
    if (!event) return Response.json({ ok: false }, { status: 400 });

    const ownerIp = process.env.OWNER_IP ?? "";
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "";
    const isOwner = ownerIp !== "" && clientIp === ownerIp;

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    await supabase.from("events").insert({
      event,
      target: target ?? null,
      locale: locale ?? null,
      page: page ?? null,
      is_owner: isOwner,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 500 });
  }
}
