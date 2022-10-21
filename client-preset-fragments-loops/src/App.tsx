import React from "react";
import { useQuery } from "@apollo/client";

import "./App.css";
import Film from "./Film";
import { graphql } from "./gql/gql";

const allFilmsWithVariablesQueryDocument = graphql(/* GraphQL */ `
  query allFilmsWithVariablesQuery($first: Int!) {
    allFilms(first: $first) {
      edges {
        node {
          id
          ...FilmItem
        }
      }
    }
  }
`);

function App() {
  const { data } = useQuery(allFilmsWithVariablesQueryDocument, {
    variables: { first: 10 },
  });
  return (
    <div className="App">
      {data && (
        <ul>
          {data.allFilms?.edges?.map(
            (e) => e?.node && <Film film={e?.node} key={`film-${e.node.id}`} />
          )}
        </ul>
      )}
    </div>
  );
}

export default App;
