const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', function(client) {
    console.log('Client has connected');

    client.on('close', function() {
        console.log('Client has disconnected');
    })

    client.on('message', function(message) {
        console.log('A new message from client:');
        console.log(message);

        client.send(message);
    })
})