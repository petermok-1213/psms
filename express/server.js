const express = require('express')
const app = express()

const DbService = require('./dbService')

// Load environment variables from .env file during development
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const PORT = process.env.PORT || 8888
const dbService = new DbService()
dbService.connect()

// Set up CORS (Cross-Origin Resource Sharing) middleware
app.use((req, res, next) => {
    // Allow requests from 'http://localhost:4200' (Angular)
    res.header("Access-Control-Allow-Origin", 
               "http://localhost:4200")
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// Start the Express server
app.listen(PORT, () => {
    console.log("Listening on port %d", PORT)
})

app.get('/inventory', (req, res) => {
    dbService.getAllProducts().then(
        (products) => { res.json(products) }
    )
})

app.post('/prompt', (req, res) => {
    console.log('received prompt')
    res.json({})
})

