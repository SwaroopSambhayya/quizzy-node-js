const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const connectToMongo = require("./utils/connection");
const register = require("./routes/register_user");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", register);

connectToMongo(app);
