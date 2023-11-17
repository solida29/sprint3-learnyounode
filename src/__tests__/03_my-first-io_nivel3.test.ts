import { fileBuffer } from '../learnyounode_nivel3/03_my-first-io_nivel3';

describe('Ex03', () => {
  test('fileBuffer', () => {
    const buf = new buffer.File('../ScriptTest.md');
    // const buf = Buffer.from('../ScriptTest.md');

    expect(fileBuffer(buf)).toBe(27);
  });
});
