require('dotenv').config();
const {createPool} = require('mysql')
// Create connection variable
let connection = createPool({
    host: process.env.hostName,
    user: process.env.userName,
    password: process.env.userPass,
    port: process.env.portDB,
    database: process.env.dbName,
    multiStatements: true
  });

  module.exports = connection;