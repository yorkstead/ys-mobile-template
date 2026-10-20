export class ApiError extends Error {
  constructor(public readonly status: number) {
    super(`Request failed (${status})`);
  }
}
export function apiOrigin(value = process.env.EXPO_PUBLIC_API_URL): string {
  if (!value)
    throw new Error("Configure EXPO_PUBLIC_API_URL before using the backend.");
  const url = new URL(value);
  if (url.protocol !== "https:") throw new Error("The backend must use HTTPS.");
  if (
    url.username ||
    url.password ||
    url.search ||
    url.hash ||
    url.pathname !== "/"
  )
    throw new Error(
      "Use an HTTPS origin without credentials, path, query or fragment.",
    );
  return url.origin;
}
export async function apiGet(
  path: string,
  signal?: AbortSignal,
): Promise<unknown> {
  if (!path.startsWith("/") || path.startsWith("//"))
    throw new Error("Use a relative API path.");
  const response = await fetch(`${apiOrigin()}${path}`, {
    signal,
    headers: { Accept: "application/json" },
  });
  if (!response.ok) throw new ApiError(response.status);
  return response.json();
}
