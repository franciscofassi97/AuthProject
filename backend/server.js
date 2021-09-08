const express = require("express");
const { connectDB } = require("./config/db");
require("dotenv").config();
const cors = require("cors");

const usersRoutes = require("./routes/useresRoutes");

const commentsRoute = require("./routes/CommentRoutes");

const app = express();

connectDB();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT;

app.use("/api/users", usersRoutes);

app.use("/api/comments", commentsRoute);

app.listen(PORT, () => {
  console.log(`Server is runing at http://localhost:${PORT}`);
});
