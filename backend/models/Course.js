const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Course name is required'],
    trim: true
  },
  code: {
    type: String,
    required: [true, 'Course code is required'],
    unique: true,
    uppercase: true,
    trim: true
  },
//reference to faculty
  facultyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: [true, 'Faculty assigned is required']
  },
// grading structure
  weightage: {
    type: Object, 
    default: {}
  },

//list of students
  studentsEnrolled: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);