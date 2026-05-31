export function track(event: string, target: string, locale?: string): void {
  if (typeof window === "undefined") return;
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event,
      target,
      page: window.location.pathname,
      locale: locale ?? null,
    }),
  }).catch(() => {});
}
