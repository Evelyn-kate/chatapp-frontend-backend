const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

var mysqlConnection = mysql.createConnection({
    host: "Chat app",
    user: "root",
    password: "",
    database: "Backend",
    multipleStatements: "true"

});
mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connected");
    } else {
        console.log("Connection Failed");
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});


app.listen(port, () => console.log(`Listening on port ${port}`));