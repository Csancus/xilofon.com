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
      .select("event, target, locale, page, is_owner")
      .order("created_at", { ascending: false })
      .limit(10000),
    supabase
      .from("events")
      .select("event, target, locale, page, is_owner, created_at")
      .order("created_at", { ascending: false })
      .limit(100),
  ]);

  type Row = {
    event: string;
    target: string | null;
    locale: string | null;
    page: string | null;
    is_owner: boolean | null;
  };
  const all: Row[] = allRes.data ?? [];

  const pageMap = new Map<
    string,
    { views: number; ownerViews: number; evts: Map<string, { count: number; ownerCount: number }> }
  >();

  for (const row of all) {
    const pg = row.page ?? "(ismeretlen oldal)";
    if (!pageMap.has(pg)) pageMap.set(pg, { views: 0, ownerViews: 0, evts: new Map() });
    const entry = pageMap.get(pg)!;
    const owner = row.is_owner === true;

    if (row.event === "page_view" || row.event === "demo_view") {
      entry.views++;
      if (owner) entry.ownerViews++;
    }

    const key = `${row.event}\x00${row.target ?? ""}`;
    const curr = entry.evts.get(key) ?? { count: 0, ownerCount: 0 };
    curr.count++;
    if (owner) curr.ownerCount++;
    entry.evts.set(key, curr);
  }

  const pages = [...pageMap.entries()]
    .sort((a, b) => b[1].views - a[1].views)
    .map(([page, { views, ownerViews, evts }]) => ({
      page,
      views,
      ownerViews,
      events: [...evts.entries()]
        .sort((a, b) => b[1].count - a[1].count)
        .map(([key, { count, ownerCount }]) => {
          const sep = key.indexOf("\x00");
          return {
            event: key.slice(0, sep),
            target: key.slice(sep + 1) || null,
            count,
            ownerCount,
          };
        }),
    }));

  return Response.json({ pages, recent: recentRes.data ?? [] });
}
