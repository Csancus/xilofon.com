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

  const [allRes, recentRes] = await Promise.all([
    supabase
      .from("events")
      .select("event, target, locale, page")
      .order("created_at", { ascending: false })
      .limit(10000),
    supabase
      .from("events")
      .select("event, target, locale, page, created_at")
      .order("created_at", { ascending: false })
      .limit(100),
  ]);

  type Row = { event: string; target: string | null; locale: string | null; page: string | null };
  const all: Row[] = allRes.data ?? [];

  const pageMap = new Map<string, { views: number; evts: Map<string, number> }>();

  for (const row of all) {
    const pg = row.page ?? "(ismeretlen oldal)";
    if (!pageMap.has(pg)) pageMap.set(pg, { views: 0, evts: new Map() });
    const entry = pageMap.get(pg)!;

    if (row.event === "page_view" || row.event === "demo_view") entry.views++;

    const key = `${row.event}\x00${row.target ?? ""}`;
    entry.evts.set(key, (entry.evts.get(key) ?? 0) + 1);
  }

  const pages = [...pageMap.entries()]
    .sort((a, b) => b[1].views - a[1].views)
    .map(([page, { views, evts }]) => ({
      page,
      views,
      events: [...evts.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([key, count]) => {
          const sep = key.indexOf("\x00");
          const event = key.slice(0, sep);
          const target = key.slice(sep + 1) || null;
          return { event, target, count };
        }),
    }));

  return Response.json({ pages, recent: recentRes.data ?? [] });
}
