module.exports.injectContact = ({ normalize }) => {
    return makeContact = ({
        createdOn = Date.now(),
        name,
        email
    }) => {
        if (!name) {
            throw new Error("contact must have a name");
        }
        else if (!email) {
            throw new Error("contact must have an email");
        }
        else if (name.length < 2) {
            throw new Error("name must be > than 2 characters");
        }
        else if (email.length < 2) {
            throw new Error("email must be > than 2 characters");
        }

        const normalizedContactInfo = normalize({ name, email });

        return Object.freeze({
            getName: () => normalizedContactInfo.name,
            getEmail: () => normalizedContactInfo.email,
            getCreatedOn: () => createdOn
        });
    }
}

