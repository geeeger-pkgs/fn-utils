export default function rangeWith(min: number, max: number) {
  return (input: number): number => Math.min(Math.max(input, min), max);
}
