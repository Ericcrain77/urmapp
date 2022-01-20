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
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    States(username: String!): [State]
  }

  type Mutation {
    login(email: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
    addState(state: String!): State
    addNote(userId: ID!, noteText: String!): User
  }
`;

module.exports = typeDefs;
