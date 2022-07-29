const cli = require("@graphql-codegen/cli");

const codegenConfig = {
  schema: "schema.graphql",
  config: {
    namingConvention: "keep",
    // to allow camelCased query names
    scalars: {
      // We need these, otherwise these scalars are mapped to any
      // @TODO is there a way we can use scalars defined in packages/graphql-server/src/rootSchema.ts
      BigInt: "number",
      DateTime: "string",
      Date: "string",
      JSON: "Record<string, unknown>",
      JSONObject: "Record<string, unknown>",
      Time: "string",
    },
    omitOperationSuffix: true, // prevent type names being PetQueryQuery, RW generators already append Query/Mutation/etc
  },
  generates: {
    "/Users/tobbe/tmp/typegen/web/types/graphql.d.ts": {
      documents: "./src/**/!(*.d).{ts,tsx,js,jsx}",
      plugins: [
        { typescript: { enumsAsTypes: true } },
        "typescript-operations",
      ],
    },
  },
  silent: false,
  errorsOnly: true,
};
try {
  cli.generate(codegenConfig, true).then(
    (data) => {
      console.log("data", data);
    },
    () => Promise.resolve()
  );
} catch (e) {
  console.log(`Error: ${e}`);
}
