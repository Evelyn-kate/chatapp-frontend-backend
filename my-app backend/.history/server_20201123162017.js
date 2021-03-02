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
    let message = req.body.message;
    
    //put the message in database
    const query = 'INSERT INTO messages(message) VALUES(?)';
    mysqlConnection.query(query, [ message ], function(error, response){
        if(error){
            return console.log(error);
        }

        console.log("value: "+response);
        io.emit('MESSAGE_RECEIVED', {id: response.insertId, message: message});
    });
});

// connect users to the database as they are registered from the registration form

app.post('/user', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;
    
    //put the message in database
    const query = 'INSERT INTO users(users) VALUES(?)';
    mysqlConnection.query(query, [ users ], function(error, response){
        if(error){
            return console.log(error);
        }

        console.log("value: "+response);
        io.emit('MESSAGE_RECEIVED', {id: response.insertId, message: message});
    });
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

    socket.on('MESSAGE_RECEIVED', function(data){
        console.log('a message has came');
    });
});
module.export = dbConnection;