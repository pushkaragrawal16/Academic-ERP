const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Course ID is required']
  },
  date: {
    type: Date,
    required: [true, 'Date is required']
  },
  // An array of objects, where each object represents a student's status
  records: [{
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Refers to the Student discriminator model
      required: true
    },
    status: {
      type: String,
      enum: ['Present', 'Absent'],
      default: 'Absent'
    }
  }]
}, {
  timestamps: true
});

// Optional: Prevent duplicate attendance sheets for the same course on the same day
attendanceSchema.index({ courseId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('Attendance', attendanceSchema);