import http from 'http';

http
  .get(process.argv[2], (response) => {
    // URL y callback: define una función que se ejecutará cuando se reciba una respuesta a la solicitud.
    response.setEncoding('utf8'); // codificación de caracteres de la respuesta como UTF-8

    response.on('data', (chunk: WritableStream) => {
      console.log(chunk);
    });
    // Cuando se recibe un chunk (fragmento de datos) como respuesta a la solicitud HTTP,
    // la funcion se ejecutara e imprime los datos en consola

    response.on('error', (error) => {
      // errores en la respuesta
      console.log('Error: ' + error);
    });
  })
  .on('error', (fail) => {
    console.error(`Got error: ${fail.message}`);
  }); // error global de la solicitud http.get()
