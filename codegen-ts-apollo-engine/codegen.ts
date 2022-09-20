import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {},
  schema: 
    {
      "apollo-engine": {
        engine: {
          apiKey: "APOLLO_ENGINE_KEY_ID",
        },
        graph: "GRAPH_ID",
        variant: "current",
      },
    },
  ,
};
export default config;
