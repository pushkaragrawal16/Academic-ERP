const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, 'Course ID is required']
  },
  batch: {
    type: String, // e.g., "2023-2024" or "2023"
    required: [true, 'Batch is required']
  },
  day: {
    type: String, // e.g., "Monday", "Tuesday"
    required: [true, 'Day is required']
  },
  startTime: {
    type: String, // e.g., "09:00 AM" or "14:30"
    required: [true, 'Start time is required']
  },
  roomNo: {
    type: String, // e.g., "Lab-1", "Room 302"
    required: [true, 'Room number is required']
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Timetable', timetableSchema);