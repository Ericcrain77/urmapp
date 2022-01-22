const { Schema, model } = require("mongoose");

const stateSchema = new Schema(
  {
    state: {
      type: String,
      required: true,
    },
    visitedAt: {
      type: Date,
      default: Date.now,
    },
  }
  // {
  //   toJson: {
  //     getters: true,
  //   },
  // }
);

// const State = model("State", stateSchema);

// module.exports = State;
module.exports = stateSchema;
