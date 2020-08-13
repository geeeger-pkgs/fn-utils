function identity(something: any) {
  return something;
}

export default function mapEach<T = any>(fnMaps: ((item: any) => any)[]) {
  return (array: any[]): T[] =>
    array.map((item: any, index: number) => (fnMaps[index] || identity)(item));
}
