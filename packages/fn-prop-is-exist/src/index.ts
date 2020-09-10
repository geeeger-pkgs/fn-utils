/* eslint-disable @typescript-eslint/no-explicit-any */
const Undef = undefined;

function ifPropIsExist(path: string, target: any): boolean {
  const namespaces = path.split('.');
  try {
    let obj = target;
    let namespace: string | undefined;
    while ((namespace = namespaces.shift())) {
      obj = obj[namespace];
      if (obj === Undef) {
        return false;
      }
    }
  } catch (e) {
    return false;
  }
  return true;
}

export default ifPropIsExist;
