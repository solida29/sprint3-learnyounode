import net from 'net';

const portNumber = Number(process.argv[2]);

const server = net.createServer(function (socket) {
  // logique de gestion de la socket
  socket.write(todayDate());
  socket.end();
});
server.listen(portNumber);

function todayDate() {
  const date = new Date();
  const year = date.getFullYear();
  let result = '';

  const format = (integers: number) => {
    if (integers <= 9) {
      return '0' + integers;
    } else {
      return integers;
    }
  };

  const month = format(date.getMonth() + 1);
  const day = format(date.getDate());
  const hours = format(date.getHours());
  const minutes = format(date.getMinutes());

  result = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n';
  console.log(result);
  return result;
}
