const mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'pbl_5',
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        console.log('connect to DB unsuccessful');
    } else {
        console.log('connect to DB successful');
    }
});
module.exports = connection;
