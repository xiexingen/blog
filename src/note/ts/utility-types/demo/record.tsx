interface IUser {
  id: number;
  name: string;
}

const user: Record<string, IUser> = {
  first: { id: 1, name: 'xxg' },
  second: { id: 2, name: 'xxg2' },
};

// 另类写法
const user2: { [key: string]: IUser } = {
  first: { id: 1, name: 'xxg' },
  second: { id: 2, name: 'xxg2' },
};

// 还可以约束Key的范围值
const user3: Record<'first' | 'second', IUser> = {
  first: { id: 1, name: 'xxg' },
  second: { id: 2, name: 'xxg2' },
  // 【错误】last不在K限制范围内
  // last:{id:2,name:'xxg2'},
};

export default () => {
  return '请查看代码';
};
