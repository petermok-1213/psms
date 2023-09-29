const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

const DbService = require('./dbService')
const dbService = new DbService()

router.use(bodyParser.json())

// Route to get all products from the database
router.get('/inventory', async (req, res) => {
    try {
        const products = await dbService.getAllProducts()
        res.json(products)
    } catch (error) {
        console.error('Error fetching products:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// Route to add a new product to the database
router.post('/inventory', async (req, res) => {
    try {
        const product = req.body
        const result = await dbService.addProduct(product)
        res.json(result)
    } catch (error) {
        console.error('Error adding product:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.put('/inventory', async (req, res) => {
    try {
        const product = req.body
        const result = await dbService.updateProduct(product)
        res.json(result)
    } catch (error) {
        console.error('Error updating product:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.delete('/inventory', async (req, res) => {
    try {
        const product = req.body
        console.log('Deleting product:', product)
        const result = await dbService.deleteProduct(product)
        res.json(result) 
    } catch (error) {
        console.error('Error deleting product:', error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

// Route to handle prompts (currently just logs the receipt of a prompt)
router.post('/prompt', (req, res) => {
    console.log('Received prompt')
    res.json({})
})

module.exports = router
