const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3030 });
const app = express();
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







//websocket backend connection...
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});


app.listen(port, () => console.log(`Listening on port ${port}`));