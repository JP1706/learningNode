import Feedback from "../models/FeedbackModel.js";

// POST /counselor/feedback
const postFeedback = async (req, res) => {
  try {
    const { reportId, notes, recommendation, counselorId } = req.body;

    if (!reportId || !notes || !counselorId) {
      return res.status(400).json({ message: "Missing required fields: reportId, notes, or counselorId" });
    }

    const feedback = await Feedback.create({
      reportId,
      counselorId,
      notes,
      recommendation,
    });

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      data: feedback,
    });
  } catch (error) {
    console.error("Feedback submission error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /counselor/feedback/:reportId
const getFeedbackByReportId = async (req, res) => {
  try {
    const { reportId } = req.params;
    const feedback = await Feedback.findOne({ reportId });

    if (!feedback) {
      return res.status(404).json({ message: "Feedback not found for the given report" });
    }

    res.status(200).json({
      success: true,
      data: feedback,
    });
  } catch (error) {
    console.error("Feedback retrieval error:", error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export { getFeedbackByReportId, postFeedback };