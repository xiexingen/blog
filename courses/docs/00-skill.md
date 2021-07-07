# js 的奇淫异技

## 金额格式化

```js
function moneyFormat(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const money = moneyFormat(100000);
// money => "100,000"
```

## 随机 Id

```js
// length 小于10
function randomId(length) {
  return Math.random().toString(36).substr(3, length);
}
const random = randomId(10);
// random => "tvoeaa8klr"
```

## 星级评分

```js
// value 0-5
function rate(value) {
  return "★★★★★☆☆☆☆☆".slice(5 - value, 10 - value);
}
const r = rate(1);
// r => "★☆☆☆☆"
```

## URL 查询参数

```js
const params = new URLSearchParams(location.search.replace(/\?/gi, "")); // location.search = "?name=xxg&sex=male"
params.has("name"); // true
params.get("sex"); // "male"
```

## 精确小数位

```js
function roundNumer(number, decimal) {
  return Math.round(number * 10 ** decimal) / 10 ** decimal;
}
const num = roundNumer(1.66, 1);
// num => 1.7
```

## 范围内随机

```js
// 包括起始值
function rangeRandom(min,max){
 return Math.floor(Math.random() * (max - min + 1)) + min
}
const num = rangeRandom(10, 100);

```

## 数据类型判断

```js
function type(obj){
 return Object.prototype.toString.call(obj).replace(/\[object (\w+)\]/, "$1").toLowerCase()
}
type("young"); // "string"
type(1234); // "number"

```
