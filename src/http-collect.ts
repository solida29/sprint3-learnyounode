import http from 'http';

let result: string = '';

http.get(process.argv[2], (response) => {
  response.setEncoding('utf8');
  response.on('data', (chunk: WritableStream) => {
    result += chunk;
  });
  response.on('end', () => {
    console.log(result.length);
    console.log(result);
  });
});
