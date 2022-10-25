/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  fragment EpisodeFragment on Episode {\n    id\n    title\n    show {\n      id\n      title\n    }\n    releaseDate\n    __typename\n  }\n": types.EpisodeFragmentFragmentDoc,
    "\n  fragment MovieFragment on Movie {\n    id\n    title\n    collection {\n      id\n    }\n    releaseDate\n    __typename\n  }\n": types.MovieFragmentFragmentDoc,
    "\n  fragment DetailsFragment on Video {\n    title\n    __typename\n    ...MovieFragment\n    ...EpisodeFragment\n  }\n": types.DetailsFragmentFragmentDoc,
    "\n  query Video($id: ID!) {\n    video(id: $id) {\n      ...DetailsFragment\n      __typename\n    }\n  }\n": types.VideoDocument,
};

export function graphql(source: "\n  fragment EpisodeFragment on Episode {\n    id\n    title\n    show {\n      id\n      title\n    }\n    releaseDate\n    __typename\n  }\n"): (typeof documents)["\n  fragment EpisodeFragment on Episode {\n    id\n    title\n    show {\n      id\n      title\n    }\n    releaseDate\n    __typename\n  }\n"];
export function graphql(source: "\n  fragment MovieFragment on Movie {\n    id\n    title\n    collection {\n      id\n    }\n    releaseDate\n    __typename\n  }\n"): (typeof documents)["\n  fragment MovieFragment on Movie {\n    id\n    title\n    collection {\n      id\n    }\n    releaseDate\n    __typename\n  }\n"];
export function graphql(source: "\n  fragment DetailsFragment on Video {\n    title\n    __typename\n    ...MovieFragment\n    ...EpisodeFragment\n  }\n"): (typeof documents)["\n  fragment DetailsFragment on Video {\n    title\n    __typename\n    ...MovieFragment\n    ...EpisodeFragment\n  }\n"];
export function graphql(source: "\n  query Video($id: ID!) {\n    video(id: $id) {\n      ...DetailsFragment\n      __typename\n    }\n  }\n"): (typeof documents)["\n  query Video($id: ID!) {\n    video(id: $id) {\n      ...DetailsFragment\n      __typename\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;