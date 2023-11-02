import fs from 'fs';
import path from 'path';

fs.readdir(process.argv[2], 'utf8', (err, list) => {
  if (err) {
    console.log(`Error: ${err}`);
  } else {
    list.forEach((file) => {
      if (path.extname(file) == '.' + process.argv[3]) {
        console.log(file);
      }
    });
  }
});
