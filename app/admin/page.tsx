"use client";

import { useState, useEffect, useCallback } from "react";

type EventRow = {
  event: string;
  target: string | null;
  locale: string | null;
  created_at: string;
};
type StatRow = { target: string; count: number };
type AdminData = { demos: StatRow[]; fields: StatRow[]; recent: EventRow[] };

export default function AdminPage() {
  const [pw, setPw] = useState("");
  const [authed, setAuthed] = useState(false);
  const [data, setData] = useState<AdminData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-slate-900">Xilofon Admin</h1>
          <div className="flex gap-3">
            <button
              onClick={() => fetchData(sessionStorage.getItem("admin_pw")!)}
              disabled={loading}
              className="px-4 py-1.5 rounded-full bg-violet-600 hover:bg-violet-500 disabled:opacity-50 text-white text-sm font-semibold transition-colors"
            >
              {loading ? "..." : "Frissítés"}
            </button>
            <button
              onClick={logout}
              className="px-4 py-1.5 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-200 text-sm font-semibold transition-colors"
            >
              Kilépés
            </button>
          </div>
        </div>

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        {loading && !data && <p className="text-slate-500 text-sm">Betöltés...</p>}

        {data && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StatCard title="Demo megtekintések" rows={data.demos} />
              <StatCard title="Form mezőkattintások" rows={data.fields} />
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200">
                <h2 className="font-bold text-slate-900 text-sm">Utolsó 100 esemény</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 text-xs text-slate-400 uppercase">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Időpont</th>
                      <th className="px-4 py-3 text-left font-semibold">Esemény</th>
                      <th className="px-4 py-3 text-left font-semibold">Cél</th>
                      <th className="px-4 py-3 text-left font-semibold">Locale</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.recent.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50">
                        <td className="px-4 py-2 text-slate-400 whitespace-nowrap text-xs">
                          {new Date(row.created_at).toLocaleString("hu")}
                        </td>
                        <td className="px-4 py-2 text-slate-700 font-mono text-xs">{row.event}</td>
                        <td className="px-4 py-2 text-slate-700 text-xs">{row.target ?? "–"}</td>
                        <td className="px-4 py-2 text-slate-400 text-xs">{row.locale ?? "–"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ title, rows }: { title: string; rows: StatRow[] }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-slate-200">
        <h2 className="font-bold text-slate-900 text-sm">{title}</h2>
      </div>
      <ul className="divide-y divide-slate-100">
        {rows.length === 0 && (
          <li className="px-6 py-4 text-slate-400 text-sm">Még nincs adat.</li>
        )}
        {rows.map((r) => (
          <li key={r.target} className="flex items-center justify-between px-6 py-3">
            <span className="text-slate-700 text-sm">{r.target}</span>
            <span className="text-violet-600 font-bold text-sm">{r.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
