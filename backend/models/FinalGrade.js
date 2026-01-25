const mongoose = require('mongoose');

const finalGradeSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', //reference student users
    required: [true, 'Student ID is required']
  },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Course ID is required']
  },
  finalPercentage: {
    type: Number,
    required: [true, 'Final Percentage is required'],
    min: 0,
    max: 100
  },
  assignedGrade: {
    type: String,
    required: [true, 'Assigned Grade is required'],
    trim: true
  }
}, {
  timestamps: true
});

//prevents multiple grades
finalGradeSchema.index({ studentId: 1, courseId: 1 }, { unique: true });

module.exports = mongoose.model('FinalGrade', finalGradeSchema);