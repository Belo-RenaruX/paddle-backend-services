const serverless = require("serverless-http");
const app = require("./app");

module.exports.handle = serverless(app);
