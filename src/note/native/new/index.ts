export default function myNew<T extends Function>(
  _constructor: T,
  ...args
): T['prototype'] {
  //1. 创建一个空对象
  const instance: any = new Object();
  //2. 将对象的隐式属性指向类型的构造函数
  instance.__proto__ = _constructor.prototype;
  //3. 执行函数，并修改this指向
  const result = _constructor.apply(instance, args);

  //4. 返回
  return typeof result === 'object' ? result : instance;
}
