const { makeContact } = require("../contact");

describe("Contact", () => {
    it("Must have a name", () => {
        expect(() => makeContact({name: null, email: "mos@gogo.com"})).toThrow("contact must have a name");
    })

    it("Must have an email", () => {
        expect(() => makeContact({name: "monzer", email: null})).toThrow("contact must have an email");
    })

    it("Name must be > 2 characters", () => {
        expect(() => makeContact({name: "x", email: "ddd@ddd.com"})).toThrow("name must be > than 2 characters");
    })

    it("Email must be > 2 characters", () => {
        expect(() => makeContact({name: "xsse", email: "d"})).toThrow("email must be > than 2 characters");
    })

    it("Must capitalize name first letter", () => {
        const newContact = makeContact({name: "abcdef", email: "aaaa@bbbb.com"});
        expect(newContact.getName()).toBe("Abcdef");
    })

    it("Must lowercase email", () => {
        const newContact = makeContact({name: "abcdef", email: "aAaA@BbBb.com"});
        expect(newContact.getEmail()).toBe("aaaa@bbbb.com");
    })
})

// test("Create new contact", () => {
//     const newContact = makeContact({ name: "sos", email: "mos@gogo.com"});
//     expect(newContact.getName()).toBe("Sos");
// });