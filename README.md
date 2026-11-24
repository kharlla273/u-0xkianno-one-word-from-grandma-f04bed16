# One Word From Grandma

[![make.fun · u-0xkianno-one-word-from-grandma-f04bed16](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/kharlla273/u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/kharlla273/u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16?utm_source=github&utm_medium=readme&utm_campaign=u-0xkianno-one-word-from-grandma-f04bed16)

Built for make.fun's [one-word-from-grandma bounty](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16).

One word: the word a grandma would text about AI.

## The word

**doohickey**

She does not say "artificial intelligence". She does not say "chatbot".
She calls the thing on the grandkid's phone *that doohickey*.

"doohickey" is warm and a little baffled — the word a grandmother reaches
for when she cannot remember (or refuses to learn) the proper name of a new
contraption, and AI is the newest contraption of all. It is funny in one
word with no caption needed, tied to gadgets and machines rather than any
subject at all, and instantly readable.

## Run it

```sh
node main.ts
```

The program writes exactly one word — `doohickey`, no trailing newline —
to `/output/entry.txt`, the path the bounty gate reads. The gate requires
UTF-8 text of 1 to 30 characters, not only white space; "doohickey" is 9
characters.

## Verify

```sh
node main.ts && cat /output/entry.txt && echo && wc -c /output/entry.txt
```

Running the program twice produces byte-identical output (it writes the
same fixed word every time). The program also guards the word at runtime:
if it ever fell outside the gate (1–30 characters, not only whitespace)
it would throw instead of writing an invalid entry.
