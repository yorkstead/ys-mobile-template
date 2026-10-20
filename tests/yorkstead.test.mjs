import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
function fixture(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "yorkstead-"));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  for (const file of [
    "AGENTS.md",
    "CLAUDE.md",
    "GEMINI.md",
    ".codex",
    ".github",
    ".specify",
    ".agents/skills",
    "docs",
    "specs",
    "scripts",
    "package.json",
  ]) {
    fs.mkdirSync(path.dirname(path.join(dir, file)), { recursive: true });
    fs.cpSync(path.join(root, file), path.join(dir, file), { recursive: true });
  }
  return dir;
}
function run(dir, script, ...args) {
  return spawnSync(
    process.execPath,
    [path.join(root, "scripts", script), ...args],
    { cwd: dir, encoding: "utf8" },
  );
}
test("contract check rejects missing required guidance and incomplete features", (t) => {
  const dir = fixture(t);
  assert.equal(run(dir, "yorkstead-check.mjs").status, 0);
  fs.unlinkSync(path.join(dir, "CLAUDE.md"));
  assert.notEqual(run(dir, "yorkstead-check.mjs").status, 0);
  fs.writeFileSync(path.join(dir, "CLAUDE.md"), "Read AGENTS.md");
  fs.mkdirSync(path.join(dir, "specs/099-incomplete"));
  assert.match(run(dir, "yorkstead-check.mjs").stderr, /Missing or empty/);
});
test("initialization creates a complete draft, preserves edits, and prevents traversal", (t) => {
  const dir = fixture(t);
  assert.equal(run(dir, "yorkstead-init.mjs", "098-new-feature").status, 0);
  const spec = path.join(dir, "specs/098-new-feature/spec.md");
  fs.writeFileSync(spec, "User work");
  assert.equal(run(dir, "yorkstead-init.mjs", "098-new-feature").status, 0);
  assert.equal(fs.readFileSync(spec, "utf8"), "User work");
  assert.notEqual(run(dir, "yorkstead-init.mjs", "../escape").status, 0);
  assert.equal(run(dir, "yorkstead-check.mjs").status, 0);
});
