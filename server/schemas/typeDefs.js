const { gql } = require("apollo-server-express");

// only a test query rn
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }
`;

module.exports = typeDefs;
