const mongoose = require('mongoose');


// used disciminator for role based divisions(ROLES)
const baseOptions = {
  discriminatorKey: 'role', 
  collection: 'users',      
  timestamps: true     
};
//base schema
const BaseUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  }
}, baseOptions);


const User = mongoose.model('User', BaseUserSchema);

//specific features

// Student Schema
const Student = User.discriminator('Student', new mongoose.Schema({
  enrollmentNo: {
    type: String,
    required: [true, 'Enrollment Number is required'],
    unique: true,
    trim: true
  },
  batchYear: {
    type: String,
    required: [true, 'Batch Year is required']
  },
  degree: {
    type: String,
    required: [true, 'Degree is required'] 
  }
}));

// Faculty schema
const Faculty = User.discriminator('Faculty', new mongoose.Schema({
  employee_id: {
    type: String,
    required: [true, 'Employee ID is required'],
    unique: true,
    trim: true
  },
  designation: {
    type: String,
    required: [true, 'Designation is required'] // Professor, HOD etc
  },
  subjects: {
    type: [String], // Array of subjects
    default: []
  },
  department_name: {
    type: String,
    required: [true, 'Department Name is required']
  }
}));

// Admin schema
const Admin = User.discriminator('Admin', new mongoose.Schema({
  adminLevel: {
    type: String, //dept_admin,head_admin,clerks etc
    default: 'Standard'
  },
  permissions: {
    type: [String], //["manage_users", "edit_courses","edit_timetable"]
    default: []
  }
}));

module.exports = {
  User,    // Base model
  Student,
  Faculty,
  Admin
};