const express = require("express");
const router = express.Router();
const Review = require("./Model");
const asyncHandler = require("express-async-handler");

const getReview = asyncHandler(async (req, res) => {
  const review = await Review.find();

  res.status(200).json({
    message: {
      review,
    },
  });
});

const setReview = asyncHandler(async (req, res) => {
  const { name, content } = req.body;
  if (!name || !content) {
    return res.status(400).json({ message: "please input the required field" });
  }
  const review = await Review.create({
    name: name,
    content: content,
  });
  if (review) {
    res.status(200).json({
      message: {
        review,
      },
    });
  }
});

router.route("/").get(getReview);
router.route("/send").post(setReview);

module.exports = router;
