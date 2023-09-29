const express = require('express')
const router = require('./router'); // Import the router module
const app = express()

// Load environment variables from .env file during development
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const PORT = process.env.PORT || 8888

// Set up CORS (Cross-Origin Resource Sharing) middleware
app.use((req, res, next) => {
    // Allow requests from 'http://localhost:4200' (Angular)
    res.header("Access-Control-Allow-Origin", 
            "http://localhost:4200"),
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    res.header("Access-Control-Allow-Headers", 
            "Origin, X-Requested-With, Content-Type, Accept"),
    next()
})

// Use the router middleware
app.use(router)

// Start the Express server
app.listen(PORT, () => {
    console.log("Listening on port %d", PORT)
})
