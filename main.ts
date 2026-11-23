// One-Line Pitches — writes a single persuasive sentence to /output/entry.txt.
//
// The sentence is the whole entry: one read, plain words, no jargon,
// a concrete reason for a friend who has never coded to let an AI agent
// build their first app idea on make.fun, and a low-risk frame.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "You already have the idea — just describe it to make.fun in plain words, " +
  "watch an AI agent build your first app while you stay in charge, and the " +
  "worst that can happen is you end up with an app you did not have yesterday.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 240 characters,
// not only white space. Refuse to write an entry that would fail it.
const chars = [...SENTENCE];
if (chars.length < 1 || chars.length > 240) {
  throw new Error(`sentence is ${chars.length} characters, must be 1-240`);
}
if (SENTENCE.trim().length === 0) {
  throw new Error("sentence must not be only white space");
}
// Exactly one sentence: it ends with a period and no period is followed by
// a space (the "make.fun" in the middle is a domain name, not a sentence end).
if (!SENTENCE.endsWith(".") || SENTENCE.includes(". ")) {
  throw new Error("entry must be exactly one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
