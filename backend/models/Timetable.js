const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Course ID is required']
  },
  batch: {
    type: String, //ex 2024
    required: [true, 'Batch is required']
  },
  day: {
    type: String,
    required: [true, 'Day is required']
  },
  startTime: {
    type: String, // Military Time preferred
    required: [true, 'Start time is required']
  },
  roomNo: {
    type: String, 
    required: [true, 'Room number is required']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Timetable', timetableSchema);