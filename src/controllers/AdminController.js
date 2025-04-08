// File: src/controllers/AdminController.js

const User = require("../models/UserModel"); // adjust path/naming as in your project
const Report = require("../models/ReportModel"); // ensure you have this model
const Habit = require("../models/HabitsModel");   // ensure you have this model
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// Admin Login Endpoint
const adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find the user by email
      const user = await User.findOne({ email }).populate("roleId");
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Check if the user is an admin
      if (!user.roleId || user.roleId.name !== "Admin") {
        return res.status(403).json({ message: "Access denied. Not an admin." });
      }
  
      // Check password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
  
      // If all good, return the user object (you can filter this further)
      res.status(200).json({
        message: "Admin login successful",
        user, // send full user object if required
      });
  
    } catch (err) {
      console.error("Admin login error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  };

// Get all non-admin users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ roleId: { $ne: "Admin" } });
    res.status(200).json({ message: "Users fetched successfully", data: users });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all reports
const getAllReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json({ message: "Reports fetched successfully", data: reports });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all habit entries
const getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find();
    res.status(200).json({ message: "Habits fetched successfully", data: habits });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  adminLogin,
  getAllUsers,
  getAllReports,
  getAllHabits
};
