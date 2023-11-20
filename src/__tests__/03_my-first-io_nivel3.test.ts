import { fileBuffer } from '../learnyounode_nivel3/03_my-first-io_nivel3';
// import { Buffer } from 'buffer';
// import { fileBuffer } from '../03_my-first-io';

describe('Ex03', () => {
  test('fileBuffer', () => {
    process.argv[2] = 'ScriptTest.md';

    // const buf = new buffer.File('../ScriptTest.md', 'ScriptTest.md');
    // const buf = Buffer.from('../ScriptTest.md');

    expect(fileBuffer()).toBe(27);
  });
});
