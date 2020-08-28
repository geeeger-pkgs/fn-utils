import curry from '../src';

describe('@geeeger/fn-curry-it module', () => {
  it('should curry', () => {
    function testfn(a: number, b: number, c: number): number {
      return a * b * c;
    }
    const curried = curry(testfn, 1);
    expect(curried(2, 3)).toEqual(6);
    const curried1 = curry(curried, 2);
    expect(curried1(2)).toEqual(4);
  });
});
