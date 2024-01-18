module.exports.injectDB = ({ dbAdapter }) => {
    return makeDb = async ({ dbName, collectionName }) => {

        const dbMethods = await dbAdapter({ dbName, collectionName });
        
        return Object.freeze({
            addOneContact: (contactObj) => dbMethods.addOneContact(contactObj),
            getAllContacts: () => dbMethods.getAllContacts()
        })
    }
}