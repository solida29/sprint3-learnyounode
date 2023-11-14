import net from 'node:net';

const portNumber = Number(process.argv[2]);

function connectToServer(portNumber: number): void {
  const client = new net.Socket();
  // const client = net.createConnection({ path: '/tmp/echo.sock' });

  // Conectar al servidor
  client.connect(portNumber, 'localhost', () => {
    console.log(`Connected with server http://localhost:${portNumber}`);
  });

  // Datos recibidos del servidor
  client.on('data', (data) => {
    const responseData = data.toString();
    console.log('Server response:', responseData);
    client.end();
  });

  // Cierre del evento conexión
  client.on('close', () => {
    console.log('Disconnected from server');
  });
  /** 'close' (Emitted once the socket is fully closed)
      'end' (Emitted when the other end of the socket signals the end of transmission, 
      thus ending the readable side of the socket.) **/

  // Errores durante la conexión del cliente
  client.on('error', (error) => {
    console.error('Error on client connection:', error.message);
  });
}

connectToServer(portNumber);
