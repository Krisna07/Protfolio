const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, require: [true, "Please enter name"] },

    content: { type: String, require: [true, "Please enter the content"] },
  },
  {
    timestamps: true,
  }
);

const ReviewModel = mongoose.model("Review", reviewSchema);
module.exports = ReviewModel;
