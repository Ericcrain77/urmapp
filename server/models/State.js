const { Schema, model } = require("mongoose");

const stateSchema = new Schema({
  state: {
    type: String,
    required: true,
  },
  visitedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = stateSchema;
