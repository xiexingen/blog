/**
 * 实现Function的原型方法call
 *  @param {thisArgs} this指向
 *  @param {...argArray} 传入的多个参数,非数组
 */
Function.prototype.myCall = function (thisArgs, ...argArray) {
  thisArgs = thisArgs || window;
  thisArgs.fn = this;
  const result = thisArgs.fn(argArray);
  delete thisArgs.fn;
  return result;
};

/**
 * 实现Function的原型方法apply
 *  @param {thisArgs} this指向
 *  @param {Array} 传入的数组参数
 */
Function.prototype.myApply = function (thisArgs, argArray) {
  thisArgs = thisArgs || window;
  thisArgs.fn = this;
  const result = thisArgs.fn(argArray);
  delete thisArgs.fn;
  return result;
};

/**
 * 实现Function的原型方法bind
 *  @example
 *    xx.myBind({})
 *    xx.myBind({},arg1,arg2)
 *  @param {context} this指向
 */
Function.prototype.myBind = function (context) {
  const self = this;
  const args = Array.prototype.slice.call(arguments, 1);
  return function () {
    const bindArgs = Array.prototype.slice.call(arguments);
    self.apply(context, args.concat(bindArgs));
  };
};

const obj = {
  name: 'hello',
};

function print() {
  console.log(`name:${this.name},params:${[...arguments].join(',')}`);
  return 100;
}

/**
 * call调用
 */
console.log('----------myCall调用-------------');
print.myCall(null, 22);
print.myCall(obj, 22);
print.myCall(obj, 22, 33);

/**
 * apply 调用
 */
console.log('----------myApply调用-------------');
print.myApply(null, [22]);
print.myApply(obj, [22]);
print.myApply(obj, [22, 33, 44]);

/**
 * bind 调用
 */
console.log('----------myBind调用-------------');
const newPrint = print.myBind(obj, 1111);
newPrint(22);
newPrint(22, 33);
