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
  // An array of student's status
  records: [{
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', //reference to student
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

//prevent multiple entries
attendanceSchema.index({ courseId: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('Attendance', attendanceSchema);