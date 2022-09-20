import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: ["src/**/*.ts"],
  generates: {
    "types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
