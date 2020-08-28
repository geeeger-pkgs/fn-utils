// see https://github.com/microsoft/TypeScript/pull/39094
export default function curry<T extends unknown[], U extends unknown[], R>(
  f: (...args: [...T, ...U]) => R,
  ...a: T
) {
  return (...b: U): R => f(...a, ...b);
}
