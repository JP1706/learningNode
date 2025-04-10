const HabitFeedback = require('../models/HabitFeedbackModel');
const ReportFeedback = require('../models/ReportFeedbackModel');
const QueryFeedback = require('../models/QueryFeedbackModel');

// ========== HABIT FEEDBACK ==========

// POST /counselor/feedback/habit
const addHabitFeedback = async (req, res) => {
  try {
    const feedback = await HabitFeedback.create(req.body);
    res.status(201).json({ message: "Habit feedback submitted", data: feedback });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /feedback/habit/:habitId
const getHabitFeedback = async (req, res) => {
  try {
    const feedback = await HabitFeedback.find({ habitId: req.params.habitId });
    res.status(200).json({ message: "Habit feedback fetched", data: feedback });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateHabitFeedback = async (req, res) => {
    try {
      const updated = await HabitFeedback.findByIdAndUpdate(req.params.id, { feedbackText: req.body.feedbackText }, { new: true });
      res.status(200).json({ message: "Habit feedback updated", data: updated });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  const deleteHabitFeedback = async (req, res) => {
    try {
      await HabitFeedback.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Habit feedback deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// ========== QUERY FEEDBACK ==========

// POST /counselor/feedback/query
const addQueryFeedback = async (req, res) => {
  try {
    const feedback = await QueryFeedback.create(req.body);
    res.status(201).json({ message: "Query feedback submitted", data: feedback });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /feedback/query/:queryId
const getQueryFeedback = async (req, res) => {
  try {
    const feedback = await QueryFeedback.find({ queryId: req.params.queryId });
    res.status(200).json({ message: "Query feedback fetched", data: feedback });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateQueryFeedback = async (req, res) => {
    try {
      const updated = await QueryFeedback.findByIdAndUpdate(req.params.id, { feedbackText: req.body.feedbackText }, { new: true });
      res.status(200).json({ message: "Query feedback updated", data: updated });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  const deleteQueryFeedback = async (req, res) => {
    try {
      await QueryFeedback.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Query feedback deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

// ========== REPORT FEEDBACK ==========

// POST /counselor/feedback/report
const addReportFeedback = async (req, res) => {
  try {
    const feedback = await ReportFeedback.create(req.body);
    res.status(201).json({ message: "Report feedback submitted", data: feedback });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET /feedback/report/:reportId
const getReportFeedback = async (req, res) => {
  try {
    const feedback = await ReportFeedback.find({ reportId: req.params.reportId });
    res.status(200).json({ message: "Report feedback fetched", data: feedback });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateReportFeedback = async (req, res) => {
    try {
      const updated = await ReportFeedback.findByIdAndUpdate(req.params.id, { feedbackText: req.body.feedbackText }, { new: true });
      res.status(200).json({ message: "Report feedback updated", data: updated });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  const deleteReportFeedback = async (req, res) => {
    try {
      await ReportFeedback.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Report feedback deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  // In CounselorFeedbackController.js

const getAllHabitFeedbacks = async (req, res) => {
    const data = await HabitFeedback.find();
    res.status(200).json({ data });
  };
  
  const getAllQueryFeedbacks = async (req, res) => {
    const data = await QueryFeedback.find();
    res.status(200).json({ data });
  };
  
  const getAllReportFeedbacks = async (req, res) => {
    const data = await ReportFeedback.find();
    res.status(200).json({ data });
  };

const getHabitFeedbackForUser = async (req, res) => {
  try {
    const feedbacks = await HabitFeedback.find({ userId: req.params.userId });
    res.status(200).json({ message: "User habit feedback fetched", data: feedbacks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getQueryFeedbackForUser = async (req, res) => {
  try {
    const feedbacks = await QueryFeedback.find({ userId: req.params.userId });
    res.status(200).json({ message: "User query feedback fetched", data: feedbacks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getReportFeedbackForUser = async (req, res) => {
  try {
    const feedbacks = await ReportFeedback.find({ userId: req.params.userId });
    res.status(200).json({ message: "User report feedback fetched", data: feedbacks });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  // Habit
  addHabitFeedback,
  getHabitFeedback,
  updateHabitFeedback,
  deleteHabitFeedback,
  getAllHabitFeedbacks,

  // Query
  addQueryFeedback,
  getQueryFeedback,
  updateQueryFeedback,
  deleteQueryFeedback,
  getAllQueryFeedbacks,

  // Report
  addReportFeedback,
  getReportFeedback,
  updateReportFeedback,
  deleteReportFeedback,
  getAllReportFeedbacks,
  getHabitFeedbackForUser,
  getQueryFeedbackForUser,
  getReportFeedbackForUser,
};