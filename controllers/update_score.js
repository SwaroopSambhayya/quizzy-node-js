const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const updateScore = asyncHandler(async (req, res) => {
  try {
    const user = await User.findOne({userId:req.body.userId});
    user.score += req.body.score;
    await user.save();
    res.status(200).json({message:"Score updated"});
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

module.exports = updateScore;