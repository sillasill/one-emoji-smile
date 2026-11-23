import { mkdirSync, writeFileSync } from "node:fs";

const EMOJI = "🤗";

const codePoints = [...EMOJI].length;
if (codePoints !== 1 || EMOJI.trim().length === 0) {
  throw new Error("entry must be exactly one non-blank emoji, got " + codePoints + " code points");
}
if (Buffer.byteLength(EMOJI, "utf8") > 8) {
  throw new Error("entry must be at most 8 characters for the gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
