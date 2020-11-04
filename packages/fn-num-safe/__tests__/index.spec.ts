import safenum from '../src';

describe('fn-num-safe module', () => {
  it('should pass', () => {
    const safeFn = safenum(0, 10);
    expect(safeFn(11)).toEqual(10);
    expect(safeFn(-1)).toEqual(0);
    expect(safeFn('4')).toEqual(4);
    expect(safeFn('-fff')).toEqual(0);
  });
});
