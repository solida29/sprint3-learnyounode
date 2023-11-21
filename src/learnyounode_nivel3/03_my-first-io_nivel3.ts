import fs from 'fs';
// Modulo de file system de Node

// export const fileContent = fs.readFileSync(process.argv[2], 'utf8');
// const fileLines = fileContent.split('\n').length - 1;
// process.stdout.write(fileLines.toString() + '\n');

export function fileBuffer(someFile: Buffer | string) {
  const fileContent = fs.readFileSync(someFile).toString();
  const fileLines = fileContent.split('\n').length - 1;
  return fileLines;
}

console.log(fileBuffer(process.argv[2]));
