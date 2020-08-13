import suffixWith from '../src';

describe('@geeeger/fn-str-suffix-with module', () => {
  it('should', () => {
    const suffix = suffixWith('aaa');
    expect(suffix('123')).toEqual('123aaa');
  });
});
