/* eslint-disable @typescript-eslint/no-explicit-any */
import is from '@geeeger/fn-is';
const Undef = undefined;

type PropType = 'Number' | 'String' | 'Null' | 'Array' | 'Object' | 'Boolean';

function ifPropIsExist(path: string, target: any, type?: PropType): boolean {
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
    if (type) {
      return is(type, obj);
    }
  } catch (e) {
    return false;
  }
  return true;
}

export default ifPropIsExist;
