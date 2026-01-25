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
    uppercase: true, // Ensures codes like "CS101" are stored consistently
    trim: true
  },
  // Reference to the User Model (specifically a Faculty member)
  facultyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: [true, 'Faculty assigned is required']
  },
  // Weightage structure (e.g., { midSem: 30, endSem: 70 })
  weightage: {
    type: Object, 
    default: {}
  },
  // Rules like "Absolute Grading" or "Relative Grading"
  // Array of references to the User Model (specifically Students)
  studentsEnrolled: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Course', courseSchema);