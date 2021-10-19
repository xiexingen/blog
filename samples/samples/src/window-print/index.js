/**
 * 判断是否是指定对象的实例
 * @description 实现要领
 *   - 判断构造函数的prototype属性是否出现在实例的原型链上
 * @param {any} instance  要判断的实例对象
 * @param {any} type  要判断的类型
 * @returns
 */
function isInstanceOf(instance, type) {
  let instanceProto = instance.__proto__;
  while (instanceProto) {
    if (instanceProto === type.prototype) {
      return true;
    }
    instanceProto = instanceProto.__proto__;
  }
  return false;
}

function Person(name) {
  this.name = name;
  this.print = function () {
    console.log(this.name);
  };
}

const p1 = new Person('xxg');
// console.log(p1 instanceof Person)

console.log(isInstanceOf(p1, Person));
