const { default: mongoose } = require("mongoose");
require("dotenv").config();

const connectToMongo = (app) => {
  const PORT = process.env.PORT || 3000;
  const MONGO_URL = process.env.MONGO_URL;
  mongoose.set("strictQuery", false);
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("Connected to mongodb");
      app.listen(PORT, () => {
        console.log("Node API is runing on port " + PORT);
      });
    })
    .catch((err) => console.log(err));
};

module.exports = connectToMongo;
