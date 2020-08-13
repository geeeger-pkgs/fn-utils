import rangeWith from '../src';

describe('@geeeger/fn-num-range-with module', () => {
  it('should pass', () => {
    const rangeWith2to8 = rangeWith(2, 8);
    expect(rangeWith2to8(10)).toEqual(8);
  });
});
