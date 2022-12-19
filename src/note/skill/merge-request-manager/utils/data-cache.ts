import { CACHE_EXPIRED_TIME } from '../constants';

export default class DataCache {
  /**
   * 缓存存储
   */
  cacheStorage: Map<string, any> = new Map();

  /**
   * 缓存过期时间
   */
  expiredTime: number = 0;

  constructor(options: any = {}) {
    const { expiredTime = CACHE_EXPIRED_TIME } = options;
    this.expiredTime = expiredTime;
  }

  /**
   * 获取当前缓存，根据缓存策略决定是否能获取到
   */
  get(key: string) {
    const cache = this.cacheStorage.get(key);
    if (cache) {
      const { expiredTime, value } = cache;

      if (!expiredTime || expiredTime > new Date().getTime()) {
        return value;
      } else {
        this.cacheStorage.delete(key); // 过期移除缓存
      }
    }
  }

  /**
   * 设置缓存内容
   */
  set(key: string, value: any) {
    this.cacheStorage.set(key, {
      value,
      expiredTime: new Date().getTime() + this.expiredTime,
    });
  }
}
