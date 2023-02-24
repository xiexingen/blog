interface IUser {
  id: number;
  name: string;
}

const user: Readonly<IUser> = {
  id: 1,
  name: 'xxg',
};

// 【报错】 无法分配到 "name" ，因为它是只读属性
// user.name='xxg'

export default () => {
  return '请查看代码';
};
