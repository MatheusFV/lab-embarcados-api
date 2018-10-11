"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var debug = require("debug");
var http = require("http");
var server_1 = require("./server");
var serverHandlers = require("./serverHandlers");
var bonjour = require('bonjour')();
debug('ts-express:server');
var port = serverHandlers.normalizePort(process.env.PORT || 3000);
server_1.default.set('port', port);
console.log("Server listening on port " + port);
bonjour.publish({ name: 'My Web Server', type: 'http', port: 3030 });
var server = http.createServer(server_1.default);
server.listen(port);
server.on('error', function (error) { return serverHandlers.onError(error, port); });
server.on('listening', serverHandlers.onListening.bind(server));
//# sourceMappingURL=index.js.map