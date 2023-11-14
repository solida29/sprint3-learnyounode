import http from 'http';

const portNumber = Number(process.argv[2]);
let result = '';

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    // Si es una solicitud POST
    request.setEncoding('utf8');
    request.on('data', (chunk: WritableStream) => {
      result += chunk.toString().toUpperCase();
      // Convierte los chunks del body de la solicitud POST a mayúsculas
    });
    request.on('end', () => {
      // Envia la respuesta con los datos convertidos a mayúsculas
      response.writeHead(200, { 'content-type': 'text/plain' });
      response.end(result);
    });
  } else {
    // Si no es una solicitud POST,
    // se responde con un código de estado 405 (Método no permitido)
    response.writeHead(405, { Allow: 'POST' });
    response.end('Only POST request available');
  }
});
server.listen(portNumber);
