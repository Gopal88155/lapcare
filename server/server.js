const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db_config");
const errorHandler = require("./middlewares/errorHandler");
require("dotenv").config();

const app = express();

// DB CONNECTION
connectDB();

const cors = require("cors");
app.use(cors({ allowOrigin: "*" }));

// Body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

// main Routes
app.get("/", (req, res) => {
  res.json({
    msg: "LAPCARE API RUNNING...",
  });
});

// User Routes
app.use("/api/user", require("./routes/authRoutes"));

// Compaint Routes
app.use("/api/complaint", require("./routes/complaintRoutes"));

// Admin Routes
app.use("/api/admin", require("./routes/adminRoutes"));

// errorHandler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING AT : ${PORT}`.bgBlue.black);
});
