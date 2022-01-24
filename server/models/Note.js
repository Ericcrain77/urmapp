const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    // what they thought of the state/something they did there
    noteText: {
      type: String,
      required: "You need to say something!",
      minlength: 1,
      maxlength: 300,
    },
    writtenAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = noteSchema;
