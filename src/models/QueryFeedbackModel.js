const mongoose = require('mongoose');

const queryFeedbackSchema = new mongoose.Schema({
  queryId: { type: mongoose.Schema.Types.ObjectId, ref: 'queries', required: true },
  counselorId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  feedbackText: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('query_feedbacks', queryFeedbackSchema);