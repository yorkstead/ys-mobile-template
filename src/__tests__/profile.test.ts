import { profileSchema } from "../features/profile/schema";
import { apiOrigin, apiGet, ApiError } from "../lib/api";
import { findProject } from "../features/projects/data";

test("profile trims names and rejects invalid input", () => {
  expect(profileSchema.parse({ name: "  Ada  " }).name).toBe("Ada");
  expect(profileSchema.safeParse({ name: " " }).success).toBe(false);
  expect(profileSchema.safeParse({ name: "x".repeat(61) }).success).toBe(false);
});
test("API boundary requires HTTPS and rejects credential-bearing URLs", () => {
  expect(() => apiOrigin("")).toThrow("Configure");
  expect(() => apiOrigin("http://example.com")).toThrow("HTTPS");
  expect(() => apiOrigin("https://user:pass@example.com")).toThrow(
    "credentials",
  );
  expect(apiOrigin("https://api.example.com")).toBe("https://api.example.com");
});
test("API rejects absolute paths before sending requests", async () => {
  await expect(apiGet("https://evil.example")).rejects.toThrow("relative");
});
test("unknown project IDs have an explicit missing result", () => {
  expect(findProject("first-slice")?.title).toBe("Your first slice");
  expect(findProject("unknown")).toBeUndefined();
  expect(new ApiError(403).status).toBe(403);
});
