const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // reference to student
    required: [true, 'Student ID is required']
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // refers to admin/faculty incharge of complaints
    default: null 
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Resolved', 'Rejected'],
    default: 'Pending'
  },
  description: {
    type: String,
    required: [true, 'Complaint description is required'],
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Complaint', complaintSchema);