const fs = require('fs'); // modulo de file system de Node

const fileContent: object = fs.readFileSync(process.argv[2]);
// Leemos el archivo dado en process.argv[2] que tendrá formato de buffer
const fileBufferToString: string = fileContent.toString();
// Pasamos el formato buffer a toString
const fileLines = fileBufferToString.split('\n');
// Pasamos el buffer en un array, separado por los \n
const lines = fileLines.length - 1;
// Medimos el array para saber el numero de líneas -1
process.stdout.write(lines.toString() + '\n');
// usamos stdout en lugar de console.log(lines);
