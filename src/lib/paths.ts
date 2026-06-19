export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${basePath}${path}`;
}

export function absoluteUrl(path: string): string {
  if (typeof window !== "undefined") return new URL(withBasePath(path), window.location.origin).toString();
  const site = process.env.NEXT_PUBLIC_SITE_URL ?? "https://username.github.io/helicopter";
  return new URL(path, site).toString();
}
