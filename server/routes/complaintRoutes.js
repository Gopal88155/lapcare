const express = require("express");
const protect = require("../middlewares/authMiddlewares");
const {
  getComplaints,
  getComplaint,
  raiseComplaints,
  updateComplaint,
} = require("../controllers/complaintController");

const router = express.Router();

// Get Complaints
router.get("/", protect, getComplaints);

// Get Complaint
router.get("/:id", protect, getComplaint);

// Raise Complaints
router.post("/", protect, raiseComplaints);

// Update Complaints
router.put("/:id", protect, updateComplaint);

// Comment Route
router.use("/:id/comment" , require("./commentRoutes"))

module.exports = router;
