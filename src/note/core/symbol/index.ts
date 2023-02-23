function create(o: Object | null): any;
function create(
  o: Object | null,
  props: PropertyDescriptorMap & ThisType<any>,
): any;
function create(
  o: Object | null,
  props?: PropertyDescriptorMap & ThisType<any>,
): any {
  if (!['object', 'function'].includes(typeof o)) {
    throw new TypeError(`Object prototype may only be an Object or null: ${o}`);
  }
  // 创建构造函数
  const Ctor = function () {};

  // 赋值原型
  Ctor.prototype = o;

  // 创建实例
  const obj = new Ctor();

  // 支持第二个参数
  if (props) {
    Object.defineProperties(obj, props);
  }
  if (o === null) {
    obj.__proto__ = null;
  }
  return obj;
}

export default create;
