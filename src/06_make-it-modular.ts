// import { printListFiles } from './06_mymodule';
const printListFiles = require('./06_mymodule');

printListFiles(
  process.argv[2],
  process.argv[3],
  (err: string | null, listFiles: string[]) => {
    if (err) {
      return console.log('Error: ' + err);
    } else {
      listFiles.forEach((file) => console.log(file));
    }
  }
);
