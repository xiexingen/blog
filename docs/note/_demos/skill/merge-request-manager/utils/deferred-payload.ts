import { noop, uniqueId } from 'lodash';

class DeferredPayload {
  private __value: any = null;

  id = uniqueId();

  // 关联的请求ID
  correlationIds: Array<string> = [];

  promise: Promise<any> | null = null;

  resolve: typeof noop = noop;

  reject: typeof noop = noop;

  constructor(value: any) {
    this.__value = value;
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }

  /**
   * 对当前值进行序列化
   */
  toString() {
    return JSON.stringify(this.__value);
  }

  /**
   * 获取当前 payload 中的值
   */
  toData() {
    return this.__value;
  }
}

export default DeferredPayload;
