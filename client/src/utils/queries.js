import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      states {
        _id
        state
        visitedAt
      }
      statesVisited
    }
  }
`;
