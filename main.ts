// Famous Last Words: The Funniest Epitaph
// A one-line tombstone epitaph of famous last words.
// The line below is the entry: dying speech carved in stone.
// Deterministic: no input, no randomness, no network — the same
// single line is written to /output/entry.txt on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "Do not mourn me. Mourn the Wi-Fi password \u2014 it dies with me.";

// Write the entry exactly as-is: one line, no trailing newline,
// so the file is byte-identical to the epitaph every time.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, { encoding: "utf8", flag: "w" });
