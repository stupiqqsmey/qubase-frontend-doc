import { readFile, writeFile } from "node:fs/promises";

const schemaPath = new URL(
  "../node_modules/nextra-theme-docs/dist/schemas.js",
  import.meta.url,
);
const requiredChildren = "  children: reactNode,";
const optionalChildren = "  children: reactNode.optional(),";

const source = await readFile(schemaPath, "utf8");

if (source.includes(optionalChildren)) {
  process.exit(0);
}

if (!source.includes(requiredChildren)) {
  throw new Error(
    "The installed Nextra layout schema changed; review the local compatibility patch.",
  );
}

await writeFile(
  schemaPath,
  source.replace(requiredChildren, optionalChildren),
  "utf8",
);
