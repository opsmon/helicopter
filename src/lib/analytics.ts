export function trackEvent(eventName: string, payload?: Record<string, unknown>) {
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", eventName, payload);
  }
}
