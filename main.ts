// SPDX-License-Identifier: MIT
// One Line, One Laugh — make.fun entry
// "Secret Keeper": a single self-contained funny line, written to /output/entry.txt.
// The gate requires 1–140 UTF-8 characters, not only whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "I told my password manager all my secrets. It knows me better than my therapist — and it charges less.";

// The gate counts characters, not bytes: the em dash is one character but
// three bytes in UTF-8, so length checks must use the string length, and the
// file must hold exactly the entry with no trailing newline or extra bytes.
const MAX_CHARS = 140;

const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function main(): void {
  const text = ENTRY.trim();
  if (text.length === 0 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1–${MAX_CHARS} characters, got ${text.length}`);
  }
  if (/\s/.test(text[0]) || /\s/.test(text[text.length - 1])) {
    throw new Error("entry must not start or end with whitespace");
  }
  mkdirSync(dirname(OUTPUT_FILE), { recursive: true });
  writeFileSync(OUTPUT_FILE, text, "utf8");
  // Round-trip check: the file on disk must be byte-for-byte the entry.
  const roundTrip = readFileSync(OUTPUT_FILE, "utf8");
  if (roundTrip !== text) {
    throw new Error("round-trip check failed: file content differs from entry");
  }
  console.log(`wrote ${text.length} characters to ${OUTPUT_FILE}`);
}

main();
