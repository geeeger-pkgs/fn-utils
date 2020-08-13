type replacer = (substring: string, ...args: any[]) => string;

function replaceWtih(
  searchValue: string | RegExp,
  replacer: string | replacer
): (str: string) => string {
  return (str: string): string => str.replace(searchValue, replacer as string);
}

export default replaceWtih;
