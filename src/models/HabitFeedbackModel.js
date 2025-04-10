const mongoose = require('mongoose');

const habitFeedbackSchema = new mongoose.Schema({
  habitId: { type: mongoose.Schema.Types.ObjectId, ref: 'habits', required: true },
  counselorId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  feedbackText: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('habit_feedbacks', habitFeedbackSchema);