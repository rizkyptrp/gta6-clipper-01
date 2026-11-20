// gta6-clipper-01: hand in the clip's YouTube address.
// Copies VIDEO.json from the repository root into the output directory.
// VIDEO.json names the public YouTube Short of the GTA 6 clip; the house
// reads the video itself from that address, so this copy is all the
// program has to do.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outDir, "VIDEO.json"));
