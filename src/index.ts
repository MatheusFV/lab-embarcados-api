import * as debug from 'debug';
import * as http from 'http';
import Server from './server';
import * as serverHandlers from './serverHandlers';

debug('ts-express:server');

const port : number | string | boolean = serverHandlers.normalizePort(process.env.PORT || 3000);

Server.set('port', port);
console.log(`Server listening on port ${port}`);

const server: http.Server = http.createServer(Server);
const io: any = require('socket.io')(server);

server.listen(port);
const net: any = require('net');

const serverSocket: any = net.createServer((socket) => {
    socket.write('Echo server\r\n');
    socket.pipe(socket);
    console.log(socket.remoteAddress);
    console.log(socket.remotePort);

    socket.on('data', (data) => {
        console.log('Received: ' + data);
    });
});

serverSocket.listen(1337);

server.on('error', error => serverHandlers.onError(error, port));
server.on('listening', serverHandlers.onListening.bind(server));
