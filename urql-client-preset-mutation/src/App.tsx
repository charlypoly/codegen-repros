import React from "react";
import "./App.css";
import { graphql } from "./gql/gql";
import { useMutation } from "urql";

const updateUserDocument = graphql(/* GraphQL */ `
  mutation updateUser($user: UserInput!) {
    updateUser(user: $user) {
      id
      username
      email
    }
  }
`);

function App() {
  const [{ data }, updateUser] = useMutation(updateUserDocument);

  // `data` is typed!
  console.log(data?.updateUser);

  // variables are typed too
  updateUser({
    user: {
      id: "1",
      email: "",
    },
  });

  return <div className="App"></div>;
}

export default App;
