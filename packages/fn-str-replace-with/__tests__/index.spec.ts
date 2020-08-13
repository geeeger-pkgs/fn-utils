import replaceWith from '../src';

describe('@geeeger/fn-str-replace-with module', () => {
  it('should pass', () => {
    const replaceWithA2B = replaceWith(/A/g, 'B');
    expect(replaceWithA2B('AAA')).toEqual('BBB');
  });
});
