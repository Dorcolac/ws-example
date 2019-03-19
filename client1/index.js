const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', function() {
    console.log('Connection is open');
})

socket.addEventListener('close', function() {
    console.log('Connection is closed');
})