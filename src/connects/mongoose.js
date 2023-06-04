const mongoose = require("mongoose");
require("dotenv").config();

const mongodb = process.env.MONGO_DB || "";

mongoose
  .connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB_Server");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB", error);
  });

module.exports = mongoose;
