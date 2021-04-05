/**
 *  实现new的功能
 * @description 实现要诀
 *   1. new 会产生一个新对象
 *   2. 产生的实例的__proto__指向Person的构造函数的
 *   3. 构造函数可能会显示返回
 */
function createInstance(){
  // 1. 创建一个对象，用来存放生成的实例
  const instance=new Object();
  const _constructor=[].shift.call(arguments)
  // 2. 将对象的原型指向函数
  instance.__proto__=_constructor.prototype;
  // 3. 执行函数，并将this指向对象实例
  const result=_constructor.apply(instance,arguments);
  return typeof result==='object'?result:instance;
}


function Person(name) {
  this.name = name;
  this.print = function () {
    console.log(this.name);
  };
}


const myP1=createInstance(Person,'xxg');
myP1.print();