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
    _id: ID
    noteText: String
    writtenAt: String
    username: String
  }

  type State {
    _id: ID
    state: String
    visitedAt: String
  }

  type Auth {
    token: ID
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
    addState(state: String): User
    addNote(_id: ID!, noteText: String!): User
  }
`;

module.exports = typeDefs;
