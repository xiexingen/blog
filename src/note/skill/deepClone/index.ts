const isObject = (obj) => typeof obj === 'object' && obj !== null;

/**
 * 深度克隆对象
 * @param target 要克隆的对象
 * @param cache 缓存(系统使用)
 */
function clone<T extends Object = any>(target: T, cache = new Map()): T {
  if (isObject(target)) {
    // 解决循环引用
    const cacheTarget = cache.get(target);
    // 已经存在直接返回，无需再次解析
    if (cacheTarget) {
      return cacheTarget;
    }
    let cloneTarge = (Array.isArray(target) ? [] : ({} as unknown)) as T;

    cache.set(target, cloneTarge);
    for (const key in target) {
      if (target.hasOwnProperty(key)) {
        const value = target[key];
        cloneTarge[key] = isObject(value) ? clone(value, cache) : value;
      }
    }
    return cloneTarge;
  } else {
    return target;
  }
}

export default function deepClone<T = any>(target: T): T {
  return clone(target);
}
