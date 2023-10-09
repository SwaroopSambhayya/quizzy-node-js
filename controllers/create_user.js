const User = require("../models/user");
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

module.exports = createUser;
