const { makeContact } = require("../entities/contact");
const { makeDb } = require("../entities/db");

let db;
const connectToDatabase = async () => {
    try {
        db = await makeDb({ dbName: "mm_api_demo", collectionName: "contacts" });
    } catch (error) {
        console.error('Failed to connect to database:', error);
        process.exit(1); // Exit the application
    }
};
connectToDatabase();

module.exports.handleAddNewContact = async (req, res) => {
    console.log("handling adding new contact controller.");
    let newContact;
    try {
        newContact = makeContact(req.body);
    }
    catch (error) {
        return res.status(400).send(error.message);
    }

    try {
        const contactObjToAdd = {
            name: newContact.getName(),
            email: newContact.getEmail(),
            createdOn: newContact.getCreatedOn()
        }

        // Call the database entity to add a new user
        const addResult = await db.addOneContact(contactObjToAdd);

        return res.status(201).send(addResult);

    }
    catch (error) {
        console.error(error.message);
        return res.status(500).send(error.message);
    }
}


module.exports.handleGetAllContacts = async (req, res) => {
    const allData = await db.getAllContacts();
    res.status(200).send(allData);
}