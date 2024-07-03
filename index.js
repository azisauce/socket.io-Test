const  {Server} = require('socket.io');

const server = new Server({cors: {origin: 'http://localhost:4200'}});

server.on('connection', (socket) => {
    console.log('connected');
    socket.on('notif', (data) => {
        console.log(data);
        socket.broadcast.emit('received', {data: data, notif: 'this is a test message from server'})
    })
})

server.listen(8008);

const receiverSocket = require('socket.io-client')('http://localhost:8009');