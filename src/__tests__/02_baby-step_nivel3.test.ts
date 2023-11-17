import { processArgAdd } from '../learnyounode_nivel3/02_baby-steps_nivel3';

describe('Ex02 baby-step', () => {
  it('add process.argv[2] + process.argv[3]', () => {
    const processArg = ['node', '/path/to/your/program.js', '3', '5', '2'];
    expect(processArgAdd(...processArg)).toBe(10);
  });
});
