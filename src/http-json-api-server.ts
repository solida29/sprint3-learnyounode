import http from 'http';

const portNumber = Number(process.argv[2]);

function parsetime(time: Date) {
  const timeObject = {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  };
  return timeObject;
}

function unixtime(time: Date) {
  const timeObject = {
    unixtime: time.getTime()
  };
  return timeObject;
}

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(request.url!, `http://localhost:${portNumber}`);
  // peticion del cliente.
  // request.url! para indicar que no será null o undefined
  const date = parsedUrl.searchParams.get('iso');
  const time = new Date(date || '');
  // Si date != null o undefined, se utiliza.
  // Si date = null o undefined, el resultado es ''

  let result = {};

  if (request.method === 'GET' && parsedUrl.pathname === '/api/parsetime') {
    result = parsetime(time);
  } else if (
    request.method === 'GET' &&
    parsedUrl.pathname === '/api/unixtime'
  ) {
    result = unixtime(time);
  } else {
    response.writeHead(404, { 'Content-type': 'applcation/json' });
    response.end('Not found');
  }

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(JSON.stringify(result));
});

server.listen(portNumber);
