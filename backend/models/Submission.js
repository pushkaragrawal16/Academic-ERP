const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  assignmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Assignment',
    required: [true, 'Assignment ID is required']
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // refrences to student descriminator
    required: [true, 'Student ID is required']
  },
  submissionContent: {
    type: String, // a file path,URL
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

//prevents multiple submission
submissionSchema.index({ assignmentId: 1, studentId: 1 }, { unique: true });

module.exports = mongoose.model('Submission', submissionSchema);