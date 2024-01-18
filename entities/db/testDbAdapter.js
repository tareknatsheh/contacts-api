const dataArray = [];

module.exports.testDbAdapter = async ({ dbName, collectionName }) => {

    const addOneContact = async (contactObj) => {
        return await new Promise(resolve => setTimeout(() => {
            dataArray.push(contactObj);
            resolve(contactObj)
        }, 1000));
    }

    const getAllContacts = async () => {
        return await new Promise(resolve => setTimeout(() => {
            resolve(dataArray)
        }, 1000));
    }

    return Object.freeze({
        addOneContact,
        getAllContacts
    });

}
