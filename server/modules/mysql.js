const mysql = require('mysql');
const config = require('../config/auth');

const connection = mysql.createConnection(config);
console.log("mysql connection");

module.exports = connection;