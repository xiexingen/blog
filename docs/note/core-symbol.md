---
title: Symbol
order: 1
nav:
  title: 笔记
group:
  title: 核心方法
---

# Symbol

Symbol 是 JavaScript 中的原始数据类型之一,它表示一个唯一的、不可变的值,通常用作对象属性的键值。由于 Symbol 值是唯一的,因此可以防止对象属性被意外地覆盖或修改。

## 属性

### length

Symbol 构造函数的 length 属性值为 0

```js
console.log(Symbol.length); // 0
```

## 方法

### for

`Symbol.for()`方法会根据给定的字符串 key,返回一个已经存在的 symbol 值。如果不存在,则会创建一个新的 Symbol 值并将其注册到全局 Symbol 注册表中

```js
const symbol1 = Symbol.for('symbol1');
const symbol2 = Symbol.for('symbol1');

console.log(symbol1 === symbol2); // true
```

使用场景:当我们需要使用一个全局唯一的 Symbol 值时,可以使用 Symbol.for()方法来获取或创建该值。例如:在多个模块之间共享某个 Symbol 值时,我们可以使用 Symbol.for()来确保获取到的 Symbol 值是唯一的

### keyFor

`Symbol.keyFor()`方法会返回一个已经存在的 Symbol 值的 key。如果给定的 Symbol 值不存在于全局 Symbol 注册表中,则返回 undefined

```js
// 通过 Symbol.for 得到一个 Symbol值
const symbol1 = Symbol.for('symbol1');
// 通过 Symbol.keyFor 返回 Symbol值的 key
const key1 = Symbol.keyFor(symbol1);

const symbol2 = Symbol('symbol2');
const key2 = Symbol.keyFor(symbol2);

console.log(key1); // 'symbol1'
console.log(key2); // undefined
```

使用场景:当我们需要获取一个全局唯一的 Symbol 值的 key 时,可以使用 Symbol.keyFor()方法。但需要注意的是,只有在该 Symbol 值被注册到全局 Symbol 注册表中时,才能使用 Symbol.keyFor()方法获取到其 key

### Symbol

Symbol()函数会返回一个新的、唯一的 Symbol 值。可以使用可选参数 description 来为 Symbol 值添加一个描述信息

```js
const symbol1 = Symbol('symbol');
const symbol2 = Symbol('symbol');

console.log(symbol1 === symbol2); // false
```

使用场景:当我们需要使用一个唯一的 Symbol 值时,可以使用 Symbol()函数来创建该值。通常情况下,我们会将 Symbol 值用作对象属性的键值,以确保该属性不会被意外地覆盖或修改

### toStringTag

Symbol.toStringTag 是一个预定义好的 Symbol 值,用于定义对象在调用 Object.prototype.toString()方法时返回的字符串。如果一个对象定义了 Symbol.toStringTag 属性,则在调用该对象的 toString()方法时,

```js
class Foo {
  get [Symbol.toStringTag]() {
    return 'Bar';
  }
}

console.log(Object.prototype.toString.call(new Foo())); // '[object Bar]'
```

使用场景:当我们需要自定义一个对象在调用 Object.prototype.toString()方法时返回的字符串时,可以通过定义 Symbol.toStringTag 属性来实现

### toString

方法会返回 Symbol 值的字符串表示形式,该表示形式包含 Symbol()函数创建时指定的描述信息

我们都知道通过 Object.prototype.toString.call 去判断数据类型

```js
const symbol = Symbol('symbol');

console.log(symbol.toString()); // 'Symbol(symbol)'
```

使用场景:当我们需要将一个 Symbol 值转换成字符串时,可以使用 Symbol.prototype.toString()方法。

```jsx | pure
Object.prototype.toString.call(100);            // "[object Number]"
Object.prototype.toString.call(true);           // "[object Boolean]"
Object.prototype.toString.call('Hello World');  // "[object String]"
Object.prototype.toString.call([]]);            // "[object Array]"
Object.prototype.toString.call(undefined);      // "[object Undefined]"
Object.prototype.toString.call(null);           // "[object Null]"
Object.prototype.toString.call(function() {})    // [object Function]
Object.prototype.toString.call(function* () {}); // "[object GeneratorFunction]"
Object.prototype.toString.call(Promise.resolve()); // "[object Promise]"
Object.prototype.toString.call(Symbol())        // [object Symbol]
Object.prototype.toString.call(new Map());       // "[object Map]"
// ...
```

那么问题来了,如果我们想自定义一个数据类型的标签,应该怎么办?

引用官方的话: `Symbol.toStringTag`  是一个内置 `symbol`,通常作为对象的属性键使用,对应的属性值应该为字符串类型,这个字符串用来表示该对象的自定义类型标签,通常只有内置的  `Object.prototype.toString()`  方法会去读取这个标签并把它包含在自己的返回值里

### valueOf

Symbol.prototype.valueOf()方法会返回 Symbol 值本身

```js
const symbol = Symbol('symbol');

console.log(symbol.valueOf()); // Symbol(foo)
```

### iterator

Symbol.iterator 是一个预定义好的 Symbol 值,表示对象的默认迭代器方法。该方法返回一个迭代器对象,可以用于遍历该对象的所有可遍历属性

```js
const obj = { name: 'xxg', age: 31 };

for (const key of Object.keys(obj)) {
  console.log(key);
}
// Output:
// 'name'
// 'age'

for (const key of Object.getOwnPropertyNames(obj)) {
  console.log(key);
}
// Output:
// 'name'
// 'age'

for (const key of Object.getOwnPropertySymbols(obj)) {
  console.log(key);
}
// Output:
// No output

obj[Symbol.iterator] = function* () {
  for (const key of Object.keys(this)) {
    yield key;
  }
};

for (const key of obj) {
  console.log(key);
}
// Output:
// 'name'
// 'age'
```

使用场景:当我们需要自定义一个对象的迭代行为时,可以通过定义 Symbol.iterator 属性来实现。例如,对于自定义的数据结构,我们可以定义它的 Symbol.iterator 方法以便能够使用 for...of 语句进行遍历

### hasInstance

Symbol.hasInstance 是一个预定义好的 Symbol 值,用于定义对象的 instanceof 操作符行为。当一个对象的原型链中存在 Symbol.hasInstance 方法时,该对象可以被 instanceof 运算符使用

```js
class CustomArray {
  static [Symbol.hasInstance](obj) {
    return obj instanceof Array;
  }
}

console.log([] instanceof CustomArray); // true
console.log({} instanceof CustomArray); // false
```

使用场景: 当我们需要自定义一个对象的 instanceof 行为时,可以通过定义 Symbol.hasInstance 方法来实现

### isConcatSpreadable

Symbol.isConcatSpreadable 是一个预定义好的 Symbol 值,用于定义对象在使用 concat()方法时的展开行为。如果一个对象的 Symbol.isConcatSpreadable 属性为 false,则在调用 concat()方法时,该对象不会被展开

```js
const arr1 = [1, 2];
const arr2 = [3, 4];
const obj = { length: 2, 0: 5, 1: 6, [Symbol.isConcatSpreadable]: true };

console.log(arr1.concat(arr2)); // [1, 2, 3, 4]
console.log(arr1.concat(obj)); // [1, 2, 5, 6]
```

使用场景:当我们需要自定义一个对象在使用 concat()方法时的展开行为时,可以通过定义 Symbol.isConcatSpreadable 属性来实现

### toPrimitive

Symbol.toPrimitive 是一个预定义好的 Symbol 值,用于定义对象在被强制类型转换时的行为。如果一个对象定义了 Symbol.toPrimitive 方法,则在将该对象转换为原始值时,会调用该方法

```js
const obj = {
  valueOf() {
    return 1;
  },
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return 2;
    } else if (hint === 'string') {
      return 'foo';
    } else {
      return 'default';
    }
  },
};

console.log(+obj); // 2
console.log(`${obj}`); // 'foo'
console.log(obj + ''); // 'default'
```

使用场景:当我们需要自定义一个对象在被强制类型转换时的行为时,可以通过定义 Symbol.toPrimitive 方法来实现

### species

Symbol.species 是一个预定义好的 Symbol 值,用于定义派生对象的构造函数。如果一个对象定义了 Symbol.species 属性,则在调用该对象的派生方法（如 Array.prototype.map()）时,返回的新对象会使用该属性指定的构造函数

```js
class MyArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

const myArr = new MyArray(1, 2, 3);
const arr = myArr.map((x) => x * 2);

console.log(arr instanceof MyArray); // false
console.log(arr instanceof Array); // true
```

使用场景:当我们需要自定义一个派生对象的构造函数时,可以通过定义 Symbol.species 属性来实现

### match

Symbol.match 是一个预定义好的 Symbol 值,用于定义对象在调用 String.prototype.match()方法时的行为。如果一个对象定义了 Symbol.match 方法,则在调用该对象的 match()方法时,会调用该方法进行匹配

```js
class User {
  [Symbol.match](str) {
    return str.indexOf('user') !== -1;
  }
}

console.log('user-xxg'.match(new User())); // true
console.log('test'.match(new User())); // false
```

使用场景:当我们需要自定义一个对象在调用 String.prototype.match()方法时的行为时,可以通过定义 Symbol.match 方法来实现

### replace

Symbol.replace 是一个预定义好的 Symbol 值,用于定义对象在调用 String.prototype.replace()方法时的行为。如果一个对象定义了 Symbol.replace 方法,则在调用该对象的 replace()方法时,会调用该方法进行替换

```js
class CustomFilter {
  [Symbol.replace](str, replacement) {
    return str.replace('filter', replacement);
  }
}

console.log('filter-content'.replace(new CustomFilter(), 'replaced')); // 'replaced-content'
console.log('test'.replace(new CustomFilter(), 'replaced')); // 'test'
```

使用场景: 当我们需要自定义一个对象在调用 String.prototype.replace()方法时的行为时,可以通过定义 Symbol.replace 方法来实现。

### search

Symbol.search 是一个预定义好的 Symbol 值,用于定义对象在调用 String.prototype.search()方法时的行为。如果一个对象定义了 Symbol.search

```js
class CustomSearch {
  [Symbol.search](str) {
    return str.indexOf('custom');
  }
}

console.log('custom-content'.search(new CustomSearch())); // 0
console.log('content'.search(new CustomSearch())); // -1
```

使用场景:当我们需要自定义一个对象在调用 String.prototype.search()方法时的行为时,可以通过定义 Symbol.search 方法来实现

### split

Symbol.split 是一个预定义好的 Symbol 值,用于定义对象在调用 String.prototype.split()方法时的行为。如果一个对象定义了 Symbol.split 方法,则在调用该对象的 split()方法时,会调用该方法进行分割

```js
class CustomSplit {
  [Symbol.split](str) {
    return str.split(' ');
  }
}

console.log('content1 content2 content3'.split(new CustomSplit())); // ['content1', 'content2', 'content3']
console.log('content1,content2,content3'.split(new CustomSplit())); // ['content1,content2,content3']
```

使用场景:当我们需要自定义一个对象在调用 String.prototype.split()方法时的行为时,可以通过定义 Symbol.split 方法来实现

### iterator

Symbol.iterator 是一个预定义好的 Symbol 值,用于定义对象在被遍历时的行为。如果一个对象定义了 Symbol.iterator 方法,则可以使用 for...of 循环、扩展运算符等方式来遍历该对象

```js
class CustomIterator {
  constructor() {
    this.items = ['foo', 'bar', 'baz'];
  }

  *[Symbol.iterator]() {
    for (const item of this.items) {
      yield item;
    }
  }
}

const foo = new CustomIterator();

for (const item of foo) {
  console.log(item);
}

// 'foo'
// 'bar'
// 'baz'
```

### unscopables

Symbol.unscopables 是一个预定义好的 Symbol 值,用于定义对象在使用 with 语句时的行为。如果一个对象定义了 Symbol.unscopables 属性,则在使用 with 语句时,该对象的指定属性将不会被绑定到 with 语句的环境中

```js
const obj = {
  a: 1,
  b: 2,
  c: 3,
  [Symbol.unscopables]: {
    c: true,
  },
};

with (obj) {
  console.log(a); // 1
  console.log(b); // 2
  console.log(c); // ReferenceError: c is not defined
}
```

使用场景:由于 with 语句会带来一些安全性问题和性能问题,因此在实际开发中不建议使用。但是,如果确实需要使用 with 语句,可以通过定义 Symbol.unscopables 属性来避免某些属性被误绑定到 with 语句的环境中

## 总结

Symbol 是 ES6 中新增的一种基本数据类型,用于表示独一无二的值。Symbol 值在语言层面上解决了属性名冲突的问题,可以作为对象的属性名使用,并且不会被意外覆盖。除此之外,Symbol 还具有以下特点

- Symbol 值是唯一的,每个 Symbol 值都是独一无二的,即使是通过相同的描述字符串创建的 Symbol 值,也不会相等
- Symbol 值可以作为对象的属性名使用,并且不会被意外覆盖;
- Symbol 值可以作为私有属性来使用,因为无法通过对象外部访问对象中的 Symbol 属性;
- 在使用 Symbol 时需要注意以下几点：

- Symbol 值不能使用 new 运算符创建;
- Symbol 值可以通过描述字符串来创建,但是描述字符串并不是 Symbol 值的唯一标识符;
- Symbol 属性在使用时需要用[]来访问,不能使用.运算符;
- 同一对象中的多个 Symbol 属性是独立的,它们之间不会互相影响。

总之,Symbol 是一个非常有用的数据类型,在 JavaScript 中具有非常广泛的应用。使用 Symbol 可以有效地避免属性名冲突问题,并且可以为对象提供一些高级功能。熟练掌握 Symbol,有助于我们写出更加健壮、高效和可维护的 JavaScript 代码

## 代码演示

### toString

<code src="./_demos/core/symbol/demo/toString.tsx"></code>
