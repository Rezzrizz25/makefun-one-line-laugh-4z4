# Secret Keeper

[![make.fun](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![rank](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/Rezzrizz25/makefun-one-line-laugh-4z4/rank.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)
[![reward](https://make.fun/badge/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a/Rezzrizz25/makefun-one-line-laugh-4z4/reward.svg)](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a)

A single funny line for the [One Line, One Laugh](https://make.fun/bounty/u-4z4ghtbwm1fn7mibrqum4bxgfghhgqzriyhd8v3-one-line-0be61e5a) bounty on [make.fun](https://make.fun/r/v4m1pbv2).

## The line

> I told my password manager all my secrets. It knows me better than my therapist — and it charges less.

102 characters. One breath, one twist, one punchline.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt`, validating it first: 1–140 characters, no leading or trailing whitespace, and a round-trip check that the file on disk is byte-for-byte the entry.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
