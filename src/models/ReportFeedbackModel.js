const mongoose = require('mongoose');

const reportFeedbackSchema = new mongoose.Schema({
  reportId: { type: mongoose.Schema.Types.ObjectId, ref: 'reports', required: true },
  counselorId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  feedbackText: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('report_feedbacks', reportFeedbackSchema);