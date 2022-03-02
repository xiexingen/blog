interface IUser {
  id: number;
  name?: string;
}

// 【正常】
const user: IUser = {
  id: 1,
};

// 【错误】会提示缺少name属性
// const user2: Required<IUser> = {
//   id: 1,
// };

// 【正常】
const user3: Required<IUser> = {
  id: 1,
  name: 'xxg',
};

export default () => {
  return '请查看代码';
};
