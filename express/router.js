const express = require('express')
const router = express.Router()
const DbService = require('./dbService')

const dbService = new DbService()

// Route to get all products from the database
router.get('/inventory', async (req, res) => {
    try {
        const products = await dbService.getAllProducts()
        res.json(products)
    } catch (error) {
        console.error('Error fetching products:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
});

// Route to handle prompts (currently just logs the receipt of a prompt)
router.post('/prompt', (req, res) => {
    console.log('Received prompt')
    res.json({})
})

module.exports = router
