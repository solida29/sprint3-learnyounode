import net from 'net';

const portNumber = process.argv[2];

const server = net.createServer(function (socket) {
  // logique de gestion de la socket
  socket.write(data, 'utf8');
  socket.end(data);
});
server.listen(portNumber);
