Function.prototype["myCall"] = function (ctx, ...args) {
  // 未传ctx上下文，或者传的是null和undefined等场景
  if (!ctx) {
    ctx = typeof window !== "undefined" ? window : global;
  }
  ctx = Object(ctx);
  // 生成一个唯一的key
  const fnName = Symbol();
  // 这里的this就是要调用的函数
  ctx[fnName] = this;
  // 将args展开，并调用fnname 此时fnName函数内部的this也就是ctx了
  const result = ctx[fnName](...args);
  // 用完后将fnName从上下文ctx删除
  delete ctx[fnName];
  // 返回结果
  return result;
};

// 注: 与call的区别就是args为数组(不需要展开)
Function.prototype["myApply"] = function (ctx, args = []) {
  // 未传ctx上下文，或者传的是null和undefined等场景
  if (!ctx) {
    ctx = typeof window !== "undefined" ? window : global;
  }
  ctx = Object(ctx);
  // 生成一个唯一的key
  const fnName = Symbol();
  // 这里的this就是要调用的函数
  ctx[fnName] = this;
  // 将args展开，并调用fnname 此时fnName函数内部的this也就是ctx了
  const result = ctx[fnName](...args);
  // 用完后将fnName从上下文ctx删除
  delete ctx[fnName];
  // 返回结果
  return result;
};

Function.prototype["myBind"] = function (ctx, ...args) {
  const fn = this;
  return function (...innerArgs) {
    return fn.myCall(ctx, [...args, ...innerArgs]);
  };
};
