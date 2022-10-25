/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useQuery } from "@apollo/client";

import "./App.css";
import Video from "./Video";
import { graphql } from "./gql/gql";
import { getFragmentData } from "./gql";

const episodeFragment = graphql(/* GraphQL */ `
  fragment EpisodeFragment on Episode {
    id
    title
    show {
      id
      title
    }
    releaseDate
    __typename
  }
`);
const movieFragment = graphql(/* GraphQL */ `
  fragment MovieFragment on Movie {
    id
    title
    collection {
      id
    }
    releaseDate
    __typename
  }
`);

const videoDetailsFragment = graphql(/* GraphQL */ `
  fragment DetailsFragment on Video {
    title
    __typename
    ...MovieFragment
    ...EpisodeFragment
  }
`);

const videoQueryDocument = graphql(/* GraphQL */ `
  query Video($id: ID!) {
    video(id: $id) {
      ...DetailsFragment
      __typename
    }
  }
`);

function App() {
  const { data } = useQuery(videoQueryDocument, {
    variables: { id: "10" },
  });

  const videoDetail = getFragmentData(videoDetailsFragment, data?.video);

  const movie =
    videoDetail && videoDetail.__typename === "Movie"
      ? getFragmentData(movieFragment, videoDetail)
      : null;
  //    ^?

  return (
    <div className="App">
      {data && (
        <ul>
          {/* {data.allFilms?.edges?.map(
            (e, i) => e?.node && <Video film={e?.node} key={`film-${i}`} />
          )} */}
        </ul>
      )}
    </div>
  );
}

export default App;
