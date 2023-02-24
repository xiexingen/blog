class User {
  name: string;
  age: number;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//==> User
type t1 = InstanceType<typeof User>;

// ==> String
type t2 = InstanceType<typeof String>;

//【错误】类型“string”不满足约束“abstract new (...args: any) => any”
// type t3= InstanceType<string>

export default () => {
  return '请查看代码';
};
