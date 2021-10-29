// 实现reduce
Array.prototype['myReduce'] = function (callback, initValue) {
  if (typeof callback !== 'function') {
    throw `${callback} is not a function`;
  }
  debugger;
  let pre = initValue;
  let i = 0;
  const length = this.length;
  // 当没有传递初始值的时候，用第一个作为初始值
  if (typeof pre === 'undefined') {
    pre = this[0];
    i = 1;
  }
  while (i < length) {
    if (i in this) {
      pre = callback(pre, this[i], i, this);
    }
    i++;
  }
  return pre;
};
