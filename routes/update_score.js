const express = require("express");
const updateScore = require("../controllers/update_score");

const router = express.Router();

router.put("/updateScore", updateScore);

module.exports = router;
