import fs from 'fs';
// Modulo de file system de Node

export function fileBuffer() {
  const fileContent = fs.readFileSync(process.argv[2], 'utf8');
  const fileLines = fileContent.split('\n').length - 1;
  return fileLines;
}
