const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const socket = require('socket.io');
const cors = require('cors');
const port = process.env.PORT || 5000;
const bcrypt = require('bcrypt');
const router = express.Router()
  
var corsOptions = {
  origin: "http://localhost:3000"
};
  
app.use(cors(corsOptions));

const db = require("./models");
const { sequelize } = require('./models');
const Role = db.role;
const Message = db.message;
const User = db.user;

//connection to the database
var mysqlConnection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "chatapp",
    multipleStatements: "true",

});

mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connected");
    } else {
        console.log("Connection Failed", err);
    }
});

app.set('view engine', 'ejs');
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

//putting the messages in sessions


// routes
require('./routes/auth.route')(app);
require('./routes/user.route')(app);

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.get('/exchanged', (req, res) => {
    let senderId = req.query.sender;
    let receiverId = req.query.receiver;
    
    //put the message in database
    const query = 'SELECT * FROM messages WHERE idUsers IN (?) AND receiverId IN (?)';
    mysqlConnection.query(query, [ [senderId, receiverId], [senderId, receiverId] ], function(error, response){
        if(error){
            console.log(error);
            res.json({
                status: false,
                message: error
            });
        }else{
            console.log("value: "+response);
            res.json({
                status: true,
                messages: response
            });
        }
    });
});

app.post('/message', (req, res) => {
    let message = req.body.message;
    let senderId = req.body.sender;
    let receiverId = req.body.receiver;
    
    //put the message in database

    // const query = 'INSERT INTO messages(message, idUsers, receiverId) VALUES(?, ?, ?)';
    // mysqlConnection.query(query, [ message, senderId, receiverId ], function(error, response){
    //     if(error){
    //         return console.log(error);
    //     }
    //     console.log("value: "+response);
    //     io.emit('MESSAGE_RECEIVED', {id: response.insertId, message: message, idUsers: senderId, receiverId: receiverId});
    // });
    Message.create({message: message, idUsers: senderId, receiverId: receiverId})
        .then(data => {
            console.log("value: "+data);
            io.emit('MESSAGE_RECEIVED', data);  
        })
        .catch(error => {  
                return console.log(error);
        });
});   


// save user to the database as they are registered from the frontend
app.post('/user', (req, res) => {

    let name = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    console.log(name);

    bcrypt.hash(password, 10,function(err, hash) {
         //put the users in database

        Role.findAll({where: {name: 'user'}}).then(result => {
            let roleId = result[0].dataValues.id;
            User.create({name: name, email: email, password: hash, roleId: roleId})
                .then(data => {
                    res.json({
                        status: true,
                        message:'user registered successfully',
                        data: {id: data.dataValues.idUsers, username: name, email: email, password: password}
                    });
                })
                .catch(error => {
                    res.json({
                        status: false,
                        message: error
                    });
                });
        });
    });
});

// find all users in the database
app.get('/users', (req, res) => {
    User.findAll()
        .then(response => {
            res.status(200).send({
                users: response
            });
        })
        .catch(error => {
            res.status(400).send({
                message: error
            });
        });
});

app.get('/userswithoutadmin', (req,res) => {
    const query = 'SELECT * FROM users WHERE roleId = 2';
    mysqlConnection.query(query, function (err, response){
        if (err) {
            res.json({ status: false, message: err });
        }else {
            res.json({ status: true, message:'list of users', users: response })
        }
    });
});

app.get('/getadmin', (req,res) => {
    const query = 'SELECT * FROM users WHERE roleId = 1';
    mysqlConnection.query(query, function (err, response){
        if (err) {
            res.json({ status: false, message: err });
        }else {
            res.json({ status: true, message:'list of users', users: response })
        }
    });
});

app.post('/updatestatus', (req, res) => {
    let userId = req.body.userId;
    let status = req.body.status;
    
    User.findOne({
        where: {idUsers: userId}
    }).then(user => {
            if(user) {
                User.update({isActive: status}, {where: {idUsers:userId}})
                .then(response => {
                    console.log(response);

                    if(response) {
                        res.status(200).send({
                            data: response
                        });
                    }else {
                        res.status(404).send({
                            message: "Failed! User Not Found!"
                        });
                    }

                })
                .catch(error => {
                    res.status(400).send({
                        message: error
                    });
                });
                
            }
        })
    .catch(error => {
        res.status(400).send({
            message: error
        });
    });
});


// actualising the database according to sequelize to specify the roles
db.sequelize.sync({force: false}).then(() => {
    console.log('Drop and Resync Db');
    //initial();
  });
  function initial() {
    Role.create({
      id: 2,
      name: "user"
    });
   
    Role.create({
      id: 1,
      name: "admin"
    });
  }
// export application
module.export=app;

// server run
var server = app.listen(port, function(){
    console.log('server listening to port 5000');
});

// connecting the socket.
io = socket(server);

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        receiverId = socket.id;
      console.log('message: ' + msg);
    });
  });

io.on('connection', (socket) =>{

    console.log("User Connected", socket.id);

    //sending and receiving messages

    socket.on('MESSAGE_RECEIVED', function(data){
        console.log('a message has came');
    });
});
// initialising authentication connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });



