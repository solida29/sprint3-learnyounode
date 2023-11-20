import fs from 'fs';
// Modulo de file system de Node

export const fileContent =
  fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
process.stdout.write(fileContent.toString() + '\n');

// Leemos el archivo dado en process.argv[2] que tendrá formato de buffer
// Pasamos el buffer en un array, separado por los \n
// Medimos el array para saber el numero de líneas -1
// usamos stdout en lugar de console.log(lines);
