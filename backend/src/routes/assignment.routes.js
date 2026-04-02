const express = require('express');
const router = express.Router();
const { authenticate } = require('../middleware/auth.middleware');
const { uploadAssignment, uploadSubmission } = require('../utils/cloudinary.utils');
const { createAssignment, deleteAssignment, getCourseAssignments, submitAssignment, getAssignmentSubmissions } = require('../controllers/assignment.controller');

router.use(authenticate);

router.post('/', uploadAssignment.single('file'), createAssignment);
router.delete('/:assignmentId', deleteAssignment);
router.get('/course/:courseId', getCourseAssignments);
router.post('/:assignmentId/submit', uploadSubmission.single('file'), submitAssignment);
router.get('/:assignmentId/submissions', getAssignmentSubmissions);

module.exports = router;
