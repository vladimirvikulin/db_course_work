const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'user',
  database: 'imbaza',
});

module.exports = connection;
