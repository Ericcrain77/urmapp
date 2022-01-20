const { AuthenticationError } = require("apollo-server-express");
const { User, State } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v - password")
        .populate("statesVisited");
    },
  },
};

module.exports = resolvers;
