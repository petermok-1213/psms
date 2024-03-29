// Load environment variables from .env file
require('dotenv').config()
const { MongoClient, ObjectId } = require('mongodb')

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
     * Add a new product to the 'products' collection.
     * @param {Object} product - The product object to add to the database.
     * @returns {Promise<Object>} A promise that resolves to the inserted product object.
     */
    async addProduct(product) {
        try {
            const result = await this.products.insertOne(product)
            return result.insertedId
        } catch (error) {
            console.error('Error adding product in DbService:', error)
            throw error // Re-throw the error to be handled by the caller
        }
    }

    /**
     * 
     * @param {Object} product - The product object to update in the database.
     * @returns {Promise<Object>} A promise that resolves to the updated product object.
     */
    async updateProduct(product) {
        try {
            console.log('Updating product:', product)
            const result = await this.products.updateOne(
                { _id: new ObjectId(product._id) },
                { $set: {
                    name: product.name,
                    tag: product.tag,
                    price: product.price,
                    quantity: product.quantity
                }}
            )
            return result
        } catch (error) {
            console.error('Error updating product in DbService:', error)
            throw error
        }
    }

    /**
     * 
     * @param {Object} product - The product object to delete in the database.
     * @returns {Promise<Object>} A promise that resolves to the deleted product object.
     */
    async deleteProduct(product) {
        try {
            const result = await this.products.deleteOne({ _id: new ObjectId(product._id) })
            return result
        } catch (error) {
            console.error('Error deleting product in DbService:', error)
            throw error
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
