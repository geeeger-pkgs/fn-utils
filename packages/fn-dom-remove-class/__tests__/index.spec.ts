import removeClass from '../src';

describe('@geeeger/fn-dom-remove-class module', () => {
  it('should remove', () => {
    const removeClassB = removeClass('B');
    const dom = document.createElement('div');
    dom.className = 'special B';
    removeClassB(dom);
    expect(dom.className).toEqual('special');
  });
});
