const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('A player connected');

    socket.on('message', (message) => {
        console.log('Received:', message);
    });

    socket.on('close', () => {
        console.log('A player disconnected');
    });
});

console.log('WebSocket server running on ws://localhost:8080');
