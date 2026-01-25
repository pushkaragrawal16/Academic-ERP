const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  targetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Refers to Faculty/Admin being rated
    required: [true, 'Target ID is required']
  },
  message: {
    type: String,
    required: [true, 'Feedback message is required'],
    trim: true
  },
  rating: {
    type: Number, // e.g., Scale of 1 to 5
    required: [true, 'Rating is required'],
    min: 1,
    max: 5
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Feedback', feedbackSchema);