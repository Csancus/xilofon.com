import { createClient } from "@supabase/supabase-js";
import type { NextRequest } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "asd123";

export async function GET(request: NextRequest) {
  const auth = request.headers.get("authorization") ?? "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (token !== ADMIN_PASSWORD) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  const [demosRes, fieldsRes, recentRes] = await Promise.all([
    supabase.from("events").select("target").eq("event", "demo_view"),
    supabase.from("events").select("target").eq("event", "field_focus"),
    supabase
      .from("events")
      .select("event, target, locale, created_at")
      .order("created_at", { ascending: false })
      .limit(100),
  ]);

  const countBy = (arr: { target: string | null }[]) => {
    const map: Record<string, number> = {};
    for (const row of arr ?? []) {
      const k = row.target ?? "(unknown)";
      map[k] = (map[k] ?? 0) + 1;
    }
    return Object.entries(map)
      .sort((a, b) => b[1] - a[1])
      .map(([target, count]) => ({ target, count }));
  };

  return Response.json({
    demos: countBy(demosRes.data ?? []),
    fields: countBy(fieldsRes.data ?? []),
    recent: recentRes.data ?? [],
  });
}
