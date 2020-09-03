const toString = Object.prototype.toString;

export default function is(type: string, source: unknown): boolean {
  return toString.call(source) === `[object ${type}]`;
}
