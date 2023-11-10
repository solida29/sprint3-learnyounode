import http from 'http';

const portNumber = Number(process.argv[2]);
let result = '';

const server = http.createServer((request, response) => {
  if (request.method === 'POST') {
    request.setEncoding('utf8');
    request.on('data', (chunk: WritableStream) => {
      result += chunk.toString().toUpperCase();
    });
    request.on('end', () => {
      response.writeHead(200, { 'content-type': 'text/plain' });
      response.end(result);
    });
  } else {
    response.on('error', () => {
      response.writeHead(405, { Allow: 'POST' });
      response.end('Only POST request available');
    });
  }
});
server.listen(portNumber);
