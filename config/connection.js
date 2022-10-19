const mysql = require('mysql2');
require('dotenv').config()


const connection = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB,
    },
);
connection.connect(function (err) {
    if (err) console.log(err);
});


module.exports = connection;