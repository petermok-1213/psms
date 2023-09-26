// Load environment variables from .env file
require('dotenv').config()
const { MongoClient } = require('mongodb')

class DbService {

    constructor() {
        this.client = new MongoClient(process.env.MONGO_URI)
        this.db = this.client.db('ProductDb')
        this.products = this.db.collection('products')
    }

    /**
     * Fetch all products from the 'products' collection.
     * @returns {Promise<Array>} A promise that resolves to an array of product objects.
     */
    async getAllProducts() {
        return await this.products.find({}).toArray()
    }
    
}

module.exports = DbService
