require('dotenv').config()
const { MongoClient } = require('mongodb')

class DbService {

    constructor() {
        this.client = new MongoClient(process.env.MONGO_URI)
    }
    
    async init() {
        try{
            const db = this.client.db('ProductDb')
            const products = db.collection('products')
            await products.insertOne({
                name: 'Coffee Grinder',
                price: 20,
                quantity: 100
            })
        } finally {
            await this.client.close()
        }
    }
    
}

module.exports = DbService
