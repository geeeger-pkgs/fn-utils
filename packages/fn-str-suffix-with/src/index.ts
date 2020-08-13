export default function suffixWith(suffix: string) {
  return (str: string): string => str + suffix;
}
