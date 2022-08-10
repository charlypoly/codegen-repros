import React from "react";
import gql from "graphql-tag";
import { UserViewFragment } from "./User.graphql.interface";

gql`
  fragment UserView on User {
    id
    username
    email
  }
`;

export const User = ({}: { user: UserViewFragment }) => {};
