const { makeContact } = require("../entities/contact");
const { makeDb } = require("../entities/db");

module.exports.handleAddNewContact = async (req, res) => {
    console.log("handling adding new contact controller.");
    try {
        const newContact = makeContact(req.body);

        const contactObjToAdd = {
            name: newContact.getName(),
            email: newContact.getEmail(),
            createdOn: newContact.getCreatedOn()
        }
        
        // Call the database entity to add a new user
        const db = await makeDb({ dbName: "mm_api_demo", collectionName: "contacts"});
        const addResult = await db.addOneContact(contactObjToAdd);

        res.status(201).send(addResult);

    }
    catch (error) {
        res.status(500).send(error.message);
        throw error;
    }
}


module.exports.handleGetAllContacts = async (req, res) => {
    console.log("getting all users controller");
    res.send("Hello from the controller!");
}