const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for todo
const StorySchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The title field is required"],
    },
    contents: {
      type: String,
      required: [true, "The contents field is required"],
    },
    status: {
      type: String,
      required: [true, "The status field is required"],
    },
    user_id: {
      type: String,
      required: [true, "The user id field is required"],
    },
    votes: {
      type: Number,
    },
  },
  { timestamps: true }
);

// Create model for todo
const Story = mongoose.model("story", StorySchema);

module.exports = Story;
