const text = {
  a: 1,
  b: 2,
  c: 3,
};

// iterator通过Symbol.iterator实现
text[Symbol.iterator] = function () {
  const _this = this;
  return {
    index: -1,
    next() {
      const arr = Object.keys(_this);
      if (this.index < arr.length) {
        this.index++;
        return {
          value: _this[arr[this.index]],
          done: false,
        };
      } else {
        return {
          value: undefined,
          done: true,
        };
      }
    },
  };
};

for (const key of text) {
  console.log(key);
}
