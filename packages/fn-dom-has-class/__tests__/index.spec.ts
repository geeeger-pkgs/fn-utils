import hasClass from '../src';

describe('@geeeger/fn-dom-has-class module', () => {
  it('should pass', () => {
    const hasClassAny = hasClass('any');
    const dom = document.createElement('div');
    dom.className = 'a any b';
    expect(hasClassAny(dom)).toBeTruthy();
  });
});
