const { gql } = require("apollo-server-express");

// change User return in mutations to Auth in future
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    statesVisited: Int
    states: [State]
    notes: [Note]
  }

  type Note {
    noteId: ID
    noteText: String
    writtenAt: String
    username: String
  }

  type State {
    stateId: ID
    state: String
    visitedAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    States(username: String!): [State]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addState(state: String!): State
    addNote(_id: ID!, noteText: String!): User
  }
`;

module.exports = typeDefs;
