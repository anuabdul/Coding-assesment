// Configuration
const express = require('express')
const application = express()
const things = require('./routes/things')

// Middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/things',things)
    

// Server response
appllication.listen(3000,()=>{
    console.log(`Server is listening on port 3000...`)
})
