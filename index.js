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

        // Available Routes
        app.use('/api/auth',require('./routes/auth'))
        app.use('/api/customer',require('./routes/Customer'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})