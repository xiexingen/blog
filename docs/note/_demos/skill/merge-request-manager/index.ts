import { noop } from 'lodash';
import Pool from './utils/pool';
import type { IPoolOption } from './utils/pool';
import DeferredPayload from './utils/deferred-payload';
import DataCache from './utils/data-cache';
import { CACHE_POLICY } from './constants';
import defaultConfig from './config';

export default class PermissionManager {
  dataCache: DataCache;

  requestPendingMap: Map<string, any> = new Map();

  pool: Pool;

  cachePolicy: string;

  fallbackResult: boolean;

  remoteRequestHandler: typeof noop;

  static CACHE_POLICY = CACHE_POLICY;

  constructor(options: Partial<typeof defaultConfig> = {}) {
    const currentOptions = Object.assign({}, defaultConfig, options);

    this.fallbackResult = currentOptions.fallbackResult;
    this.remoteRequestHandler = currentOptions.requestHandler;
    this.cachePolicy = currentOptions.cachePolicy;

    // 初始化缓存
    this.dataCache = new DataCache({
      expiredTime: currentOptions.expiredTime,
    });

    // 初始化请求池
    this.pool = new Pool({
      maxSize: currentOptions.maxComboSize,
      interval: currentOptions.comboInterval,
      flushHandler: this.requestHandler.bind(this),
    });
  }

  createPayload(params) {
    const payload = new DeferredPayload(params);

    const cacheData = this.dataCache.get(payload.toString());
    const isUseCache = [
      CACHE_POLICY.CACHE_FIRST,
      CACHE_POLICY.CACHE_ONLY,
    ].includes(this.cachePolicy);

    // 在缓存优先、仅缓存策略时命中缓存, 并且没有过期, 直接返回结果
    if (isUseCache && cacheData) {
      return cacheData;
    } else {
      // 判断当前请求池中是否有存在的请求
      const queue = this.pool.getQueue();
      const pendingPayload = this.requestPendingMap.get(payload.toString());
      const existedPayload = queue.find(
        (item) => item.toString() === payload.toString(),
      );

      if (pendingPayload) {
        // 判断是否有正在请求的 payload
        return pendingPayload.promise;
      } else if (existedPayload) {
        // 判断请求池中是否存在 payload
        return existedPayload.promise;
      } else {
        this.pool.add(payload);
        return payload.promise;
      }
    }
  }

  // 单次合并请求
  generatePayloadList(payloadList: DeferredPayload[]): DeferredPayload[] {
    const finalPayloadList: DeferredPayload[] = [];

    payloadList.forEach((payload) => {
      const existed = finalPayloadList.find(
        (item) => item.toString() === payload.toString(),
      );
      if (existed !== undefined) {
        existed.correlationIds.push(payload.id);
      } else {
        finalPayloadList.push(payload);
      }
    });

    return finalPayloadList;
  }

  async requestHandler(payloadList: DeferredPayload[]) {
    const finalPayloadList = this.generatePayloadList(payloadList);

    // 记录请求中的数据
    finalPayloadList.forEach((payload) => {
      this.requestPendingMap.set(payload.toString(), payload);
    });

    // 请求
    let results;

    // 通过注入接口，获取请求结果
    try {
      results = await this.remoteRequestHandler(
        finalPayloadList.map((payload) => payload.toData()),
      );
    } catch (error) {
      console.warn('检查权限接口异常: ', error);
    } finally {
      finalPayloadList.forEach((payload) => {
        this.requestPendingMap.delete(payload.toString());
      });
    }

    if (Array.isArray(results)) {
      results.forEach((result, index) => {
        const currentPayload = finalPayloadList[index];
        const correlationIds = currentPayload.correlationIds || [];

        // 缓存当前结果
        this.dataCache.set(currentPayload.toString(), result);

        currentPayload.resolve(result);
        payloadList.forEach((payload) => {
          if (correlationIds.includes(payload.id)) payload.resolve(result);
        });
      });
    } else {
      // 处理异常情况下权限结果
      finalPayloadList.forEach((payload) => {
        const existed = payload.correlationIds || [];
        const currentPayloadList = payloadList.filter((item) => {
          return [...existed, payload.id].includes(item.id);
        });
        currentPayloadList.forEach((currentPayload) => {
          const isUseCache = this.cachePolicy === CACHE_POLICY.NETWORK_FIRST;
          const cacheData = this.dataCache.get(currentPayload.toString());
          // 判断当网络优先的策略下选择使用缓存
          if (isUseCache && cacheData) {
            currentPayload.resolve(cacheData);
          } else {
            // 兜底策略，无权限
            currentPayload.resolve(this.fallbackResult);
          }
        });
      });
    }
  }
}
