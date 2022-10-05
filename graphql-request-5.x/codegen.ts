import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: "src/*.ts",
  generates: {
    "types.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-query",
        "typescript-document-nodes",
      ],
      config: {
        skipTypename: true,
        typesPrefix: "Gql",
        fetcher: "graphql-request",
        namePrefix: "Dn",
      },
    },
  },
};

export default config;
