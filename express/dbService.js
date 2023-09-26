require('dotenv').config()
const { MongoClient } = require('mongodb')

class DbService {

    constructor() {
        this.client = new MongoClient(process.env.MONGO_URI)
        this.db = this.client.db('ProductDb')
        this.products = this.db.collection('products')
    }
    
    /*
        Returns a promise which contains the collection
        as an array of JSON object.
        The promise will be resolved in server.js
    */
    async getAllProducts() {
        return await this.products.find({}).toArray()
    }
    
}

module.exports = DbService
