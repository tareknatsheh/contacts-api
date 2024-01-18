const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

module.exports.mongoAdapter = async ({ dbName, collectionName }) => {
    await client.connect();
    console.log('Connected successfully to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const addOneContact = async (contactObj) => {
        return await collection.insertOne(contactObj);
    }

    const getAllContacts = async () => {
        return await collection.find({}).toArray();
    }

    return Object.freeze({
        addOneContact,
        getAllContacts
    })
}