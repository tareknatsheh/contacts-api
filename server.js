const express = require("express");
const app = express();
const mongodb = require("mongodb");
const contactsRoutes = require("./routes/contacts.js");

app.use(express.json());

const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017'
const dbName = 'mm_api_demo'
const client = new MongoClient(url);

app.use("/contacts", contactsRoutes);

// app.post("/contacts", async (req, res) => {
//     const { name, email } = req.body;

//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection('contacts');
//     const insertRes = await collection.insertOne({ name, email });
//     console.log(insertRes);

//     return res.send(insertRes);
// });

// app.get("/contacts", async (req, res) => {

//     await client.connect();
//     const db = client.db(dbName);
//     const collection = db.collection('contacts');

//     const getAllResp = await collection.find({}).toArray();

//     res.send(getAllResp);
// });

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server up and running at port ${port}`);;
})