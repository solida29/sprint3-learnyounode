import { fileBuffer } from '../learnyounode_nivel3/03_my-first-io_nivel3';

describe('Ex03', () => {
  test('contamos el numero de lineas en el archivo', () => {
    expect(fileBuffer('../ScriptTest.md').toBe(27));
  });
});
