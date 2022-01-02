const mysql = require('mysql2/promise');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'stormlight',
  database: 'employee_tracker'
})


module.exports = connection;