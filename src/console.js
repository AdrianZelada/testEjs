
var io = require('socket.io')(1200);

// import socket from 'socket.io';

// var io = socket(1200);

io.on('connection', function (socket) {
    console.dir('Listen console.browser go!!!!')
});

module.exports = function(_console) {
    _console= _console || console;
    _console.info = function () {
        var stack = new Error().stack;
        var fileNumber = stack.split("\n")[2].split("/").length;
        var file = stack.split("\n")[2].split("/")[fileNumber - 1].split(')')[0];
        console.dir('Server >>> ' + file, arguments)
        io.sockets.emit('console', {file: file, arg: arguments})
    };
    return _console
};