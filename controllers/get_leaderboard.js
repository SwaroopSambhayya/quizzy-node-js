const User = require("../models/user");
const asyncHandler = require("express-async-handler");


const getLeaderboard = asyncHandler(async (req, res) => {
    try {
      const result = await User.find().sort({ "score" : "desc"})
      res.status(200).json(result);
    } catch (err) {
      res.status(500);
      throw new Error(err.message);
    }
  });
  
module.exports = getLeaderboard;