/**
 * 实现原生forEach方法
 * @param callback 回调函数，参数为当前原生
 * @param thisArg this
 * @example [].myForEach(item=>{})
 * @example [].myForEach((item,index,arr)=>{})
 */
Array.prototype['myForEach'] = function (callback, thisArg) {
  if (this === null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }
  // this指向调用的数组
  const arr = Object(this);
  const len = arr.length >>> 0;
  let index = 0;
  while (index < len) {
    if (index in arr) {
      callback.call(thisArg, arr[index], index, arr);
    }
    index++;
  }
};
/**
 * 实现原型中的map方法
 * @param callback 回调函数，参数为当前原生
 * @param thisArg this
 * @example [].myMap(item=>{})
 * @example [].myMap((item,index,arr)=>{})
 */
Array.prototype['myMap'] = function (callback, thisArg) {
  if (this === null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }
  const arr = Object(this);
  const len = arr.length >>> 0;
  let index = 0,
    result: any[] = [];
  while (index < len) {
    if (index in arr) {
      result[index] = callback.call(thisArg, arr[index], index, arr);
    }
    index++;
  }
  return result;
};

/**
 * 实现原型中的filter
 * @param {function} callback
 * @param {any} thisArg
 */
Array.prototype['myFilter'] = function (callback, thisArg) {
  if (this === null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }
  const arr = Object(this);
  const len = arr.length >>> 0;
  let index = 0,
    result: any[] = [];
  while (index < len) {
    if (index in arr) {
      if (callback.call(thisArg, arr[index], index, arr)) {
        result.push(arr[index]);
      }
    }
    index++;
  }
  return result;
};

/**
 * 实现原型中的some
 * @param {function} callback
 * @param {any} thisArg
 */
Array.prototype['mySome'] = function (callback, thisArg) {
  if (this === null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }
  const arr = Object(this);
  const len = arr.length >>> 0;
  let index = 0;
  while (index < len) {
    if (index in arr) {
      if (callback.call(thisArg, arr[index], index, arr)) {
        return true;
      }
    }
    index++;
  }
  return false;
};

/**
 * 实现原型中的reduce
 * @param {function} callback
 * @param {any} initValue 可空，如果空则会使用数组中第一个非空的元素作为初始值
 * @param {any} thisArg
 */
Array.prototype['myReduce'] = function (callback, initValue, thisArg) {
  if (this === null) {
    throw new TypeError('this is null or not defined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(`${callback} is not a function`);
  }
  const arr = Object(this);
  const len = arr.length >>> 0;
  let index = 0,
    acc = initValue;
  // 说明没传递了initValue,使用数组中第一个非空的元素
  if (arguments.length === 1) {
    while (index < len && !(index in arr)) {
      index++;
    }
    if (index > len) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    acc = arr[index++];
  }
  while (index < len) {
    if (index in arr) {
      acc = callback.call(thisArg, acc, arr[index], arr);
    }
    index++;
  }
  return acc;
};
