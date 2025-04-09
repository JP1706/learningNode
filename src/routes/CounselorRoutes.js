// import express from "express";
// import { postFeedback, getFeedbackByReportId } from "../controllers/CounselorController.js";


// const router = express.Router();

var router = require("express").Router()
var counselorController = require("../controllers/CounselorController")

// Submit feedback (standard API)
router.post('/feedback', counselorController.postFeedback);


// Get feedback for a specific report
router.get('/feedback/:reportId', counselorController.getFeedbackByReportId);

module.exports = router;
