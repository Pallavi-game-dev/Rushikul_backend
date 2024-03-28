const connectToMongoDB = require('./db')
const express = require('express')

    connectToMongoDB()
        .then(() => {
            // Code to execute after successful connection
        })
        .catch((error) => {
            // Handle connection error
        });


const app = express()
const port = 3000
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})