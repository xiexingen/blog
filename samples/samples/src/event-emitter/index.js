class EventEmitter {
  constructor() {
    this.cache = {};
  }

  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn);
    } else {
      this.cache[name] = [fn];
    }
  }

  off(name, fn) {
    const tasks = this.cache[name];
    if (tasks) {
      const index = tasks.findIndex((f) => f === fn);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
    }
  }

  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
      const tasks = this.cache[name].slice();
      for (let fn of tasks) {
        fn(...args);
      }
      if (once) {
        delete this.cache[name];
      }
    }
  }
}

// 调用
let eventBus = new EventEmitter();

function f1(name, age) {
  console.log(`f1:${name} ${age}`);
}

function f2(name, age) {
  console.log(`f2,${name} ${age}`);
}

// 监听aa 触发f1
eventBus.on('aaa', f1);
// 监听aa 触发f2
eventBus.on('aaa', f2);

// 触发aa事件，并传递参数
eventBus.emit('aaa', false, 'XXG', 20);

// 取消监听f2
eventBus.off('aaa', f2);

// 再次触发aa事件
eventBus.emit('aaa', false, 'XXG', 20);
