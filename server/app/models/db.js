const mysql = require("mysql2");
const dbConfig = require("../config/db.config.js");

const user = "root";
const host = "localhost:3306";
const password = "admin";
const database = "impactaSistema";

var connection = mysql.createConnection(
  `mysql://${user}:${password}@${host}/${database}`
);

module.exports = connection;
