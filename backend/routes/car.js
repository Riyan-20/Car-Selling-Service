const express = require("express");
const { submitCar, viewSubmissions } = require("../controllers/carController");
const { verifyToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/submit", verifyToken, submitCar);
router.get("/view-submissions", verifyToken, viewSubmissions);

module.exports = router;
