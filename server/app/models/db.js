const mysql = require("mysql2");

const user = "root";
const host = "localhost:3306";
const password = "";
const database = "impactaSistema";

var connection = mysql.createConnection(
  `mysql://${user}:${password}@${host}/${database}`
);

module.exports = connection;
