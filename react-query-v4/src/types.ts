import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  user: User;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
};

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, username?: string | null, email: string } };


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
      TData = GetUserQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetUserQueryVariables,
      options?: Omit<UseQueryOptions<GetUserQuery, TError, TData>, 'queryKey' | 'queryFn' | 'initialData'>
    ) =>
    useQuery<GetUserQuery, TError, TData>(
      variables === undefined ? ['getUser'] : ['getUser', variables],
      fetcher<GetUserQuery, GetUserQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetUserDocument, variables),
      options
    );