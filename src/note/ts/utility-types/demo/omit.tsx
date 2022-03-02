interface IUser {
  id: number;
  name: string;
  age: number;
}

// 基于IUser定义一个新类型，里面排除掉age
const user: Omit<IUser, 'age'> = {
  id: 1,
  name: 'xxg',
  // 【报错】没有age
  // age:22
};

export default () => {
  return '请查看代码';
};
