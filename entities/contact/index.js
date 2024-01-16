const { injectContact } = require("./contact");

const normalize = ({name, email}) => {
    return {
        name: name.charAt(0).toUpperCase() + name.slice(1),
        email: email.toLowerCase()
    }
}

module.exports.makeContact = injectContact({normalize});


