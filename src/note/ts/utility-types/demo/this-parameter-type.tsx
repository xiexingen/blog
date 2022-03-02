function increase(this: number) {
  return this + 1;
}

function toIncrease(n: ThisParameterType<typeof increase>) {
  return increase.apply(n);
}

toIncrease(1);

export default () => {
  return '请查看代码';
};
