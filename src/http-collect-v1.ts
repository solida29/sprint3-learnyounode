import http from 'http';
import bl from 'bl';

let data: string = '';

http.get(process.argv[2], (response) => {
  return response.pipe(
    bl(function (err, chunk) {
      // if (typeof chunk) {
      // }
      if (err) {
        console.log('Error: ' + err);
      } else {
        data = chunk.toString();
        console.log(data.length);
        console.log(data);
      }
    })
  );
});

// response.pipe(concatStream(function (data) { /* ... */ }))
// WritableStream
// BufferListStream
/** La première ligne devrait être un nombre entier représentant le nombre
de caractères reçus du serveur. La seconde ligne devrait être la String 
complète reçue du serveur. */
