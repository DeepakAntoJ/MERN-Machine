const Employee = require('../models/employeeModel')

const mongoose = require('mongoose')


const getEmployees = async (req, res) => {
  const employee = await Employee.find({}).sort({createdAt: -1})

  res.status(200).json(employee)
}


const getEmployee = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such employee'})
  }

  const employee = await Employee.findById(id)

  if (!employee) {
    return res.status(404).json({error: 'No such employee'})
  }

  res.status(200).json(employee)
}


const createEmployee = async (req, res) => {
 const {Name , Email , Mobile_No, Designation ,  Gender , Course ,Img_Upload} = req.body
  
  try {
    const employee = await Employee.create({Name , Email , Mobile_No, Designation ,  Gender , Course ,Img_Upload})
    res.status(200).json(employee)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}


const deleteEmployee = async (req, res) => {
     const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such employee'})
  }

  const employee = await Employee.findOneAndDelete({_id: id})

  if(!employee) {
    return res.status(400).json({error: 'No such employee'})
  }

  res.status(200).json(employee)
}


const updateEmployee = async (req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such employee'})
  }

  const employee = await Employee.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!employee) {
    return res.status(400).json({error: 'No such employee'})
  }

  res.status(200).json(employee)
}

module.exports = {
 getEmployee,
 getEmployees,
 createEmployee,
 deleteEmployee,
 updateEmployee
}