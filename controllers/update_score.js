const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const updateScore = asyncHandler(async (req, res) => {
  try {
    const result = await User.updateOne({userId:req.body.userId},{ score:req.body.score});
    res.status(200).json(result);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

module.exports = updateScore;