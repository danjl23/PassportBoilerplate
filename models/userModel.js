// Require
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pass: {
    type: String,
    select: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  ip: {
    type: String,
  },
  token: {
    type: String,
  },
  tokenExpires: {
    type: Date,
  },
  googleId: {
    type: String,
  },
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: "email",
  passwordField: "pass",
});

// Export Model
module.exports = mongoose.model("User", userSchema);
