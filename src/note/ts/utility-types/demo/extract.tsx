type TValue = number | boolean | null | undefined | 'xxg';

const v: Extract<TValue, null | boolean> = false;

// 【错误】 不允许'xxg'
// const v2: Extract<TValue,null|'xxg'> = 'xxg'

export default () => {
  return '请查看代码';
};
