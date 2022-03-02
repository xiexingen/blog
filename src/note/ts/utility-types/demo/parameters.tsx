function calc(v1: number, v2: number) {
  return v1 + v2;
}

//==> [v1: number, v2: number]
type t1 = Parameters<typeof calc>;

// ==> []
type t2 = Parameters<() => {}>;

// ==> [v1:any]
type t3 = Parameters<(v1) => {}>;

// ==> [arg: unknow]
type T4 = Parameters<<T>(arg: T) => T>;

// ==> [arg: Object]
type T5 = Parameters<<T extends Object>(arg: T) => T>;

export default () => {
  return '请查看代码';
};
