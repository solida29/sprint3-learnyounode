import fs from 'fs';
import http from 'http';

const portNumber = Number(process.argv[2]);
const path = process.argv[3];

const server = http.createServer((request, response) => {
  // request handling logic...
  // request fetch properties such as the header and query-string from the request
  // response sending data to the client, both headers and body

  response.writeHead(200, { 'content-type': 'text/plain' }); //200 is Ok
  const sourceStream = fs.createReadStream(path);
  sourceStream.pipe(response);
  //to pipe the data from the source stream to the destination stream.
});
server.listen(portNumber);
