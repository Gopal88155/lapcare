const express = require("express");
const {
  register,
  login,
  privateController,
} = require("../controllers/authController");
const protect = require("../middlewares/authMiddlewares");

const router = express.Router();

// ACCESS : PUBLIC
// ROUTE : /api/user/
// METHOD : POST
// DESC. : REGISTER NEW USER
router.post("/register", register);

// ACCESS : PUBLIC
// ROUTE : /api/user/login
// METHOD : POST
// DESC. : REGISTER EXISTING USER
router.post("/login", login);

// ACCESS : PRIVATE
// ROUTE : /api/user/private
// METHOD : POST
// DESC. : REGISTER EXISTING USER FOR PRIVATE USE
router.post("/private", protect, privateController);

module.exports = router;
