require('dotenv').config()

const { MongoClient } = require('mongodb')
const client = new MongoClient(process.env.MONGO_URI)

async function run() {

    try{
        const db = client.db('ProductDb')
        const products = db.collection('products')
    
        result = await products.insertOne({
            name: 'Coffee Grinder',
            price: 20,
            quantity: 100
        })
    } finally {
        await client.close()
    }

}


run()
