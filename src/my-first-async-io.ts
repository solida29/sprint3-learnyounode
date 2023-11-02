import fs from 'fs';

const fileContentAsync = fs.readFile(
  process.argv[2], // Nombre del archivo
  'utf8', // Caracteres UTF8 para que esté en formato string y no tener que pasar por toString()
  (err: unknown, data: string) => {
    // Callback
    if (err) {
      return new Error('Error');
    }
    const docLines = data.split('\n');
    const numLines = docLines.length - 1;
    process.stdout.write(numLines.toString() + '\n');
  }
);
fileContentAsync;
