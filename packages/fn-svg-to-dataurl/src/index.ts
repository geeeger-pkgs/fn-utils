import curry from '@geeeger/fn-curry-it';
import is from '@geeeger/fn-is';

function toDataURL(svgString: string): string {
  const header = 'data:image/svg+xml;base64,';
  return header + btoa(unescape(encodeURIComponent(svgString)));
}

const isSVG = curry(is, 'SVGSVGElement');

const isStr = curry(is, 'String');

export default function svg2dataURL(
  type: 'node' | 'string',
  source: SVGSVGElement | string
): string {
  if (type === 'node' && isSVG(source)) {
    const serializer = new XMLSerializer();
    return toDataURL(serializer.serializeToString(source as SVGSVGElement));
  }
  if (type === 'string' && isStr(source)) {
    return toDataURL(source as string);
  }
  return toDataURL('');
}
