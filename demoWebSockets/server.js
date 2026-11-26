const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve static resources from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Setup WebSockets
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);

  // When a connection is received, emit confirm connection event
  socket.emit('confirm connection', 'Connected...');

  // When a message is received from a client, respond
  socket.on('request', (msg) => {
    console.log('Server received:', msg);
    socket.emit('response', 'Hello from the server');
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

const PORT = 9000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

/*ex- 2

const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Listen for 'send message' events from a client
  socket.on('send message', (msg) => {
    // Broadcast to all other clients except sender
    socket.broadcast.emit('received message', msg);
  });
});

const PORT = 9000;
server.listen(PORT, () => {
  console.log(`Message Board Server running on http://localhost:${PORT}`);
});

*/