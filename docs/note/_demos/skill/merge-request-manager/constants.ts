/**
 * 缓存策略
 */
export const CACHE_POLICY = {
  NETWORK_ONLY: 'networkOnly', // 仅网络
  CACHE_ONLY: 'cacheOnly', // 仅缓存
  NETWORK_FIRST: 'networkFirst', // 网络优先
  CACHE_FIRST: 'cacheFirst', // 缓存优先
};

/**
 * 缓存过期时间 毫秒
 */
export const CACHE_EXPIRED_TIME = 30 * 60000;

/**
 * 组合最大长度
 */
export const DEFAULT_MAX_COMBO_SIZE = 100;

/**
 * 组合间隔
 */
export const DEFAULT_COMBO_INTERVAL = 50;
