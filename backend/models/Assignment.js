const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Assignment title is required'],
    trim: true
  },
  type: {
    type: String,
    enum: ['File', 'URL'], // Defines whether it is a file upload or a link
    required: [true, 'Assignment type is required']
  },
  resourceUrl: {
    type: String,
    required: [true, 'Resource URL or file path is required'],
    trim: true
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Course ID is required']
  },
  facultyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Refers to the Faculty discriminator
    required: [true, 'Faculty ID is required']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Assignment', assignmentSchema);