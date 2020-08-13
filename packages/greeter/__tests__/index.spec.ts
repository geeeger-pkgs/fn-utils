import { add, greet } from '../src';

describe('@myscope/greeter module', () => {
  it('should add', () => {
    expect(add(2, 3)).toEqual(5);
  });
  it('should greet', () => {
    expect(greet('world')).toEqual('@myscope/greeter says: hello to world');
  });
});
