const express = require('express')
const app = express()
const { MongoClient } = require('mongodb')

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const PORT = process.env.PORT || 8888
const mongoClient = new MongoClient(process.env.MONGO_URI)

async function connectToDb(mongoClient) {
    await mongoClient.connect().catch((err) => {
        console.log(err+" in connecting to Db")
        return null
    })
    if (mongoClient) {
        console.log("Connected to MongoDb")
    }
}

connectToDb(mongoClient)

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
    res.json({
        inventory: "testing"
    })
})

app.post('/prompt', (req, res) => {
    console.log('received prompt')
    res.json({})
})

