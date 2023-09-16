const mysql = require("mysql");

const config = {
  host: "localhost",
  user: "root",
  password: ".",
  database: "smart_remittance",
  dateStrings: true,
  debug: false,
};

var readConnection = mysql.createPool(config);
module.exports = readConnection;
