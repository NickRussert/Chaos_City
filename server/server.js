const WebSocket = require('ws');

const server = new WebSocket.Server({ host: '0.0.0.0', port: 8080 });

server.on('connection', (socket) => {
    console.log('A player connected');

    socket.on('message', (message) => {
    let data = JSON.parse(message.toString()); // Convert Buffer to String & Parse JSON
    console.log('Received:', data);

    // Example: Log the vote choice
    if (data.type === "vote") {
        console.log(`Vote received for: ${data.choice}`);
    }
});


    socket.on('close', () => {
        console.log('A player disconnected');
    });
});

console.log('WebSocket server running on ws://localhost:8080');
