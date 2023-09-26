const express = require('express')
const app = express()

const DbService = require('./dbService')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const PORT = process.env.PORT || 8888
const dbService = new DbService()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 
               "http://localhost:4200")
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.listen(PORT, () => {
    console.log("Listening on port %d", PORT)
})

app.get('/inventory', (req, res) => {
    // resolving the promise which contains the collection
    dbService.getAllProducts().then(
        (products) => { res.json(products) }
    )
})

app.post('/prompt', (req, res) => {
    console.log('received prompt')
    res.json({})
})

