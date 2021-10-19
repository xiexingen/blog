// 定义形状基类
function Shap(width, height) {
  this.height = height;
  this.width = width;
}

// 给基类原型上添加一个绘制的方法
Shap.prototype.draw = function () {
  console.log(`绘制一个:宽:${this.width},高:${this.height}的${this.type}`);
};

// 定义一个圆形,需要继承自Shap基类
function Circle(width, height) {
  Shap.call(this, width, height);
  this.type = '圆形';
}

const circle = new Circle(100, 100);
console.log(circle);
// 通过构造函数call形式是假的继承，只是单纯的调用了下基类函数，不能调用原型上的方法，只是简写了部分参数而已
// circle.draw();
