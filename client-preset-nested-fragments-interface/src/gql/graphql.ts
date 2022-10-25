/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Collection = {
  __typename?: 'Collection';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Episode = Video & {
  __typename?: 'Episode';
  id: Scalars['ID'];
  releaseDate: Scalars['Date'];
  show: Show;
  title: Scalars['String'];
};

export type Movie = Video & {
  __typename?: 'Movie';
  collection?: Maybe<Collection>;
  id: Scalars['ID'];
  releaseDate: Scalars['Date'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  video: Video;
};


export type QueryVideoArgs = {
  id: Scalars['ID'];
};

export type Show = {
  __typename?: 'Show';
  id: Scalars['ID'];
  releaseDate: Scalars['Date'];
  title: Scalars['String'];
};

export type Video = {
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type EpisodeFragmentFragment = { __typename: 'Episode', id: string, title: string, releaseDate: any, show: { __typename?: 'Show', id: string, title: string } } & { ' $fragmentName': 'EpisodeFragmentFragment' };

export type MovieFragmentFragment = { __typename: 'Movie', id: string, title: string, releaseDate: any, collection?: { __typename?: 'Collection', id: string } | null } & { ' $fragmentName': 'MovieFragmentFragment' };

type DetailsFragment_Episode_Fragment = (
  { __typename: 'Episode', title: string }
  & { ' $fragmentRefs': { 'EpisodeFragmentFragment': EpisodeFragmentFragment } }
) & { ' $fragmentName': 'DetailsFragment_Episode_Fragment' };

type DetailsFragment_Movie_Fragment = (
  { __typename: 'Movie', title: string }
  & { ' $fragmentRefs': { 'MovieFragmentFragment': MovieFragmentFragment } }
) & { ' $fragmentName': 'DetailsFragment_Movie_Fragment' };

export type DetailsFragmentFragment = DetailsFragment_Episode_Fragment | DetailsFragment_Movie_Fragment;

export type VideoQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type VideoQuery = { __typename?: 'Query', video: (
    { __typename: 'Episode' }
    & { ' $fragmentRefs': { 'DetailsFragment_Episode_Fragment': DetailsFragment_Episode_Fragment } }
  ) | (
    { __typename: 'Movie' }
    & { ' $fragmentRefs': { 'DetailsFragment_Movie_Fragment': DetailsFragment_Movie_Fragment } }
  ) };

export const MovieFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MovieFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Movie"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<MovieFragmentFragment, unknown>;
export const EpisodeFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EpisodeFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Episode"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"show"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"releaseDate"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]} as unknown as DocumentNode<EpisodeFragmentFragment, unknown>;
export const DetailsFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DetailsFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Video"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MovieFragment"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"EpisodeFragment"}}]}},...MovieFragmentFragmentDoc.definitions,...EpisodeFragmentFragmentDoc.definitions]} as unknown as DocumentNode<DetailsFragmentFragment, unknown>;
export const VideoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Video"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DetailsFragment"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}}]}}]}},...DetailsFragmentFragmentDoc.definitions]} as unknown as DocumentNode<VideoQuery, VideoQueryVariables>;