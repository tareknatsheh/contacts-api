const express = require('express');
const router = express.Router();
const contactsController = require("../controllers/contacts");


router.get("/", contactsController.handleGetAllContacts);
router.post("/", contactsController.handleAddNewContact);

module.exports = router;