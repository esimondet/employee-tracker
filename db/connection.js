const mysql = require('mysql2/promise');

const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'stormlight',
  database: 'employee_tracker'
});

module.exports = db;