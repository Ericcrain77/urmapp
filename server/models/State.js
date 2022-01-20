const { Schema, model } = require("mongoose");

const stateSchema = new Schema(
  {
    State: {
      type: String,
      required: true,
    },
    visitedAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJson: {
      getters: true,
    },
  }
);

const State = model("State", stateSchema);

module.exports = State;
