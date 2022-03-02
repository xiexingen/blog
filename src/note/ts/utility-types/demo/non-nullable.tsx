type TValue = number | boolean | null | undefined | 'xxg';

const v: NonNullable<TValue> = 'xxg';

// 【错误】 不允许null类型
// const v: NonNullable<TValue> = null;

export default () => {
  return '请查看代码';
};
