// import { printListFiles } from './mymodule';
const printListFiles = require('./mymodule');

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
