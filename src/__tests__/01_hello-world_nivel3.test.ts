import { sayHello } from '../learnyounode_nivel3/01_hello-world_nivel3';

describe('sayHello', () => {
  it('should say HELLO WORLD', () => {
    expect(sayHello()).toBe('HELLO WORLD');
  });
});
