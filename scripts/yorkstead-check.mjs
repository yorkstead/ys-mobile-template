import fs from "node:fs";
import path from "node:path";

const required = [
  "AGENTS.md",
  "CLAUDE.md",
  "GEMINI.md",
  ".codex/instructions.md",
  ".github/copilot-instructions.md",
  ".specify/memory/constitution.md",
  ".specify/templates/spec-template.md",
  ".specify/templates/plan-template.md",
  ".specify/templates/tasks-template.md",
  "docs/yorkstead-contract.md",
  "docs/project-profile.md",
  "docs/verification.md",
  "docs/model-routing.md",
  "docs/agent-roles.md",
  "docs/workflow.md",
  "docs/release-checklist.md",
  "docs/handoffs/CURRENT.md",
  "docs/handoffs/SESSION-START.md",
  "docs/handoffs/SESSION-END.md",
  "scripts/yorkstead-init.mjs",
  "specs/README.md",
  ".github/workflows/verify.yml",
  ...[
    "code-change-verification",
    "database-migration",
    "production-hardening",
    "release-verification",
    "security-review",
    "spec-convergence",
  ].map((name) => `.agents/skills/${name}/SKILL.md`),
];
const errors = required
  .filter((file) => !fs.existsSync(file))
  .map((file) => `Missing ${file}`);
const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
for (const name of ["yorkstead:check", "yorkstead:init"])
  if (!pkg.scripts?.[name]) errors.push(`Missing script ${name}`);
for (const adapter of [
  "CLAUDE.md",
  "GEMINI.md",
  ".codex/instructions.md",
  ".github/copilot-instructions.md",
]) {
  if (
    fs.existsSync(adapter) &&
    !fs.readFileSync(adapter, "utf8").includes("AGENTS.md")
  )
    errors.push(`${adapter} must reference AGENTS.md`);
}
const features = fs.existsSync("specs")
  ? fs
      .readdirSync("specs", { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && entry.name !== "examples")
  : [];
for (const { name } of features) {
  if (!/^\d{3,}-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(name))
    errors.push(`Invalid feature directory specs/${name}`);
  for (const file of ["spec.md", "plan.md", "tasks.md"]) {
    const target = path.join("specs", name, file);
    if (!fs.existsSync(target) || !fs.readFileSync(target, "utf8").trim())
      errors.push(`Missing or empty ${target}`);
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else
  console.log(
    `PASS: Yorkstead contract; ${features.length} feature(s). Run application checks from docs/verification.md separately.`,
  );
