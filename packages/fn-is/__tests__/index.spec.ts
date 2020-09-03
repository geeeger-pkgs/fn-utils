import is from '../src';

describe('@geeeger/fn-is module', () => {
  it('should is', () => {
    const a = Symbol(1);
    expect(is('Symbol', a)).toBeTruthy();
  });
});
