const express = require("express");
const app = express();
const contactsRoutes = require("./routes/contacts.js");

app.use(express.json());

app.use("/contacts", contactsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server up and running at port ${port}`);;
})