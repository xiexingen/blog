type TValue = number | boolean | null | undefined | 'xxg';

const v: Exclude<TValue, null | boolean> = 'xxg';

// 【错误】 不允许'xxg'
// const v2: Exclude<TValue,null|'xxg'> = 'xxg'

export default () => {
  return '请查看代码';
};
