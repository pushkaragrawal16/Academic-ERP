const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  assignmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Assignment', required: [true, 'Assignment ID is required'] },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: [true, 'Student ID is required'] },
  cloudinaryUrl: { type: String, required: [true, 'Submission file is required'], trim: true },
  cloudinaryPublicId: { type: String, required: true },
  expiresAt: { type: Date, default: () => new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) }
}, { timestamps: true });

submissionSchema.index({ assignmentId: 1, studentId: 1 }, { unique: true });
submissionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model('Submission', submissionSchema);
