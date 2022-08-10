import * as Types from '../shared/__generated__/globalTypes';

export type getUsersQueryVariables = Types.Exact<{
  id: Array<Types.Scalars['ID']> | Types.Scalars['ID'];
}>;


export type getUsersQuery = { user: { __typename: 'User', id: string, username: string, email: string } };
