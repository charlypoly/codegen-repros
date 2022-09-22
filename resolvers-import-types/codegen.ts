import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: ["src/**/*.ts"],
  generates: {
    "types.ts": {
      plugins: ["typescript"],
    },
    "resolvers-types.ts": {
      preset: "import-types-preset",
      presetConfig: {
        typesPath: "./types.js", // .js for ESM support
      },
      plugins: ["typescript-resolvers"],
    },
  },
};

export default config;
