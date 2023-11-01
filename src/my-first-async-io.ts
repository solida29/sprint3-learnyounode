const fs = require('fs');

const fileContentAsync = fs.readFile(
  process.argv[2],
  'utf8',
  (err: unknown, data: string) => {
    if (err) {
      return new Error('Error');
    }
    const docLines = data.split('\n');
    const numLines = docLines.length - 1;
    process.stdout.write(numLines.toString() + '\n');
  }
);
fileContentAsync;
