import net from 'net';

const portNumber = Number(process.argv[2]);

function connectToServer(portNumber: number): void {
  const client = new net.Socket();

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
    console.log('Connection closed');
  });

  // Errores durante la conexión del cliente
  client.on('error', (error) => {
    console.error('Error on client connection:', error.message);
  });
}

connectToServer(portNumber);
