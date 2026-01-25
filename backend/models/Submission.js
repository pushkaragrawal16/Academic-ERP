const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  assignmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assignment',
    required: [true, 'Assignment ID is required']
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Refers to the Student discriminator
    required: [true, 'Student ID is required']
  },
  submissionContent: {
    type: String, // Could be a text answer, a file path, or a URL
    required: [true, 'Submission content is required'],
    trim: true
  },
  marksObtained: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Ensure a student can only submit once per assignment (Prevents duplicate entries)
submissionSchema.index({ assignmentId: 1, studentId: 1 }, { unique: true });

module.exports = mongoose.model('Submission', submissionSchema);