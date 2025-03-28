const WebSocket = require('ws');

const server = new WebSocket.Server({ host: '10.130.189.5', port: 8080 });

server.on('connection', (socket) => {
    console.log('A player connected');

    socket.on('message', (message) => {
        let data = JSON.parse(message.toString()); // Convert Buffer to String & Parse JSON
        console.log('Received:', data);

        if (data.type === "vote") {
            console.log(`Vote received for: ${data.choice}`);
        }
    });

    socket.on('close', () => {
        console.log('A player disconnected');
    });
});

console.log('WebSocket server running on ws://10.130.189.5:8080');
