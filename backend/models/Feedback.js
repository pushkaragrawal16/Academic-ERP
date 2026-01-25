const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  targetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // references faculty and admin
    required: [true, 'Target ID is required']
  },
  message: {
    type: String,
    required: [true, 'Feedback message is required'],
    trim: true
  },
  rating: {
    type: Number, // scale of 0 to 10
    required: [true, 'Rating is required'],
    min: 0,
    max: 10
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Feedback', feedbackSchema);