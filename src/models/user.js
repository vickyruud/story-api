const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for todo
const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "The username field is required"],
  },
  email: {
    type: String,
    required: [true, "The email field is required"],
  },
  password: {
    type: String,
    required: [true, "The password field is required"],
  },
}, {timestamps: true});

// Create model for todo
const User = mongoose.model("user", UserSchema);

module.exports = User;
