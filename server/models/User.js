const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

// Make a schema for Users
const userSchema = new Schema(
  {
    // user must have a username
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    // user must have an email
    email: {
      type: String,
      required: true,
      unique: true,
      // RegEx borrowed from previous assignment
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    //   user must have a password with a certain length
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    states: [
      {
        type: Schema.Types.ObjectId,
        ref: "State",
      },
    ],
  },
  {
    toJson: {
      virtuals: true,
    },
  }
);

// set up a pre-save middlware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("statesVisited").get(function () {
  return this.states.length;
});

const User = model("User", userSchema);

module.exports = User;
