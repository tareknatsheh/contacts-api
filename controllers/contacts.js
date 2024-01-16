const { makeContact } = require("../entities/contact");

module.exports.handleAddNewContact = async (req, res) => {
    console.log("handling adding new contact controller.");
    try {
        const newContact = makeContact(req.body);

        // Call the database entity to add a new user

        
        res.status(201).send({
            createdOn: newContact.getCreatedOn(),
            name: newContact.getName(),
            email: newContact.getEmail()
        });
        
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}


module.exports.handleGetAllContacts = async (req, res) => {
    console.log("getting all users controller");
    res.send("Hello from the controller!");
}