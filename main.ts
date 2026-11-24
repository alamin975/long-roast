import { mkdirSync, writeFileSync } from "node:fs";

// The line below must stay byte-for-byte: a single sentence, no trailing newline.
const LINE =
  "The committee spent three sessions debating the file format, formed a subcommittee to name the subcommittee, and still cannot open the PDF.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
