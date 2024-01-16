module.exports.injectDB = ({ dbAdapter }) => {
    return makeDB = () => {
        return Object.freeze({
            addContact: ({ name, email}) => dbAdapter.add({ name, email}),
            getAllContacts: () => dbAdapter.getAll()
        });
    }
}