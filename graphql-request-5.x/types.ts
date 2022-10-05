import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type GqlQuery = {
  user: GqlUser;
};


export type GqlQueryUserArgs = {
  id: Scalars['ID'];
};

export type GqlUser = {
  email: Scalars['String'];
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
};

export type GqlGetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GqlGetUserQuery = { user: { id: string, username?: string | null, email: string } };


export const GetUserDocument = `
    query getUser {
  user(id: 1) {
    id
    username
    email
  }
}
    `;
export const useGetUserQuery = <
      TData = GqlGetUserQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GqlGetUserQueryVariables,
      options?: UseQueryOptions<GqlGetUserQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GqlGetUserQuery, TError, TData>(
      variables === undefined ? ['getUser'] : ['getUser', variables],
      fetcher<GqlGetUserQuery, GqlGetUserQueryVariables>(client, GetUserDocument, variables, headers),
      options
    );

export const DngetUser = gql`
    query getUser {
  user(id: 1) {
    id
    username
    email
  }
}
    `;