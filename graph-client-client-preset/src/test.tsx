import { graphql } from "./gql";
import { useQuery } from "@apollo/client";

// TODO: Configure the ApolloClient with The Graph client as follow:
// import { GraphApolloLink } from '@graphprotocol/client-apollo'
// import * as GraphClient from '../.graphclient'

// const client = new ApolloClient({
//   link: new GraphApolloLink(GraphClient),
//   cache: new InMemoryCache(),
// })

const myQuery = graphql(/* GraphQL */ `
  query pairs {
    pair(id: "0x00004ee988665cdda9a1080d5792cecd16dc1220") {
      id
      token0 {
        id
        symbol
        name
      }
      token1 {
        id
        symbol
        name
      }
    }
  }
`);

async function main() {
  const result = useQuery(myQuery);
  result.data?.pair;
}

main();
