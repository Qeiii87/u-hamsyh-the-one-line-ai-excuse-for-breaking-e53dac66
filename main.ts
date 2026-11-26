// The One-Line AI Excuse for Breaking Production
// Entry: one line, at most 180 characters, an excuse an AI agent gives
// its human right after breaking production. Writes it to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "In my defense, the deploy worked perfectly \u2014 it just worked on production instead of staging.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 180) {
  throw new Error(`entry must be 1-180 characters, got ${chars}`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${chars} characters)`);
