function calc(v1: number, v2: number) {
  return v1 + v2;
}

declare function print(): { a: string; b: string };

//==> number
type t1 = ReturnType<typeof calc>;

// ==>  void
type t2 = ReturnType<() => void>;

// ==>  { a: string;b: string;}
type t3 = ReturnType<typeof print>;

export default () => {
  return '请查看代码';
};
