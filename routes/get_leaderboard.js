const express = require("express");
const getLeaderboard = require("../controllers/get_leaderboard");

const router = express.Router();

router.get("/getLeaderboard", getLeaderboard);

module.exports = router;