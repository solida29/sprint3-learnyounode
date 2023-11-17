import fs from 'fs';
// Modulo de file system de Node

export function fileBuffer(someFile: Buffer | string) {
  const fileContent: object = fs.readFileSync(someFile);
  const fileBufferToString: string = fileContent.toString();
  const fileLines = fileBufferToString.split('\n');
  const lines = fileLines.length - 1;
  return lines.toString() + '\n';
}
