import fs from 'fs';
import path from 'path';

interface Callback {
  (err: string | null, listFiles: string[]): void;
}
// type Callback = (error: string | null, archivos: string[]) => void;

module.exports = function printListFiles(
  directoryName: string,
  extension: string,
  callback: Callback
): void {
  fs.readdir(directoryName, 'utf8', (err, listFiles) => {
    // directory reading
    // it is idiomatic to check for errors and do early-returns within callback functions
    if (err) {
      return callback(err.message, []); // early return
      // return err; // para script
    } else {
      // no error, continue doing cool things with `data`
      listFiles = listFiles.filter((file) => {
        // filtering function
        return path.extname(file) === '.' + extension;
      });
      callback(null, listFiles); // all went well, call callback with `null` for the error argument
    }
  });
};
