const mysql = require('mysql2');

const pool = mysql.createPool(process.env.CLEARDB_DATABASE_URL);

module.exports = pool.promise();