export default class MyPromise {
  /**
   * 等待所有执行完成
   * @param promises 要执行的promise
   */
  static all(promises: MyPromise[]) {
    return new MyPromise((resolve, reject) => {
      let count = 0;
      let result: any[] = [];
      const len = promises.length;
      promises.forEach((promise, index) => {
        // TODO 替换成MyPromise的静态方法
        Promise.resolve(promise)
          .then((res) => {
            count += 1;
            result[index] = res;
            if (count === len) {
              resolve(result);
            }
          })
          .catch(reject);
      });
    });
  }
  /**
   * 任何一个完成/异常 都会结束
   * @param promises
   */
  static race(promises: MyPromise[]) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise, index) => {
        // TODO 替换成MyPromise的静态方法
        Promise.resolve(promise)
          .then((res) => {
            resolve(res);
          })
          .catch(reject);
      });
    });
  }
  /**
   * 存储实际值，Promise.then接受或者catch接收的值，默认为undefined
   */
  private value: any = undefined;
  /**
   * 状态，默认为 pending
   */
  private status: 'pending' | 'success' | 'failure' = 'pending';
  /**
   * 成功的函数队列
   */
  private successQueue: Array<any> = [];
  /**
   * 失败的函数队列
   */
  private failureQueue: Array<any> = [];

  constructor(
    executor: (
      resolve: (value: unknown) => void,
      reject: (value: unknown) => void,
    ) => void,
  ) {
    const resolve = (value) => {
      const doResolve = () => {
        // 将缓存的函数队列挨个执行，并且将状态和值设置好
        if (this.status === 'pending') {
          this.status = 'success';
          this.value = value;
          while (this.successQueue.length) {
            // 获取队列中的第一个
            const callback = this.successQueue.shift();
            callback && callback(this.value);
          }
        }
      };
      setTimeout(doResolve, 0);
    };

    const reject = (value) => {
      const doReject = () => {
        if (this.status === 'pending') {
          this.status = 'failure';
          this.value = value;
          while (this.failureQueue.length) {
            const callback = this.failureQueue.shift();
            callback && callback(this.value);
          }
        }
      };
      setTimeout(doReject, 0);
    };

    executor(resolve, reject);
  }

  /**
   * Promise的then 返回的是一个新的Promise
   * @param success 成功的回调
   * @param failure 失败的回调
   */
  then(success = (value) => value, failure = (value) => value) {
    return new MyPromise((resolve, reject) => {
      // 包装成功回调函数
      const successFn = (value) => {
        try {
          const result = success(value);
          // // 如果结果值是一个Promise，那么需要将这个Promise的值继续往下传递，否则直接resolve即可
          result instanceof MyPromise
            ? result.then(resolve, reject)
            : resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      // 包装失败回调函数
      const failureFn = (value) => {
        try {
          const result = failure(value);
          result instanceof MyPromise
            ? result.then(resolve, reject)
            : resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      // 如果Promise的状态还未结束，则将成功和失败的函数缓存到队列里
      if (this.status === 'pending') {
        this.successQueue.push(successFn);
        this.failureQueue.push(failureFn);
      }
      // 如果已经成功结束，直接执行成功回调函数
      else if (this.status === 'success') {
        success(this.value);
      }
      // 失败的情况，直接执行失败回调函数
      else {
        failure(this.value);
      }
    });
  }

  catch() {
    throw new Error('尚未实现catch');
  }
}

/**
 * 一个可以控制并发数量的调度器
 */
export class Scheduler {
  // 任务队列
  private queue: any[] = [];
  // 限制的并发数
  private limitConcurrent: number = 2;
  // 当前执行中的任务数
  private runCount: number = 0;
  constructor(limitConcurrent = 2) {
    this.limitConcurrent = limitConcurrent;
  }

  add(promise) {
    this.queue.push(promise);
    // 每次添加的时候都会尝试去执行任务
    this.runQueue();
  }

  runQueue() {
    // 队列中还有任务才会被执行
    if (this.queue.length && this.runCount < this.limitConcurrent) {
      // 执行先加入队列的函数
      const promise = this.queue.shift();
      // 开始执行任务 记数+1
      this.runCount += 1;
      // TODO 需要做异常处理
      promise().then(() => {
        // 任务执行完毕 计数-1
        this.runCount -= 1;
        // 尝试下一次任务
        this.runQueue();
      });
    }
  }
}
