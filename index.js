// const connectToMongoDB = require('./db')
// const cors =require('cors')
// const express = require('express')
import express from 'express'
import cors from 'cors'
import connectToMongoDB from './db.js'
import auth from './routes/auth.js';
import Customer from './routes/Customer.js';
import branch from './routes/branch.js';

    connectToMongoDB()
        .then(() => {
            // Code to execute after successful connection
        })
        .catch((error) => {
            // Handle connection error
        });


const app = express()
app.use(express.json())
const port = 5000

        // Available Routes
        app.use(cors())
        app.use('/api/auth',auth)
        app.use('/api/customer',Customer)
        app.use('/api/branch',branch)
       

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})