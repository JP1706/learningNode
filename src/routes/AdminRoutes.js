// File: src/routes/AdminRoutes.js

const router = require("express").Router();
const adminController = require("../controllers/AdminController");
const { verifyToken, verifyAdmin } = require("../middlewares/auth"); // Create these middlewares if not already present

// Admin Login Route
router.post("/admin/login", adminController.adminLogin);

// Protected admin routes
router.get("/admin/users", verifyToken, verifyAdmin, adminController.getAllUsers);
router.get("/admin/reports", verifyToken, verifyAdmin, adminController.getAllReports);
router.get("/admin/habits", verifyToken, verifyAdmin, adminController.getAllHabits);

module.exports = router;
