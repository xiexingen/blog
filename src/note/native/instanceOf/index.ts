/**
 * 判断某个对象是否是某个构造函数的实例【递归形式实现】
 * @param obj 要判断的实例对象
 * @param func 构造函数
 */
export function myInstanceOf(obj: Object, func: Function) {
  if (obj === null || typeof obj !== 'object') {
    return false;
  }
  let proto = Object.getPrototypeOf(obj);
  // 判断obj的原型是否与func的构造函数相等
  if (proto === func.prototype) {
    return true;
  }
  // 如果为null表示已经到了最顶层Object了
  else if (proto === null) {
    return false;
  }
  // 继续往上层找
  else {
    return myInstanceOf(proto, func);
  }
}

/**
 * 判断某个对象是否是某个构造函数的实例【遍历实现】
 * @param obj 要判断的实例对象
 * @param func 构造函数
 */
export function myInstanceOf2(obj: Object, func: Function) {
  if (obj === null || typeof obj !== 'object') {
    return false;
  }
  let proto = obj;
  // 注意:这里不是死循环，当proto为null的时候 while结束
  while ((proto = Object.getPrototypeOf(proto))) {
    if (proto === func.prototype) {
      return true;
    }
  }
  return false;
}
