const mongoose = require('mongoose')

const Schema = mongoose.Schema

const employeeSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true
  },
    Mobile_No: {
    type: Number,
    required: true
  },
    Designation: {
    type: String,
    required: true
  },
    Gender: {
    type: String,
    required: true
  },
    Course: {
    type: String,
    required: true
  },
    Img_Upload: {
    type: String,
  }
}, { timestamps: true })

module.exports = mongoose.model('Employee', employeeSchema)