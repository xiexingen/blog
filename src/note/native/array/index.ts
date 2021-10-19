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
  // this只想调用的数组
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
