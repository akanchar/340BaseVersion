// This is a server side file!
// An example of reading requests from the client and sending back the query results to the client.
const fs = require('fs');
const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
// create a new MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ENTER YOUR PASSWORD FOR SQL DATABASE HERE',
    database: 'ADVENTURER'
});

router.post('/', (req, res) => {
    // return res.end("ETST")
// connect to the MySQL database
    connection.connect((error) => {
        if (error) {
            console.error('Error connecting to MySQL database:', error);
        } else {
            // Sending this query results back to the client.
            connection.query(
                "SELECT * FROM Regions",
                function (err, rows) {
                    if (rows === undefined) {

                    } else {
                        console.log(rows)
                        text = ""
                        for (let i = 0; i < rows.length; i++) {
                            text += rows[i].RegionName + "<br>";
                        }
                        return res.end(text);
                    }
                }
            )
        }
        console.log('Connected to MySQL database!');
    });
});

// close the MySQL connection
// connection.end();


module.exports = router;