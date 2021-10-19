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
  Shap.call(this, width, height); // 弥补原型链继承不能给父类构造函数传递参数的缺陷
  this.type = '圆形';
}
Circle.prototype = new Shap(); // 为了实例对象可以访问到父类原型中的方法
Circle.prototype.constructor = Circle; // 修正Circle中constructor

const circle = new Circle(100, 100);
circle.draw();
