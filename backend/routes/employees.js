const express = require('express')
const {
    getEmployee,
    getEmployees,
    createEmployee,
    deleteEmployee,
    updateEmployee
} = require('../controllers/employeeController')
const router = express.Router()


router.get('/', getEmployees)


router.get('/:id', getEmployee)


router.post('/', createEmployee)


router.delete('/:id', deleteEmployee)


router.patch('/:id', updateEmployee)

module.exports = router