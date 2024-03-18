require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const employeeRoutes = require('./routes/employees')

const app = express()

app.use(express.json())

app.use('/api/employees', employeeRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
    app.listen(process.env.PORT, () =>{
        console.log('listening on port' , process.env.PORT)
    })
    })
    .catch((err) => {
        console.log(err)
  }) 

