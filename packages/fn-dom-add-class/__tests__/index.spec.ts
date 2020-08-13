import addClass from '../src';

describe('@geeeger/fn-dom-add-class module', () => {
  it('should add', () => {
    const addClassAB = addClass('A', 'B');
    const dom = document.createElement('div');
    dom.className = 'special';
    addClassAB(dom);
    expect(dom.className).toEqual('special A B');
  });
});
