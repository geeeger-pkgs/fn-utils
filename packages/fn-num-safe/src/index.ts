export default function safeNum(min?: number, max?: number) {
  return function (input: number | string): number {
    const num = Number(input) || 0;
    if (typeof min !== 'undefined') {
      if (num < min) {
        return min;
      }
    }
    if (typeof max !== 'undefined') {
      if (num > max) {
        return max;
      }
    }
    return num;
  };
}
