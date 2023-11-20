import { fileContent } from '../03_my-first-io';

process.argv[2] = '../ScriptTest.md';

describe('Ex03', () => {
  test('contamos el numero de lineas en el archivo', () => {
    expect(fileContent.toString() + '\n').toBe(3);
  });
});
