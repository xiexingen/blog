import { noop } from 'lodash';

export interface IPoolOption {
  /**
   * 最大容量(达到该容量会触发执行)
   */
  maxSize: number;
  /**
   * 轮训的时间间隔(超过该时间也会自动执行)
   */
  interval: number;
  /**
   * 执行的方法
   */
  flushHandler: typeof noop;
}

export default class Pool {
  /**
   * 最大容量(达到该容量会触发执行)
   */
  private maxSize: number;
  /**
   * 轮训的时间间隔(超过该时间也会自动执行)
   */
  private interval: number;
  /**
   * 执行的方法
   */
  private flushHandler: typeof noop;
  /**
   * 保存定时器的 id
   */
  private timer?: NodeJS.Timeout;
  /**
   * 存储参数使用的队列
   */
  private queue: Set<any>;

  constructor(options: Partial<IPoolOption> = {}) {
    const { maxSize = 1, interval = 30, flushHandler = noop } = options;

    this.maxSize = maxSize;
    this.interval = interval;
    this.flushHandler = flushHandler;
    this.timer = undefined;
    this.queue = new Set();
  }

  get size() {
    return this.queue.size;
  }

  get isEmpty() {
    return this.queue.size === 0;
  }

  /**
   * 堆栈是否已满
   */
  get isFull() {
    return this.queue.size >= this.maxSize;
  }

  /**
   * 获取当前队列列表
   */
  getQueue() {
    return [...this.queue];
  }

  /**
   * 往队列添加数据
   */
  add(item: any) {
    this.queue.add(item);

    if (!this.isFull) {
      if (this.timer === undefined) {
        this.timer = setTimeout(this.flush.bind(this), this.interval);
      }
    } else {
      this.flush();
    }
  }

  /**
   * 执行所有队列并清空
   */
  flush() {
    this.flushHandler([...this.queue]);
    if (this.timer !== undefined) {
      clearTimeout(this.timer);
    }
    this.timer = undefined;
    this.queue.clear();
  }
}
