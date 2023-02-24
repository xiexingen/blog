interface IUser {
  id: number;
  name: string;
}

const user: IUser = {
  id: 1,
  name: 'xxg',
};

// 通过Partial约束第二个参数可以传入任意内容
function patchUser(user: IUser, partialUser: Partial<IUser>) {
  return {
    ...user,
    ...partialUser,
  };
}

patchUser(user, { name: 'xxg-plus' });
patchUser(user, { id: 3 });

export default () => {
  return '请查看代码';
};
