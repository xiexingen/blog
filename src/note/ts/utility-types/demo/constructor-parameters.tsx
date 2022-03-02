class User {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
}

//==> [name:string]
type t1 = ConstructorParameters<typeof User>;

// ==>  [message?: string | undefined]
type t2 = ConstructorParameters<ErrorConstructor>;

export default () => {
  return '请查看代码';
};
