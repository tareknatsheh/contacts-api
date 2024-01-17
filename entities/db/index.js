const { injectDB } = require("./db");
const { mongoAdapter } = require("./mongoAdapter");

module.exports.makeDb = injectDB({ dbAdapter: mongoAdapter });