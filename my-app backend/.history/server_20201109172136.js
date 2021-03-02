const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const socket = require('socket.io');
const port = process.env.PORT || 5000;



io = socket(server);

server = app.listen(8080, function(){
    console.log('server listening to port 8080');
});

//connection to the database
var mysqlConnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "chatapp",
    multipleStatements: "true"

});
mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connected");
    } else {
        console.log("Connection Failed", err);
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
//save messages to database





// connecting tho socket.io
io.on('connection', (socket) =>{
    console.log('socket.id');
});



app.listen(port, () => console.log(`Listening on port ${port}`));