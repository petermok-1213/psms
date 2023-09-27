// Load environment variables from .env file
require('dotenv').config()
const { MongoClient } = require('mongodb')

class DbService {

    /**
     * Connect to Db upon instantiation. Guarentee the connection is made and
     * avoid TypeError araise from null objects calling MongoDb methods.
     */
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
        try {
            return await this.products.find({}).toArray()
        } catch (error) {
            console.error('Error fetching products:', error)
            throw error // Re-throw the error to be handled by the caller
        }
    }

    /**
     * Close the database connection.
     */
    async closeConnection() {
        try {
            await this.client.close()
        } catch (error) {
            console.error('Error closing database connection:', error)
            throw error // Re-throw the error to be handled by the caller
        }
    }
    
}

module.exports = DbService
