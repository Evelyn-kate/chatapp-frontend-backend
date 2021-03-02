const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const socket = require('socket.io');
const cors = require('cors');
const port = process.env.PORT || 5000;


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

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/message', (req, res) => {
    let message = req.params.message;
    console.log(message);
    console.log(req);
});

app.get('/', (req, res) => {
    //res.sendFile(path.join('index.html'));
    res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

//save messages to database


// server run
var server = app.listen(port, function(){
    console.log('server listening to port 5000');
});

// connecting tho socket.
io = socket(server);

io.on('connection', (socket) =>{
    console.log("User Connected", socket.id);

    //sending and receiving messages

    socket.on('SEND_MESSAGE', function(data){
        console.log("Client says", data);
//send message to user
        io.emit('RECEIVE_MESSAGE', data);


//save message to database
        mysqlConnection.query("INSERT INTO messages (message) VALUES ('"+ data +"')", function (err, response){

        });
    });
});
