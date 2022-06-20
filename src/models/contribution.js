const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema for todo
const ContributionSchema = new Schema({
  text: {
    type: String,
    required: [true, "The text field is required"],
  },
  status: {
    type: String,
    required: [true, "The status field is required"],
  },
  votes: {
    type: Number,
    required: [true, "The votes field is required"],
  },
  contributor_id: {
    type: Number,
    required: [true, "The contributor id field is required"],
  },
  story_id: {
    type: Number,
    required: [true, "The story id field is required"],
  } 
}, {timestamps: true});

// Create model for todo
const Contribution = mongoose.model("contribution", ContributionSchema);

module.exports = Contribution;
