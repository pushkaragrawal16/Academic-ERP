const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Refers to the Student discriminator
    required: [true, 'Student ID is required']
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Refers to Faculty or Admin who handles the complaint
    default: null // Can be assigned later
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