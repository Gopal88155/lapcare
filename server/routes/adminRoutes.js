const express = require("express");
const {
  getUsers,
  getComplaints,
  getComments,
  updateComplaints,
  addComment,
} = require("../controllers/adminController");
const adminProtect = require("../middlewares/adminMiddlewares");

const router = express.Router();

router.get("/users", adminProtect, getUsers);
router.get("/complaints", adminProtect, getComplaints);
router.get("/comments", adminProtect, getComments);
router.post("/:cid", adminProtect, addComment);
router.put("/:cid", adminProtect, updateComplaints);

module.exports = router;
