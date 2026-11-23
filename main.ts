// One Word From Grandma — make.fun bounty
// u-0xkianno-one-word-from-grandma-f04bed16
//
// The entry is a single word: the word a grandma would text about AI.
// She does not say "artificial intelligence". She does not say "chatbot".
// She calls the thing on the grandkid's phone "that doohickey".
//
// "doohickey" — warm, a little baffled, instantly readable, and tied to
// gadgets and machines rather than any subject at all. It is the word a
// grandmother reaches for when she cannot remember (or refuses to learn)
// the proper name of a new contraption, and AI is the newest contraption
// of all. Funny in one word, no caption needed.
//
// This program writes exactly that one word — nothing else, no trailing
// newline — to /output/entry.txt, the path the bounty gate reads.

import { mkdirSync, writeFileSync } from "node:fs";

// The one word grandma would text about AI.
const WORD = "doohickey";

// The gate: UTF-8 text of 1 to 30 characters, not only white space.
// "doohickey" is 9 characters, so it passes with room to spare.
// Guard it at runtime so a future edit to the word cannot silently
// produce an invalid entry.
if ([...WORD].length < 1 || [...WORD].length > 30 || /^\s*$/.test(WORD)) {
  throw new Error("entry word fails the gate: must be 1-30 non-whitespace characters");
}

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, WORD, "utf8");
