const { injectDB } = require("./db");
const { mongoAdapter } = require("./mongoAdapter");
// const { testDbAdapter } = require("./testDbAdapter");

module.exports.makeDb = injectDB({ dbAdapter: mongoAdapter });