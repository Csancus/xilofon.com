"use client";

import { useState, useEffect, useCallback } from "react";

type EventStat = { event: string; target: string | null; count: number };
type PageStat = { page: string; views: number; events: EventStat[] };
type EventRow = {
  event: string;
  target: string | null;
  locale: string | null;
  page: string | null;
  created_at: string;
};
type AdminData = { pages: PageStat[]; recent: EventRow[] };

export default function AdminPage() {
  const [pw, setPw] = useState("");
  const [authed, setAuthed] = useState(false);
  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tab, setTab] = useState<"pages" | "recent">("pages");

  const fetchData = useCallback(async (password: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/events", {
        headers: { Authorization: `Bearer ${password}` },
      });
      if (res.status === 401) {
        setError("Hibás jelszó.");
        setAuthed(false);
        sessionStorage.removeItem("admin_pw");
      } else if (!res.ok) {
        setError("Szerver hiba.");
      } else {
        setData(await res.json());
      }
    } catch {
      setError("Hálózati hiba.");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem("admin_pw");
    if (saved) {
      setAuthed(true);
      fetchData(saved);
    }
  }, [fetchData]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem("admin_pw", pw);
    setAuthed(true);
    await fetchData(pw);
  };

  const logout = () => {
    sessionStorage.removeItem("admin_pw");
    setAuthed(false);
    setData(null);
    setPw("");
    setError("");
  };

  if (!authed) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <form
          onSubmit={handleLogin}
          className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-sm space-y-4"
        >
          <h1 className="text-lg font-bold text-slate-900">Admin belépés</h1>
          <input
            type="password"
            placeholder="Jelszó"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-violet-400 text-sm"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2.5 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-colors"
          >
            Belépés
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold text-slate-900">Xilofon Admin</h1>
          <div className="flex gap-2">
            <button
              onClick={() => fetchData(sessionStorage.getItem("admin_pw")!)}
              disabled={loading}
              className="px-4 py-1.5 rounded-full bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white text-sm font-semibold transition-colors"
            >
              {loading ? "..." : "↺ Frissítés"}
            </button>
            <button
              onClick={logout}
              className="px-4 py-1.5 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-200 text-sm font-semibold transition-colors"
            >
              Kilépés
            </button>
          </div>
        </div>

        <div className="flex gap-1 mb-6 bg-white rounded-xl p-1 w-fit shadow-sm">
          {(["pages", "recent"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                tab === t ? "bg-violet-600 text-white" : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {t === "pages" ? "Oldalak" : "Eseménynapló"}
            </button>
          ))}
        </div>

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        {loading && !data && <p className="text-slate-500 text-sm">Betöltés...</p>}

        {data && tab === "pages" && (
          <div className="space-y-3">
            {data.pages.length === 0 && (
              <p className="text-slate-400 text-sm">Még nincs adat.</p>
            )}
            {data.pages.map((ps) => (
              <PageCard key={ps.page} ps={ps} />
            ))}
          </div>
        )}

        {data && tab === "recent" && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100">
              <span className="font-bold text-slate-900 text-sm">Utolsó 100 esemény</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-slate-50 text-slate-400 uppercase">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">Időpont</th>
                    <th className="px-4 py-3 text-left font-semibold">Oldal</th>
                    <th className="px-4 py-3 text-left font-semibold">Esemény</th>
                    <th className="px-4 py-3 text-left font-semibold">Cél</th>
                    <th className="px-4 py-3 text-left font-semibold">Locale</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {data.recent.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="px-4 py-2 text-slate-400 whitespace-nowrap">
                        {new Date(row.created_at).toLocaleString("hu")}
                      </td>
                      <td className="px-4 py-2 text-slate-600 font-mono max-w-[180px] truncate">{row.page ?? "–"}</td>
                      <td className="px-4 py-2 text-slate-700 font-mono">{row.event}</td>
                      <td className="px-4 py-2 text-slate-700">{row.target ?? "–"}</td>
                      <td className="px-4 py-2 text-slate-400">{row.locale ?? "–"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PageCard({ ps }: { ps: PageStat }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
      >
        <span className="font-mono text-sm text-slate-800 font-semibold truncate max-w-[70%]">
          {ps.page}
        </span>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="text-xs font-bold text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full">
            {ps.views} látogatás
          </span>
          <span className="text-slate-300 text-xs">{open ? "▲" : "▼"}</span>
        </div>
      </button>

      {open && (
        <div className="border-t border-slate-100 overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-slate-50 text-slate-400 uppercase">
              <tr>
                <th className="px-5 py-2 text-left font-semibold">Esemény</th>
                <th className="px-5 py-2 text-left font-semibold">Cél</th>
                <th className="px-5 py-2 text-right font-semibold">Db</th>
                {ps.views > 0 && (
                  <th className="px-5 py-2 text-right font-semibold">%</th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {ps.events.map((ev, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-5 py-2 font-mono text-violet-700">{ev.event}</td>
                  <td className="px-5 py-2 text-slate-700">{ev.target ?? "–"}</td>
                  <td className="px-5 py-2 text-right font-bold text-slate-900">{ev.count}</td>
                  {ps.views > 0 && (
                    <td className="px-5 py-2 text-right text-slate-400">
                      {Math.round((ev.count / ps.views) * 100)}%
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
