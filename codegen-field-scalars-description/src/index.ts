import gql from "graphql-tag";

gql`
  query getUser {
    user(id: 1) {
      id
      username
      email
    }
  }
`;
