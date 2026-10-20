import fs from "node:fs";
import path from "node:path";

const slug = process.argv.slice(2).filter((arg) => arg !== "--")[0];
if (!slug) {
  console.log(
    "Complete docs/project-profile.md; configure environment per README; run checks in docs/verification.md.\nCreate a feature: <package-manager> run yorkstead:init -- 001-feature-name",
  );
  process.exit(0);
}
if (!/^\d{3,}-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error(
    "Use a numbered kebab-case feature name, such as 001-first-slice.",
  );
  process.exit(1);
}
const target = path.join("specs", slug);
if (fs.existsSync(target)) {
  console.log(`Preserved existing feature: ${target}`);
  process.exit(0);
}
const templates = [
  ["spec", "spec"],
  ["plan", "plan"],
  ["tasks", "tasks"],
].map(([name, source]) => [
  name,
  fs
    .readFileSync(`.specify/templates/${source}-template.md`, "utf8")
    .replaceAll("<name>", slug),
]);
fs.mkdirSync(target); // Exclusive creation also protects against concurrent initializers.
for (const [name, contents] of templates)
  fs.writeFileSync(path.join(target, `${name}.md`), contents, { flag: "wx" });
console.log(
  `Created draft ${target}. Clarify acceptance criteria, plan and tasks before implementation; update docs/handoffs/CURRENT.md explicitly.`,
);
