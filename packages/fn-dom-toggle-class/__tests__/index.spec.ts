import toggleClass from '../src';

describe('@geeeger/fn-dom-toggle-class module', () => {
  it('should toggle', () => {
    const toggleClassB = toggleClass('B');
    const dom = document.createElement('div');
    dom.className = 'special B';
    toggleClassB(dom);
    expect(dom.className).toEqual('special');
    toggleClassB(dom);
    expect(dom.className).toEqual('special B');
  });
});
