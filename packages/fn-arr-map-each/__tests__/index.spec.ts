import mapEach from '../src';

describe('@geeeger/fn-arr-map-each module', () => {
  it('should equal', () => {
    const mapEachItem = mapEach<number>([(item): number => item * 2, (item): number => item * 3]);
    expect(mapEachItem([1, 1])).toEqual([2, 3]);
  });
});
