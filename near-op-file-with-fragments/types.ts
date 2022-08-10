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
};

export type Query = {
  __typename: 'Query';
  user: User;
  users: Array<User>;
};


export type QueryUserArgs = {
  id: Array<Scalars['ID']>;
};


export type QueryUsersArgs = {
  input: UsersInput;
};

export type User = {
  __typename: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  username: Scalars['String'];
};

export type UsersInput = {
  ids: Array<Scalars['ID']>;
};

export type GetUsersQueryVariables = Exact<{
  id: Array<Scalars['ID']> | Scalars['ID'];
}>;


export type GetUsersQuery = { __typename: 'Query', user: { __typename: 'User', id: string, username: string, email: string } };
