export default class EventEmitter {
  /**
   * 存储监听的事件列表
   */
  private events: Map<string, Function[]> = new Map();
  /**
   * 监听事件
   * @param event 事件名称
   * @param handler 触发时的处理函数
   */
  on(event: string, handler: Function) {
    if (this.events.has(event)) {
      this.events.get(event)?.push(handler);
    } else {
      this.events.set(event, [handler]);
    }
    // 方便链式调用
    return this;
  }

  /**
   * 监听一次性事件，触发完毕后会自动移除
   * @param event 事件名称
   * @param handler 触发时的处理函数
   */
  once(event: string, handler: Function) {
    const proxyHandler: Function = (...args) => {
      handler && handler(args);
      this.off(event, proxyHandler);
    };

    this.on(event, proxyHandler);
  }

  /**
   * 触发一个事件
   * @param event 事件名称
   * @param args 传递的数据
   */
  emit(event: string, ...args: any[]) {
    const events = this.events.get(event);
    if (events) {
      // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
      const handlers = events.slice();
      for (const handle of handlers) {
        handle && handle(...args);
      }
    }
  }

  /**
   * 解绑所有事件
   */
  off();
  /**
   * 解绑指定事件名的所有事件
   */
  off(event: string);
  off(event: string, handler: Function);
  /**
   * 解绑所有事件
   * @param event 事件名称
   * @param handler 事件处理程序
   */
  off(event?: string, handler?: Function) {
    //删除所哟监听的事件
    if (typeof event === 'undefined') {
      this.events.clear();
    }
    // 解绑指定事件名的所有事件
    else if (typeof handler === 'undefined') {
      this.events.delete(event);
    }
    // 解绑指定事件名的指定事件
    else {
      let handlers = this.events.get(event);
      if (handlers) {
        handlers = handlers.filter((m) => m !== handler);
        this.events.set(event, handlers);
      }
    }
  }
}
