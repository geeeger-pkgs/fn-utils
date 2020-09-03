import svg2dataURL from '../src';

const svgstring = `<svg xmlns="http://www.w3.org/2000/svg" role="presentation" viewBox="0 0 24 24"><path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" fill-rule="nonzero"/></svg>`;
const result = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9InByZXNlbnRhdGlvbiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTguMyA1LjcxYS45OTYuOTk2IDAgMDAtMS40MSAwTDEyIDEwLjU5IDcuMTEgNS43QS45OTYuOTk2IDAgMTA1LjcgNy4xMUwxMC41OSAxMiA1LjcgMTYuODlhLjk5Ni45OTYgMCAxMDEuNDEgMS40MUwxMiAxMy40MWw0Ljg5IDQuODlhLjk5Ni45OTYgMCAxMDEuNDEtMS40MUwxMy40MSAxMmw0Ljg5LTQuODljLjM4LS4zOC4zOC0xLjAyIDAtMS40eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+`;
describe('@geeeger/fn-svg-to-dataurl module', () => {
  it('should be result', () => {
    expect(svg2dataURL('string', svgstring)).toEqual(result);
  });
  it('should be result', () => {
    const div = document.createElement('div');
    div.innerHTML = svgstring;
    document.body.appendChild(div);
    expect(svg2dataURL('node', document.querySelector('svg') as SVGSVGElement)).toEqual(result);
  });
  it('should be empty', () => {
    expect(
      svg2dataURL('node', (document.querySelector('body') as unknown) as SVGSVGElement)
    ).toEqual('data:image/svg+xml;base64,');
  });
});
