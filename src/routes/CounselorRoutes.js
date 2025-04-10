const express = require('express');
const router = express.Router();
const controller = require('../controllers/CounselorController');

// POST Routes
router.post('/counselor/feedback/habit', controller.addHabitFeedback);
router.post('/counselor/feedback/query', controller.addQueryFeedback);
router.post('/counselor/feedback/report', controller.addReportFeedback);

// GET Routes (for users to view feedback)
router.get('/feedback/habit/:habitId', controller.getHabitFeedback);
router.get('/feedback/query/:queryId', controller.getQueryFeedback);
router.get('/feedback/report/:reportId', controller.getReportFeedback);

// Update Routes
router.put('/feedback/habit/:id', controller.updateHabitFeedback);
router.put('/feedback/query/:id', controller.updateQueryFeedback);
router.put('/feedback/report/:id', controller.updateReportFeedback);

// Delete Routes
router.delete('/feedback/habit/:id', controller.deleteHabitFeedback);
router.delete('/feedback/query/:id', controller.deleteQueryFeedback);
router.delete('/feedback/report/:id', controller.deleteReportFeedback);

router.get('/feedback/habit/all', controller.getAllHabitFeedbacks);
router.get('/feedback/query/all', controller.getAllQueryFeedbacks);
router.get('/feedback/report/all', controller.getAllReportFeedbacks);

router.get('/user/feedback/habit/:userId', controller.getHabitFeedbackForUser);
router.get('/user/feedback/query/:userId', controller.getQueryFeedbackForUser);
router.get('/user/feedback/report/:userId', controller.getReportFeedbackForUser);

module.exports = router;