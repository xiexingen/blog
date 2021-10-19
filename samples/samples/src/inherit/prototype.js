// 定义形状基类
function Shap() {
  this.type = '形状';
}

// 给基类原型上添加一个绘制的方法
Shap.prototype.draw = function () {
  console.log(`绘制一个:${this.type}`);
};

// 定义一个圆形,需要继承自Shap基类
function Circle() {
  this.type = '圆形';
}

console.log(
  '-------------------------原型链继承-----------------------------------',
);
/**
 * 原型链继承实现
 */
// 1.通过原型链来继承Shap
Circle.prototype = new Shap();
// 2. 将子类的原型的constructor指向Shap
Circle.prototype.constructor = Circle;

var circle = new Circle();
circle.draw();
console.log(Circle.prototype.constructor);
