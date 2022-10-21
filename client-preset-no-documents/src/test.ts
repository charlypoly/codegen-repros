import { graphql } from "./graphql/gql";

const doc = graphql(/* GraphQL */ `
  query {
    user(id: "1") {
      id
    }
  }
`);
