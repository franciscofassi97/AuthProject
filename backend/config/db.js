const mongoose = require("mongoose");
require("dotenv").config();
const url = process.env.MONGO_DB;

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(url, connectionParams);
    console.log("Connected to database ");
  } catch (err) {
    console.log("Error connecting to DB", err);
    process.exit(1);
  }
};

module.exports = { connectDB };
