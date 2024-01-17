const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

module.exports.mongoAdapter = async ({ dbName, collectionName }) => {
    await client.connect();
    
    const addOneContact = async (contactObj) => {
        console.log('Connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        return await collection.insertOne(contactObj);
    }

    return Object.freeze({
        addOneContact
    })
}