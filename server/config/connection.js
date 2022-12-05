// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var mysql = require('mysql');
var connection;

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'waweezy-project'
  });
};


// Exports the connection for other files to use
connection.connect();
module.exports = connection;
