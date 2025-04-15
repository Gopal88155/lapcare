const express = require("express");
const { getComments, addComment } = require("../controllers/commentController");
const protect = require("../middlewares/authMiddlewares");

const router = express.Router({ mergeParams: true });

router.get("/", protect, getComments);
router.post("/", protect, addComment);

module.exports = router;
