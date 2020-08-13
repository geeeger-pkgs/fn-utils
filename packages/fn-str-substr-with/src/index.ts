export default function substrWith(from: number, length?: number) {
  return (input: string): string => input.substr(from, length);
}
