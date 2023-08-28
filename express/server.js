const express = require('express')
const app = express()

const PORT_NUM = 8888

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 
               "http://localhost:4200")
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.listen(PORT_NUM, () => {
    console.log("Listening on port %d", PORT_NUM)
})
