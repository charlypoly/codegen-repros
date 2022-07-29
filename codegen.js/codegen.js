module.exports = {
  overwrite: true,
  schema: "schema.graphql",
  documents: "src/**/*.tsx",
  hooks: {
    afterAllFileWrite: ["echo 'ok'"],
  },
  generates: {
    "src/types.ts": {
      plugins: [
        {
          add: {
            content: "/* eslint-disable */",
          },
        },
        "typescript",
        "typescript-operations",
        "typescript-react-query",
      ],
    },
    // "src/graphql/generated/fragment-matcher.ts": ["fragment-matcher"],
    // "./graphql.schema.json": {
    //   plugins: ["introspection"],
    // },
  },
};
