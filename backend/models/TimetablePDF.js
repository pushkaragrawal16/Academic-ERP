const mongoose = require('mongoose');

const timetablePDFSchema = new mongoose.Schema({
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  cloudinaryUrl: { type: String, required: true },
  cloudinaryPublicId: { type: String, required: true },
  originalName: { type: String, trim: true }
}, { timestamps: true });

module.exports = mongoose.model('TimetablePDF', timetablePDFSchema);
