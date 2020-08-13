import substrWith from '../src';

describe('@geeeger/fn-str-substr-with module', () => {
  it('should equal', () => {
    const substr5 = substrWith(5);
    expect(substr5('aaaaaa')).toEqual('a');
  });
});
