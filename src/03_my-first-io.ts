import fs from 'fs';
// Modulo de file system de Node

const fileContent = fs.readFileSync(process.argv[2], 'utf8');
// Leemos el archivo dado en process.argv[2] que tendrá formato de buffer
const fileLines = fileContent.split('\n').length - 1;
// Pasamos el buffer en un array, separado por los \n
// Medimos el array para saber el numero de líneas -1
process.stdout.write(fileLines.toString() + '\n');
// usamos stdout en lugar de console.log(lines);
