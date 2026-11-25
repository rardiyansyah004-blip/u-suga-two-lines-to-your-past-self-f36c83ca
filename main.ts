// Two Lines to Your Past Self — entry program (sharpened).
// Writes the warning to $MAKEFUN_OUTPUT_DIR/entry.txt (gate: 1-280 chars).
// makefun anchor 2f414a30cf99b35eb31ffcd06cc996a9a41d5546 round 34271946

import * as fs from "node:fs";
import * as path from "node:path";

const WARNING_TO_PAST_SELF =
  "Do not skip the backup on the night before the demo. That one skipped backup is why the demo ran on a laptop held together by a prayer and a cable that only worked if nobody breathed near it.";

function gateCheck(text: string, min: number, max: number): void {
  const n = text.trim().length;
  if (n < min || n > max) throw new Error(`entry must be ${min}-${max} chars, got ${n}`);
}

gateCheck(WARNING_TO_PAST_SELF, 1, 280);
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(dir, { recursive: true });
const dest = path.join(dir, "entry.txt");
fs.writeFileSync(dest, WARNING_TO_PAST_SELF.trim(), "utf8");
console.log(`wrote ${WARNING_TO_PAST_SELF.trim().length} chars to ${dest}`);
